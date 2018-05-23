import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Album } from './containers/Album';
import { AlbumsCollection } from './containers/AlbumsCollection';
import { Track } from './containers/Track';
import { TracksCollection } from './containers/TracksCollection';
import { Artist } from './containers/Artist';
import { ArtistsCollection } from './containers/ArtistsCollection';
import { Playlist } from './containers/Playlist';
import { PlaylistsCollection } from './containers/PlaylistsCollection';
import { Search } from './containers/Search';
import { NotFound } from './components/NotFound';

export const routes = <Layout>
    <Switch>
        <Route path={"/search"} component={ Search } />
        <Route path={"/album/:albumid?"} component={ Album } />
        <Route path={'/track/:trackid?'} component={ Track } />
        <Route path={'/artist/:artistid?'} component={ Artist } />
        <Route path={'/playlist/:playlistid?'} component={ Playlist } />
        <Route path={'/collection/albums'} component={ AlbumsCollection } />
        <Route path={'/collection/tracks'} component={ TracksCollection } />
        <Route path={'/collection/artists'} component={ ArtistsCollection } />
        <Route path={'/collection/playlists'} component={ PlaylistsCollection } />
        <Redirect from='/' to='/collection/albums' />
        <Redirect from='/collection' to='/collection/albums' />
        {/*<Route path={'/collection/artists'} component={ Artists } />*/}
        <Route path='*' component={ NotFound } />
    {/*<Redirect from='*' to='/404' />*/}
    </Switch>
</Layout>;
