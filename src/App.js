import './App.css';
import Banner from './MyComponents/Banner';
import Header from './MyComponents/Header';
import AboutUs from './MyComponents/AboutUs';
import Product from './MyComponents/Product';
import Gallery from './MyComponents/Gallery';
import Review from './MyComponents/review';
import Animatedcard from './MyComponents/Brands';
import Whychoose from './MyComponents/Whychoose';
import Footer from './MyComponents/Footer';

function App() {
  return (

    <>
      <Header />
      <Banner />
      <AboutUs />
      <Product/>
      <Gallery/>
      <Whychoose/>
      <Review autoplay />
      <Animatedcard/>
      <Footer/>
    </>
  );
}

export default App;
