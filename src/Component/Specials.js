import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

function Specials() {
  useEffect(() => {
    toast.success(
      'Refer a friend, get 20% off your next meal (and your friend gets 10% off their first meal)',
      {
        position: "top-right",
        autoClose: 4000,
      }
    );
  }, []);

  return (
    <div className="specials-container">
      <div className="specials-image">
        <img
          src="/imagees/The grill menu card.jpg"
          alt="The Grill Menu Card"
        />
      </div>

      <div className="specials-video">
        <video
          src="/imagees/Sunday Ice creame offers.mp4"
          autoPlay         // Video automatically page load hone par bina user ke click kare chalne lagta hai.
          muted            // Video ka sound start me band (mute) hota hai, matlab bina awaaz ke chalta hai
          loop             // Jab video khatam ho jata hai, to wo automatic fir se start ho jata hai, continuous repeat hota hai.
          controls         //User ko play/pause/volume controls de
        />
      </div>
    </div>
  );
}

export default Specials;