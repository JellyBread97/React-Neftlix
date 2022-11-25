import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App darkBackground">
      <NavbarTop />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
