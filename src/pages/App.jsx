import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpeg";
import imgLightMode from "../img/fotoPerfil2.jpeg";
import Switch from "../components/switch/switch";

const App = () => {
const [isLightMode, setIsLightMode] = useState(false)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
    return(
        <div id="container">
          <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@isabela-pr</Profile>
          <Switch></Switch>
        </div>
    )
}

export default App;
    




