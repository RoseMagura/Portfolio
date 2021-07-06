import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeSandBoxLogo from '../assets/code-sandbox.svg';

interface Contact {
    link: string;
    icon: Element | JSX.Element;
}

const ContactList = () => {
    const contacts: Contact[] = [
        {
            link: 'https://github.com/RoseMagura',
            icon: <GitHubIcon />
        },
        {
            link: 'https://www.linkedin.com/in/rose-magura-14746b164/',
            icon: <LinkedInIcon />
        },
        {
            link: 'mailto:rosemmagura@gmail.com',
            icon: <EmailIcon />
        },
        {
            link: `${process.env.PUBLIC_URL}/Resume.pdf`,
            icon: <DescriptionIcon />
        },
        {
            link: 'https://codesandbox.io/u/RoseMagura',
            icon: <img id='code-sandbox' src={CodeSandBoxLogo} alt='Code Sandbox Logo' />
        },
    ];
    return (
        <div>
            {contacts.map(contact => {
                return (
                    <a href={contact.link} target='_blank' className='logo'>
                        {contact.icon}
                    </a>
                )
            })}
        </div>
    )
}
export default ContactList;