import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeSandBoxLogo from '../assets/code-sandbox.svg';
// import resume from '../assets/Resume.pdf';

const ContactList = () => {
    return (
        <div>
            <a href='https://github.com/RoseMagura' target='_blank'>
                <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/rose-magura-14746b164/' target='_blank'>
                <LinkedInIcon />
            </a>
            <a href='mailto:rosemmagura@gmail.com' target='_blank'>
                <EmailIcon />
            </a>
            <a href={process.env.PUBLIC_URL + '/Resume.pdf'} download>
                <DescriptionIcon />
            </a>
            <a href='https://codesandbox.io/u/RoseMagura' target='_blank'>
                <img id='code-sandbox' src={CodeSandBoxLogo} alt='Code Sandbox Logo'></img>
            </a>
        </div>
    )
}
export default ContactList;