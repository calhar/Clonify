import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TrackData } from '../containers/Track';
import { ArtistData } from './Artist';
import { AlbumHeader } from '../components/AlbumHeader';
import { Tracklist } from '../components/Tracklist';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface AlbumState {
    album?: AlbumData;
}

interface AlbumProps extends RouteComponentProps<{albumid: number}> {}

export class Album extends React.Component<AlbumProps, AlbumState> {
    constructor(props: AlbumProps) {
        super(props);

        this.state = { album: undefined };

        fetch('api/albums/' + this.props.match.params.albumid)
            .then(response => response.json() as Promise<AlbumData>)
            .then(data => {
                document.title = data.title + ' -- Clonify';
                this.setState({ album: data });
            });
    }

    public render() {
        let contents = (this.state.album != undefined) && Album.renderAlbum(this.state.album);
        SetBgGradient();

        return contents;
    }

    private static renderAlbum(album: AlbumData) {
        return <div>
            <section className="album">
                <div className="container-fluid">
                    <div className="row">
                        <AlbumHeader album={album} />
                        <Tracklist tracks={album.tracks} renderFull={false} />
                    </div>
                </div>
            </section>
        </div>
    }
}

export interface AlbumData {
    tileType: 'album',
    id: number,
    title: string,
    artist: ArtistData,
    tracks: TrackData[],
    type: string,
}