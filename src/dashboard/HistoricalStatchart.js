import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";


export default class chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            worldHistory: []
        };
    }
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        am4core.useTheme(am4themes_material);
        //chart.paddingRight = 20;
        chart.colors.step = 15;

        chart.dataSource.url = "/api/v1/historical/chartdata/world";
        chart.dataSource.reloadFrequency = 3000000;
        console.log("chart.data", chart.data);
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        this.prepareAxisAndSeries(chart, 'case', 'LineSeries');
        this.prepareAxisAndSeries(chart, 'deaths', 'LineSeries');
        this.prepareAxisAndSeries(chart, 'recovered', 'LineSeries');

        chart.cursor = new am4charts.XYCursor();
        this.chart = chart;
    }

    prepareAxisAndSeries(chart, field, type) {
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        if (chart.yAxes.indexOf(valueAxis) != 0) {
            valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
        }

        valueAxis.tooltip.disabled = false;
        valueAxis.renderer.width = 0.1;

        let series = chart.series.push(new am4charts[type]());

        series.dataFields.dateX = "date";
        series.dataFields.valueY = field;
        series.tooltipText = "{valueY.value}";

        if (type === 'LineSeries') {
            /////code to show dots in chart
            var interfaceColors = new am4core.InterfaceColorSet();
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;

            valueAxis.renderer.line.colors = ["#feb798" , "#fe9365"];
        } else {
            valueAxis.renderer.line.colors = ["#f7cccc" , "#820303"];
        }

        

        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.opposite = false;
        /////

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render() {
        return (
            <div className="">
                    <div id="chartdiv" style={{ width: "100%", height: "450px" }}></div>
            </div>
        )
    }
}