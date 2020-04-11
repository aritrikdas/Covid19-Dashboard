import React, { Component } from 'react';
// import { VectorMap } from 'react-jvectormap'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class VisitorLocation extends Component {
    constructor(props) {
        super(props);
        console.log("this.props.allCountryList ", this.props.allCountryList);
        //let mapDataObj = []
        let allCountryList = this.props.allCountryList;
        for (let i = 0; i < allCountryList.length; i++) {
            allCountryList[i].id = allCountryList[i].countryInfo.iso2;
            allCountryList[i].name = allCountryList[i].country;
            // allCountryList[i].color = setColorCode(allCountryList[i].active);
            allCountryList[i].value = allCountryList[i].active;

        }

        // function setColorCode(val) {

        //     let colorCode = "";

        //     if (val > 100000) {
        //         colorCode = "#ff0000";
        //     }
        //     if (val > 50000 && val < 99999) {
        //         colorCode = "#ff1919";

        //     }

        //     if (val > 30000 && val < 49999) {
        //         colorCode = "#ff3232";

        //     }

        //     if (val > 10000 && val < 29999) {
        //         colorCode = "#ff4c4c";

        //     }

        //     if (val > 5000 && val < 9999) {
        //         colorCode = "#ff6666";

        //     }

        //     if (val > 1000 && val < 4999) {
        //         colorCode = "#ff7f7f";

        //     }

        //     if (val > 500 && val < 999) {
        //         colorCode = "#ff9999";

        //     }

        //     if (val > 100 && val < 499) {
        //         colorCode = "#ffb2b2";

        //     }

        //     if (val > 1 && val < 99) {
        //         colorCode = "#ffcccc";

        //     }

        //     return colorCode;
        // };

        this.state = {
            mapData: allCountryList
        }
    }

    componentDidMount() {
        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);

        // Create map instance
        let chart = am4core.create("mapdiv", am4maps.MapChart);

        // chart.geodata = am4geodata_usaLow;
        chart.geodata = am4geodata_worldLow;




        // Set projection
        // chart.projection = new am4maps.projections.AlbersUsa();
        chart.projection = new am4maps.projections.Miller();


        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        //Set min/max fill color for each area
        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: chart.colors.getIndex(1).brighten(1),
            max: chart.colors.getIndex(1).brighten(-0.4)
        });

        // Make map load polygon data (state shapes and names) from GeoJSON
        // polygonSeries.useGeodata = true;

        polygonSeries.exclude = ["AQ"];
        polygonSeries.fill = "color";
        polygonSeries.useGeodata = true;
        polygonSeries.nonScalingStroke = true;
        polygonSeries.strokeWidth = 0.5;
        polygonSeries.calculateVisualCenter = true;

        // Set heatmap values for each state
        polygonSeries.data = this.state.mapData;

        // Set up heat legend
        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.valign = "bottom";
        heatLegend.width = am4core.percent(20);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.minValue = 0;
        heatLegend.maxValue = 4000000;

        // Set up custom heat map legend labels using axis ranges
        let minRange = heatLegend.valueAxis.axisRanges.create();
        minRange.value = heatLegend.minValue;
        minRange.label.text = "Little";
        let maxRange = heatLegend.valueAxis.axisRanges.create();
        maxRange.value = heatLegend.maxValue;
        maxRange.label.text = "A lot!";

        // Blank out internal heat legend value axis labels
        heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
            return "";
        });

        // Configure series tooltip
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = `[bold]{name}[/]
        ----
        Cases: {cases}
        Active Cases: {active}
        New Cases: {bicycles}
        Critical: {critical}
        Recovered: {recovered}
        Deseased: {deaths}
        Cases Per Million: {casesPerOneMillion}
        TestsPerOneMillion Per Million: {testsPerOneMillion}`;


        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;

        // Create hover state and set alternative fill color
        // let hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#3c5bdc");
        // let title = chart.titles.create();
        // title.text = "[bold font-size: 20]";
        // title.textAlign = "middle";

        // console.log("chart.colors >> ", chart.colors);

        // // let mapData = [{ "id": "AF", "country": "Afghanistan", "value": 32358260, "color": "#3a8ed5" },
        // // { "id": "AL", "country": "Albania", "value": 3215988, "color": "#8aabb0" }];


        // // Set map definition
        // chart.geodata = am4geodata_worldLow;

        // // Set projection
        // chart.projection = new am4maps.projections.Miller();

        // // Create map polygon series
        // let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        // // polygonSeries.exclude = ["AQ"];
        // // polygonSeries.fill = "color";
        // // polygonSeries.useGeodata = true;
        // // polygonSeries.nonScalingStroke = true;
        // // polygonSeries.strokeWidth = 0.5;
        // // polygonSeries.calculateVisualCenter = true;
        // polygonSeries.heatRules.push({
        //     property: "fill",
        //     target: polygonSeries.mapPolygons.template,
        //     min: chart.colors.getIndex(1).brighten(1),
        //     max: chart.colors.getIndex(1).brighten(-0.3)
        // });
        // polygonSeries.data = this.state.mapData;
        // polygonSeries.useGeodata = true;
        let imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.data = this.state.mapData;
        // // imageSeries.data = mapData;

        imageSeries.dataFields.value = "cases";


        let imageTemplate = imageSeries.mapImages.template;
        imageTemplate.nonScaling = false;

        // var bgColor = new am4core.InterfaceColorSet().getFor("background");

        // let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
        // circle.radius = 3;
        // circle.propertyFields.fill = "color";

        let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle2.radius = 2;
        circle2.propertyFields.fill = "color";
        circle2.events.on("inited", function (event) {
            animateBullet(event.target);
        })


        function animateBullet(circle) {
            let animation = circle.animate([{ property: "scale", from: 1, to: 3 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
            animation.events.on("animationended", function (event) {
                animateBullet(event.target.object);
            })
        }

        // let circle = imageTemplate.createChild(am4core.Circle);
        // circle.fillOpacity = 0.7;
        // circle.propertyFields.fill = "color";
        //circle.tooltipText = "{name}: [bold]{cases}[/]";
        // imageSeries.heatRules.push({
        //     "target": circle2,
        //     "property": "radius",
        //     // "min": 1,
        //     // "max": 3,
        //     // "min": am4core.color("#feb798"),
        //     // "max": am4core.color("#fe9365"),
        //     "dataField": "value"
        // })

        // let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        // circle2.radius = 3;
        // circle2.propertyFields.fill = "color";


        // circle2.events.on("inited", function(event){
        //   animateBullet(event.target);
        // })

        // function animateBullet(circle) {
        //     let animation = circle.animate([{ property: "scale", from: 1, to: 3 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
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

        // this.loadData(chart);
    }


    render() {
        return (
            <div className="col-xl-8 col-sm-12 col-xs-12">
                <div id="mapdiv" style={{ width: "100%", height: "400px" }}></div>
            </div>

        )

    }
}