import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>

          <p className="text-justify mt-2">
            Our platform is a unique e-commerce marketplace created specifically
            for the students of Ladies Hall, offering a convenient way to
            discover and purchase locally crafted items. We connect students
            with local artisans and small businesses, showcasing a range of
            handmade products like cakes, jewelry, and other unique
            creations—all within the campus community. Supporting both students
            and artisans, we make local shopping accessible and
            community-driven.
          </p>
        </div>
      </div>
    </Layout>
  );
};
//modify about us section

export default About