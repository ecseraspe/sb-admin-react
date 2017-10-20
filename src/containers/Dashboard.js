import React, { Component } from 'react';

import SbCard from '../components/SbCard';

class Dashboard extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <SbCard icon="comments"
            cardTitle="26 New Messages!"
            colorType="primary" />
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <SbCard icon="list"
            cardTitle="11 New Tasks!"
            colorType="warning" />
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <SbCard icon="shopping-cart"
            cardTitle="123 New Orders!"
            colorType="success" />
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <SbCard icon="support"
            cardTitle="13 New Tickets!"
            colorType="danger" />
        </div>
      </div>
    )
  }
}

export default Dashboard;