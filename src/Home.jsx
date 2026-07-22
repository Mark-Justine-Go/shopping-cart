import { useState } from "react"
import { Link } from 'react-router';
import "./styles/home.css"
import hero1 from "./assets/hero1.jpg"
import hero2 from "./assets/hero2.jpg"
import hero3 from "./assets/hero3.jpg"

function Home(){

    const [currHero, changeHero] = useState(hero1);
    const [buttonClasses, setButtonClasses] = useState(["selected","",""]);

    function changeHeroState(idx){
        switch(idx){
            case 1:
                changeHero(hero1);
                setButtonClasses(prev => ["selected","",""]);
                break
            case 2:
                changeHero(hero2);
                setButtonClasses(prev => ["","selected",""]);
                break
            case 3:
                changeHero(hero3);
                setButtonClasses(prev => ["","","selected"]);
                break
        }
    }

    return(
        <div id="home">
            <div id="left">
                <p>Welcome to Virtual Vault! Here at Virtual Vault, you can find 
                    different merchandise related to your favorite vtubers. We 
                    offer a wide variety of items ranging from a simple keychain 
                    to a full blown sets. We are dedicated at providing an easy and 
                    affordable service no matter where you are. </p>
                    <button><Link to="shop">Go To Shop</Link></button>
            </div>
            <div id="right">
                <img src={currHero} alt="" />
                <div>
                    <ul>
                        <li><button className={buttonClasses[0]} onClick={(e)=>changeHeroState(1)}></button></li>
                        <li><button className={buttonClasses[1]} onClick={(e)=>changeHeroState(2)}></button></li>
                        <li><button className={buttonClasses[2]} onClick={(e)=>changeHeroState(3)}></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {Home}