import Navbar from "../components/Navigation/Navbar.js";

const MainLayout = (props) => {
  return (
    <>
      <header>
        <Navbar></Navbar>
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