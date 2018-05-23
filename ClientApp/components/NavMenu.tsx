import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='nav-bar-container'>
            <nav className='navbar'>
                <div className="navbar-expand">
                    <ul>
                        <div className='navbar-header'>
                            <NavLink className='navbar-brand' to={'/'}>Clonify</NavLink>
                        </div>
                        <div className="navbar-group">
                            <li className="navbar-item">
                                <NavLink to={'/search'} className="navbar-link ellipsis-one-line" activeClassName='active'>
                                    Search
                                </NavLink>
                            </li>
                        </div>
                        <div className='navbar-group'>
                            <li className="navbar-item">
                                <NavLink to={'/collection/playlists'} className="navbar-link ellipsis-one-line" activeClassName='active'>
                                    Library
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    }
}
