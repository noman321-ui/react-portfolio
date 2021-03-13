import React from 'react';
import Typed from "react-typed";
import {HashLink as Link} from "react-router-hash-link";

const Header = () => {
    return (
        

        <div className="header-wraper" id="header-wraper">
            
            <div className="main-info" id="header-wraper">
                <h1>Profetional developer</h1>
                <Typed
                className="typed-text"
                strings={["web design","web development","facebook ads smm","google apps"]}
                loop
                />
                <h2>jhjsd</h2>
            </div>


        </div>
    )
}

export default Header
