import '../../styles/components/app';
import * as React from 'react';
import { connect } from 'react-redux';

import Profile from './profile';
import About from './about';
import Skills from './skills';
import Interests from './interests';
import Employments from './employments';
import Projects from './projects';
import Education from './education';
import Courses from './courses';

class App extends React.Component<AppState, any> {
    render() {
        return (
            <div className="app">
                <div className="left">
                    <Profile />
                    <About />
                    <Skills skills={this.props.skills} />
                    <Interests />
                </div>
                <div className="right">
                    <Employments />
                    <Projects projects={this.props.projects} />

                    <div className="row">
                        <div className="col">
                            <Education />
                        </div>
                        <div className="col">
                            <Courses />
                        </div>
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
