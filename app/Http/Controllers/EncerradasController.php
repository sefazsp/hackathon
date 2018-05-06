<?php

namespace App\Http\Controllers;

use App\Encerradas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EncerradasController extends Controller
{
    public function concorrentes(Request $request)
    {
        $text = $request->get('inputProposta');

        $concorrentes = DB::table('tb_encerradas')
            ->select('nome_vencedor, SUM(valor_total_negociado) as total')
            ->whereRaw('texto_descricao_item LIKE %?% and nome_vencedor IS NOT null', [$text])
            ->groupBy(['nome_vencedor'])
            ->orderBy('total', 'desc')
            ->get();

        return response()->json($concorrentes);
    }
}
