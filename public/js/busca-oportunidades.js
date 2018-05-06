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
    });
}