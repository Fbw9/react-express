import React from "react";
import Card from "./Card";

class Album extends React.Component {
    render() {
        return  (
            <div class="album py-5 bg-light">
                <div class="container" >
                    <div class="row" >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
};

export default Album;