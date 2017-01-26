import React, { Component } from 'react';

import Bid from './Bid';


class BidList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
<div>
  <h2>second page</h2>
  <Bid />

</div>
    );
  }
}


export default BidList;
