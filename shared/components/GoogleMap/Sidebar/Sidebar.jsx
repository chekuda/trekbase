import React, { Component } from 'react'
import { connect } from 'react-redux'

import { spotSelection, spotHovered } from '../../../redux/reducers/map'

import SpotCard from '../SpotCard'

if (process.browser) {
  require('./Sidebar.css')
}

export class Sidebar extends Component {
  handleSpotSeleted = (id) => {
    const { spotSelection } = this.props

    spotSelection({ spotSelected: id })
  }

  handleSpotHovered = (id) => {
    const { spotHovered } = this.props

    spotHovered({ spotHovered: id })
  }

  render() {
    const { spots = [], fitSpotCardOnMap, sideBarState } = this.props
    const { spotHovered, spotSelected } = sideBarState

    return (
      <div className="sidebar-container">
        {
          spots.map(spot =>
            <SpotCard
              key={spot.id}
              spot={spot}
              spotToRender={true}
              spotSelected={spot.id === spotSelected ? 'selected' : ''}
              isHovered={spot.id === spotHovered ? 'onOver' : '' }
              onSpotClicked={this.handleSpotSeleted}
              onClickClose={this.handleSpotSeleted}
              onOverSpot={this.handleSpotHovered}
              fitSpotCardOnMap={fitSpotCardOnMap}
            />
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  spotSelection: spot => dispatch(spotSelection(spot)),
  spotHovered: spot => dispatch(spotHovered(spot))
})

const mapStateToProps = ({ map }) => ({
  sideBarState: map
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
