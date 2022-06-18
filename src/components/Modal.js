import React, { Component } from 'react'
import ModalContext from './ModalContext'

class Modal extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
    }

    handleClick = (closeModal, event) => {
        if (event.target === this.wrapperRef.current) {
            closeModal();
        }
    }

    render() {
        console.log(this.props.modalInfo.isModalShowing);
        return (

            //this.props.modalInfo.isModalShowing &&
            <>
                {
                    this.props.modalInfo.isModalShowing &&
                    <ModalContext.Consumer>
                        {
                            (modal) => (
                                <div className='modal-wrapper' onClick={this.handleClick.bind(null, modal.closeModal)} ref={this.wrapperRef}>
                                    {
                                        this.props.modalInfo.modalElement
                                    }
                                </div>
                            )
                        }
                    </ModalContext.Consumer>
                }
            </>
        );
    }
}

export default Modal