import React from "react";
import styled from "styled-components";
const Style = styled.section`
  .nav-bar {
    background-color: #f95959;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 3.5rem;
    color: #fffff9;
    padding: 1rem 0 1rem 0rem;
    height: min-content;
    width: min-content;
  }
`;

const Navbar = () => {
  return (
    <Style>
      <nav className="nav-bar">
        <h1 className="title">Randomon</h1>
      </nav>
    </Style>
  );
};

export default Navbar;
