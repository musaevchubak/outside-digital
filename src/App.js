import './App.css';
import Main from "./Main/Main";
import React, {useState} from "react";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className="App">
      <button className="deductionButton" onClick={() => setModalActive(true)}>Налоговый вычет</button>
      <Main modalActive={modalActive} closeModal={ closeModal }/>
    </div>
  );
}

export default App;
