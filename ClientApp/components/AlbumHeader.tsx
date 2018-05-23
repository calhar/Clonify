import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { AlbumData } from '../containers/Album';
import 'isomorphic-fetch';

interface AlbumHeaderProps {
    album: AlbumData;
}

export class AlbumHeader extends React.Component<AlbumHeaderProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div className="col-xs-12 col-lg-3 col-xl-4 col-sticky">
            <header>
                <div className="entity-name">
                    <h2>{this.props.album.title}</h2>
                    <div>
                        <span>By</span>
                        <span><Link to={"/artist/" + this.props.album.artist.id}>{this.props.album.artist.name}</Link></span>
                    </div>
                </div>
            </header>
        </div>
    }
}