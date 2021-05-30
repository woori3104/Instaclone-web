import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ourTheme } from "./styles";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";

const Container = styled.div`
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.fontColor};
`;

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ThemeProvider theme={ ourTheme }>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
        </Switch>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
