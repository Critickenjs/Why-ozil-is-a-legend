import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event) => (
                <div key={event.year} className="timeline-event">
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-description">{event.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
