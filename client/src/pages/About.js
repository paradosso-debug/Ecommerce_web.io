import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Arana Aroma"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.png"
            alt="About us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-2">
          Welcome to Arcana Aroma, where we make shopping for wine easy, accessible and enjoyable. <br/> Our company was founded with a passion for wine and a desire to share our knowledge and expertise with wine lovers everywhere.<br/> We understand that choosing a bottle of wine can be overwhelming, which is why our team of wine experts is always on hand to offer guidance and recommendations.<br/> Whether you are a seasoned connoisseur or a beginner, we are here to help you discover new and exciting wines to add to your collection.       </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;