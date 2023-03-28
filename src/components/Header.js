import React from 'react'
import Logo from '../assets/AI Planet Logo.png'

const Header = () => {
    return (
        <React.Fragment>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <img src={Logo} />
                </div>
            </nav>
            <div>

            </div>
        </React.Fragment>
    )
}

export default Header