import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { usePortfolio } from "../context/PortfolioContext";

export default function Main(props) {
  const { portfolioData, loading } = usePortfolio();
  const theme = props.theme;

  if (loading) {
    return <Splash theme={theme} />;
  }

  const { settings } = portfolioData;

  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Splash {...props} theme={theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => <Experience {...props} theme={theme} />}
            />
            <Route
              path="/education"
              render={(props) => <Education {...props} theme={theme} />}
            />
            <Route
              path="/contact"
              render={(props) => <Contact {...props} theme={theme} />}
            />
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={theme} />}
            />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} theme={theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => <Experience {...props} theme={theme} />}
            />
            <Route
              path="/education"
              render={(props) => <Education {...props} theme={theme} />}
            />
            <Route
              path="/contact"
              render={(props) => <Contact {...props} theme={theme} />}
            />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} theme={theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
