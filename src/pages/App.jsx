import Profile from "../components/profile/profile";

import "./App.css";

import { useState } from "react";
import imgDarkMode from "../img/fotoPerfil.jpeg"
import imgLightMode from "../img/fotoPerfil2.jpeg"


const App = () => {
const [isLightMode, setIsLightMode] = useState(false)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
    return(
        <div>
          <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@isabela-pr</Profile>
        </div>
    )
}

export default App;
    




