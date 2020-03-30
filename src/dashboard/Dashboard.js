import React, { Component } from 'react';
import VisitorLocation from "./Visitor_Location";
import TopCounter from "./TopCounterPanel";
import RecentNews from "./recentNews";
import LiveTweeterFeedWizerd from "./LiveTweeterFeedWizerd";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="right_col" role="main">
                    {/* top tiles */}
                    <TopCounter></TopCounter>
                    {/* /top tiles */}


                    <div className="row">
                        <div className="col-md-4 col-sm-12 ">
                            <LiveTweeterFeedWizerd></LiveTweeterFeedWizerd>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <VisitorLocation></VisitorLocation>
                        </div>
                    </div>
                    <div className="row">
                        <RecentNews></RecentNews>
                    </div>
                </div>
            </div>
        )
    }
}
