import React, { Component } from 'react';
// import { VectorMap } from 'react-jvectormap'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class VisitorLocation extends Component {

    componentDidMount() {
        // Themes begin
        // am4core.useTheme(am4themes_material);
        am4core.useTheme(am4themes_animated);

        // Create map instance
        let chart = am4core.create("mapdiv", am4maps.MapChart);
        let title = chart.titles.create();
        title.text = "[bold font-size: 20]";
        title.textAlign = "middle";

        console.log("chart.colors >> ", chart.colors);

        let mapData = [
            { "id": "AF", "name": "Afghanistan", "value": 32358260, "color":"#3a8ed5"},
            { "id": "AL", "name": "Albania", "value": 3215988, "color":"#8aabb0" },
            { "id": "DZ", "name": "Algeria", "value": 35980193, "color": chart.colors.getIndex(2) },
            { "id": "AO", "name": "Angola", "value": 19618432, "color": chart.colors.getIndex(2) },
            { "id": "AR", "name": "Argentina", "value": 40764561, "color": chart.colors.getIndex(3) },]

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.exclude = ["AQ"];
        polygonSeries.useGeodata = true;
        polygonSeries.nonScalingStroke = true;
        polygonSeries.strokeWidth = 0.5;
        polygonSeries.calculateVisualCenter = true;

        let imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.data = mapData;
        imageSeries.dataFields.value = "value";


        let imageTemplate = imageSeries.mapImages.template;
        imageTemplate.nonScaling = true

        var bgColor = new am4core.InterfaceColorSet().getFor("background");

        let circle = imageTemplate.createChild(am4core.Circle);
        circle.fillOpacity = 0.7;
        circle.propertyFields.fill = "color";
        circle.tooltipText = "{name}: [bold]{value}[/]";
        imageSeries.heatRules.push({
            "target": circle,
            "property": "radius",
            "min": 3,
            "max": 30,
            "dataField": "value",
            "bgColor": bgColor
        })

        let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle2.radius = 3;
        circle2.propertyFields.fill = "color";
        
        
        // circle2.events.on("inited", function(event){
        //   animateBullet(event.target);
        // })

        // function animateBullet(circle) {
        //     let animation = circle.animate([{ property: "scale", from: 1, to: 15 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        //     animation.events.on("animationended", function (event) {
        //         animateBullet(event.target.object);
        //     })
        // }

        imageTemplate.adapter.add("latitude", function (latitude, target) {
            let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
            if (polygon) {
                return polygon.visualLatitude;
            }
            return latitude;
        })

        imageTemplate.adapter.add("longitude", function (longitude, target) {
            let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
            if (polygon) {
                return polygon.visualLongitude;
            }
            return longitude;
        })

    }


    render() {
        return (
            <div className="col-xl-9 col-sm-12 col-xs-12">
                <div id="mapdiv" style={{ width: "100%", height: "400px" }}></div>
            </div>

        )

    }
}