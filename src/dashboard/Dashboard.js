import React, { Component } from 'react';
import TopCounter from "./TopCounterPanel";
import RecentNews from "./recentNews";
// import LiveTweeterFeedWizerd from "./LiveTweeterFeedWizerd";
import Chart from "./HistoricalStatchart";
import WorldStat from "./overAllWorldStat";

export default class Dashboard extends Component {

    render() {
        return (
            <div className="row">


                <div className="col-xs-12 col-sm-12 col-lg-12">
                    <WorldStat></WorldStat>
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-12">
                    <TopCounter></TopCounter>
                </div>



                {/* <div className="col-xl-9 col-md-12"> */}
                
                {/* </div> */}

                {/* <div className="col-xs-12 col-sm-12 col-lg-12">
                    <div className="card">
                        {* <div class="card-header">
                            <h5>World Wide Covid19 Status</h5>
                        </div> *}
                        <div className="card-block">
                            <div className="grid-layout vertical-alignment">
                                <div className="row align-items-start">
                                    {/* <OverAllWorldStat></OverAllWorldStat> *}
                                    <div className="col col-xl-9 col-md-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="card col-xl-8 col-md-12">
                    <Chart></Chart>
                </div>
                <div className="col-xl-4 col-md-12">
                    <RecentNews></RecentNews>
                </div>
            </div>
        )
    }
}
