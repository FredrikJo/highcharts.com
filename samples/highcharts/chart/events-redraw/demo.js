$(function () {
    // create the chart
    $('#container').highcharts({
        chart: {
            events: {
                redraw: function() {
                    alert ('The chart was just redrawn');
                }
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });


    // activate the button
    $('#button').click(function() {
        var chart = $('#container').highcharts();
        chart.addSeries({
            data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
        });

        $('#button').unbind('click');
    });
});