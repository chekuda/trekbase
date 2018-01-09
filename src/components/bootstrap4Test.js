import React, { Component } from 'react'
import './bootstrap4Test.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: ['Home', 'Blog', 'About']
    }
  }
  render() {
    return(
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top fixedToTop`} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">BOOTSTEAP TEST</a>
          <div className="navbarResponsive" id="navbarResponsive">
            <ul className="navbar-nav ">
              {
                this.state.items.map((item, index) => {
                return(
                  <li className="nav-item" key={item}>
                    <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default App