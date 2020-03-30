import React, { Component } from 'react'

export default class TopCounterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            allCountryList: [],
            indiaList: []
        };
    }
    componentDidMount() {
        fetch("/api/v1/world-data").then((res) => res.json()).then((data) => {
            //console.log(data);
            if (data.status) {
                this.setState({ allCountryList: data.respObj })
            }
        }).catch(err => {
            console.log(err);
        })

        fetch("/api/v1/india-data").then((res) => res.json()).then((data) => {
            //console.log(data);
            if (data.status) {
                this.setState({ indiaList: data.respObj.statewise[0] })
            }
        }).catch(err => {
            console.log(err);
        })
    }
    calculateDailyPercentage(totalCases, todayCases){
          //console.log(totalCases + " "+ todayCases)
          let yesterDayCases = totalCases-todayCases
          let casePercentage = (todayCases/yesterDayCases)*100
          return Math.ceil(casePercentage)
    }
    render() {
        return (
            <div className="row tile_count title-rest-world">
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">{this.state.indiaList.confirmed} </span>
                            <span className="count_bottom d-block green"><i > {this.state.indiaList.recovered}</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > {this.state.indiaList.deaths}</i> DECEASED</span>
                        </div>
                    </div>
                </div>

                {this.state.allCountryList.map((countryObj) => {
                    return (
                        <div className="tile_stats_count title-content-world">
                            <div className="d-flex">
                                <div>
                                    <img src={countryObj.countryInfo.flag} className="title-flag"/>
                                    <span className="count_top d-block">{countryObj.country}</span>
                                </div>
                                <div className="top-title-counter-wrapper">
                                    <span className="count red">{countryObj.cases}</span>
                                    <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />{this.calculateDailyPercentage(countryObj.cases, countryObj.todayCases)}% </i></span>
                                    <span className="count_bottom d-block green"><i > {countryObj.recovered}</i> RECOVERED</span>
                                    <span className="count_bottom d-block pink"><i > {countryObj.deaths}</i> DECEASED</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div >
        )
    }
}