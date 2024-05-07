import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            hello detail page
            <button onClick={() => navigate("/")}> navigate to landing page </button>
        </div>
    )
}

export default DetailPage
