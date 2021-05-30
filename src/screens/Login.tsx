import styled from "styled-components";
import { darkModeVar } from "../apollo";

const Title = styled.div`
  color: ${(props) => props.theme.fontColor}l
`;

const Container = styled.div`
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.fontColor};
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={ ()=> darkModeVar(false)}>To light</button>
    </Container>
  );
}
export default Login;