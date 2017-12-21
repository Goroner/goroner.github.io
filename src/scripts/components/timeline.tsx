import * as React from 'react';
import GenericContent from './single/generic-content';
import { formatDate } from '../utils';
import '../../styles/components/timeline';

const iconMap = {
    'experience': 'icon-briefcase',
    'education': 'icon-graduation'
};

interface TimelineProps {
    timeEvents: TimeEvent[]
}

function renderTimeEventComponent(timeEvent: TimeEvent) {
    let title, subtitle, description;

    switch (timeEvent.type) {
        case 'experience': {
            const experience: Experience = timeEvent as Experience;
            title = experience.title;
            subtitle = experience.company;
            description = experience.description;
            break;
        }
        case 'education': {
            const education: Education = timeEvent as Education;
            title = education.title;
            subtitle = education.institution;
            description = education.description;
            break;
        }
    }

    if (title) {
        return <GenericContent title={title} subtitle={subtitle} description={description} />;
    }
}

function renderTimeEvent(timeEvent: TimeEvent, index: number) {
    return (
        <li key={index} className="timeline__event">
            <section className="timeline__event-time">
                <time>{formatDate(timeEvent.from)} - {formatDate(timeEvent.to)}</time>
            </section>
            <section className="timeline__event-content">
                {renderTimeEventComponent(timeEvent)}
            </section>
        </li>
    );
}

function renderTimeEventGroup(group: { name: string, icon: string, timeEvents: TimeEvent[] }) {
    return (
        <li className="timeline__event-group">
            <h3 className="timeline__event-group-name">{group.name} <i className={group.icon}></i></h3>
            <ol className="timeline">
                {group.timeEvents.map(renderTimeEvent)}
            </ol>
        </li>
    );
}

function sortAndGroupTimeEvents(timeEvents: TimeEvent[]) {
    const sortedTimeEvents: TimeEvent[] = timeEvents.sort((eventA, eventB) => eventA.from <= eventB.from ? -1 : 1);
    return sortedTimeEvents.reduce((groups, timeEvent) => {
        const group = groups[timeEvent.type] = groups[timeEvent.type] || { name: timeEvent.type, icon: iconMap[timeEvent.type], timeEvents: [] };
        group.timeEvents.push(timeEvent);
        return groups;
    }, {});
}

function renderTimeEvents(timeEvents: TimeEvent[]) {
    const groups = sortAndGroupTimeEvents(timeEvents);

    return (
        <ul className="timeline__event-groups">
            {Object.keys(groups).map(name => renderTimeEventGroup(groups[name]))}
        </ul>
    );
}

export default ({ timeEvents }: TimelineProps) => {
    return renderTimeEvents(timeEvents);
};
