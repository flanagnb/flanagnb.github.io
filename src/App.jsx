import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BioPage from './BioPage.jsx';
import JavascriptExamples from './JavascriptExamples.jsx';
import WelcomeBanner from './WelcomeBanner.jsx';

import './App.css';

export default function App() {
  return (
    <>
      <WelcomeBanner/>
      <Tabs defaultActiveKey="bio" id="tabs" justify fill>
        <Tab eventKey="bio" title="Bio" className="tab">
          <BioPage/>
        </Tab>
        <Tab eventKey="js" title="Javascript Examples" className="tab">
          <JavascriptExamples/>
        </Tab>
      </Tabs>
    </>
  );
}
