import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import NewBook from "./components/NewBook";


function App() {
  return (
    <main className="container-fluid">
      <header>
        <Header />
      </header>
      <nav>
        <NavBar />
      </nav>
      <article>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/newBook" element={<NewBook />} />
        </Routes>
      </article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
