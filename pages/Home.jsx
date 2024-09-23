import "../styles/Home.css";
import photo from "../assets/drone-photo.png"
function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio Page</h1>
            <h2>"They always say time changes things, but you actually have to change them yourself" -Andy Warhol</h2>
            <div>
                <img id="home-photo" alt="An overhead photo of a marsh near my old house." src={photo}></img>
            </div>
            <p>If you would like to know more about me, please <a href="/about-me">see the about me page!</a></p>
        </div>
    )
}
export default Home;