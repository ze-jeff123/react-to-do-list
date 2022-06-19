import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ProjectsList from './ProjectsList'
import SelectableProject from './SelectableProject'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownClosed : false,
    }
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownClosed : (!prevState.isDropdownClosed), 
    }))
  }
  render() {
    return (
      <div className='sidebar'>
        <button className='add-todo'>+ Create a Task</button>
        <SelectableProject allProjects={this.props.allProjects} changeProjectTo={this.props.changeProjectTo} className='all-projects' project={this.props.allProjects} curentProject={this.props.curentProject} />
        <div className='projects'>
          <div>
            Projects
          </div>
          <div className={'drop-down ' + (this.state.isDropdownClosed ? 'up' : 'down')} onClick={this.toggleDropdown}></div>
          <button className='add'></button>
        </div>

        <ProjectsList allProjects={this.props.allProjects} isDropdownClosed={this.state.isDropdownClosed} projects={this.props.projects} changeProjectTo={this.props.changeProjectTo} curentProject={this.props.curentProject} />
      </div>
    )
  }
}

export default Sidebar