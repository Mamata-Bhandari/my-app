import logo from './logo.svg';
import './App.css';

import Header from './Comp/Header';
import Navbar from './Comp/Navbar';
import Footer from './Comp/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
