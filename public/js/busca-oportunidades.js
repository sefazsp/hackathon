google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

function buscaOportunidades() {

    let divProposta = $('#divProposta');
    let inputProposta = $('#inputProposta');
    let buttonProposta = $('#buttonProposta');
    let token = $('meta[name="csrf-token"]').attr('content');

    $(document).ready(function() {

        $.ajax({

            type: 'POST',
            url: '/home',
            data: { '_token': token, 'inputProposta': inputProposta.val()},
            dataType: 'json',
            success: function(data) {

                divProposta.html('');

                if (data.length > 0) {

                    let table = '<table class="table table-bordered table-sm text-center" style="background-color: white"><thead><tr><th>Ordem de Compra</th><th>Objeto</th><th>Início de Propostas</th><th>Fim de Propostas</th></tr></thead><tbody>';
                    data.forEach(function(oportunidade) {
                        table += '<tr>';
                        table += '<td>' + oportunidade.oc + '</td>';
                        table += '<td>' + oportunidade.objeto + '</td>';
                        table += '<td>' + oportunidade.data_inicio_proposta + '</td>';
                        table += '<td>' + oportunidade.data_fim_proposta + '</td>';
                        table += '</tr>';
                    });
                    table += '</tbody></table>';

                    divProposta.append(table);

                } else {

                    divProposta.html('');
                    divProposta.append('<div class="alert alert-warning alert-dismissible fade show" role="alert"> Busca não retornou nenhum resultado. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

                }

                inputProposta.val('').focus();
            },
            error: function(data) {

                console.log(data);
                divProposta.html('');
                divProposta.append('<div class="alert alert-danger alert-dismissible fade show" role="alert"> Ocorreu um erro ao buscar a oportunidade. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

            }
        });

        $.ajax({

            type: 'POST',
            url: '/concorrentes',
            data: { '_token': token, 'inputProposta': inputProposta.val()},
            dataType: 'json',
            success: function(data) {

                let concorrentes = [];
                data.forEach(function(concorrente) {
                    concorrentes.push([concorrente.nome_vencedor, parseFloat(concorrente.total)]);
                });

                drawChart2(concorrentes);
            },
            error: function(data) {
                console.log(data.responseText);
            }
        });
    });
}

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

function drawChart2(rows = [['Busque uma oportunidade', 0]]) {

    let data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows(rows);

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