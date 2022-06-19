import React, { Component } from 'react'
import SelectableProject from './SelectableProject'

class ProjectsList extends Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    render() {
        return (
            <div className={'projects-list' + (this.props.isDropdownClosed?' closed':'')}>
                {
                    this.props.projects.map((project) => (
                        <SelectableProject allProjects={this.props.allProjects} curentProject={this.props.curentProject} changeProjectTo={this.props.changeProjectTo} project={project} className='project-name' key={project.id} />
                    ))
                }
            </div>
        )
    }
}

export default ProjectsList