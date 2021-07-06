import '../styles/App.css';
import Title from './Title';
import Biography from './Biography';
import Skills from './Skills';
import ProjectList from './ProjectList';
import ContactList from './ContactList';

const App = () => {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Title />
      <Biography />
      <Skills />
      <ProjectList />
      <ContactList />
    </div>
  );
}

export default App;
