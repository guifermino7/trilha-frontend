import React from "react";
import "./styles.css";

export class Experience extends React.Component {
    render() {
        return (
            <div className="experiences">
                <h2>Experiências profissionais:</h2>

                    <h3 className="linx">Linx<span className="bar">/</span><span className="stone">Stone</span></h3>
                    <div className="experience-container">
                        <h4 className="experience">
                            Analista JR I - Suporte
                        </h4>
                        <p>
                            Jul/2021 - Jun/2022
                        </p>
                        <h4 className="experience">
                            Analista PL I - Suporte
                        </h4>
                        <p>
                            Jun/2022 - Jul/2023
                        </p>
                    </div>

                    <h3 className="cti">CTI</h3>
                    <div className="experience-container">
                        <h4 className="experience">
                            Estagiário AMS
                        </h4>
                        <p>
                            Jul/2023 - Jan/2024
                        </p>
                        <h4 className="experience">
                            Consultor Desenvolvedor AMS
                        </h4>
                        <p>
                            Jan/2024 - o momento
                        </p>
                    </div>
            </div>
        )
    }
}