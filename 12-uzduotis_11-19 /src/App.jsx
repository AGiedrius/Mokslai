import Header from "./components/Headers";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header title="Labs, aš mokausi" link="./src/assets/kofee.jpg" />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <PostImage psImage="./src/assets/mini.png" />
          <PostContent
            h2title="Blium pum"
            postText="The Intergalactic Aerospace Expo is back on microTech, 
            and we're celebrating this year's premier aerospace event by launching a Free Fly event. 
            From November 22 through December 5, you have the chance to try some 
            of Star Citizen's most iconic vehicles for free. 
            All you have to do is to create an account, 
            download the game and jump into the fun."
          />
        </div>
        <div className="col-6">
          <PostImage psImage="./src/assets/kote.png" />
          <PostContent
            h2title="Tram taram pam pam"
            postText="The Battle of Centauri was an armed military engagement between 
            the Tevarin and the United Empire of Earth (UEE) and was the final battle
             of the Second Tevarin War (2603 - 2610). On 24 June 2610, 
             the Tevarin Warlord Corath'thal and his forces entered the Centauri
              system with the Centauri-Elysium jump point as their goal, around which the UEE Navy 
              (UEEN) had placed a blockade. Instead of charging for the jump point, 
              Corath'thal's fleet diverted for Yar and Saisei, forcing the 
              UEEN to break its formation and defend the populace leaving a small 
              contingent of ships behind to protect the jump point."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-3 ">
          <Box boxColor="bg-success" />
        </div>
        <div className="col-3">
          <Box boxColor="bg-primary" />
        </div>
        <div className="col-3">
          <Box boxColor="bg-danger" />
        </div>
        <div className="col-3">
          <Box boxColor="bg-warning" />
        </div>
      </div>
    </div>
  );
}

export default App;
