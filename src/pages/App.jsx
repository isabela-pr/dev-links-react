import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpeg";
import imgLightMode from "../img/fotoPerfil2.jpeg";

const App = () => {
const [isLightMode, setIsLightMode] = useState(false)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
    return(
        <div id="container">
          <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@isabela-pr</Profile>
          <Switch></Switch>
          <div id="links">
            <ul>
              <Links link={"https://github.com"}>GitHub</Links>
              <Links link={"#"}>Instagram</Links>
              <Links link={"#"}>Portifólio</Links>
              <Links link={"#"}>Projetos</Links>
              
            </ul>
          </div>
        </div>
    )
}

export default App;
    




