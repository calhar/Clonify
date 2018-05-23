import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { MediaTile } from './MediaTile';
import { TiledCollectableData } from '../containers/Collectable';
import 'isomorphic-fetch';

interface MedialistProps {
    collections: TiledCollectableData[];
    showLimited: Boolean;
}

export class Medialist extends React.Component<MedialistProps, {}> {
    constructor(props: MedialistProps) {
        super(props);
    }

    public render() {
        return <div className="container-fluid container-fluid--no-space-around">
            <div className={ "media-tiles" + (this.props.showLimited ? " grid--limit" : '') + " row"}>
                {this.props.collections.map((collection, idx) =>
                    <MediaTile key={"collection" + idx} collection={collection} />
                )}
            </div>
        </div>
    }
}