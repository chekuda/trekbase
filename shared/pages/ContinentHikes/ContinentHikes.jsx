import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ContinentHikes extends Component {
  render() {
    return (
      <div className="continenthikes-page">
        ContentHikePage {this.props.name}
      </div>
    )
  }
}

const mapStateToProps = ({ map }) => ({
  mapState: map
})

export default connect(
  mapStateToProps
)(ContinentHikes)

