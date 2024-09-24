import resume from "../assets/resume.png";
import "../styles/Resume.css";
console.log(resume)
function Resume() {
    return (
        <div>
            <h1 className="mt-1">Resume</h1>
            <p className="lead">Below is an updated resume of mine. Feel free to <a href="/contact">contact me</a> if you have any questions!</p>
            <img id="resume-photo" alt="A picture of the most hireable resume you'll see all day. nice!" src={resume}/>
            
            <a href="https://imgur.com/q4jsncY" download><p>Download Resume</p></a>
        </div>
    )
}
export default Resume; 