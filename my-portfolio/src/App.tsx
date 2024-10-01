import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { AboutMe } from './layout/sections/about/AboutMe';
import { Slogan } from './layout/sections/slogan/Slogan';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';
import { Particle } from './components/particle/Particle';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Slogan/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
