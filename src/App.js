import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/Skills/Skills";
import Works from "./components/works/Works";
import WorkHome from "./components/workHome/WorkHome";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <WorkHome/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
