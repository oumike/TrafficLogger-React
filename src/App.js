import React, { Component } from 'react'
import './App.css'

class TrafficLogGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logs: buildDummyData()
    }
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

class TrafficLogRow extends Component {
  render = () => {
    return (
      <div>
        {this.props.rowId} {this.props.rowName} {this.props.rowDay}
      </div>
    )
  }
}

const buildDummyData = () => {
  return ([
    {id: 0, name: "Blob", day: "Monday"},
    {id: 1, name: "Jerk", day: "Tuesday"}
  ])
}

const App = () => {
  return (
    <TrafficLogGrid />
  )
}

export default App
