import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/stylebtn.css';
function Home({ onLogin, onRegister }) {
    return (

        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero">
                <h2>Share Your Story with Zestora</h2>
                <p>
                    Connect, inspire, and be heard. Zestora is your platform to share experiences and discover new perspectives.
                </p>
                <div className="cta-buttons">
                    <button className="btn"><NavLink to="/login" >
                        Login
                    </NavLink></button>
                    <button className="btn"><NavLink to="/signup" >signup</NavLink></button>
                </div>
            </section>



        </div>
    );
}

export default Home;
