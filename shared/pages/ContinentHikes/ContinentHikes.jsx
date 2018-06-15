import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ContinentHikes extends Component {
  render () {
    return (
      <div className="continenthikes-page">
        ContentHikePage
      </div>
    )
  }
}

const mapStateToProps = ({ mapReducer }) => ({
  mapState: mapReducer
})

export default connect(
  mapStateToProps
)(ContinentHikes)

