import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="kendo-header">
          <article className="grid">
            <figure className="grid__left">
              <h1>KendoUI</h1>
            </figure>
            <div className="grid__right">
              <p>1 Billion Served...</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Header;