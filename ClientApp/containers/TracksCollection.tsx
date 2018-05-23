import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { TrackData } from '../containers/Track';
import { Tracklist } from '../components/Tracklist';
import { LibraryHeader } from '../components/LibraryHeader';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface TracksState {
    tracks: TrackData[];
    loading: boolean;
}

export class TracksCollection extends React.Component<RouteComponentProps<{}>, TracksState> {
    constructor(props: any) {
        super(props);
        document.title = 'Tracks -- Clonify'

        this.state = { tracks: [], loading: true };

        fetch('api/tracks/')
            .then(response => response.json() as Promise<TrackData[]>)
            .then(data => {
                this.setState({ tracks: data, loading: false });
            });
    }

    public render() {
        let contents = (!this.state.loading) && <Tracklist tracks={this.state.tracks} renderFull={true} />;
        SetBgGradient();

        return <section className="content-spacing">
            <div className='container-fluid'>
                <LibraryHeader activeLib="tracks" />
                { contents }
            </div>
        </section>
    }
}