import React, { Component } from 'react'
import ProjectsList from './ProjectsList'
import SelectableProject from './SelectableProject'
import Context from './Context'
import AddProject from "./AddProject";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownClosed: false,
    }
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownClosed: (!prevState.isDropdownClosed),
    }))
  }

  openDropdownIfClosed = () => {
    if (this.state.isDropdownClosed === true) {
      this.setState({
        isDropdownClosed : false,
      })
    }
  }
  addProject = () => {
    this.context.showModal(<AddProject openDropdownIfClosed={this.openDropdownIfClosed} />, () => {if(this.state.isDropdownClosed === true) {this.toggleDropdown()}});

  }

  render() {
    return (
      <div className={'sidebar' + ((!this.props.isOpen) ? ' sidebar-closed' : '')}>
        <button className='add-todo'>{this.props.isOpen ? '+ Create a Task' : '+'}</button>
        {
          this.props.isOpen&&
          <>
        <SelectableProject allProjects={this.props.allProjects} changeProjectTo={this.props.changeProjectTo} className='all-projects' project={this.props.allProjects} curentProject={this.props.curentProject} />
        <div className='projects'>
          <div>
            Projects
          </div>
          <div className={'drop-down ' + (this.state.isDropdownClosed ? 'up' : 'down')} onClick={this.toggleDropdown}></div>
          <button className='add' onClick={this.addProject}></button>
        </div>

        <ProjectsList allProjects={this.props.allProjects} isDropdownClosed={this.state.isDropdownClosed} projects={this.props.projects} changeProjectTo={this.props.changeProjectTo} curentProject={this.props.curentProject} />
          </>
      }
      </div>
    )
  }
}

Sidebar.contextType = Context;

export default Sidebar