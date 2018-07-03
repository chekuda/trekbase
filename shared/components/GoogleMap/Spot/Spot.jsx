import React, { Component } from 'react'
import { connect } from 'react-redux'

import { spotSelection, spotHovered } from '../../../redux/reducers/map'

import SpotCard from '../SpotCard'
import SpotLabel from '../SpotLabel'

if (process.browser) {
  require('./Spot.scss')
}

export class Spot extends Component {
  constructor(props) {
    super(props)

    this.mySpotCard = React.createRef()
  }

  handleSpotSeleted = (id) => {
    const { spotSelection } = this.props

    spotSelection({ spotSelected: id })
  }

  handleSpotHovered = (id) => {
    const { spotHovered } = this.props

    spotHovered({ spotHovered: id })
  }

  render() {
    const {
      spot,
      status,
      fitSpotCardOnMap,
      spotState
    } = this.props

    const { spotSelected, spotHovered } = spotState

    return (
      <div className="spot-container"
        onClick={() => this.handleSpotSeleted(spot.id)}
      >
        <SpotCard
          ref={this.mySpotCard}
          spot={spot}
          spotToRender={spotSelected === spot.id }
          spotSelected={spot.id === spotSelected ? 'selected' : ''}
          fitInMap={true}
          isHovered={false}
          fitSpotCardOnMap={fitSpotCardOnMap}
          onClickClose={this.handleSpotSeleted}
        />
        <SpotLabel
          spot={spot}
          spotHovered={spotHovered}
          onOverSpot={this.handleSpotHovered}
          status={status}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  spotSelection: spot => dispatch(spotSelection(spot)),
  spotHovered: spot => dispatch(spotHovered(spot))
})

const mapStateToProps = ({ map }) => ({
  spotState: map
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spot)
