import Project from "../components/Project";

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>Below is a list of projects that I have created. If you would like to see projects that are still currently in the works, please see my <a target="_blank" href="https://github.com/scottmsaller">Github Repository</a></p>
            <Project 
            imageSrc={"https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg"} 
            title={"Readme.MD Generator"}
            techUsed={"Inquirer.js, JavaScript"} 
            repoLink={"https://github.com/ScottMSaller/README.md-Generator"}
            />

            <Project 
            imageSrc={"https://www.thedrive.com/wp-content/uploads/2023/08/21/Monster-Jam-Hero-1.jpg"} 
            title={"Vehicle Builder"}
            techUsed={"Typescript, Inquirer.js"} 
            repoLink={"https://github.com/ScottMSaller/Vehicle-Builder"}
            />

            <Project 
            imageSrc={"https://www.teambonding.com/wp-content/uploads/2023/03/micromanagement-in-the-workplace-1.jpg"} 
            title={"Employee Tracker"}
            techUsed={"SQL, TypeScript, Inquirer.js"} 
            repoLink={"https://github.com/ScottMSaller/Employee-Tracker"}
            />

            <Project 
            imageSrc={"https://i.dailymail.co.uk/i/pix/2015/10/17/14/2D7F8E6100000578-3277051-image-a-57_1445090350078.jpg"} 
            title={"EzyBike"}
            techUsed={"Html, CSS, JavaScript, Bootstrap"} 
            repoLink={"https://github.com/ScottMSaller/Project-1"}
            />

            <Project 
            imageSrc={"https://m.media-amazon.com/images/I/51ozyc43wBL._AC_UF894,1000_QL80_.jpg"} 
            title={"Freight Hero"}
            techUsed={"Html, CSS, JavaScript, Bootstrap "} 
            repoLink={"https://github.com/ScottMSaller/Freight-Hero"}
            />
                       
            <Project 
            imageSrc={"https://imgur.com/mwM281f"} 
            title={"My Awesome Portfolio"}
            techUsed={"React, JavaScript, Bootstrap, CSS"} 
            repoLink={"https://github.com/ScottMSaller/my-awesome-portfolio"}
            />
        </div>
    )
}
export default Portfolio;