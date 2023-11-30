import { useState } from "react";
import "./App.css";
import "./components/Header/header";
import Header from "./components/Header/header";
import Card from "./components/cards/card";
import { cardList } from "./components/cards/cardList";

function App() {
  const [activeUser, setactiveUser] = useState(15);
  return (
    <div>
      <Header activeUser={activeUser} setactiveUser={setactiveUser} />
      <div className="cardContainer">
        {cardList.map((person) => (
          <Card personInfo={person} />
        ))}
      </div>
    </div>
  );
}

export default App;
