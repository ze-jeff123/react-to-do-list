import React, { Component } from 'react'
import Context from './Context';
import ProjectActionModal from './ProjectActionModal';
import {v4 as uuidv4} from 'uuid';

class AddProject extends Component {
    submitForm = (modalState,event) => {
        event.preventDefault();
        if (modalState.projectName.length > 0) {
            const newProject = {
                id : uuidv4(),
                name : modalState.projectName,
            }

            this.context.addProject(newProject);
            this.context.closeModal();
        }
    }

    handleCancel = (modalState,event) => {
        this.context.closeModal();
    }

    render() {
        return (
            <ProjectActionModal labelText='Name this list' cancelButtonText='Cancel' submitButtonText='Create' onCancel={this.handleCancel} onSubmit={this.submitForm} initialProjectName={""}/>
        )
    }
}

AddProject.contextType = Context;
export default AddProject;