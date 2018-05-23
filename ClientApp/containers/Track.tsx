import * as React from 'react';
import { RouteComponentProps, } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { AlbumData } from '../containers/Album';
import { ArtistData } from '../containers/Artist';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

export interface TrackData {
    id: number;
    title: string;
    album: AlbumData;
    artist: ArtistData;
    trackNo: number;
    durationMs: number;
    href: string;
}

interface TrackState {
    track?: TrackData,
}

interface TrackProps extends RouteComponentProps<{trackid: number}> {}

export class Track extends React.Component<RouteComponentProps<{trackid: number}>, TrackState> {
    constructor(props: TrackProps) {
        super(props);
        document.title = 'Track -- Clonify'
        this.state = { track: undefined };

        fetch('api/tracks/' + this.props.match.params.trackid)
            .then(response => response.json() as Promise<TrackData>)
            .then(data => {
                this.setState({ track: data });
            });
    }

    public render() {
        let contents = (this.state.track != undefined) && <Redirect from={this.props.match.url} to={'/album/' + (this.state.track && this.state.track.album.id)} />;
        SetBgGradient();

        return contents;
    }
}