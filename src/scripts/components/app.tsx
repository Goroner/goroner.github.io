import '../../styles/components/app';
import * as React from 'react';
import { connect } from 'react-redux';
import Skills from './skills';
import Projects from './projects';

class App extends React.Component<AppState, any> {
    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="col">
                        <Skills skills={this.props.skills} />
                    </div>
                    <div className="col">
                        <Projects projects={this.props.projects} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: AppState): AppState {
    return state;
}

export default connect<AppState>(mapStateToProps)(App);
