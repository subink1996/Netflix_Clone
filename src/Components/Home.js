import React from "react";
import "./Home.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
></link>;
const Home = () => {
  return (
    <div>
      <div className="section">
        <div
          className="my-navbar"
          style={{
            position: "absolute",
            top: "0",
            left: "-6px",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div>
            <img
              style={{ width: "19vw" }}
              src="./Logo/Netflix..png"
              alt="Netflix Logo"
            />
          </div>

          <div className="center-login">
            <div className="language-switcher">
              <select
                className="border-0 bg-transparent"
                style={{ color: "white" }}
              >
                <option
                  lang="en"
                  value="/in/"
                  data-language="en"
                  data-country="IN"
                >
                  English
                </option>
                <option
                  lang="hi"
                  value="/in-hi/"
                  data-language="hi"
                  data-country="IN"
                >
                  हिन्दी
                </option>
              </select>
            </div>
            <a href="/login" className="sign-in-btn">
              Sign In
            </a>
          </div>
        </div>
        <div className="test">
          <div className="center">
            <h1 style={{ fontSize: "50px" }} className="mb-0">
              Unlimited movies, TV
            </h1>
            <h1 style={{ fontSize: "50px" }} className="mb-0">
              shows and more.
            </h1>
            <h2 style={{ fontSize: "50px" }} className="mb-0">
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
          <div
            method="GET"
            style={{
              paddingTop: "0.85rem",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                maxWidth: "none",
                paddingBottom: "20px",
                fontSize: "1.2rem",
                padding: "0 5%",
                margin: "0 auto",
              }}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>
          <div className="input-class">
            <input
              type="email"
              placeholder="Email address"
              className="email-field"
            />
            <button className="get-started-btn">
              Get Started &nbsp; &rsaquo;
            </button>
          </div>
        </div>

        <div
          className="bg-wallpaper"
          style={{
            filter: "brightness(0.9)",
            background: `url('${process.env.PUBLIC_URL}/netflix-bg.jpg')`,
          }}
        ></div>
        <div className="bg-shadow"></div>
      </div>
    </div>
  );
};

export default Home;
