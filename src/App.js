
// import './styles/App.scss';
import SignUp from './Assets/SignUp';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LargeCardComponent from './Components/LargeCardsComponent/LargeCardComponent';
import NavBar from './Components/NavBar/NavBar';
import SmallCardCOntainer from './Components/SmallCardContainer/SmallCardCOntainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <LargeCardComponent />
        <SmallCardCOntainer />
        <SignUp />
        <Footer />
    </div>
  );
}

export default App;
