import React from 'react'

function EditProject() {
    return (
        <form className='edit-project' onSubmit={() => { console.log("submitted") }}>
            <div>
                <label htmlFor='edit-name-project'>List Name</label>
                <input id='edit-name-project' type='text' autoComplete='false' spellCheck='false'></input>
            </div>
            <div className='button-container'>
                <button>Delete</button>
                <button>Save</button>
            </div>
        </form>
    )
}

export default EditProject