import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";

function NavigationBar() {
    return(
        <div>
            <h1>Scott Saller</h1>
                <ul>
                    <li>
                       <a href="/">Home</a> 
                    </li>
                    <li>
                        <a href="/about-me">About Me</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a> 
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                </ul>
        </div>
    )
}

export default NavigationBar;