import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import Transition from 'react-transition-group/Transition'
import { connect } from 'react-redux'

import Spot from '../../components/GoogleMap/Spot'
import Sidebar from '../../components/GoogleMap/Sidebar'
import SpotList from '../../../server/dummySpots'
import { getOffset } from '../../utils'
import { spotSelection, setMapView } from '../../redux/reducers/map'

if (process.browser) {
  require('./ContinentHikes.css')
}

const getMin = arr => Math.min(...arr)
const getMax = arr => Math.max(...arr)


export class ContinentHikes extends Component {
  constructor(props) {
    super(props)

    this.continentSelected = this.props.mapState.continentSelected
    this.allSpots = SpotList()[this.continentSelected] || []
    this.state = {
      spotsToRender: this.allSpots,
      cachedSpotSelected: null
    }
    this.mapContainer = React.createRef()
    this.myMap = React.createRef()
    this.mySpot = React.createRef()
  }

  setFirstViewMap(spots, size) {
    const lat = spots.map(ele => ele.lat)
    const lng = spots.map(ele => ele.lng)

    const bounds = {
      nw: {
        lat: getMax(lat),
        lng: getMin(lng)
      },
      se: {
        lat: getMin(lat),
        lng: getMax(lng)
      }
    }

    return fitBounds(bounds, size)
  }

  componentDidMount() {
    if (this.allSpots.length === 0) return

    const { setMapView } = this.props

    const size = {
      width: this.mapContainer.current.offsetWidth,
      height: this.mapContainer.current.offsetHeight
    }
    const { zoom, center } = this.setFirstViewMap(this.state.spotsToRender, size)

    setMapView({ center, zoom })
  }

  setSpotsToRender = ({ bounds }) => {
    const newSpotsToRender = this.allSpots
      .filter(ele =>
        ele.lat < bounds.ne.lat &&
        ele.lat > bounds.se.lat &&
        ele.lng > bounds.nw.lng &&
        ele.lng < bounds.se.lng
      )

    this.setState({
      spotsToRender: newSpotsToRender
    })
  }

  fitSpotCardOnMap = ({ top, right, left }) => {
    const { setMapView, mapState } = this.props
    let nCenter = ''
    const mapRightDistance = this.myMap.current.boundingRect_.right
    const mapLeftDistance = this.myMap.current.boundingRect_.left

    if (mapState.spotSelected !== this.state.cachedSpotSelected) {
      const newRight = mapRightDistance - right
      const offsetHeight = top <= 20 ? top - 20 : 0
      const offSetRight = newRight <= 20 ? newRight - 20 : 0
      const offSetLeft = left <= 20 ? (left * -1) + mapLeftDistance + 20 : 0

      if (offsetHeight || offSetLeft || offSetRight) {
        const offSetWidth = offSetRight < 0 ? offSetRight : offSetLeft
        const nCenterCoors = getOffset(this.myMap.current.map_, offSetWidth, offsetHeight)
        nCenter = {
          lat: nCenterCoors.lat(),
          lng: nCenterCoors.lng()
        }
      }


      setMapView({
        center: nCenter
      })

      this.setState({
        cachedSpotSelected: mapState.spotSelected
      })
    }
  }

  render() {
    const { center, zoom } = this.props.mapState

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-sm-8 googlemap-container" ref={this.mapContainer}>
          <GoogleMap
            defaultCenter={center}
            defaultZoom={zoom}
            center={center}
            onChange={this.setSpotsToRender}
            ref={this.myMap}
          >
          {
            this.allSpots.map(spot => (
              <Transition
                key={spot.id}
                lat={spot.lat}
                lng={spot.lng}
                in={this.state.spotsToRender.includes(spot)}
                timeout={300}
                appear={true}
              >
                {
                  status => (
                    <Spot
                      status={status}
                      spot={spot}
                      fitSpotCardOnMap={this.fitSpotCardOnMap}
                    />
                  )
                }
              </ Transition>
              )
            )
          }
          </GoogleMap>
          </div>
          <div className="col-xs-12 col-sm-4">
            <Sidebar
              title='Hikes'
              spots={this.state.spotsToRender}
              fitSpotCardOnMap={this.fitSpotCardOnMap}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  spotSelection: spot => dispatch(spotSelection(spot)),
  setMapView: data => dispatch(setMapView(data))
})

const mapStateToProps = ({ map }) => ({
  mapState: map
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinentHikes)
