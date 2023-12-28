import logo from './logo.svg';

import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Offers from './components/Offers';
import Popular from './components/Popular';
import Newcollection from './components/Newcollection';
import Footer from './components/Footer';
import Getnotified from './components/Getnotified';
import Newsletter from './components/Newsletter';
import Features from './components/Features';

function App() {
  return (
    <>
    <Herosection/>
    <Popular/>
    <Offers/>
    <Newcollection/>
    {/* <Getnotified/> */}
    <Newsletter/>
    {/* <Features/> */}
    </>
  );
}

export default App;
