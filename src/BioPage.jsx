import { useState } from 'react';

import './BioPage.css';

function ToggleableEmail({email}) {
  const [shown, setShown] = useState(false);

  return <div id="email" onClick={() => setShown(!shown)}>{shown ? `${email} (click again to hide)` : "Show my email"}</div>
}

export default function BioPage() {
  return (
    <>
    <div id="bio-header">
      <div id="centered-content" style={{"textAlign": "center"}}>
        <h1>Nate Flanagan</h1>
        <img src="/headshot.png"/>
        <ToggleableEmail email="flanagnb@mail.uc.edu"/>
      </div>
    </div>
    <div id="education">
      <h2>Education</h2>
      <ul id="education-list" className="bio-list">
        <li>Bachelor of Science in Computer Science from Northern Kentucky University, graduated 2022.</li>
        <li>Currently studying for a Master&apos;s of Science in Computer Science from the University of Cincinnati. You can see a description of some of the work for my current class <a href="/waph.html">here</a></li>
      </ul>
    </div>
    <div id="professional-certificates">
      <h2>Professional Certificates</h2>
      <ul id="certs-list" className="bio-list">
        <li>Salesforce Certified Administrator: 11/2021 - Present</li>
        <li>Salesforce Certified App Builder: 6/2022 - Present</li>
      </ul>
    </div>
    <div id="skills">
      <h2>Skills</h2>
      <ul id="skills-list" className="bio-list">
        <li>Python and backend Django</li>
        <li>Java</li>
        <li>C++</li>
        <li>Git</li>
        <li>Basic SQL</li>
      </ul>
    </div>
    <div id="work-experience">
      <h2>Work Experience</h2>
      <dl id="work-experience-list" className="bio-list">
        <dt>Salesforce Support, Fidelity Investments through Strada Education Network: 8/2020 - 12/2022</dt>
        <dd>
          <ul>
            <li>Changed system configuration and custom frontend components thorugh an agile release process.</li>
            <li>Investigated code and declarative automation tools to write initial bug analyses for developer squads</li>
            <li>Created and updated standard Salesforce reports and provided other reporting workarounds when needed</li>
            <li>Updated users&apos; access after verifying propriety</li>
            <li>Ensured data integrity and loaded records into the system with spreadsheets</li>
            <li>Updated locked fields after determining whether it was appropriate</li>
            <li>Answered questions from users</li>
          </ul>
        </dd>
      </dl>
    </div>
    </>
  );
}
