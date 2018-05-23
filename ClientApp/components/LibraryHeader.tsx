import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface LibraryElementProps {
    name: string;
    url: string;
    active: boolean;
}

class LibraryElement extends React.Component<LibraryElementProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <li className="li-libraries">
            <Link className={"link-libraries link-subtle" + (this.props.active ? " active" : "")} to={this.props.url}>
                {this.props.name.toUpperCase()}
            </Link>
        </li>
    }
}

interface LibraryProps {
    activeLib: string;
}

export class LibraryHeader extends React.Component<LibraryProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div>
                <div className="header-container">
                    <nav className="nav-libraries">
                        <ul className="list-libraries">
                            <LibraryElement name="playlists" url="/collection/playlists" active={this.props.activeLib == "playlists"} />
                            <LibraryElement name="tracks" url="/collection/tracks" active={this.props.activeLib == "tracks"} />
                            <LibraryElement name="albums" url="/collection/albums" active={this.props.activeLib == "albums"} />
                            <LibraryElement name="artists" url="/collection/artists" active={this.props.activeLib == "artists"} />
                        </ul>
                    </nav>
                </div>
        </div>
    }
}