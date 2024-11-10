import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>
            1. Data Collection: We collect personal information such as name,
            email, address, and order details during account setup and
            transactions. We also gather device and usage data to improve
            platform performance.
          </p>
          <p>
            2. How We Use Your Data: Your information is used to process orders,
            personalize your experience, communicate updates, and ensure
            security.
          </p>
          <p>
            3. Data Sharing: We only share your data with third-party services
            essential to our platform (like payment processing). We may disclose
            information when legally required.
          </p>
          <p>4. add privacy policy</p>
          
        </div>
      </div>
    </Layout>
  );
};
//modify policy

export default Policy