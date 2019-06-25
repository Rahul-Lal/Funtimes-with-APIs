import React from 'react'

import getPeople from '../api'

class App extends React.Component {
  // state = {
  //   people: []
  // }

  // componentDidMount () {
  //   getPeople()
  //     .then(people => {
  //       this.setState({
  //         people: people
  //       })
  //     })
  // }

  handleClick = () => {
    getPeople()
    // const people = this.state.people

    // this.setState({
    //   people
    // })
  }

  render () {
    // const { people } = this.state

    return (
      < React.Fragment >
        <h1>Star Wars characters</h1>
        <button onClick={this.handleClick}>
          Star Wars Characters!!
        </button>
      </React.Fragment >
    )
  }
}

export default App
