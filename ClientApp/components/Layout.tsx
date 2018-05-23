import * as React from 'react';
import { NavMenu } from './NavMenu';
import { TrackContextMenu } from './TrackContextMenu'

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className="root">
            <div className="bg-gradient"></div>
            <div className='top-container'>
                <NavMenu />
                <div className='main-view-container'>
                    { this.props.children }
                </div>
            </div>
            <div className="nowPlayingBar-container">
            </div>
            <TrackContextMenu />
        </div>;
    }
}
