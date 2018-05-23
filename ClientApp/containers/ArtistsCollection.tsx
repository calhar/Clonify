import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { ArtistData } from './Artist';
import { LibraryHeader } from '../components/LibraryHeader';
import { SetBgGradient } from '../components/Background';
import 'isomorphic-fetch';

interface ArtistsState {
    artists: ArtistData[];
    loading: boolean;
}

export class ArtistsCollection extends React.Component<RouteComponentProps<{}>, ArtistsState> {
    constructor(props: any) {
        super(props);

        this.state = { artists: [], loading: true };

        fetch('api/artists/')
            .then(response => response.json() as Promise<ArtistData[]>)
            .then(data => {
                this.setState({ artists: data, loading: false });
            });
    }

    public render() {
        document.title = 'Collection - Artists -- Clonify'
        SetBgGradient();
        let contents = (!this.state.loading) && ArtistsCollection.renderArtists(this.state.artists);

        return <div>
            <section className="content-spacing">
                <LibraryHeader activeLib="artists" />
                {contents}
            </section>
        </div>
    }

    public static renderArtists(artists: ArtistData[]) {
        return <div className="container-fluid">
            <div className="row">
                {artists.map((artist, idx) =>
                    ArtistsCollection.renderSingleArtist(artist, idx + 1)
                )}
            </div>
        </div>
    }

    private static renderSingleArtist(artist: ArtistData, idx: number) {
        return <div key={"artist" + idx} className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
            <div className="media-object">
                <div className="mo-info">
                    <Link to={'/artist/' + artist.id}>{artist.name}</Link>
                </div>
            </div>
        </div>
    }
}