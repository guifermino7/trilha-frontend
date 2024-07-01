import React from "react";
import "./styles.css";

export class Knowledge extends React.Component {
    render() {
        return (
            <article id="knowledge">
                <a href={this.props.url} target="_blank" rel="noreferrer">
                        <img
                        src={this.props.thumbnail}
                        alt={this.props.title}
                        className="logo"/>
                </a>

                <div className="knowledge-info">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>

                    <p>{this.props.description}</p>
                </div>
            </article >
        )
    }
}