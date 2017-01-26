import React, { Component } from 'react';


class Bid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className= "container">
        <div className = "row">
          <div className = "col-xs-12">
            <p>{this.props.title}</p>
            <img src={this.props.img} />
            <p>{this.props.seconds_left}</p>
            <p>{this.props.price}</p>
            <button className="btn btn-warning">Bid Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bid;
