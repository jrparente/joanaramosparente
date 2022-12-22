import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/Globalstyle";
import { lightTheme, darkTheme } from "./components/Theme/Themes";
import { useDarkMode } from "./components/Theme/useDarkMode";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Project from "./pages/Projects/Project";
import { Container } from "./components/Theme/Utils";
import Certifications from "./pages/Certifications/Certifications";

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`;

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 560);
  const [showMobileMenu, setShowMobileMenu] = useState();

  // Check Window size to apply/remove Responsive Layout and functionalities to components
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 560;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // Toggle Mobile Menu On and Off
  function changeShow() {
    const primaryNav = document.querySelector("#primary-nav");

    setShowMobileMenu((prevShow) => !prevShow);
    primaryNav.toggleAttribute("menu-visible");
  }

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />

          <Navigation
            theme={theme}
            themeToggler={themeToggler}
            changeShow={changeShow}
            showMobileMenu={showMobileMenu}
          />
          <Container>
            <MainGrid>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/projects">
                  <Route index element={<Projects />} />
                  <Route path=":id" element={<Project />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </MainGrid>
          </Container>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
