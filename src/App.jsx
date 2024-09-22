import { useState } from "react";
import "./App.css";
import WellbeingModal from "./components/WellBeingModal";
import BookSlot from "./components/BookSlot/BookSlot";

function App() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [showModal, setShowModal] = useState(false);

  const handleTabSelection = (e) => {
    let tabItem = e.target.id;
    if (tabItem === "tab1") {
      setSelectedTab("tab1");
    } else if (tabItem === "tab2") {
      setShowModal(false);
      setSelectedTab("tab2");
    }
  };

  return (
    <div className="app">
      <ui className="tab">
        <li
          className={`tablinks${selectedTab === "tab1" ? " active" : ""}`}
          id="tab1"
          onClick={handleTabSelection}
        >
          Check-in widget
        </li>
        <li
          className={`tablinks${selectedTab === " tab2" ? " active" : ""}`}
          id="tab2"
          onClick={handleTabSelection}
        >
          Book timeslot
        </li>
      </ui>

      {selectedTab === "tab1" ? (
        <section className="tab1-container">
          <h2 className="tab1-heading">Welcome Page</h2>
          <button onClick={() => setShowModal(true)}>
            Open Wellbeing Modal
          </button>
        </section>
      ) : selectedTab === "tab2" ? (
        <BookSlot />
      ) : null}
      {showModal ? (
        <WellbeingModal
          onContinue={()=>setShowModal(false)}
          data-testid="wellbeing-modal"
        />
      ) : null}
    </div>
  );
}

export default App;
