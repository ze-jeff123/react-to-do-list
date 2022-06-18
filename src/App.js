import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: true,
      todos: [],
      projects: [
          {
            projectName: "Chores"
          },
          {
            projectName: "Work stuff"
          }
        ],
      curentProject: null,
    }
  }

  allProjects = {
    projectName : "All Projects"
  }

  changeProjectTo = (newProject) => {
    this.setState({
      curentProject : newProject
    });
  }

  render() {
    return (
      <div className='screen-container'>
        <Navbar />
        <Sidebar changeProjectTo={this.changeProjectTo} isOpen={this.state.isSidebarOpen} projects={this.state.projects} allProjects={this.allProjects} curentProject={this.state.curentProject} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
