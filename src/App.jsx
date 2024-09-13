import { useState } from 'react';
import './App.css';
import WellbeingModal from './components/WellBeingModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleContinue = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      {showModal ? (
        <WellbeingModal
          onContinue={handleContinue} // Pass the continue handler
        />
      ) : <>
      <h2>Welcome Page</h2>
      <button onClick={() => setShowModal(true)}>Open Wellbeing Modal</button>
      
      </>
      }
    </div>
  );
}

export default App
