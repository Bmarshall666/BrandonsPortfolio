const Project = (props) => {

    if(props.Title === "CAD Development") {
        return (
            <div>
                <img src="AutoCAD3.png" alt="CAD Development" />
                <h3>{props.Title}</h3>
                <p>{props.Description}</p>
            </div>
        );
    }

    if(props.Title === "Coming Soon") {
        return (
            <div>
                <img src="ComingSoon.png" alt="Coming Soon" />
                <h3>{props.Title}</h3>
                <p>{props.Description}</p>
                <p>Details coming soon!</p>
            </div>
        );
    }

    return (
        <div>
            <img src={props.Image} alt={props.Title} />
            <h3>{props.Title}</h3>
            <p>{props.Description}</p>
            <a href={props.SiteLink}>Vist Site</a>
            <a href={props.GithubLink}>View on GitHub</a>
          </div>
    );
}
export default Project;
    