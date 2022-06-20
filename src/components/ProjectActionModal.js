import React, { Component } from 'react'

class ProjectActionModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectName: props.initialProjectName
        }
    }

    handleInputChange = (event) => {
        this.setState({
            projectName: event.target.value
        })
    }

    render() {
        return (
            <form autoComplete='off' className='edit-project' onSubmit={this.props.onSubmit.bind(null,this.state)}>
                <div>
                    <label htmlFor='edit-name-project'>{this.props.labelText}</label>
                    <input id='edit-name-project' value={this.state.projectName} onChange={this.handleInputChange} type='text' spellCheck='false'></input>
                </div>
                <div className='button-container'>
                    <button type='button' onClick={this.props.onCancel.bind(null,this.state)}>{this.props.cancelButtonText}</button>
                    <button>{this.props.submitButtonText}</button>
                </div>
            </form>
        )
    }
}

export default ProjectActionModal