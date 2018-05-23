import * as React from 'react';
import { RouteComponentProps, } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { ContextMenuTrigger } from 'react-contextmenu';
import { AlbumData } from '../containers/Album';
import { ArtistData } from '../containers/Artist';
import { SetBgGradient } from './Background';
import { TrackData } from '../containers/Track';
import { player } from '../containers/Player';
import 'isomorphic-fetch';

interface TracklistElProps {
    trackNo: number;
    track: TrackData;
    renderFull: Boolean;
}

export class TracklistElement extends React.Component<TracklistElProps, {}> {
    constructor(props: TracklistElProps) {
        super(props);
    }

    buttonCheck = () => {
        console.log('double click ' + this.props.track.title);
        player.playTrack(this.props.track);
    }

    public msToMinutesString(duration: number) {
        return Math.floor(duration / 60000) + ':' + Math.round((duration % 60000) / 1000)
    }

    public render() {
        let alignment = this.props.renderFull ? "tracklist-top-align" : "tracklist-middle-align"
        return <ContextMenuTrigger
            id='TRACKCONTEXT'
            track={this.props.track}
            holdToDisplay={1000}
            collect={(props) => props.track}>
            <li className="tracklist-row" role="button" onDoubleClick={this.buttonCheck}>
                <div className="tracklist-col position-outer">
                    <div className={"position " + alignment}>{this.props.trackNo}.</div>
                </div>
                <div className="tracklist-col name">
                    <div className={"track-name-wrapper ellipsis-one-line " + alignment}>
                        <span className="tracklist-name">{this.props.track.title}</span>
                        {this.props.renderFull && <span className="artists-album ellipsis-one-line">
                            <span><Link to={'/artist/' + this.props.track.artist.id}>{this.props.track.artist.name}</Link></span>
                            <span className="artists-album-separator" aria-label="in album">•</span>
                            <span><Link to={'/album/' + this.props.track.album.id}>{this.props.track.album.title}</Link></span>
                        </span>}
                    </div>
                </div>
                <div className="tracklist-col tracklist-col-duration">
                    <div className={"tracklist-duration " + alignment}>
                        <span>{this.msToMinutesString(this.props.track.durationMs)}</span>
                    </div>
                </div>
            </li>
        </ContextMenuTrigger>
    }
}