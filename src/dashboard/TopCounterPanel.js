import React, { Component } from 'react'

export default class TopCounterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('/api/v1/total-data')
            .then(res => res.json())
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
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
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png" className="title-flag" />
                            <span className="count_top d-block"> USA</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">123781</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 3238</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 2229</i> DECEASED</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/it.png" className="title-flag" />
                            <span className="count_top d-block"> Italy</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">92472</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 12384</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 10023</i> DECEASED</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/cn.png" className="title-flag" />
                            <span className="count_top d-block"> Chaina</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">81439</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 75448</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 933000</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/es.png" className="title-flag" />
                            <span className="count_top d-block"> Spain</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">78797</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 14709</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 6528</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/de.png" className="title-flag" />
                            <span className="count_top d-block"> Germany</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">58247</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 8481</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 455</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div><div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count title-content-india">
                    <div className="d-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png" className="title-flag" />
                            <span className="count_top d-block"> India</span>
                        </div>
                        <div className="top-title-counter-wrapper">
                            <span className="count red">2500</span>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                            <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                            <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                        </div>
                    </div>
                </div>


                {/* <div className="d-flex title-rest-world">
                    <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
                        <div className="d-flex">
                            <div>
                                <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/mu.png" className="title-flag" />
                                <span className="count_top d-block"> India</span>
                            </div>
                            <div className="top-title-counter-wrapper">
                                <span className="count red">2500</span>
                                <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                                <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                                <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
                        <div className="d-flex">
                            <div>
                                <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/mu.png" className="title-flag" />
                                <span className="count_top d-block"> India</span>
                            </div>
                            <div className="top-title-counter-wrapper">
                                <span className="count red">2500</span>
                                <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                                <span className="count_bottom d-block green"><i > 90</i> RECOVERED</span>
                                <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                    <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/mu.png" className="title-flag" />
                    <span className="count_top d-block"> India</span>
                    <span className="count red">2500</span>
                    <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc" />4% </i> Today</span>
                    <span className="count_bottom d-block green"><i > 90</i> Recovered</span>
                    <span className="count_bottom d-block pink"><i > 90</i> DECEASED</span>
                </div> */}

            </div>
        )
    }
}