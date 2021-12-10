import './App.css';
import About from './components/About/About';
import Accordion from './components/Accordions/Accordions';
import Clients from './components/Clients/Clients';
import Contacts from './components/Contacts/Contacts';
import Events from './components/Events/Events';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Secure from './components/Secure/Secure ';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Products></Products>
      <Events></Events>
      <Team></Team>
      <Secure></Secure>
      <Accordion></Accordion>
      <Clients></Clients>
      <Testimonials></Testimonials>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
