function AboutMe() {
    return (
        <div>
            <h1>About me</h1>
            <p className="lead">My name is Scott Saller, and I'm a 24 year old Store Manager from West Chester, Pennsylvania. I first took a fascination with technolology and electronics when I was younger, and always maintained that interest. When I was 15 I learned how to play guitar and joined a band with me and three of my close friends.</p>
            <h2>Some fun facts about me:</h2>
            <ul >
                <img className="about-photos mt-4" alt="A real photo of the macintosh that I took apart when I was younger." src="../assets/Broken-Mac.png"></img>
                <li className="lead mb-4">I started taking apart old electronics around my parents house when I was seven.</li>
                <img className="about-photos" alt="My dad's car after I decided that it was time I do big boy things!" src="../assets/burning-car.png"></img>
                <li className="lead mb-4">I figured out how to jumpstart a car when I was nine years old. Thanks, Google!</li>
                <img className="about-photos" alt="An overhead photo of a marsh near my old house." src="../assets/drone-photo.png"></img>
                <li className="lead mb-4">I have a commercial drone license that allows me to operate a drone in a commercial setting.</li>
                <img className="about-photos" alt="a man with a very bald head and a knack for doing the unsavory for a living" src="../assets/Agent_47.png"></img>
                <li className="lead mb-4">My favorite color is sage green, and my favorite number is 47 after the video game series Hitman.</li>
                
            </ul>
        </div>
    )
}
export default AboutMe;