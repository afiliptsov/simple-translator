import React, {useState} from 'react';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

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
      <Button type="primary">Translate</Button>
    </div>
  );
}

export default App;
