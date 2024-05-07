import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            hello landing page
            <button onClick={() => navigate("/home")}> navigate to home page</button>
        </div>
    )
}

export default LandingPage
