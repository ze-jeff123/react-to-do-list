import React, { Component } from 'react'
import { endOfDay, add, format, isEqual } from 'date-fns';
import Context from './Context';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked : false,
        }
    }
    getDayFromDate(date) {
        const curentDate = new Date();
        const tommorow = add(curentDate, { days: 1 });

        if (isEqual(endOfDay(curentDate), endOfDay(date))) {
            return 'due today';
        }
        if (isEqual(endOfDay(tommorow), endOfDay(date))) {
            return 'due tommorow';
        }

        return "due " + format(date, 'dd MMM')
    }

    checkButton = () => {
        this.setState({
            isChecked : true,
        })
    }

    completeTodo = (event) => {
        this.context.deleteTodo(this.props.todo.id);
    }
    render() {
        const day = this.getDayFromDate(this.props.todo.dueDate);
        return (
            <div className='todo-container'>
                <button className={'checker' + ((this.state.isChecked)?' checked':'')} onClick={this.checkButton} onTransitionEnd={this.completeTodo}></button>
                <div>{this.props.todo.name}</div>
                <div className='due-date'>{day}</div>
            </div>
        )
    }
}

Todo.contextType = Context;

export default Todo