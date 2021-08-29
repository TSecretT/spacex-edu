import React from 'react'

const Header = () => {
    return (
        <div className="row header-container">
            <span className="brand">Space X Launches</span>
            <a href='/' className="header-link">Home</a>
            <a href='/upcoming-launches' className="header-link">Upcoming launches</a>
            <a href='/updates' className="header-link">Updates</a>
            {/* <span className="header-link">Launches</span> */}
        </div>
    )
}

export default Header;