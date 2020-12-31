import {Component} from 'react'

class TrafficLogRow extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <li>
              {this.props.rowName} {this.props.rowDay} 
              <button
                rowId={this.props.rowId}
                onClick={() => this.props.deleteRow(this.props.rowId)}>
                  Delete
                </button> 
            </li>
        )
    }
}

// const TrafficLogRow = (props) =>
// <li>
//   {props.rowId} {props.rowName} {props.rowDay} <Button />
// </li>

export default TrafficLogRow