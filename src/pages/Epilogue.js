import React from 'react';
import { Link } from 'react-router-dom';

const Epilogue = () => (
  <div className="city-page">
    <h2 style={{ textAlign: 'center' }}>Epilogue</h2>
    <p>
      As the maglev train pulled away from Kyoto, I watched the city’s skyline fade into the misty mountains. My heart felt heavy, not just because I was leaving this beautiful place, but because it was also time to say goodbye to my great friends.
    </p>
    <p>
      “Take care, Andy,” Daniel had said earlier, clapping me on the back as we stood outside Yumika’s family restaurant. “Let’s not wait another ten years for the next reunion, alright?”
    </p>
    <p>
      Jackie gave me a hug, his usual humor replaced by something softer. “You better send us all the photos, especially the embarrassing ones. And don’t lose that Nishijin fabric; it’s the classiest souvenir you’ll ever own.”
    </p>
    <p>
      Now, sitting alone on the train, I replayed our goodbyes in my head. The half-month journey through Asia had flown by. Doha’s bustling souqs and lush desert greenery felt like a world away. Singapore’s futuristic green cities seemed like they belonged in a sci-fi movie. And Kyoto? Kyoto was like stepping into a dream where tradition and innovation danced together perfectly.
    </p>
    <p>
      As I fingered the small woven fabric from Nishijin, I smiled. “No matter where I go,” I thought, “these memories will always travel with me.” The train hummed, carrying me forward while my heart lingered in the past.
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
      <Link
        to="/references"
        style={{
          textDecoration: 'none',
          backgroundColor: '#808080',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        References
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: '#808080',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        Home
      </Link>
    </div>
  </div>
);

export default Epilogue;
