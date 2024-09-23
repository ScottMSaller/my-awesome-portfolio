import resume from "../assets/resume.png";
console.log(resume)
function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>Below is an updated resume of mine. Feel free to <a href="/contact">contact me</a> if you have any questions!</p>
            <img alt="A picture of the most hireable resume you'll see all day. nice!" src={resume} style={{maxWidth: "60%"}}/>
        </div>
    )
}
export default Resume;