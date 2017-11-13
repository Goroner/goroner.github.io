import '../../styles/components/projects';
import * as React from 'react';

type ProjectsProps = {
    projects: Project[];
};

const renderProjects = (projects: Project[]) => {
    if (projects && projects.length) {
        return projects.map(renderProject);
    } else if (projects && !projects.length) {
        return <h2>No projects yet!</h2>
    }

    return <h2>Loading projects...</h2>;
};

const renderProject = (project: Project, index: number) => {
    return (
        <div key={index} className="project">
            <h2 className="project__name">{project.name}</h2>
            <p className="project__description">{project.description}</p>
        </div>
    );
}

export default ({ projects }: ProjectsProps) => {
    return (
        <div className="widget">
            <h2 className="widget__title">Projects</h2>
            <div className="widget__body">
                {renderProjects(projects)}
            </div>
        </div>
    );
}