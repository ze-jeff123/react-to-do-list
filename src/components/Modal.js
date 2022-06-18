import React from 'react'

function Modal(props) {
    return (
        <div className='modal-wrapper'>
            {
                props.children
            }
        </div>
    )
}

export default Modal