import About from "./components/About";
import BurguerMenu from "./components/BurguerMenu";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <div className="max-w-screen mx-auto">
      <Nav />
      <section id="home"><Hero /></section>
      <section id="cards"><Cards /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      
    </div>
      
    </>
  );
}

export default App;
