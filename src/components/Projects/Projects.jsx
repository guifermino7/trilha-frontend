import React from "react";
import "./styles.css";

export class Projects extends React.Component {
    render() {
        return (
            <article id="project">
                    <a href={this.props.url} target="_blank" rel="noreferrer">
                        <img
                            src={this.props.thumbnail}
                            alt={this.props.title}
                            className="icone" />
                    </a>

                    <div className="project-info">
                        <h2>{this.props.title}</h2>

                        <p>{this.props.description}</p>
                    </div>
            </article>
        )
    }
}