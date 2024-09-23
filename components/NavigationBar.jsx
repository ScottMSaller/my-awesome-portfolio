import "../styles/NavigationBar.css";

function NavigationBar() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand">Scott Saller</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/">Home</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about-me">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/resume">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;