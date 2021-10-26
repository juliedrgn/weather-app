import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="London" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
