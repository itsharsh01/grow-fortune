import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            hello hom epage
            <button onClick={() => navigate("/detail")}> navigate to detail</button>
        </div>
    )
}

export default HomePage
