import React, { Component } from 'react'

export default class NewTodoModal extends Component {
    render() {
        return (
            <form autoComplete='off' className='create-todo-form'>
                <div className='todo-form-input-wrapper'>
                <label htmlFor='new-name'>New Task</label>
                <input id='new-name' spellCheck='false' placeholder='I want to...'></input>

                <label htmlFor='poject-select'>Select poject</label>
                <select name='project' id='project-select'>
                    <option vaule='all-project'>All projects</option>
                    <option value='some other'>some</option>
                </select>

                <label htmlFor='due-date-picker'>Pick due date</label>
                <input type='date' id='due-date-picker'></input>

                </div>
                <div className='button-container'>
                    <button type='button'>Cancel</button>
                    <button>Create</button>
                </div>
            </form>
        )
    }
}
