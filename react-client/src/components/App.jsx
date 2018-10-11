import React from "react";
import WarningMessage from "./WarningMessage";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="component-app">
          hello world
        </div>
        <WarningMessage />
        <WarningMessage />
        <WarningMessage />
        <WarningMessage />
      </React.Fragment>
    );
  }
}
export default App;