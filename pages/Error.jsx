import { Link } from "react-router-dom";

function Error() {
    return (
        <div id="error-message">
            <h1>Error!</h1>
            <p>Oh No! There was an error when we tried to display the information that you were looking for!</p>
            <p>I'll say its my fault and say that the page that you were looking for is under construction..</p>
            <p>But, between you and me, <strong>I know you just typed a "/" and then some random string into the search bar to see if I did anything to handle errors.</strong></p>
            <p>Well, now that we're both uncomfortable and feel slightly violated, I'm gonna go back to writing this website. Could I at least get a 60% please? Thank you!</p>
            <Link to="/"><img src="https://pbs.twimg.com/media/Fpra9cqXgAAT6RW.jpg:large" alt="Me at my work desk after a long day of being the silliest goose in the office." style={{maxWidth: "400px"}}></img></Link>
            <p>Please click on the silly goose when you are ready to go back to the home page.</p>
        </div>
    )
}

export default Error;