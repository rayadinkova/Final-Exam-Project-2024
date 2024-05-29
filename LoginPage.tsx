import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; 

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/finance');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>OPARKO</h1>
                <h2>Digital parking solution for every need</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <div className="footer">
                    <a href="/forgot-password">Forgot password?</a>
                    <a href="/create-account">Create an account</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
