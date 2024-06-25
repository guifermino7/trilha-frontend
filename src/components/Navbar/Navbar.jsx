import React from "react";

import logoImg from "../../assets/images/portal-rick-and-morty.gif";

import "./styles.css";

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img src={logoImg} alt="Portal do Rick and Morty" className="portal logo"/>

                        <h1>Software <span>Engineer</span> GuiFermino7</h1>
                    </div>

                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Meu conhecimento</a></li>
                        <li><a href="https://www.linkedin.com/in/guilhermefermino/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/guifermino7" target="_blank" rel="noreferrer">GitHub</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
