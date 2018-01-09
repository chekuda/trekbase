import React, { Component } from 'react'
import './navBar.css'

const dummyTabs = [ 'home', 'hikes', 'contac us' ]

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      tabselected: 0
    }
  }

  setSelected(index){
    this.setState({ tabselected: index })
  }

  render() {
    return (
      <div className='top-nav-bar-container'>
       <ul className="top-nav-tabs-list">
          {
            dummyTabs.map((tab, i) => {
              const selected = this.state.tabselected === i ? 'active' : 'desactive'
              return(
                <li key={i} className={`top-nav-tab ${selected}`} onClick={ () => this.setSelected(i) }>
                  <div className='top-nav-tab-text'>{ tab }</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default NavBar
