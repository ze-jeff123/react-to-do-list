import React, { Component } from 'react'
import ModalContext from './Context'

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