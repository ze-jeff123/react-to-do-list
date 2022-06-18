import React, { Component } from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    }

    this.inputRef = React.createRef();
    this.closeRef = React.createRef();
    this.formRef = React.createRef();
  }

  focus = (event) => {
    this.setState({
      isFocused: true,
    })
  }

  blur = (event) => {
    this.formRef.current.reset();
    event.preventDefault();
    this.inputRef.current.blur();
    if (event.relatedTarget !== this.closeRef.current) {
      this.setState({
        isFocused: false,
      });
    } else {
      this.closeRef.current.click();
    }
  }

  handleClose = () => {

    this.setState({
      isFocused: false,
    });
  }
  render() {
    return (
      <form ref={this.formRef}>
        <input type='text' className='searchbar' placeholder='Search' onFocus={this.focus} onBlur={this.blur} ref={this.inputRef}>
        </input>
        {
          (this.state.isFocused) &&
          <button className='closeButton' type='reset' ref={this.closeRef} onClick={this.handleClose}></button>
        }
      </form>
    )
  }
}

export default Searchbar;