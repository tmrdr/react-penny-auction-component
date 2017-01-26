import React, { Component } from 'react';

import Bid from './Bid';


class BidList extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };

    setInterval(() => this.performAPIRequest(), 1000)
  }

  performAPIRequest (){
  fetch(`http://pennyauctionserver.herokuapp.com/auctions`)
  .then(response => {
    response.json().then(data => {
      console.log(data);
      this.setState({results: data});
    })
  })
}


  render() {
    return(
      <div>
        <h2>second page</h2>
        {this.getItems()}
      </div>
    );
  }

  getItems() {
    return this.state.results.map(result => {
      return <Bid title={result.title}
                  img={result.img}
                  seconds_left={result.seconds_left}
                  price={result.price}
                  username={result.username} />
    })
  }
}


export default BidList;
