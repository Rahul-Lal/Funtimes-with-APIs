import React from 'react'

import getPeople from '../api'

class App extends React.Component {
  state = {
    people: []
  }

  handleClick = () => {
    getPeople()
      .then(
        people => {
          this.setState({ people: people })
          // console.log(people)
        }
      )
  }

  render () {
    console.log(this.state.people[0])

    return (
      < React.Fragment >
        <h1>Star Wars characters</h1>
        <button onClick={this.handleClick}>
          Star Wars Characters!!
        </button>
        <p>
          {/* {this.state.people[0]} */}
        </p>
      </React.Fragment >
    )
  }
}

export default App
