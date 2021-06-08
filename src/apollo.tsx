import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token:string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
};


export const darkModeVar = makeVar(false);
export const client = new ApolloClient({
  uri: "http://woori-nomadcoffe-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});