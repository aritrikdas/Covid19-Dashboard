import React, { Component } from 'react';
import Truncate from 'react-truncate';
export default class RecentNews extends Component {
    state = {
        counter: 0,
        newsFeedArray: []
    };
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            newsFeedArray: []
        };
        // Don't call this.setState() here!

        //this.handleClick = this.handleClick.bind(this);
        fetch("/api/v1/latest-news").then((res) => res.json()).then((data) => {
            console.log(data);
            if (data.status) {
                // this.state.newsFeedArray = data.articles;
                this.setState({ newsFeedArray: data.articles })
            }
        }).catch(err => {
            console.log(err);
        })

    }



    enerateNweesFeed(newsArr) {
        console.log("newsArr >>>", newsArr);
        const newsFeedDomElem = this.state.newsFeedArray.map((newsObj) =>
            <li key={newsObj.publishedAt}>
                <div className="block">
                    <div className="block_content">
                        <h2 className="title">
                            <a>{newsObj.title}</a>
                        </h2>
                        <div className="byline">
                            <span>13 hours ago</span> by <a> {newsObj.author} </a>
                        </div>
                        <p className="excerpt">
                            Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                        </p>
                    </div>
                </div>
            </li>
        )
        // const numbers = props.numbers;
        // const listItems = numbers.map((number) =>
        //   <li key={number.toString()}>
        //     {number}
        //   </li>
        // );
        return (
            <ul>{newsFeedDomElem}</ul>
        );
    }

    render() {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>Recent News <small>Sessions</small></h2>
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
                    <div className="x_content">
                        <div className="dashboard-widget-content">
                            <ul className="list-unstyled timeline widget">
                                {
                                    this.state.newsFeedArray.map((newsObj, index) => {
                                        return (
                                            <li key={newsObj.publishedAt}>
                                                <div className="block">
                                                    <div className="block_content">
                                                        <h2 className="title">
                                                            <a>{newsObj.title}</a>
                                                        </h2>
                                                        <div className="byline">
                                                            <span>13 hours ago</span> by <a> {newsObj.author} </a>
                                                        </div>
                                                        <p className="excerpt">
                                                            <Truncate lines={2} ellipsis={<span>... <a href={newsObj.url} target="_blank">Read more</a></span>}>
                                                                {newsObj.content}
                                                            </Truncate>

                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            {/* {this.generateNweesFeed()} */}
                            {/* <NumberList numbers={numbers} />
                            <generateNweesFeed newsFeedArray={this.newsFeedArray} />
                            <ul className="list-unstyled timeline widget"> </ul> */}
                            {/* <ul className="list-unstyled timeline widget"> 
                                
                                 <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li> 
                                 <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li> 
                            </ul>*/}
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}