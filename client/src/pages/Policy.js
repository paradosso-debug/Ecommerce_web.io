import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5 text-center">
          <p>
            Age Verification Policy: As a wine store, we are committed to
            responsible consumption of alcohol.{" "}
          </p>
          <p>
            Return Policy:We want our customers to be completely satisfied with
            their wine purchase.
          </p>
          <p>
            Shipping Policy:We offer shipping services for our wine products.{" "}
          </p>
          <p>
            Privacy Policy:We take your privacy seriously and will not share
            your personal information with any third party without your consent.
          </p>
          <p>Product Availability Policy.</p>
          <p>
            Sales and Promotions Policy:From time to time, we may offer sales
            and promotions on select wine products.
          </p>
          <p>
            Terms of Use Policy:By using our ecommerce app, you agree to our
            terms of use.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
