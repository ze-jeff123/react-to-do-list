import React from 'react'
import Searchbar from './Searchbar'
function Navbar(props) {
    return (
        <div className='navbar'>
            <button className='hamburgerButton' onClick={props.toggleSidebar}></button>
            <button className='houseButton'></button>
            <Searchbar />
        </div>
    )
}

export default Navbar