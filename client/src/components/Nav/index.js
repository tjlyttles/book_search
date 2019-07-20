import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "orange",
    padding: "0 20px"
  }
};

function Nav() {
  return (
    <nav
      style={styles.navBar}
      className="navbar navbar-expand-lg navbar-dark bg-primary"
    >
      {}
      <Link to="/books">Saved Book List</Link>
    </nav>
  );
}

export default Nav;
