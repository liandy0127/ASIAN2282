import React from 'react';
import doha1 from '../images/doha1.webp';
import doha2 from '../images/doha2.webp';
import doha3 from '../images/doha3.webp';
import doha4 from '../images/doha4.webp';
import doha5 from '../images/doha5.webp';
import doha6 from '../images/doha6.webp';
import doha7 from '../images/doha7.webp';
import doha8 from '../images/doha8.webp';
import doha9 from '../images/doha9.webp';
import './Home.css'; // Ensure CSS file is imported
import { Link } from 'react-router-dom';
import Kyoto from './Kyoto'; // Update the path based on your file structure

const Doha = () => (
  <div className="city-page">
    <h2 style={{ textAlign: 'center' }}> DOHA</h2>
    <h3 style={{ textAlign: 'center' }}> One Thousand and One Nights</h3>
    <p>
      After a 13-hour flight with Qatar Airways, I disembarked at Hamad International Airport.
      The sleek, futuristic hovercraft awaited me outside, ready to ferry travelers into the heart of Doha. As we glided toward Souq Waqif, a soothing AI voice filled the cabin: "You are arriving at Souq Waqif, one of Qatar’s most cherished heritage sites. Revitalized in 2008, this market blends historic charm with cutting-edge sustainability practices. Experience a living testament to Qatar’s cultural roots and its commitment to the future."
    </p>
    <p>
      The hovercraft docked, and I stepped into a scene that felt like stepping into another century. Narrow alleys, flanked by mud-brick walls, stretched before me. The roofs, made from traditional dangeal wood and bamboo, were covered with clay and straw, naturally insulating the buildings against the desert heat. Every element seemed to echo the craftsmanship of the past, yet modernity subtly intertwined with the surroundings. Traditional lanterns glowed warmly, their light joined by discreetly placed energy-efficient LEDs. Above, holographic signs projected market maps and stories about Souq Waqif’s evolution [1][3].
    </p>
    <img src={doha1} alt="Doha Airport" style={{ float: 'left', margin: '0px 15px 15px 0px', maxWidth: '37%' }} />
    <p>
      I walked past bustling stalls, my senses overwhelmed by the aroma of spices, the sound of bargaining vendors, and the vibrant mix of visitors. It was an intersection of history and technology—a place where the past whispered through every brick, yet the future thrived just as vibrantly.
    </p>
    <p>
      Near a jewelry stall, I noticed an elderly goldsmith carefully crafting an ornate necklace. A humanoid assistant stood beside him, precisely handing over tools as he worked. Intrigued, I approached. "This is incredible," I said, pointing to the delicate filigree patterns. "Is this all handmade?"
    </p>
    <p>
      The goldsmith chuckled, setting his tools aside. "The design begins in my hands, but modern tools bring it to life," he said, gesturing to the robot assistant. "This piece, for example, was partially crafted using AI-assisted 3D printing. It allows us to create details that would take months by hand."
    </p>
    <p>
      "Doesn’t that take away from the tradition?" I asked, curious about his perspective.
    </p>
    <p>
      "Not at all," he replied with a smile. "Technology enhances tradition. It doesn’t replace it. Without these tools, younger generations might not see this craft as sustainable or practical. With them, we keep the art alive and evolving."
    </p>
    <p><img src={doha2} alt="Souq Waqif" style={{ float: 'right', margin: '0px 0px 15px 15px', maxWidth: '37%' }} />

      I left with newfound admiration for the balance Souq Waqif had achieved. A little further down, I was drawn to a bustling spice stall by the scent of saffron and oud. The vendor greeted me warmly, offering a sample. "This saffron is from Iran’s highlands—pure and potent," he said. Then, pointing to a nearby machine, he added, "Would you like to create your own custom perfume? The AI system can mix a scent tailored just for you."
    </p>
    <p>
      Intrigued, I selected a few keywords: "spicy," "woody," and "fresh." The machine whirred to life, and a small vial emerged moments later. I inhaled deeply, and the blend seemed to capture the essence of the market itself. The vendor beamed. "We bring technology to tradition, so every visitor leaves with a personal memory of Souq Waqif."
    </p>
    <p>
      As the day waned, a whistling sound caught my attention. I turned to see a falconer demonstrating his craft. His falcon soared gracefully above the crowd, drawing awe-struck gasps. Beside him, children played with a robotic falcon under the guidance of an AI instructor, learning traditional falconry techniques in a virtual setting.
    </p>
    <img src={doha3} alt="Falcon Hospital" style={{ float: 'left', margin: '0px 15px 15px 0px', maxWidth: '37%' }} />
    <p>
      I approached the falconer, curious. "With robots teaching the craft, do you worry about the tradition being lost?" I asked.
    </p>
    <p>
      He shook his head. "Robots are tools, not replacements," he said firmly. "They help us train and preserve the tradition, but the bond between a falcon and its handler—that’s irreplaceable."
    </p>
    <p>
      Inspired, I decided to visit the nearby Falcon Hospital, a state-of-the-art facility. Inside, massive displays showed real-time health metrics for every falcon under their care, from heart rates to feather conditions. A veterinarian demonstrated how AI helped predict illnesses before symptoms appeared. "This is how we ensure the tradition of falconry thrives in modern Qatar," she explained. "By merging care with technology, we honor both the birds and the heritage they represent."
    </p>
    <p>
      As night fell, Souq Waqif came alive in a new way. Arabian lanterns and energy-efficient lights illuminated the alleys, casting a magical glow. In the central square, a performance was underway. Actors moved gracefully across a stage, their choreography enhanced by augmented reality projections that depicted Doha’s transformation from a small fishing village to a modern metropolis.
    </p>
    <p>
      I stood captivated, watching history and innovation dance together. The AI voice from the hovercraft echoed in my memory: "A living testament to Qatar’s past and future." It was a fitting description.
    </p>
    <h3 style={{ textAlign: 'center' }}>The City of al-Amal</h3>
    <p>
      As my hovercraft descended onto the glistening shores of Doha’s West Bay, the skyline seemed alive, shimmering like a golden mirage against the fiery sunset. Unlike the earthy nostalgia of Souq Waqif, West Bay radiated modernity—a glass-and-steel metropolis built to defy the sweltering heat and push the boundaries of urban living.
    </p>
    <p>
      The temperature outside was still searing, but stepping into the city was like crossing a boundary into another dimension. A cool breeze greeted me as I entered the climate-controlled pedestrian boulevard, a feat made possible by the city’s advanced cooling towers. These towers, inspired by Qatar's traditional wind catchers, used solar-powered mechanisms to funnel cold air through the streets while venting out hot air, creating an oasis-like atmosphere [4].
    </p>
    <img src={doha4} alt="Doha Airport" style={{ float: 'right', margin: '0px 0px 15px 15px', maxWidth: '37%' }} />
    <p>
      “Feels like magic, doesn’t it?” said Yasmin, a local sustainability officer who offered to guide me through the district. “It’s not just cooling; every structure here integrates smart energy systems to ensure minimal carbon emissions. The towers you see? They’re based on the zero-carbon cooling system piloted during the 2022 FIFA World Cup. We learned a lot from those stadiums.”
    </p>
    <p>
      Walking with her, I marveled at how seamlessly Doha’s architects had fused cutting-edge innovation with cultural identity [2][3]. The streets were shaded by floating panels that adjusted their positions to block the harshest rays of the sun, and the buildings’ facades glittered with photovoltaic glass, harvesting solar energy.
    </p>
    <p>
      Our conversation drifted to the role of sustainability in transforming the city. Yasmin explained, “West Bay was once just a business hub. Today, it’s a prototype for future urban planning—a space where technology doesn’t overshadow humanity but complements it.”
    </p>
    <p>
      We stopped at "ElDore’s Fusion," a renowned restaurant that symbolized Doha’s cultural melting pot. Inside, aromas of Middle Eastern spices mingled with hints of African flavors. Mwale, the Kenyan head chef, was in the open kitchen, a bionic arm assisting him in plating dishes with precision. The table before me soon filled with small plates: lamb ribs infused with coffee and cardamom, a deconstructed tabbouleh foam, and a dessert of mango spheres wrapped in saffron jelly. Each dish was an artistic representation of fusion cuisine, blending techniques and flavors from two continents.
    </p>
    <p>
      Mwale approached with a warm smile. “So, what do you think?” he asked, gesturing to the dishes.
    </p>
    <p>
      “Incredible,” I replied. “The lamb ribs—how do you get such a unique flavor?”
    </p>
    <img src={doha5} alt="Doha Airport" style={{ float: 'left', margin: '0px 15px 15px 0px', maxWidth: '37%' }} />
    <p>
      He laughed. “That’s our molecular marinade technique. We use controlled vacuum environments to infuse the flavors deeply. Coffee is from Ethiopia; the cardamom is local. It’s a meeting of cultures on one plate.”
    </p>
    <p>
      As we talked, Mwale shared his journey. “I came to Doha ten years ago, from Eldoret. Back home, people think of athletes—they train at high altitudes, in thin air. I think of it as learning endurance. When I came here, I applied that mindset to my work. I started as a dishwasher, but the owners saw potential in me. They gave me a chance, encouraged me to create dishes that connected my Kenyan roots with Qatari flavors.”
    </p>
    <p>
      “Doha seems like the perfect place for that kind of innovation,” I said. “How do you feel about the city as a cultural melting pot?”
    </p>
    <p>
      Mwale nodded. “It’s not perfect. There’s still a lot to learn about truly embracing diversity. But it’s getting there. This restaurant? It’s proof that different worlds can come together and create something extraordinary.” [5]
    </p>
    <p>
      From the restaurant, we moved to the Global Religious Symbiosis Center, a pristine white dome in the heart of the bay. Inside, an augmented reality exhibit awaited. “Welcome to our future,” said Nadia, a cultural exchange officer, as she handed me a sleek VR helmet. “This center was built to celebrate diversity and demonstrate how technology can bridge spiritual divides.”
    </p>
    <img src={doha6} alt="Doha Airport" style={{ float: 'right', margin: '0px 0px 15px 15px', maxWidth: '37%' }} />
    <p>
      Through the VR headset, I found myself in a serene desert landscape. An imam recited verses from the Quran, a Buddhist monk meditated under a Bodhi tree, and a Hindu priest lit a ceremonial fire—all sharing the same space in perfect harmony. The project wasn’t just about coexistence; it was a testament to Qatar’s commitment to inclusivity [6].
    </p>
    <p>
      “In 2030, when this project was launched, there was skepticism,” Nadia explained. “But we proved that technology can be a tool for connection, not separation. Every faith deserves its space, even in the digital age.”
    </p>
    <p>
      That evening, I stood at the water’s edge, watching the skyline shimmer against the mirrored bay. Yasmin joined me, her expression reflective. “This city,” she said softly, “isn’t perfect. But look at what it’s becoming—a melting pot of ideas, cultures, and dreams. That’s the Doha I hope people see.”
    </p>
    <h3 style={{ textAlign: 'center' }}>The Desert of Lives</h3>
    <p>
      I stepped into the desert and the scene in front of me made me feel like I was in another world. Decades ago, the desert was a barren wasteland, but now it is dotted with life. In the distance, the neem trees and desert shrubs swayed in the wind, their roots deeply embedded in the sand dunes, firmly grasping the quicksand. These vegetation not only give the desert a gentle vitality, but also attract many long-lost creatures to return here. My purpose is clear - to explore the changes behind these changes and listen to the voices hidden deep in the desert[7].
    </p>
    <p>
      Beside a small oasis, I met 55-year-old Rahul. He is an Indian laborer who came to Qatar 30 years ago to build the 2022 World Cup stadium and is now a participant in the local tree planting program. He stood next to a neem tree, trimming the dead branches, and the calluses on his hands were as clear as the traces left by the years.
    </p>
    <p>
      "These trees are the new hope of our desert." He stopped the scissors in his hand and wiped the sweat from his forehead with the back of his hand. In the sun, his eyes looked particularly firm.
    </p>
    <img src={doha7} alt="Doha Airport" style={{ float: 'left', margin: '0px 15px 15px 0px', maxWidth: '37%' }} />
    <p>
      "Hope?" I followed his gaze towards a forest in the distance and asked curiously.
    </p>
    <p>
      "In the past, we only saw death in the desert," Rahul whispered, his tone full of tiredness and deep memories. "Around 2022, I worked day and night with thousands of workers to build those huge stadiums. Many of us died in this sand. They said it was because of the heat, but the real reason was that no one cared about our fate."
    </p>
    <p>
      I looked at him silently. The sun was dazzling, but it couldn't dispel the heavy memories in this land. He took me to a new monument with hundreds of names engraved on it. He stretched out his rough hand and gently stroked the inscription.
    </p>
    <p>
      "These names were added later," he murmured. "More people didn't even leave their names. We didn't just sacrifice to build stadiums, but to prove the value of our existence. However, even with this monument, I still don't have an ID card and am still a 'shadow'."
    </p>
    <p>
      "Why are you still here?" I couldn't help asking.
    </p>
    <p>
      He pondered for a moment and said lightly: "Because of these trees. What I planted with my own hands is not a tree, but a continuation of life. If I leave, everything here will disappear. I have no home, but this desert may be my home." [8]
    </p>
    <p>
      After saying goodbye to Rahul, I continued to move forward. Between the sand dunes, I saw a group of camels walking freely, their steps were steady, and their figures blended with the golden waves of the desert. This scene seemed to be dusted from time. The local herder Mahdi was feeding the camels with his children. When he saw me, he enthusiastically invited me to sit down and share a cup of Arabic coffee.
    </p>
    <img src={doha8} alt="Doha Airport" style={{ float: 'right', margin: '0px 0px 15px 15px', maxWidth: '37%' }} />
    <p>
      "These camels are healthier than before," he said, with pride on his face. "They used to be the masters of the desert, but around 2022, in order to build those stadiums, our land was occupied, the vegetation was destroyed, and the camels had to migrate to farther places. In those years, their number decreased sharply." [7]
    </p>
    <p>
      "Then how did they come back?" I asked.
    </p>
    <p>
      "In 2030, the government started a desert ecological restoration plan to replant local shrubs and trees and set up a camel protection area. Now, they finally have a place to settle down." He said, patting a camel beside him gently. "Camels are our family. Without them, our lives are incomplete."
    </p>
    <p>
      Beside him, Mahdi's little daughter was feeding camels dates with her little hands. She looked up and said to me: "I want to be an environmental scientist and plant more trees so that camels can have a bigger home."
    </p>
    <p>
      Looking at her innocent smile, I seemed to see hope for the future-a scarred desert is being quietly repaired by those silent efforts.
    </p>
    <img src={doha9} alt="Doha Airport" style={{ float: 'left', margin: '0px 15px 15px 0px', maxWidth: '37%' }} />
    <p>
      When night falls, I stand alone on the sand dunes, and the low sound of the wind and sand is in my ears. The starry sky in the desert is vast, and everything under my feet seems so small. I watched the shadows of the newly planted trees swaying in the wind, thinking of Rahul's rough hands and his hope with pain.
    </p>
    <p>
      This desert carries too many stories. It is where those workers lost their lives, and it is also where new life takes root. Rahul and his co-workers may still have no identity, but their efforts have long been deeply engraved on this land, just like the trees in the desert, closely linking memory and the future.
    </p>
    <p>
      I pray silently that the roots of these trees can grow deeper, the footsteps of camels can go further, and the names of those nameless people will be remembered one day. This ancient desert is healing the scars of the past with new life, and it is still whispering in the sand and wind, telling stories that have never been forgotten.
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
        to="/singapore"
        style={{
          textDecoration: 'none',
          backgroundColor: '#808080',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        Continue
      </Link>
    </div>
  </div>
);

export default Doha;
