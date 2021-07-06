import { ProjectType } from "./ProjectList";

const Project = (props: ProjectType) => {
    const { name, imageLink, codeLink, hostedLink, description } = props;
    return (
        <div>
            <h4>{name}</h4>
            <img className='preview' src={imageLink} alt={`screenshot of ${name} site`}></img><br/>
            <a target='_blank' href={codeLink}>{name} Code</a><br/>
            {hostedLink !== undefined && <a target='_blank' href={hostedLink}>Visit {name}</a>}
            <p>{description}</p>
        </div>
    )
}
export default Project;