import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { endOfDay, compareAsc } from 'date-fns';
import Context from './Context';
import { format } from 'date-fns';

const disabledProjectId = uuidv4();

class NewTodoModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoName: "",
            projectId: (props.curentProject === props.allProjects || props.curentProject == null) ? disabledProjectId : props.curentProject.id,
            dueDate: format(new Date(), "yyyy-MM-dd"),
        }

        this.selectRef = React.createRef();
        this.datePicker = React.createRef();
    }
    handleInputChange = (event) => {
        this.setState({
            todoName: event.target.value
        });
    }

    handleChangeProject = (event) => {
        this.setState({
            projectId: event.target.value,
        });
        event.target.setCustomValidity("");
    }

    onSubmit = (event) => {
        event.preventDefault();
        let dueDate = endOfDay(new Date(this.state.dueDate));
        if (this.state.projectId === disabledProjectId) {
            this.selectRef.current.setCustomValidity("You have to select a project");
            this.selectRef.current.reportValidity();
            return;
        } 

        if (compareAsc(new Date(), dueDate) === 1) {
            this.datePicker.current.setCustomValidity("You must pick a date in the future");
            this.selectRef.current.reportValidity();
            return;
        }

        const newTodo = {
            name: this.state.todoName,
            projectId: this.state.projectId,
            dueDate: dueDate,
            id: uuidv4(),
        };
        this.context.addTodo(newTodo);
        this.context.closeModal();
    }


    handleCancel = () => {
        this.context.closeModal();
    }

    handleDateChange = (event) => {
        this.setState({
            dueDate: event.target.value,
        });
        event.target.setCustomValidity("");
    }
    render() {
        return (
            <form autoComplete='off' className='create-todo-form' onSubmit={this.onSubmit}>
                <div className='todo-form-input-wrapper'>
                    <label htmlFor='new-name'>New Task</label>
                    <input required id='new-name' spellCheck='false' placeholder='I want to...' value={this.state.todoName} onChange={this.handleInputChange}></input>

                    <label htmlFor='project-select'>Project</label>
                    <select ref={this.selectRef} name='project' id='project-select' value={this.state.projectId} onChange={this.handleChangeProject}>
                        <option value={disabledProjectId} disabled>Select a project</option>
                        {
                            this.props.projects.map((project) => (<option value={project.id} key={project.id}>{project.name}</option>))
                        }
                    </select>

                    <label htmlFor='due-date-picker'>Pick due date</label>
                    <input value={this.state.dueDate} onChange={this.handleDateChange} required type='date' id='due-date-picker' ref={this.datePicker}></input>

                </div>
                <div className='button-container'>
                    <button onClick={this.handleCancel} type='button'>Cancel</button>
                    <button>Create</button>
                </div>
            </form>
        )
    }
}

NewTodoModal.contextType = Context;

export default NewTodoModal;