import * as React from 'react';
import GenericContent from './single/generic-content';
import { formatDate } from '../utils';
import '../../styles/components/timeline';

interface TimelineProps {
    timeEvents: TimeEvent[]
}

function renderTimeEventComponent(timeEvent: TimeEvent) {
    let title, subtitle, description;

    switch (timeEvent.type) {
        case 'employment': {
            const employment: Employment = timeEvent as Employment;
            title = employment.title;
            subtitle = employment.company;
            description = employment.description;
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

function renderTimeEvents(timeEvents: TimeEvent[]) {
    const sortedTimeEvents: TimeEvent[] = timeEvents.sort((eventA, eventB) => eventA.from <= eventB.from ? -1 : 1);

    return (
        <ol className="timeline">
            {sortedTimeEvents.map(renderTimeEvent)}
        </ol>
    );
}

export default ({ timeEvents }: TimelineProps) => {
    return renderTimeEvents(timeEvents);
};
