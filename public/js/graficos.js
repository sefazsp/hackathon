google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

let buttonProposta = $('#buttonProposta');

buttonProposta.addEventListener('click', function() {

    $(document).ready(function() {

        $.ajax({

            type: 'POST',
            url: '/concorrentes',
            data: { '_token': token, 'inputProposta': inputProposta.val()},
            dataType: 'json',
            success: function(data) {

            },
            error: function(data) {

            }
        });
    });
});

function drawChart1() {

    let data1 = new google.visualization.DataTable();
    data1.addColumn('string', 'Topping');
    data1.addColumn('number', 'Slices');
    data1.addRows([
        ['Convite', 103328],
        ['Dispensa de Licitação', 42865],
        ['Pregão Eletrônico', 168807],
    ]);

    let options1 = {'title':'Licitações por Modalidade (2016-Atual)',
        'width':370,
        'height':250};

    let chart1 = new google.visualization.PieChart(document.getElementById('grafico1'));
    chart1.draw(data1, options1);
}

function drawChart2() {

    let data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    let options2 = {'title':'Principais Concorrentes',
        'width':370,
        'height':250};

    let chart2 = new google.visualization.BarChart(document.getElementById('grafico2'));
    chart2.draw(data2, options2);
}

function drawChart3() {

    let data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Topping');
    data3.addColumn('number', 'Slices');
    data3.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    let options3 = {'title':'Principais Concorrentes',
        'width':370,
        'height':250};

    let chart3 = new google.visualization.PieChart(document.getElementById('grafico3'));
    chart3.draw(data3, options3);
}