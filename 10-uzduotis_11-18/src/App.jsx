import Header from "./components/Headers";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    <div className="conteiner">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <PostImage />
          <PostContent />
        </div>
        <div className="col-6">
          <PostImage />
          <PostContent />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;