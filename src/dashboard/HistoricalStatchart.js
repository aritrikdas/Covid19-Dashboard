import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
// import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            worldHistory: []
        };
    }
    componentDidMount() {
        am4core.useTheme(am4themes_material);
        am4core.useTheme(am4themes_animated);
        //chart.paddingRight = 20;

        let chart = am4core.create("chartdiv", am4charts.XYChart);

        // chart.colors.step = 15;

        chart.dataSource.url = "/api/v1/historical/chartdata/world";

        let interfaceColors = new am4core.InterfaceColorSet();

        //chart.data = data;
        //console.log("chart Data >>>>>>> ", data);
        // the following line makes value axes to be arranged vertically.
        chart.leftAxesContainer.layout = "vertical";

        // uncomment this line if you want to change order of axes
        //chart.bottomAxesContainer.reverseOrder = true;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.ticks.template.length = 8;
        dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.ticks.template.disabled = false;
        dateAxis.renderer.ticks.template.strokeOpacity = 0.2;

        // these two lines makes the axis to be initially zoomed-in
        //dateAxis.start = 0.7;
        //dateAxis.keepSelection = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.zIndex = 1;
        valueAxis.renderer.baseGrid.disabled = true;

        // Set up axis
        valueAxis.renderer.inside = true;
        valueAxis.height = am4core.percent(60);
        valueAxis.renderer.labels.template.verticalCenter = "bottom";
        valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
        //valueAxis.renderer.maxLabelPosition = 0.95;
        valueAxis.renderer.fontSize = "0.8em"

        // uncomment these lines to fill plot area of this axis with some color
        valueAxis.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
        valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;


        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "case";
        series.tooltipText = "{valueY.value}";
        series.name = "Total Cases";
        series.stroke = am4core.color("red");

        let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.tooltip.disabled = true;

        // this makes gap between panels
        valueAxis2.marginTop = 30;
        valueAxis2.renderer.baseGrid.disabled = true;
        valueAxis2.renderer.inside = true;
        valueAxis2.height = am4core.percent(40);
        valueAxis2.zIndex = 3;
        valueAxis2.renderer.labels.template.verticalCenter = "bottom";
        valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
        //valueAxis2.renderer.maxLabelPosition = 0.95;
        valueAxis2.renderer.fontSize = "0.8em"

        // uncomment these lines to fill plot area of this axis with some color
        valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
        valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.columns.template.width = am4core.percent(50);
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "deaths";
        series2.yAxis = valueAxis2;
        series2.tooltipText = "{valueY.value}";
        series2.name = "Total Deaths";
        series2.stroke = am4core.color("orange");


        let series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.columns.template.width = am4core.percent(50);
        series3.dataFields.dateX = "date";
        series3.dataFields.valueY = "recovered";
        series3.yAxis = valueAxis;
        series3.tooltipText = "{valueY.value}";
        series3.name = "Total Recovered";
        series3.stroke = am4core.color("green");


        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        scrollbarX.marginBottom = 20;
        chart.scrollbarX = scrollbarX;

    }

    // prepareAxisAndSeries(chart, field, type) {
    //     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //     if (chart.yAxes.indexOf(valueAxis) != 0) {
    //         valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
    //     }

    //     valueAxis.tooltip.disabled = false;
    //     valueAxis.renderer.width = 0.1;

    //     let series = chart.series.push(new am4charts[type]());

    //     series.dataFields.dateX = "date";
    //     series.dataFields.valueY = field;
    //     series.tooltipText = "{valueY.value}";

    //     if (type === 'LineSeries') {
    //         /////code to show dots in chart
    //         var interfaceColors = new am4core.InterfaceColorSet();
    //         var bullet = series.bullets.push(new am4charts.CircleBullet());
    //         bullet.circle.stroke = interfaceColors.getFor("background");
    //         bullet.circle.strokeWidth = 2;

    //         valueAxis.renderer.line.colors = ["#feb798", "#fe9365"];
    //     } else {
    //         valueAxis.renderer.line.colors = ["#f7cccc", "#820303"];
    //     }



    //     valueAxis.renderer.line.strokeOpacity = 1;
    //     valueAxis.renderer.line.strokeWidth = 2;
    //     valueAxis.renderer.line.stroke = series.stroke;
    //     valueAxis.renderer.labels.template.fill = series.stroke;
    //     valueAxis.renderer.opposite = false;
    //     /////

    //     let scrollbarX = new am4charts.XYChartScrollbar();
    //     scrollbarX.series.push(series);
    //     chart.scrollbarX = scrollbarX;
    // }

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