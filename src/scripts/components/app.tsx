import '../../styles/components/app';

import * as React from 'react';
import { connect } from 'react-redux';

type AppStateProps = {
    test: string;
};

type AppProps = AppStateProps;

class App extends React.Component<AppProps, any> {
    render() {
        return <h1>App {this.props.test}</h1>;
    }
}

function mapStateToProps(state: AppState): AppStateProps {
    return {
        test: state.test
    };
}

export default connect<AppStateProps>(mapStateToProps)(App);