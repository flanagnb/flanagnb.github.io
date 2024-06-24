import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BioPage from './BioPage.jsx';
import JSToys from './JSToys.jsx';
import WelcomeBanner from './WelcomeBanner.jsx';

export default function App() {
  return (
    <>
      <WelcomeBanner/>
      <Tabs defaultActiveKey="bio" id="tabs">
        <Tab eventKey="bio" title="Bio">
          <BioPage/>
        </Tab>
        <Tab eventKey="js" title="Javascript Examples">
          <JSToys/>
        </Tab>
      </Tabs>
    </>
  );
}
