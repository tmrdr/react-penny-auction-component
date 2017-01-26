import React, { Component } from 'react';

import Bid from './Bid';


class BidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title: '$10 Shell Gift Card', img: '/img/$10 Shell Gift Card.jpg', time: '5 seconds left', price:'$100'},
        {title: '$50 Walmart Gift Card', img: '/img/$50 Walmart Gift Card.jpg', time: '5 seconds left', price:'$100'},
        {title: '15 Voucher Bids', img: '/img/15 Voucher Bids.jpg', time: '5 seconds left', price:'$100'},
        {title: '250 Voucher Bids', img: '/img/250 Voucher Bids.jpg', time: '5 seconds left', price:'$100'},
        {title: '50 Voucher Bids', img: '/img/50 Voucher Bids.jpg', time: '5 seconds left', price:'$100'},
        {title: 'Canon Pixma MG Series Wireless Printer', img: '/img/Canon Pixma MG Series Wireless Printer.jpg', time: '5 seconds left', price:'$100'},
        {title: 'Cuisinart Convection Bread Maker', img: '/img/Cuisinart Convection Bread Maker.jpg', time: '5 seconds left', price:'$100'},
        {title: 'Discrete "Hide a Key" Sprinkler Head', img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg', time: '5 seconds left', price:'$100'},
        {title: 'Ultra-Soft 1800 Series Sheet Set', img: '/img/Ultra-Soft 1800 Series Sheet Set.jpg', time: '5 seconds left', price:'$100'},
        {title: 'iPad Pro 9.7" 32GB WifFi', img: '/img/iPad Pro 9.7" 32GB WifFi.jpg', time: '5 seconds left', price:'$100'}
      ]
    };
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
    return this.state.items.map(item => {
      return <Bid title={item.title}
                  img={item.img}
                  time={item.time}
                  price={item.price} />
    })
  }
}


export default BidList;
