import React from 'react'
import Logo from '../../assets/AI Planet Logo.png'
import Banner from '../Banner/Banner'
import './Header.css'
import { useParams } from 'react-router-dom'
import Banner2 from '../Banner2/Banner2'

const Header = () => {
    const params = useParams()
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <img className="navbar-brand" src={Logo} />
                </div>
            </nav>
            <div className='Banner'>
                {
                    params.details === 'details' ? <Banner2 /> : <Banner />
                }

            </div>

        </>
    )
}

export default Header