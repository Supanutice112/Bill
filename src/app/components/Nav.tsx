import React from "react";

// Define styles using valid CSS-in-JS syntax
const styles = {
  navbar: {
    textAlign: "center" as const, // Explicitly set as valid CSS value
    padding: "10px",
    backgroundColor: "#f0f0f0",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#333",
    display: "inline-block",
    marginRight: "20px",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
};

const Nav = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>MyApp</div>
        <a href="#home" style={styles.link}>
          Home
        </a>
        <a href="#about" style={styles.link}>
          About
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;