import React, { Component } from 'react'
import './App.css'

class TrafficLogGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logs: buildDummyData(),
      apiUrl: "http://localhost:8080/"
    }
  }

  componentDidMount = () => {
    fetch(this.state.apiUrl + "tlogs",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log("DATA: " + data))
      .catch(error => console.log("ERROR: " + error))
  }

  renderRow = (rowId) => {
    return <TrafficLogRow
      rowId={rowId}
      rowName={this.state.logs[rowId]["name"]}
      rowDay={this.state.logs[rowId]["day"]}
    />
  }

  render = () => {
    return (
      <div>
        {this.renderRow(0)}
        {this.renderRow(1)}
      </div>
    )
  }
}

const TrafficLogRow = (props) =>
  <div>
    {props.rowId} {props.rowName} {props.rowDay}
  </div>

const buildDummyData = () => {
  return ([
    { id: 0, name: "Blob", day: "Monday" },
    { id: 1, name: "Jerk", day: "Tuesday" }
  ])
}

const App = () => {
  return (
    <TrafficLogGrid />
  )
}

export default App
