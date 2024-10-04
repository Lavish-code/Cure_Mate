import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            CureMate is transforming healthcare access by connecting patients with
             specialists and making it easy to book appointments from home. Our 
             growing network includes doctors across various fields, from general
              practitioners to cardiologists, ensuring accessible care for everyone.
          </p>
          <p>
            In 2024, we expanded to offer phone consultations, bringing expert 
            medical advice to patients wherever they are. Our mission is to provide 
            a seamless experience, whether online or over the phone, making quality 
            healthcare more accessible for all.
          </p>
          <p>
            Welcome to CureMate—where healthcare meets innovation.
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
