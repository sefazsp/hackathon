@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <div id="grafico1" class="card-body">
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <div id="grafico2" class="card-body">
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card" style="height: 293px;">
                <div class="card-body text-center">
                    <h5 class="card-title">Indice de competitividade</h5>
                    <div id="grafico3" class="card-body text-center">

                    </div>
                </div>

            </div>
        </div>
    </div>

    <hr>

    <div class="input-group mb-3">
        <div class="input-group-prepend" style="background-color: white">
            <button id="buttonProposta" name="buttonProposta" class="btn btn-outline-secondary" type="button" onclick="buscaOportunidades()">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <input id="inputProposta" name="inputProposta" type="text" class="form-control" placeholder="Buscar oportunidades..." aria-label="" aria-describedby="basic-addon1">
    </div>

    <div id="divProposta"></div>

</div>
@endsection