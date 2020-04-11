import React, { Component } from 'react';
import TopCounter from "./TopCounterPanel";
import RecentNews from "./recentNews";
// import LiveTweeterFeedWizerd from "./LiveTweeterFeedWizerd";
import Chart from "./HistoricalStatchart";
import WorldStat from "./overAllWorldStat";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            allCountryList: [],
            indiaList: [],
            worldTotalCurrentStat: {}
        };

        fetch("/api/v1/world-data").then((res) => res.json()).then((data) => {
            //console.log(data);
            if (data.status) {
                data.respObj.sort(function (x, y) {
                    return x.country === 'India' ? -1 : y.country === 'India' ? 1 : 0;
                });
                let worldTotalCurrentStat = {};
                let allCountryOverAllStatList = data.respObj.filter((obj) => {
                    //console.log(obj)
                    if (obj.country !== "World") {
                        return obj;
                    } else {
                        worldTotalCurrentStat = obj;
                        return;
                    }
                })
                this.setState({ allCountryList: allCountryOverAllStatList, worldTotalCurrentStat: worldTotalCurrentStat });
                console.log("worldTotalCurrentStat >>>>>> ", worldTotalCurrentStat);
            }
        }).catch(err => {
            console.log(err);
        })

    }
    render() {
        return (
            <div className="row">


                <div className="col-sm-12">
                    <WorldStat worldTotalCurrentStat={this.state.worldTotalCurrentStat}></WorldStat>
                </div>
                <div className="col-sm-12">
                    <TopCounter allCountryList={this.state.allCountryList}></TopCounter>
                </div>

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
