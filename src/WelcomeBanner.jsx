import Alert from 'react-bootstrap/Alert';
import Cookies from 'universal-cookie';
import { useState } from 'react';

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(true);
  const LAST_VISIT_DATE = "lastVisitDate";

  if (visible) {
    const cookies = new Cookies(document.cookie, {"path": "/"});

    let lastVisited = cookies.get(LAST_VISIT_DATE);
    let today = new Date();
    let cookieExpirationYear = new Date();
    cookieExpirationYear.setFullYear(today.getFullYear() + 1)

    let welcomeText = "";
    if (!lastVisited) {
      welcomeText = "Welcome to my homepage!";
    } else {
      welcomeText = "Welcome back! Your last visit was " + lastVisited;
    }

    cookies.set(LAST_VISIT_DATE, today.toUTCString(), {"expires": cookieExpirationYear});

    return <Alert variant="primary" dismissible onClose={() => setVisible(false)}>{welcomeText}</Alert>;
  }
  return <></>
}
