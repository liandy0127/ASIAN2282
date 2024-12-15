import React from 'react';
import { Link } from 'react-router-dom';
import DohaImage from '../images/doha.webp';       // Replace with your Doha image path
import SingaporeImage from '../images/singapore.webp'; // Replace with your Singapore image path
import KyotoImage from '../images/kyoto.webp';     // Replace with your Kyoto image path
import './Home.css'; // Import custom CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Chronicle of Asian Cities in 2050</h1>
      <p>
        It was a quiet Sunday when a holographic alert hovered in front of me—Daniel Wong calling. I tapped to answer,
        and his familiar voice filled the air.
      </p>
      <p>
        "Andy! Big news!"
      </p>
      <p>
        "Let me guess," I said, smirking. "You finally stopped hopping cities?"
      </p>
      <p>
        "Close!" he laughed. "I’m getting married!"
      </p>
      <p>
        I blinked. "Daniel Wong? The same guy who transferred from Vanderbilt to NUS on a full ride because Vanderbilt’s
        Math Program was ‘too boring’? The global nomad is settling down?"
      </p>
      <p>
        "That’s right. And guess what—the wedding’s in Singapore. Jackie’s coming too."
      </p>
      <p>
        "Jackie?" I grinned. "Looks like the old high school crew is back together. This is huge."
      </p>
      <p>
        "It wouldn’t be the same without you," Daniel said. "You have to be there."
      </p>
      <p>
        After we disconnected, I couldn’t help but smile. Daniel, the same guy who once slept on my dorm floor at Cornell,
        was stepping into a new chapter.
      </p>
      <p>
        I pulled up Trip.com and chuckled. "Oh, Qatar Airways! Hahaha, it’s been a while. Finally, you’re taking me back to Asia again!"
        With a nostalgic grin, I clicked to book the flight.
      </p>
      <div className="explore-section">
        <h2>Explore the Cities:</h2>
        <div className="image-row">

          <div className="city-image">
            <Link to="/doha">
              <img src={DohaImage} alt="Doha in 2050" />
            </Link>
            <h3>Doha</h3>
          </div>

          <div className="city-image">
            <Link to="/singapore">
              <img src={SingaporeImage} alt="Singapore in 2050" />
            </Link>
            <h3>Singapore</h3>
          </div>

          <div className="city-image">
            <Link to="/kyoto">
              <img src={KyotoImage} alt="Kyoto in 2050" />
            </Link>
            <h3>Kyoto</h3>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;