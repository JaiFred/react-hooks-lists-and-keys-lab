import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const makelinksArray = links.map((linkObj) => (
    <a key={linkObj} href={"#" + linkObj}>
      {linkObj}
    </a>
  ))
    
  return <nav>{makelinksArray}</nav>;
}

export default NavBar;
