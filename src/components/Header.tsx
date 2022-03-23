import React from 'react'

import { rocketIcon, orbitIcon, homeIcon } from '../assets';

const Header = () => {
    return (
        <>
            <div className="header hidden sm:flex ">
                <a className="header-button uppercase" href='/'>SpaceX Launches</a>
                <a className="header-button" href="/upcoming-launches">Upcoming launches</a>
                {/* <a className="header-button" href="/updates">Updates</a> */}
            </div>

            <div className="header sm:hidden">
                <a className="header-button" href='/'><img src={homeIcon} alt="upcoming" className='header-icon' /></a>
                <a className="header-button" href="/upcoming-launches"><img src={rocketIcon} alt="upcoming" className='header-icon' /></a>
                {/* <a className="header-button" href="/past-launches"><img src={orbitIcon} alt="past" className='header-icon' /></a> */}
            </div>
    
        </>
    )
}

export default Header;