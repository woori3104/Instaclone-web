import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ourTheme } from "./styles";
import * as NotFound from "./screens/NotFound";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Container = styled.div`
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.fontColor};
`;

type isLoggedInState = false | true;
export type setIsLoggedInState = React.Dispatch<
  React.SetStateAction<isLoggedInState>
>;

function App() {
  const [ isLoggeddIn, setIsLoggedIn ] = useState(false);
  return (
    <ThemeProvider theme={ ourTheme }>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggeddIn ? (
              <Home setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
          </Route>
        </Switch>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
