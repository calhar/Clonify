import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TiledCollectableData } from '../containers/Collectable';
import { AlbumData } from '../containers/Album';
import { PlaylistData } from '../containers/Playlist';
import 'isomorphic-fetch';

interface MediaTileProps {
    collection: TiledCollectableData;
}

export class MediaTile extends React.Component<MediaTileProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return this.props.collection.tileType === 'album' ?
            <AlbumTile album={this.props.collection as AlbumData} /> :
            <PlaylistTile playlist={this.props.collection as PlaylistData} />
    }
}

interface AlbumTileProps {
    album: AlbumData,
}

class AlbumTile extends React.Component<AlbumTileProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
            <div className="media-object">
                <div className="mo-info">
                    <Link to={'/album/' + this.props.album.id}>{this.props.album.title}</Link>
                </div>
                <div className="mo-creator">
                    <Link to={'/artist/' + this.props.album.artist.id}>{this.props.album.artist.name}</Link>
                </div>
            </div>
        </div>
    }
}

interface PlaylistTileProps {
    playlist: PlaylistData,
}

class PlaylistTile extends React.Component<PlaylistTileProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
            <div className="media-object">
                <div className="mo-info">
                    <Link to={'/playlist/' + this.props.playlist.id}>{this.props.playlist.name}</Link>
                </div>
            </div>
        </div>
    }
}