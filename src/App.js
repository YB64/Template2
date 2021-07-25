import './App.css';
import ProductDetails from "./Components/ProductDetails.js"
import res from "./Components/resource.js"
import Header from "./Components/Header.js"
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import ContactUs from "./Components/contactUs.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      
      <About description={res.aboutUs.shortDescription} label={res.aboutUs.label} image={res.aboutUs['team_member / owner'][0].img.src} alt={res.aboutUs['team_member / owner'][0].img.alt}/>
      <ProductDetails description={res.productDetails.description} products={res.productDetails.product}/>
      <ContactUs/>
    </div>
  );
}

export default App;
