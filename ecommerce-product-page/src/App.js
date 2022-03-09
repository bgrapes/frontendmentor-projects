import Nav from "./components/Nav";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  body {
    background: var(--white);
    color: var(--very-dark-blue);
    font-family: "Manrope", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }

  /*
  * Containers
  */
  .container {
    display: flex;
    min-height: 100vh;
  }

  /*
  * Footer
  */
  .attribution {
    color: var(--very-dark-blue);
    font-size: 11px;
    margin-bottom: 10px;
    text-align: center;
  }

  .attribution a {
    color: var(--very-dark-blue);
  }

  .attribution a:hover {
    color: var(--black);
  }
`;

export function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="container"></div>
      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/bgrapes">Brian Grapes</a>.
      </footer>
    </div>
  );
}
