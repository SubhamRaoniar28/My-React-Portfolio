import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </>
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default App;
