import React, { Component } from 'react';

export default class OverAllWorldStat extends Component {
    getPercentage(totalCases, valueToCalculate, returnPx) {
        let percentage = Math.ceil((valueToCalculate * 100) / totalCases);
        if (returnPx) {
            return { width: percentage + "%" }
        } else {
            return percentage;
        }
    }

    calculateDailyPercentage(totalCases, todayCases, returnPx) {
        let yesterDayCases = totalCases - todayCases;
        let casePercentage = Math.ceil((todayCases / yesterDayCases) * 100);
        if (returnPx) {
            return { width: casePercentage + "%" }
        } else {
            return casePercentage;
        }
    }

    PopulateView() {
        return (
            <div className="card statustic-card world-stat-cards widget-statstic-card">
                <div className="col-xl-3 col-md-6 col-sm-12 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-pink">Total Cases</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">

                        <div className="text-left">
                            <h3 className="d-inline-block">{this.props.worldTotalCurrentStat.cases}</h3>

                            <span className="f-right bg-c-pink">{this.calculateDailyPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.todayCases)}%</span>
                            <i className="feather icon-arrow-up f-30 text-c-pink"></i>
                            {/* <p className="p-t-10 m-b-0 text-c-pink">55% New Cases Today</p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-pink" style={this.calculateDailyPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.todayCases, true)}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 col-sm-12 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-yellow">Active Cases</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">

                        <div className="text-left">
                            <h3 className="d-inline-block">{this.props.worldTotalCurrentStat.active}</h3>
                            <i className="feather icon-arrow-up f-30 text-c-yellow"></i>
                            <span className="f-right bg-c-yellow">{this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.active)}%
                            </span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-yellow" style={this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.active, true)}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 col-sm-12 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-green">Recovered</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">
                        <div className="text-left">
                            <h3 className="d-inline-block">{this.props.worldTotalCurrentStat.recovered}</h3>
                            <i className="feather icon-arrow-up f-30 text-c-green"></i>
                            <span className="f-right bg-c-green">{this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.recovered)}%</span>
                            {/* <p className="p-t-10 m-b-0 text-c-green">55% New Cases Today</p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-green" style={this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.recovered, true)}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 col-sm-12 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-blue">Deceased</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">
                        {/* <i className="feather icon-sliders st-icon bg-c-blue"></i> */}
                        <div className="text-left">
                            <h3 className="d-inline-block">{this.props.worldTotalCurrentStat.deaths}</h3>
                            <i className="feather icon-arrow-up f-30 text-c-blue"></i>
                            <span className="f-right bg-c-blue">{this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.deaths)}%</span>
                            {/* <p className="p-t-10 m-b-0 text-c-blue">7% </p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-blue" style={this.getPercentage(this.props.worldTotalCurrentStat.cases, this.props.worldTotalCurrentStat.deaths, true)}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                {
                    (this.props.worldTotalCurrentStat) ? this.PopulateView() : ''
                }
            </div>
        )
    }
}