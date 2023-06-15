// App.css file contains CSS styling for the elements of App component
import "./App.css";
import Image from "@atlaskit/image";
import { css } from "@emotion/react";
import Home from "./Pages/Home";
function App() {
  const logoStyle = css({
    objectFit: "contain",
    height: "15vh",
  });
  return (
    <div className="App">
      {/* These lines of code will be displayed at the top of the webpage, allowing the user to see the logo and title.  */}
      <header className="AppHeader">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/jira-1.svg"
          alt="Simple example"
          testId="image"
          css={logoStyle}
        />
        <h1> Project and Issue Management</h1>
      </header>
      {/* Added Home Component as a children of App component */}
      <Home />
    </div>
  );
}

export default App;
