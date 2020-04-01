import React, { Component } from 'react';
import VisitorLocation from "./Visitor_Location";
import TopCounter from "./TopCounterPanel";
import RecentNews from "./recentNews";
import LiveTweeterFeedWizerd from "./LiveTweeterFeedWizerd";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <TopCounter></TopCounter>
                <div className="col-xl-4 col-md-12">
                    <RecentNews></RecentNews>
                    
                </div>
                <div className="col-xl-8 col-md-12">
                    <VisitorLocation></VisitorLocation>
                </div>

            </div>
        )
    }
}
