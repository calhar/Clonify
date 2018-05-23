import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { AlbumData } from './Album';
import { LibraryHeader } from '../components/LibraryHeader';
import { Medialist } from '../components/Medialist';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface AlbumsState {
    albums: AlbumData[];
    loading: boolean;
}

export class AlbumsCollection extends React.Component<RouteComponentProps<{}>, AlbumsState> {
    constructor(props: any) {
        super(props);
        document.title = 'Collection - Albums -- Clonify'

        this.state = { albums: [], loading: true };

        fetch('api/albums/')
            .then(response => response.json() as Promise<AlbumData[]>)
            .then(data => {
                data.forEach(el => el.tileType = 'album');
                this.setState({ albums: data, loading: false });
            });
    }

    public render() {
        let contents = (!this.state.loading) && <Medialist collections={this.state.albums} showLimited={false}/>;
        SetBgGradient();

        return <div>
            <section className="content-spacing">
                <LibraryHeader activeLib="albums" />
                {contents}
            </section>
        </div>
    }

    public static renderAlbumTiles(albums: AlbumData[], showLimited: boolean) {
        return <div className="container-fluid container-fluid--no-space-around">
            <div className={ "media-tiles" + (showLimited ? " grid--limit" : '') + " row"}>
                {albums.map((album) =>
                    AlbumsCollection.renderSingleAlbumTile(album)
                )}
            </div>
        </div>
    }

    public static renderSingleAlbumTile(album: AlbumData) {
        return <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
            <div className="media-object">
                <div className="mo-info">
                    <Link to={'/album/' + album.id}>{album.title}</Link>
                </div>
                <div className="mo-creator">
                    <Link to={'/artist/' + album.artist.id}>{album.artist.name}</Link>
                </div>
            </div>
        </div>
    }
}