import '../../styles/components/app';
import * as React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Profile from './profile';
import About from './about';
import Skills from './skills';
import Interests from './interests';
import Projects from './projects';
import Education from './education';
import Courses from './courses';
import Timeline from './timeline';

const employments = [
    {
        title: 'Junior Software Developer',
        company: '6PM plc',
        from: new Date(),
        to: new Date(),
        description: '',
        type: 'employment'
    },
    {
        title: 'Junior Software Developer',
        company: '6PM plc',
        from: new Date(),
        to: new Date(),
        description: '',
        type: 'employment'
    }
];

const educations = [
    {
        title: 'Software Engineer',
        institution: 'Ss. University Cyril and Methodius, FCSE',
        from: new Date(),
        to: new Date(),
        description: ''
    },
    {
        title: 'Gymnasium',
        institution: 'Marie Curie',
        from: new Date(),
        to: new Date(),
        description: ''
    }
];

interface AppProps {
    timeEvents: TimeEvent[];
    skills: Skill[];
    interests: string[];
}

class App extends React.Component<AppProps, any> {
    render() {
        return (
            <div className="app">
                <div className="left">
                    <Profile />
                    <About />
                    <Skills skills={this.props.skills} />
                    <Interests interests={this.props.interests} />
                </div>
                <div className="right">
                    <Header />
                    <Timeline timeEvents={this.props.timeEvents} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: AppState): AppProps {
    return {
        // expand employments, projects, education in timeEvents
        timeEvents: [...employments],
        skills: state.skills,
        interests: ['guitar', 'travel', 'games', 'bikes']
    };
}

export default connect<AppState>(mapStateToProps)(App);
