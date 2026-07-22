import { useState } from "react"
import "./styles/home.css"
import hero1 from "./assets/hero1.jpg"
import hero2 from "./assets/hero2.jpg"
import hero3 from "./assets/hero3.jpg"

function Home(){

    const [currHero, changeHero] = useState(hero1);

    return(
        <div id="home">
            <div id="left">
                <p>Welcome to Virtual Vault! Here at Virtual Vault, you can find 
                    different merchandise related to your favorite vtubers. We 
                    offer a wide variety of items ranging from a simple keychain 
                    to a full blown sets. We are dedicated to providing an easy and 
                    affordable service no matter where you are. </p>
                    <button>Go To Shop</button>
            </div>
            <div id="right">
                <img src={currHero} alt="" />
                <div>
                    <ul>
                        <li><button onClick={(e)=>changeHero(hero1)}></button></li>
                        <li><button onClick={(e)=>changeHero(hero2)}></button></li>
                        <li><button onClick={(e)=>changeHero(hero3)}></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {Home}