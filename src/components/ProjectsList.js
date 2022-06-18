import React, { Component } from 'react'
import SelectableProject from './SelectableProject'
import { v4 as uuidv4 } from 'uuid';

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
                        <SelectableProject allProjects={this.props.allProjects} curentProject={this.props.curentProject} changeProjectTo={this.props.changeProjectTo} project={project} className='project-name' key={uuidv4()} />
                    ))
                }
            </div>
        )
    }
}

export default ProjectsList