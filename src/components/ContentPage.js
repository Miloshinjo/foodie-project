import React from 'react'
import { connect } from 'react-redux'
// import { startGetSomethingAction } from '../actions/something' // import of the async action that will call our real action

class ContentPage extends React.Component {

  componentDidMount() {
    // Good place for API calls
  }

  render () {
    return (
      <div> Some JSX</div>
    )
  }
}


// MAPPTING THE STATE TO this.props.something
const mapStateToProps = (state) => {
  return {
    something: state.something
  }
}

// MAPPTING THE DISPATCH CALL TO this.props.something
const mapDispatchToProps = (dispatch) => ({
    startGetFightersAction: () => dispatch(startGetFightersAction())
})


// CONNECTING THE COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)
