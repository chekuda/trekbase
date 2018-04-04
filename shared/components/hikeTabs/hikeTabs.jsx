import React, { Component } from 'react'

if (process.browser) require('./hikeTabs.css')

const dummyTabs = [   'overview','route' ]

class Tabs extends Component {
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
      <div className='tabs-container'>
        <ul className="nav-tabs-list">
          {
            dummyTabs.map((tab, i) => {
              const selected = this.state.tabselected === i ? 'active' : 'desactive'
              return(
                <li key={i} className={`nav-tab ${selected}`} onClick={ () => this.setSelected(i) }>
                  <div className='nav-tab-text'>{ tab }</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Tabs