import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { PlaylistHeader } from '../components/PlaylistHeader'
import { TrackData } from './Track';
import { Tracklist } from '../components/Tracklist';
import { ArtistData } from './Artist';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface PlaylistState {
    playlist?: PlaylistData,
}

interface PlaylistProps extends RouteComponentProps<{playlistid: number}> {}

export class Playlist extends React.Component<PlaylistProps, PlaylistState> {
    constructor(props: PlaylistProps) {
        super(props);

        this.state = { playlist: undefined };

        fetch('api/playlists/' + this.props.match.params.playlistid)
            .then(response => response.json() as Promise<PlaylistData>)
            .then(data => {
                document.title = data.name + ' -- Clonify';
                this.setState({ playlist: data });
            });
    }

    public render() {
        let contents = (this.state.playlist != undefined) && Playlist.renderPlaylist(this.state.playlist);
        SetBgGradient();

        return contents;
    }

    private static renderPlaylist(playlist: PlaylistData) {
        return <div>
            <section className="playlist">
                <div className="container-fluid">
                    <div className="row">
                        <PlaylistHeader playlist={playlist} />
                        <Tracklist tracks={playlist.tracks.map(pt => pt.track)} renderFull={true} />
                    </div>
                </div>
            </section>
        </div>
    }
}

interface PlaylistTrackData {
    addedAt: Date;
    addedBy: string;
    track: TrackData;
}

export interface PlaylistData {
    tileType: 'playlist';
    id: number;
    name: string;
    owner: string;
    tracks: PlaylistTrackData[];
}