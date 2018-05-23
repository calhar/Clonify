import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { PlaylistData } from './Playlist';
import { LibraryHeader } from '../components/LibraryHeader';
import { Medialist } from '../components/Medialist'
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface PlaylistsState {
    playlists: PlaylistData[];
    loading: boolean;
}

export class PlaylistsCollection extends React.Component<RouteComponentProps<{}>, PlaylistsState> {
    constructor(props: any) {
        super(props);
        document.title = 'Collection - Playlists -- Clonify'

        this.state = { playlists: [], loading: true };

        fetch('api/playlists/')
            .then(response => response.json() as Promise<PlaylistData[]>)
            .then(data => {
                data.forEach(el => el.tileType = 'playlist');
                this.setState({ playlists: data, loading: false });
            });
    }

    public render() {
        let contents = (!this.state.loading) && <Medialist collections={this.state.playlists} showLimited={false}/>;
        SetBgGradient();

        return <div>
            <section className="content-spacing">
                <LibraryHeader activeLib="playlists" />
                {contents}
            </section>
        </div>
    }
}