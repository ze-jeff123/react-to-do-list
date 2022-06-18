import React from 'react'
import Searchbar from './Searchbar'
function Navbar() {
    return (
        <div className='navbar'>
            <button className='hamburgerButton'></button>
            <button className='houseButton'></button>
            <Searchbar />
        </div>
    )
}

export default Navbar