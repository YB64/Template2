import './App.css';
import ProductDetails from "./Components/ProductDetails.js";
import res from "./Components/resource.js";
import Header from "./Components/Header.js";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import ContactUs from './Components/ContactUs/contactUs';
import Footer from "./Components/Footer.js";
import Gallery from "./Components/Gallery.js";
import Newsletter from "./Components/newsletter";

function App() {
  return (
    <>
      <Header />
      <div className="App">

        <Home />
        <About description={res.aboutUs.shortDescription} label={res.aboutUs.label} image={res.aboutUs['team_member / owner'][0].img.src} alt={res.aboutUs['team_member / owner'][0].img.alt} />
        <ProductDetails description={res.productDetails.description} products={res.productDetails.product} />
        <Gallery gallery={res.gallery} />
        <Newsletter />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
