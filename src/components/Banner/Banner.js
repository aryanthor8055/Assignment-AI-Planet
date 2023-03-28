import React from 'react'
import './Banner.css'
import Bulb from '../../assets/Hand holding bulb 3D.png'

const Banner = () => {
    return (
        <>
            <div className='Banner-info'>

                <h3 className='Title'>Hackathon Submissions</h3>
                <p className='summary'>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
                <button className='uploadBtn'>Upload Submission</button>

            </div>
            <div className='image'>
                <img src={Bulb} className="bulb-Img" />
            </div>
        </>
    )
}

export default Banner