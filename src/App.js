import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
import Modal from "./components/Modal";
import Context from "./components/Context";
import {compareAsc} from 'date-fns'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen : true,
      todos: [
      ],
      projects: [
        {
          name : 'Work',
          id : uuidv4(),
        },
        {
          name : 'House Tasks',
          id : uuidv4(),
        }
      ],
      curentProject: this.allProjects,
      modalInfo: {
        isModalShowing: false,
        modalElement: null,
      }
    }
  }

  allProjects = {
    name: "All Projects",
    id : uuidv4(),
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen : !prevState.isSidebarOpen
    }));
  }

  editProjectName = (projectId, newName) => {
    let newProjects = this.state.projects;
    for (let i = 0; i < newProjects.length; i++) {
      if (newProjects[i].id === projectId) {
        newProjects[i].name = newName;
        break;
      }
    }

    this.setState({
      projects: newProjects,
    });
  }

  addProject = (project) => {
    let newProjects = this.state.projects.concat(project);
    this.setState({
      projects: newProjects,
    });
  }

  deleteProject = (projectId) => {
    let newProjects = this.state.projects.filter((project) => (project.id !== projectId));
    const newTodos = this.state.todos.filter(todo => todo.projectId != projectId);
    this.setState({
      projects : newProjects,
      todos : newTodos,
    })
  }

  changeProjectTo = (newProject) => {
    this.setState({
      curentProject: newProject
    });
  }


  showModal = (element) => {
    this.setState({
      modalInfo: {
        isModalShowing: true,
        modalElement: element,
      }
    })
  }

  closeModal = (element) => {
    this.setState({
      modalInfo: {
        isModalShowing: false,
        modalElement: null,
      }
    })
  }

  deleteTodo = (todoId) => {
    const newTodos = this.state.todos.filter((todo) => (todo.id !== todoId));
    this.setState({todos : newTodos});
  }

  addTodo = (newTodo) => {
    const newTodos = this.state.todos.concat(newTodo).slice().sort((todo1, todo2) => (compareAsc(todo1.dueDate,todo2.dueDate)))
    this.setState({todos : newTodos});
  }

  render() {
    return (
      <Context.Provider value={{ showModal: this.showModal, closeModal: this.closeModal, editProjectName: this.editProjectName, deleteProject : this.deleteProject, addProject : this.addProject, deleteTodo : this.deleteTodo, addTodo : this.addTodo }}>
        <div className='screen-container'>
          <Navbar toggleSidebar={this.toggleSidebar}/>
          <Sidebar changeProjectTo={this.changeProjectTo} isOpen={this.state.isSidebarOpen} projects={this.state.projects} allProjects={this.allProjects} curentProject={this.state.curentProject} />
          <TodoList todos={this.state.todos} curentProject={this.state.curentProject} allProjects={this.allProjects} />
        </div>
        <Modal modalInfo={this.state.modalInfo} />
      </Context.Provider>
    );
  }
}

export default App;
