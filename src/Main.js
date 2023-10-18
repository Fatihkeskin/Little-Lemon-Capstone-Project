import React from "react";
import { useState } from "react";
import './Main.css';
import mainphoto from "./images/mainphoto.jpg";

const Main = () => {

   
     

        return (

            <div  class="main">
                <div class="main-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/booking">
                        <button id="button" to="/booking">Reserve a Table</button>
                    </a>
                </div>
                <div class="featured">
                    <img src={mainphoto} alt="restaurantFood" />
                </div>
            </div>
        );
    }


    export default Main;