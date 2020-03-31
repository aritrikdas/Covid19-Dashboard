import React, { Component } from 'react'
import { VectorMap } from 'react-jvectormap'
export default class VisitorLocation extends Component {
    render() {
        return (
            <div className="col-sm-12">

                <div className="card">
                    <div className="card-header">
                        <h5>Basic Map With Markers</h5>

                    </div>
                    <div className="card-block">
                        {/* <div id="world-map-markers" className="set-map"></div> */}
                        <VectorMap map={'world_mill'}
                            backgroundColor="#E6F2F0"
                            setBackgroundColor="#EC407A"
                            ref="map"
                            containerStyle={{
                                width: '100%',
                                height: '400px',
                                scale: ['#E6F2F0', '#149B7E']

                            }}
                            containerClassName="map"
                            
                        />
                    </div>
                </div>

            </div>

        )

    }
}