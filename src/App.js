import React, {useState} from 'react';
import './App.css';

function App() {
const [language, setLanguage] = useState('ru');
const [text, setText] = useState('');


  return (
    <div className="App">
      <h1>Simple Translator</h1>
      <input placeholder="Enter English" onChange={setText}/>
      <h2>Select Language</h2>
      <div>
      <select>
        <option>Russian</option>
        <option>English</option>
        <option>Spanish</option>
      </select>
      </div>
      <button>Transle</button>

    </div>
  );
}

export default App;
