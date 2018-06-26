import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

import Carousel from '../../common/Carousel'
import { getMin, getMax } from '../../../utils'

if (process.browser) {
  require('./SpotCard.css')
}

class SpotCard extends Component {
  constructor(props) {
    super(props)

    this.myCard = React.createRef()
    this.transitionHasEnded = this.transitionHasEnded.bind(this)
    this.maxHours = this.props.spot && getMax(this.props.spot.routes.map(({ hours = 0 }) => hours))
    this.minHours = this.props.spot && getMin(this.props.spot.routes.map(({ hours = 0 }) => hours))
  }

  componentDidMount() {
    this.myCard.current.addEventListener('transitionend', this.transitionHasEnded, false)
  }

  componentWillUnmount() {
    this.myCard.current.removeEventListener('transitionend', this.transitionHasEnded, false)
  }

  drawStars(stars = 0) {
    const arrayStars = Array(stars).fill(1)
    return (
      <div className="area stars">
        {stars}
        {
          arrayStars.map((ele, index) => (
          <i key={index} className="fa fa-star" aria-hidden="true"></i>
          ))
        }
      </div>
    )
  }

  noop = () => {}

  onClickPreventBubble = (ev, id) => {
    const { onSpotClicked = this.noop } = this.props

    ev.stopPropagation()
    onSpotClicked(id)
  }

  transitionHasEnded = ({ target }) => {
    const { fitSpotCardOnMap, spotSelected, fitInMap } = this.props

    if (spotSelected === 'selected' && fitInMap) {
      fitSpotCardOnMap(target.getBoundingClientRect())
    }
  }

  render() {
    const {
      spot,
      spotToRender,
      spotSelected = '',
      onClickClose,
      onOverSpot = this.noop,
      isHovered
    } = this.props

    const {
      dificulty = '',
      stars,
      text,
      maxAltitude,
      routes,
      id
    } = spot

    return (
      <Transition
        in={spotToRender}
        timeout={200}
        appear={true}
      >
      {
        status =>
        <div
          ref={this.myCard}
          className={`spotCard ${status} ${spotSelected} ${isHovered}`}
          onClick={ev => this.onClickPreventBubble(ev, id)}
          onMouseOver={() => onOverSpot(id)}
        >
          <div className="close" onClick={() => onClickClose(null)}>
            <i className="fa fa-close"></i>
          </div>
          <div className="slider">
            <Carousel spot={spot}/>
          </div>
          <div className="info">
            <div className="area name">{text}</div>
            <div className="area hight">Max-hight: {maxAltitude}</div>
            <div className="area routes">Routes: {routes.length}</div>
            { this.maxHours && <div className="area maxhours">Max hours: {this.maxHours}</div> }
            { this.minHours && <div className="area minhours">Min hours: {this.minHours}</div>}
            <div className="rates">
              {this.drawStars(stars)}
              <div className='area dificulty'>
                <i className={`fa fa-signal ${dificulty}`}></i>
              </div>
            </div>
          </div>
        </div>
      }
      </ Transition>
    )
  }
}

export default SpotCard
