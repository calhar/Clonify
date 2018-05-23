import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class NotFound extends React.Component<RouteComponentProps<{}>, {}> {
    constructor(props: any) {
        super(props);
        document.title = 'Oh Dear';
    }
    public render() {
        return <div>
            <h1>Sorry Friendo</h1>
            <p>We simply couldn't find the page you wanted.</p>
            <p>Try the nav menu of to the side rather than just typing in arbitrary urls hmm?</p>
        </div>;
    }
}