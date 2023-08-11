import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpeg";
import imgLightMode from "../img/fotoPerfil2.jpeg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";

  return (
    <div id="App" className={isLightMode ? "light" : ""}>
      <div id="container">
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
          @isabela-pr
        </Profile>
        <Switch mode={toggleMode} infoButton={isLightMode} />
        <div id="links">
          <ul>
            <Links link={"https://github.com"}>GitHub</Links>
            <Links link={"#"}>Instagram</Links>
            <Links link={"#"}>Portifólio</Links>
            <Links link={"#"}>Projetos</Links>
          </ul>
        </div>
        <div id="socialLinks">
          <SocialLinks href={"#"} icon={"logo-github"} />
          <SocialLinks href={"#"} icon={"logo-instagram"} />
          <SocialLinks href={"#"} icon={"logo-tiktok"} />
          <SocialLinks href={"#"} icon={"logo-youtube"} />
        </div>
        <Footer link={"#"}>@isabela-pr</Footer>
      </div>
    </div>
  );
};

export default App;
