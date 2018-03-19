import React, { Component } from 'react'
import './navBar.css'

const dummyTabs = [ 'fa-home', 'fa-phone', 'fa-address-book' ]

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      tabselected: 0,
      displayMenu: false
    }
  }

  setSelected(index){
    this.setState({ tabselected: index })
  }

  handleDisplayMenu(){
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  render() {
    return (
      <div className='top-nav-bar-container'>
        <div className='top-nav-bar-burger-menu' onClick={() => this.handleDisplayMenu()}>
          <i className='fa fa-bars'></i>
        </div>
        <div className={`top-nav-tabs-list ${this.state.displayMenu ? 'showMenu' : 'hideMenu'}`}>
        <ul>
          {
            dummyTabs.map((tab, i) => {
              const selected = this.state.tabselected === i ? 'active' : 'desactive'
              return(
                <li key={i} className={`top-nav-tab ${selected}`} onClick={ () => this.setSelected(i) }>
                  <div className={`top-nav-tab-text fa ${tab}`}></div>
                </li>
              )
            })
          }
        </ul>
        </div>
      </div>
    )
  }
}

export default NavBar
