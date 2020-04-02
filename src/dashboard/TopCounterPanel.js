import React, { Component } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Line, Bar } from 'react-chartjs-2';

const cData = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: false,
            //backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#fff',
            borderWidth: 2,
            data: [65, 65, 91, 9, 29, 33, 69, 6, 98]
        }
    ]
}

// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 1401 },
//         items: 5,
//     },
//     desktop: {
//         breakpoint: { max: 1400, min: 1024 },
//         items: 3,
//     },
// }

export default class TopCounterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            allCountryList: [],
            indiaList: [],
        };
    }
    componentDidMount() {
        fetch("/api/v1/world-data").then((res) => res.json()).then((data) => {
            //console.log(data);
            if (data.status) {
                this.setState({ allCountryList: data.respObj });
                //this.updateChart();
            }
        }).catch(err => {
            console.log(err);
        })
    }
    calculateDailyPercentage(totalCases, todayCases) {
        let yesterDayCases = totalCases - todayCases
        let casePercentage = (todayCases / yesterDayCases) * 100
        return Math.ceil(casePercentage)
    }
    render() {
        return (
            <div className="d-flex col-xl-12 carousel-wrapper">
                {
                    this.state.allCountryList.map((countryObj, index) => {
                        console.log("index, index")
                        return (
                            <div className="col-xl-3 col-md-6" key={index}>
                                <div className="card">
                                    <div className="card-block">
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
                }
                {/* </Carousel> */}
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