import * as React from 'react';
import { RouteComponentProps, } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { AlbumData } from './Album';
import { AlbumsCollection } from '../containers/AlbumsCollection';
import { SetBgGradient } from '../components/Background';
import { Promise } from 'es6-promise';
import 'isomorphic-fetch';

interface ArtistState {
    artist?: ArtistData;
    albums: AlbumData[];
    loading: boolean;
}

interface ArtistProps extends RouteComponentProps<{artistid: number}> {}

export class Artist extends React.Component<ArtistProps, ArtistState> {
    constructor(props: ArtistProps) {
        super(props);
        this.state = { artist: undefined, albums: [], loading: true };

        fetch('api/artists/' + this.props.match.params.artistid)
            .then(response => response.json() as Promise<ArtistData>)
            .then(artistData => {
                document.title = artistData.name + ' -- Clonify';
                this.setState({ artist: artistData });
                fetch("api/artists/" + artistData.id + "/albums")
                    .then(response => response.json() as Promise<AlbumData[]>)
                    .then(albumsData => {
                        this.setState({ albums: albumsData, loading: false });
                    });
            });
    }

    public render() {
        let contents = (this.state.artist != undefined && (!this.state.loading)) && Artist.renderArtistDiscog(this.state.artist, this.state.albums);
        SetBgGradient();

        return contents;
    }

    private static renderArtistHeader(artist: ArtistData) {
        return <header className="artist-header">
            <h1 className="large">{artist.name}</h1>
        </header>
    }

    private static renderArtistCollection(type: string, albums: AlbumData[]) {
        let filtered = albums.filter(album => album.type == type);
        let pluralType = type[0].toUpperCase() + type.slice(1) + 's';

        return (filtered.length != 0) && <section className={(type === "album" ? '' : "artist-" + type + 's ') + 'artist-albums'}>
            <div className="contentSpacing">
                <h1 className="section-header" style={{textAlign: "center"}}>{ pluralType }</h1>
                { AlbumsCollection.renderAlbumTiles(filtered, true) }
            </div>
        </section>
    }

    public static renderArtistDiscog(artist: ArtistData, albums: AlbumData[]) {
        return <section className="content artist">
            { Artist.renderArtistHeader(artist) }
            <div>
                { Artist.renderArtistCollection("album", albums) }
                { Artist.renderArtistCollection("single", albums) }
                { Artist.renderArtistCollection("compilation", albums) }
            </div>
        </section>
    }
}

export interface ArtistData {
    id: number,
    name: string,
}