import React, { Component } from 'react';
import VisitorLocation from "./Visitor_Location";

export default class TopCounterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            //allCountryList: [],
            indiaList: [],
        };
    }
    componentDidMount() {

    }
    calculateDailyPercentage(totalCases, todayCases) {
        let yesterDayCases = totalCases - todayCases
        let casePercentage = (todayCases / yesterDayCases) * 100
        return Math.ceil(casePercentage)
    }
    render() {
        return (
            <div className="card carousel-wrapper p-t-30">
                <div className="col-xl-4 col-sm-12 carousel-inner-wrapper">
                    {
                        (this.props.allCountryList && this.props.allCountryList.length) ?
                            this.props.allCountryList.map((countryObj, index) => {
                                console.log("index, index")
                                return (

                                    <div className="col-xl-12 col-md-6 col-sm-10" key={index}>
                                        <div className="card">
                                            <div className="card-block p-b-10">
                                                {/* <i class="flag flag-icon-background st-icon flag-icon-INR"></i> */}
                                                <div className="row align-items-start">
                                                    <div className="d-flex col-2 flex-wrap">
                                                        <img src={countryObj.countryInfo.flag} className="title-flag f-28" alt="" />
                                                        <h4><small>{countryObj.countryInfo.iso3}</small></h4>
                                                    </div>
                                                    <div className="col-10">
                                                        <h4 className="text-c-pink d-flex f-w-600">{countryObj.cases}
                                                            <p className="text-danger m-b-0 p-l-20 case-spike-hike">{this.calculateDailyPercentage(countryObj.cases, countryObj.todayCases)}% <i className="feather icon-trending-up text-red f-16"></i></p>
                                                        </h4>

                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-between p-0">

                                                    <h6 className="m-b-0 text-primary">{countryObj.active} Active</h6>

                                                    <span className="divider"></span>
                                                    <h6 className="m-b-0 text-success">{countryObj.recovered} Recovered</h6>

                                                    <span className="divider"></span>
                                                    <h6 className="text-muted">{countryObj.deaths} Deceased</h6>

                                                </div>
                                            </div>
                                            <div className="card-footer bg-c-yellow p-0 top-panel-card-footer">
                                            </div>
                                        </div>
                                    </div >
                                )
                            })
                            : ''

                    }



                </div>
                {
                    (this.props.allCountryList && this.props.allCountryList.length) ?
                        <VisitorLocation allCountryList={this.props.allCountryList}></VisitorLocation> : ''
                }
            </div>

        )
    }

    valincomebuildoption() {
        return {
            maintainAspectRatio: false,
            title: {
                display: false,
            },
            tooltips: {
                enabled: true,
            },
            legend: {
                display: false
            },
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    },
                    barPercentage: 0.2
                }],
                yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        min: 1,
                    }
                }]
            },
            elements: {
                point: {
                    radius: 4,
                    borderWidth: 12
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        };
    }
}