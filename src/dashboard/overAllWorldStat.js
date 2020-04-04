import React, { Component } from 'react';

export default class OverAllWorldStat extends Component {
    pStyle(val) {
        return { width: val + "%" }
    }
    render() {
        return (
            <div className="row card statustic-card world-stat-cards widget-statstic-card">

                <div className="col-xl-3 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-pink">Total Cases</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">

                        <div className="text-left">
                            <h3 className="d-inline-block">1133801</h3>

                            <span className="f-right bg-c-pink">83%</span>
                            <i className="feather icon-arrow-up f-30 text-c-pink"></i>
                            {/* <p className="p-t-10 m-b-0 text-c-pink">55% New Cases Today</p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-pink" style={this.pStyle("83")}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-yellow">Active Cases</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">

                        <div className="text-left">
                            <h3 className="d-inline-block">837398</h3>
                            <i className="feather icon-arrow-up f-30 text-c-yellow"></i>
                            <span className="f-right bg-c-yellow">44%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-yellow" style={this.pStyle("43")}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-green">Recovered</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">
                        <div className="text-left">
                            <h3 className="d-inline-block">236005</h3>
                            <i className="feather icon-arrow-up f-30 text-c-green"></i>
                            <span className="f-right bg-c-green">23%</span>
                            {/* <p className="p-t-10 m-b-0 text-c-green">55% New Cases Today</p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-green" style={this.pStyle("23")}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 m-b-10">
                    <div className="card-header p-t-10 p-b-10">
                        <div className="card-header-left">
                            <p className="p-t-10 m-b-0 text-c-blue">Deceased</p>
                        </div>
                    </div>
                    <div className="card-block p-b-5">
                        {/* <i className="feather icon-sliders st-icon bg-c-blue"></i> */}
                        <div className="text-left">
                            <h3 className="d-inline-block">60398</h3>
                            <i className="feather icon-arrow-up f-30 text-c-blue"></i>
                            <span className="f-right bg-c-blue">7%</span>
                            {/* <p className="p-t-10 m-b-0 text-c-blue">7% </p> */}
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-c-blue" style={this.pStyle("7")}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}