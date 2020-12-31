import React, { Component } from 'react'
import TrafficLogRow from './TrafficLogRow'

class TrafficLogGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logs: [],
            apiUrl: "http://localhost:8080/"
        }
        this.getRows = this.getRows.bind(this)
    }


    componentDidMount = () => {
        this.getRows()
    }

    getRows = () => {
        fetch(this.state.apiUrl + "api/trafficlogger/",
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => this.setState({ logs: data }))
            .catch(error => console.log("ERROR: " + error))
    }

    deleteRow = (rowId) => {
        fetch(this.state.apiUrl + "api/trafficlogger/" + rowId,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.text())
            .then(res => {
                this.getRows()
                console.log(res)
            })
    }

    render = () => {
        let logs = this.state.logs
        return (
            <ul>
                {logs.map((log) => {
                    return (
                        <TrafficLogRow deleteRow={this.deleteRow} rowId={log.id} rowName={log.name} rowDay={log.day} />
                    )
                })}
            </ul>
        )
    }
}


export default TrafficLogGrid