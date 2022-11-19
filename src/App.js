import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
