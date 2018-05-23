import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TracklistElement } from './TracklistElement';
import { TrackData } from '../containers/Track';
import 'isomorphic-fetch';

interface TracklistProps {
    tracks: TrackData[];
    renderFull: Boolean;
}

export class Tracklist extends React.Component<TracklistProps, {}> {
    constructor(props: TracklistProps) {
        super(props);
    }

    public render() {
        return <section className="tracklist-container">
            <ol className="tracklist">
                {this.props.tracks.map((track, idx) => 
                    <TracklistElement key={"track" + idx} track={track} trackNo={idx + 1} renderFull={this.props.renderFull} />
                )}
            </ol>
        </section>
    }
}