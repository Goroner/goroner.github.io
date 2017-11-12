import '../../styles/components/app';
import * as React from 'react';
import { connect } from 'react-redux';
import Items from './items';

type AppProps = {
    items: Item[];
};

class App extends React.Component<AppProps> {
    render() {
        return (
            <div className="app">
                <Items items={this.props.items} />
            </div>
        );
    }
}

function mapStateToProps(state: AppState): AppProps {
    return {
        items: state.items.data
    };
}

export default connect<AppProps>(mapStateToProps)(App);
