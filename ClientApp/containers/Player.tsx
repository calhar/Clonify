import { TrackData } from '../containers/Track';

/**
 * This is going to be a pretty ugly global singleton sort of thing until
 * I replace it using a redux or flux store.
 * 
 * Also in the interest of having a working prototype I'm going to just
 * going to run with a basic setup where I fully load the audio file each
 * time rather than chunking it.
 */

enum Shuffle {
    None,
    Track
}

enum Repeat {
    None,
    RepeatOne,
    RepeatAll
}

class Player {
    playlist: TrackData[];
    playing: number;
    audio: HTMLAudioElement;
    repeat: Repeat;
    shuffle: Shuffle;


    audioApi: string = window.location.origin + '/api/audio/';

    constructor() {
        this.playing = 0;
        this.playlist = [];
        this.repeat = Repeat.None;
        this.shuffle = Shuffle.None;

        this.audio = new Audio();
        this.audio.onended = this.next.bind(this);
    }

    public nonEmpty() {
        return !(this.playlist.length == 0);
    }

    public playPause() {
        this.audio.paused ? this.audio.play() : this.audio.pause();
    }

    public setVolume(volume: number) {
        this.audio.volume = volume;
    }

    public addTrackToQueue(track: TrackData) {
        this.playlist.push(track);
    }

    public playTrack(track: TrackData) {
        this.playlist = [track];
        this.playing = 0;

        let trackSrc = this.audioApi + track.id;
        this.audio.src = trackSrc;

        this.audio.load();
        this.audio.play();
    }

    public next() {
        if (this.repeat == Repeat.RepeatOne) {
            this.audio.play();
            return;
        }
        
        this.playing = (this.playing + 1) % this.playlist.length;

        let nextSrc = this.audioApi + this.playlist[this.playing].id;

        this.audio.src = nextSrc;

        if (this.playing == 0 && this.repeat == Repeat.RepeatAll) {
            this.audio.load();
            this.audio.play();
        }
    }
}

export const player = new Player(); 