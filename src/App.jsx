import React from "react";
import './styles/App.css';

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";
import { Aboutme } from "./components/Aboutme/Aboutme";

import article1Img from "./assets/images/html-logo.png";
import article2Img from "./assets/images/css-logo.png";
import article3Img from "./assets/images/javascript-logo.png";
import article4Img from "./assets/images/react-logo.png"
import { Experience } from "./components/Experience/Experience";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
  
        <section className="bio">
            <Aboutme/>
        </section>

        <section className="bio">
            <Experience/>
        </section>
        
        {/* <Counter/> */}

        <section id="articles">
          <Article 
          title="Curso de HTML"
          provider="Ada Tech"
          description="Este é um curso de HTML, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article1Img}
          url="https://comunidade.ada.tech/cursos/829a58a4-5871-410f-883a-4653fcccb0b6"/>

          <Article
          title="Curso de CSS"
          provider="Ada Tech"
          description="Este é um curso de CSS, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article2Img}
          url="https://comunidade.ada.tech/cursos/7b554e4d-867e-4859-a1ff-5effae0d5ff9"/>

          <Article
          title="Curso de Javascript"
          provider="Ada Tech"
          description="Este é um curso de Javascript, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article3Img}
          url="https://comunidade.ada.tech/cursos/1eee6337-f72e-61e0-f36a-9477308320a9"/>

          <Article
          title="Curso de React"
          provider="Ada Tech"
          description="Este é um curso de React, onde irá unir tudo que foi estudando nos cursos de HTML, CSS e Javascript junto com funcionalidades do React."
          thumbnail={article4Img}
          url="https://comunidade.ada.tech/cursos/b60dfd96-34d9-4880-b23e-7e3679eb5391"/>
        </section>
      </>
    );
  }
}

export default App;
