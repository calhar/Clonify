import * as React from 'react';
import * as copy from 'copy-to-clipboard';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { AlbumData } from '../containers/Album';
import { ArtistData } from '../containers/Artist';
import { TrackData } from '../containers/Track';
import { player } from '../containers/Player';

export class TrackContextMenu extends React.Component<{}, {}> {
    handlePlay = (e: any, track: TrackData, target: any) => {
        console.log('playing ' + track.title);
        player.playTrack(track);
    }

    handleAddToPlaylist = (e: any, track: TrackData, target: any) => {
        console.log('playlisting ' + track.title);
        player.addTrackToQueue(track);
    }

    handleCopy = (e: any, track: TrackData, target:any) => {
        copy(window.location.origin + "/track/" + track.id);
    }

    public render() {
        return <ContextMenu id='TRACKCONTEXT'>
            <MenuItem onClick={this.handlePlay}>Play</MenuItem>
            <MenuItem onClick={this.handleAddToPlaylist}>Add to Playlist</MenuItem>
            <MenuItem onClick={this.handleCopy}>Copy Song Link</MenuItem>
        </ContextMenu>
    }
}