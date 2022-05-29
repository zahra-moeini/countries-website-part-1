import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./componnent/HomePage";

import "./App.css";
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from "./styles/useDarkMode";
import { Toggle } from "./componnent/Toggle";
import { GlobalStyles ,lightThem ,darktThem} from "./styles/globalStyles";

const Container = styled.div``;
function App() {
  const [theme, toggleThem] = useDarkMode();
  const themeMode=theme ==='light' ? lightThem :darktThem;

  return (
    <>
    <ThemeProvider theme={themeMode}>

      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleThem={toggleThem}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
