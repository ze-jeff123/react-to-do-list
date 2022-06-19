import React, { Component } from 'react'
import Context from './Context';
import ProjectActionModal from './ProjectActionModal';
/*
class EditProject extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectName: props.project.name
        }
    }

    handleInputChange = (event) => {
        this.setState({
            projectName: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.state.projectName.length > 0) {
            this.context.editProjectName(this.props.project.id, this.state.projectName);
            this.context.closeModal();
        }
    }

    handleDelete = (event) => {
        this.context.deleteProject(this.props.project.id);
        this.context.closeModal();
    }
    render() {
        return (
            <form className='edit-project' onSubmit={this.submitForm}>
                <div>
                    <label htmlFor='edit-name-project'>List Name</label>
                    <input id='edit-name-project' value={this.state.projectName} onChange={this.handleInputChange} type='text' autoComplete='false' spellCheck='false'></input>
                </div>
                <div className='button-container'>
                    <button type='button' onClick={this.handleDelete}>Delete</button>
                    <button>Save</button>
                </div>
            </form>
        )
    }
}

EditProject.contextType = Context;
*/

class EditProject extends Component {
    submitForm = (modalState,event) => {
        event.preventDefault();
        if (modalState.projectName.length > 0) {
            this.context.editProjectName(this.props.project.id, modalState.projectName);
            this.context.closeModal();
        }
    }

    handleDelete = (modalState,event) => {
        this.context.deleteProject(this.props.project.id);
        this.context.closeModal();
    }

    render() {
        return (
            <ProjectActionModal labelText='List Name' cancelButtonText='Delete' submitButtonText='Save' onCancel={this.handleDelete} onSubmit={this.submitForm} initialProjectName={this.props.project.name}/>
        )
    }
}

EditProject.contextType = Context;

export default EditProject;