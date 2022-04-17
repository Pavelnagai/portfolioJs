import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/Skills/Skills";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import ava from "./common/image/avatar.jpeg"

function App() {

    return (
        <div className="App">
            <div className="data">
                <Header/>
                <Main/>
                <Skills/>
                <Contacts/>
                <Works/>
                <Footer id="footer"/>
            </div>
            <div className="image">
                <Portfolio/>
            </div>
        </div>
    )
}

export default App;
