import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RestCard from './components/RestCard';
import './App.css';

const sendMessage = () => {
  window.electron.terminalMessage("User clicked h1");
}

function Hello() {
  const [restList, setRestList] = useState<any>();

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then((resp) => resp.json())
      .then((data) => setRestList(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className='App'>
      <div className="Hello" onClick={sendMessage}>
        <h1>Electron Restaurant List</h1>
      </div>
      <div className="Hello">
        {!restList
        ? <h2>Loading</h2>
        : <div className = 'rest-list'>
          {restList.map((rest) => (
          <RestCard rest = { rest } key={ rest.id } />
        ))}
        </div>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
