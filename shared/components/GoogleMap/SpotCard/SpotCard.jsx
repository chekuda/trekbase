import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import classNames from 'classnames'

import Carousel from '../../common/Carousel'
import SpotInfo from '../../common/SpotInfo'
import { getMin, getMax } from '../../../utils/math'

if (process.browser) {
  require('./SpotCard.scss')
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
          className={classNames('spotCard', status, spotSelected, isHovered)}
          onClick={ev => this.onClickPreventBubble(ev, id)}
          onMouseOver={() => onOverSpot(id)}
        >
          <div className='close' onClick={onClickClose}>
            <i className='fa fa-close'></i>
          </div>
          <div className='slider'>
            <Carousel spot={spot}/>
          </div>
          <div className='info'>
            <SpotInfo text={text} customClasses='font-20'/>
            { maxAltitude && <SpotInfo text={maxAltitude} description='Max-hight:'/> }
            { routes.length && <SpotInfo text={routes.length} description='Routes:'/> }
            { this.maxHours !== 0 && <SpotInfo text={this.maxHours} description='Max hours:'/> }
            { this.minHours !== 0 && <SpotInfo text={this.minHours} description='Min hours:'/> }
            <div className='rates'>
              { stars && <SpotInfo text={stars} customClasses='stars' totalIcons={stars} iconClass={'fa fa-star'}/> }
              { dificulty && <SpotInfo totalIcons={1} customClasses='font-20' iconClass={['fa', 'fa-signal', dificulty]}/> }
            </div>
          </div>
        </div>
      }
      </ Transition>
    )
  }
}

export default SpotCard
