import React from "react";
import Jumpotron from "./Jumpotron";
import Album from "./Album";

class Main extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Jumpotron/>
                <Album/>
            </React.Fragment>
        );
    }

};

export default Main;
