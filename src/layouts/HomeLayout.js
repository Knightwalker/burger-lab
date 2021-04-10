import React from "react";

import Navbar from "../components/Navigation/Navbar.js";
import "./HomeLayout.css";

const MainLayout = (props) => {
  
  return (
    <>
      <header>
        <Navbar></Navbar>
        <section className="hero">
       
        </section>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        footer wip
      </footer>
    </>
  );
}

export default MainLayout;