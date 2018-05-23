import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import 'isomorphic-fetch';

interface SearchState {

}


interface SearchProps extends RouteComponentProps<{}> {}

export class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
    }

    public render() {
        return <div>
            <h1>SEARCH</h1>
        </div>
    }
}