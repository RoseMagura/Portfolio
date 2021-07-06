import Project from './Project';

export interface ProjectType {
    name: string;
    imageLink: string;
    codeLink: string;
    hostedLink?: string;
    description: string;
}

const ProjectList = () => {
    const projects: { [name: string]: ProjectType[] } = {
        'JavaScript': [
            {
                name: 'CatBook',
                imageLink: `${process.env.PUBLIC_URL}/CatBook.png`,
                codeLink: 'https://github.com/RoseMagura/HostingProject',
                hostedLink: 'https://immense-beach-34253.herokuapp.com/', 
                description: 'A site for sharing images of cats stored in a PSQL database'
            },
            { 
                name: 'Pomodoro Clock', 
                imageLink: `${process.env.PUBLIC_URL}/pomodoro.png`, 
                codeLink: 'https://codesandbox.io/s/25-5-clock-usq07',
                hostedLink: 'https://usq07.csb.app/',
                description: 'A timer site for scheduling work or study sessions' },
            { 
                name: 'My Reads', 
                imageLink: `${process.env.PUBLIC_URL}/MyReads.png`, 
                codeLink: 'https://github.com/RoseMagura/reactnd-project-myreads-starter', 
                description: 'An application for recording which books you are reading' },
        ],
        'Java': [
            { 
                name: 'E-Commerce Project', 
                imageLink: 'k',
                codeLink: 'https://github.com/RoseMagura/ECommerceProject',
                hostedLink: undefined,
                description: 'A Java Springboot project that allows users to shop online' },
            { 
                name: 'Critter Chronologer', 
                imageLink: 'n', 
                codeLink: 'https://github.com/RoseMagura/CritterChronologer', 
                description: 'A site created to aid scheduling for pet services' },
            { 
                name: 'SuperDuperDrive Cloud Storage', 
                imageLink: 'https://github.com/RoseMagura/SuperDuperDrive', 
                codeLink: '1', 
                description: 'An application that securely stores information and files in the cloud' },
        ],
        'Python': [
            { 
                name: 'Hollywood Info',
                imageLink: 't', 
                codeLink: 'https://github.com/RoseMagura/CastingHeroku', 
                hostedLink: undefined, 
                description: 'A Flask application to help directors and actors access insider information' },
            { 
                name: 'Fyyur',
                imageLink: 'w', 
                codeLink: 'https://github.com/RoseMagura/Fyyur', 
                description: 'A site for scheduling musical venues' },
            { 
                name: 'Adventure Game',
                imageLink: 'z', 
                codeLink: '1', 
                hostedLink: undefined,
                description: 'A fun text-based adventure game' },
        ]
    };
    const categories = Object.keys(projects);

    return (
        <div>
            <h2>Project List</h2>
            {categories.map(category => {
                return (
                    <div key={category}>
                        <h3 >{category}</h3>
                        <ul key={`${category}List`}>
                            {projects[category].map(
                                project =>
                                    <li key={project.name}>
                                        <Project {...project} />
                                    </li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default ProjectList;

