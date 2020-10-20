import React, {useState} from 'react';
import './App.css';
import { Button, Steps } from 'antd';
import 'antd/dist/antd.css';
const {Step} = Steps;
 
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
        <Steps current={1}>
    <Step title="Finished" description="First step test." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="Second step test." />
    <Step title="Waiting" description="This step." />
  </Steps>,
      </div>
      <Button type="primary">Translate</Button>
    </div>
  );
}

export default App;
