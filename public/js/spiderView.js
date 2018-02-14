var myChart;

$(document).ready(() => {
    myChart = Highcharts.chart('chart', {
        chart: {
            polar: true,
            type: 'line'
        },

        credits: {
            enabled: false
        },
    
        title: {
            text: ""
        },
    
        pane: {
            size: '50%'
        },
    
        xAxis: {
            categories: ['tired', 'adventurous', 
                        'hungry', 'hardworking',
                        'wild', 'calm', 
                        'curious', 'engaging', 
                        'educational', 'all-ages'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
    
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Rating',
            data: [43000, 19000, 60000, 35000, 17000, 10000, 12354, 893, 1234, 100],
            pointPlacement: 'on'
        }]
    
    });

    var width = $("#chart").width();
    var height = $("#chart").height();
    console.log(width, height);
    myChart.setSize(width, height);
});

$(window).resize(() => {
    var width = $("#chart").width();
    var height = $("#chart").height();
    console.log(width, height);
    myChart.setSize(width, height);
});

// $(function () { 
//     var 
// });