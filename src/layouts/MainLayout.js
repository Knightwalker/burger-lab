import React from "react";
import Navbar from "../components/Navigation/Navbar.js";
import "./HeroPanel.css";

const MainLayout = (props) => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <div className="hero">
          s
        </div>
      </header>
      <main>
        {props.children}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-item1">
            <h5 className="text-uppercase">Forum Software</h5>

            <p>
              This Forum is a free ReactJS powered flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website.
            </p>
          </div>

          <div className="footer-item2">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Overview</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Technology</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Github</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Docs</a>
              </li>
            </ul>
          </div>

          <div className="footer-item3">
            <h5 className="text-uppercase mb-0">About</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Team</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Community</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Support</a>
              </li>
              <li>
                <a href="https://github.com/Knightwalker/forum-fe" className="text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">Made with &hearts; by Knightwalker</div>
      </footer>

    </>
  );
}

export default MainLayout;