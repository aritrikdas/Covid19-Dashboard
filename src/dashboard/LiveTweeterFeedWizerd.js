import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

export default class Dashboard1 extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://127.0.0.1:8080",
            tweetFeed: []
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => {
            console.log("Tweet Data >>>> ", data);
            //this.setState({ response: data })
            let tempArr = this.state.tweetFeed;
            if (tempArr && tempArr.length) {
                tempArr.unshift(data);
                if (tempArr.length > 50) tempArr.pop();
            } else {
                tempArr = data.statuses;
            }
            this.setState({ tweetFeed: tempArr })

        });
    }
    render() {

        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>Top Profiles</h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Settings 1</a>
                                <a className="dropdown-item" href="#">Settings 2</a>
                            </div>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close" /></a>
                        </li>
                    </ul>
                    <div className="clearfix" />
                </div>
                <ul className="list-unstyled top_profiles scroll-view ">
                    {
                        this.state.tweetFeed.map((tweetObj) => {
                            return (
                                <li key={tweetObj.id} className="media event">
                                    <a className="pull-left border-aero profile_thumb tweet-feed" >
                                        {tweetObj.user ? <img src={tweetObj.user.profile_image_url_https} /> : <i className="fa fa-user aero" />}
                                    </a>
                                    <div className="media-body">
                                        <a className="title" href="#">Ms. Mary Jane</a>
                                        <p>{tweetObj.text} </p>
                                        <p> <small>12 Sales Today</small>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    {/* <li className="media event">
                        <a className="pull-left border-aero profile_thumb">
                            {/* <i className="fa fa-user aero" /> 
                        </a>
                        <div className="media-body">
                            <a className="title" href="#">Ms. Mary Jane</a>
                            <p><strong>$2300. </strong> Agent Avarage Sales </p>
                            <p> <small>12 Sales Today</small>
                            </p>
                        </div>
                    </li> */}
                    {/* <li className="media event">
                        <a className="pull-left border-green profile_thumb">
                            <i className="fa fa-user green" />
                        </a>
                        <div className="media-body">
                            <a className="title" href="#">Ms. Mary Jane</a>
                            <p><strong>$2300. </strong> Agent Avarage Sales </p>
                            <p> <small>12 Sales Today</small>
                            </p>
                        </div>
                    </li>
                    <li className="media event">
                        <a className="pull-left border-blue profile_thumb">
                            <i className="fa fa-user blue" />
                        </a>
                        <div className="media-body">
                            <a className="title" href="#">Ms. Mary Jane</a>
                            <p><strong>$2300. </strong> Agent Avarage Sales </p>
                            <p> <small>12 Sales Today</small>
                            </p>
                        </div>
                    </li>
                    <li className="media event">
                        <a className="pull-left border-aero profile_thumb">
                            <i className="fa fa-user aero" />
                        </a>
                        <div className="media-body">
                            <a className="title" href="#">Ms. Mary Jane</a>
                            <p><strong>$2300. </strong> Agent Avarage Sales </p>
                            <p> <small>12 Sales Today</small>
                            </p>
                        </div>
                    </li>
                    <li className="media event"> */}
                    {/* <a className="pull-left border-green profile_thumb">
                            <i className="fa fa-user green" />
                        </a>
                        <div className="media-body">
                            <a className="title" href="#">Ms. Mary Jane</a>
                            <p><strong>$2300. </strong> Agent Avarage Sales </p>
                            <p> <small>12 Sales Today</small>
                            </p>
                        </div>
                    </li> */}
                </ul>
            </div>
        )
    }
}