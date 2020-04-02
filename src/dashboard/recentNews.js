import React, { Component } from 'react';
import Truncate from 'react-truncate';
export default class RecentNews extends Component {

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

    constructDate(dateToConvert) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let date = new Date(dateToConvert);

        return `${days[date.getDay()]} ${days[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`
    }


    render() {
        return (

            <div className="card user-activity-card">
                <div className="card-header">
                    <h5>Recent News</h5>
                </div>
                <div className="card-block">
                    {
                        this.state.newsFeedArray.map((newsObj, index) => {
                            return (
                                <div className="row m-b-25" key={newsObj.publishedAt + index}>
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={newsObj.urlToImage} alt="user image" className="img-radius cover-img" />

                                        </div>
                                    </div>
                                    <div className="col">
                                        <h6 className="m-b-5">{newsObj.title}</h6>
                                        <p className="text-muted m-b-0">
                                            <Truncate lines={2} ellipsis={<span>... <a href={newsObj.url} target="_blank">Read more</a></span>}>
                                                {newsObj.content}
                                            </Truncate>

                                        </p>
                                        <p className="text-muted m-b-0"><i className="feather icon-clock m-r-10"></i>{this.constructDate(newsObj.publishedAt)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    }
}