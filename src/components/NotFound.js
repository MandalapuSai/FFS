import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-4">404</h1>
            <p className="lead">Oops! Something went wrong!!!</p>
            <p className="text-muted">The page you're looking for doesn't exist or has been moved.</p>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                Go Back to Home
            </button>
        </div>
    )
}
