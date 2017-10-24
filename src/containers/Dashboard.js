import React, { Component } from 'react';

import ContainerCard from '../components/ContainerCard';
import SbCard from '../components/SbCard';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import SocialFeed from '../components/SocialFeed';

class Dashboard extends Component {

  render() {
    return (
      <div>
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
        <ContainerCard size={3}
          headerText="Area Chart Example"
          icon="area-chart"
          footerText="Updated yesterday at 11:59 PM">
          <AreaChart />
        </ContainerCard>

        <div className="row">
          <div className="col-lg-8">
            <ContainerCard size={3}
              headerText="Bar Chart Example"
              icon="bar-chart"
              footerText="Updated yesterday at 11:59 PM">
              <BarChart />
            </ContainerCard>
            <div className="mb-0 mt-4">
              <i className="fa fa-newspaper-o"></i> News Feed
            </div>
            <hr className="mt-2" />
            <SocialFeed />
          </div>
          <div className="col-lg-4">
            <ContainerCard size={3}
              headerText="Pie Chart Example"
              icon="pie-chart"
              footerText="Updated yesterday at 11:59 PM">
              <PieChart />
            </ContainerCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;