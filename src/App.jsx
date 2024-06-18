import React from "react";
import './styles/App.css';

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

import article1Img from "./assets/images/html-logo.png";
import article2Img from "./assets/images/css-logo.png";
import article3Img from "./assets/images/javascript-logo.png";
import article4Img from "./assets/images/react-logo.png"

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
  
        {/* <Counter/> */}

        <section id="articles">
          <Article 
          title="Curso de HTML"
          provider="Ada Tech"
          description="Este é um curso de HTML, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article1Img}/>

          <Article
          title="Curso de CSS"
          provider="Ada Tech"
          description="Este é um curso de CSS, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article2Img}/>

          <Article
          title="Curso de Javascript"
          provider="Ada Tech"
          description="Este é um curso de Javascript, onde é fundamental consolidar conhecimentos para poder aprender React."
          thumbnail={article3Img}/>

          <Article
          title="Curso de React"
          provider="Ada Tech"
          description="Este é um curso de React, onde irá unir tudo que foi estudando nos cursos de HTML, CSS e Javascript junto com funcionalidades do React."
          thumbnail={article4Img}/>
        </section>
      </>
    );
  }
}

export default App;
