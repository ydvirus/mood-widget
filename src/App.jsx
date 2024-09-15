import { useState } from "react";
import "./App.css";
import WellbeingModal from "./components/WellBeingModal/WellBeingModal";
import BookSlot from "./components/BookSlot/BookSlot";

function App() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [showModal, setShowModal] = useState(false);

  const handleContinue = () => {
    setShowModal(false);
  };

  const handleTabSelection = (e) => {
    let tabItem = e.target.id;
    if (tabItem === "tab1") {
      setSelectedTab("tab1");
    } else if (tabItem === "tab2") {
      setSelectedTab("tab2");
    }
  };

  return (
    <div className="app">
      <ui className="tab">
        <li className={`tablinks ${selectedTab ==="tab1" ? "active" : ""}`} id="tab1" onClick={handleTabSelection}>
          Check-in widget
        </li>
        <li className={`tablinks ${selectedTab ==="tab2" ? "active" : ""}`} id="tab2" onClick={handleTabSelection}>
          Book timeslot
        </li>
      </ui>

      {
        selectedTab === "tab1" ? showModal ? (
          <WellbeingModal
            onContinue={handleContinue} // Pass the continue handler
          />
        ) : 
          <>
            <h2>Welcome Page</h2>
            <button onClick={() => setShowModal(true)}>
              Open Wellbeing Modal
            </button>
          </> : selectedTab === "tab2" ? <> <BookSlot/> </> : null
        
      }
    </div>
  );
}

export default App;
