import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { PlaylistData } from '../containers/Playlist';
import 'isomorphic-fetch';

interface HeaderProps {
    playlist: PlaylistData;
}

export class PlaylistHeader extends React.Component<HeaderProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <header>
            <div className="entity-name">
                <h2>{this.props.playlist.name}</h2>
                <div>
                    <span><Link to={"/artist/" + this.props.playlist.owner}>{this.props.playlist.owner}</Link></span>
                </div>
            </div>
        </header>
    }
}