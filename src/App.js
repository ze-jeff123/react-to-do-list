import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';

import Modal from "./components/Modal";
import ModalContext from "./components/ModalContext";
import EditProject from "./components/EditProject";
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
      modalInfo: {
        isModalShowing: true,
        modalElement: (<EditProject/>),
      }
    }
  }

  allProjects = {
    projectName: "All Projects"
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

  render() {
    return (
      <ModalContext.Provider value={{showModal : this.showModal , closeModal:this.closeModal}}>
        <div className='screen-container'>
          <Navbar />
          <Sidebar changeProjectTo={this.changeProjectTo} isOpen={this.state.isSidebarOpen} projects={this.state.projects} allProjects={this.allProjects} curentProject={this.state.curentProject} />
          <TodoList todos={this.state.todos} />
        </div>
        <Modal modalInfo={this.state.modalInfo} />
      </ModalContext.Provider>
    );
  }
}

export default App;
