import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand">
              Employee Management App
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
