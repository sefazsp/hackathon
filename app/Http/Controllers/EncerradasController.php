<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EncerradasController extends Controller
{
    public function concorrentes(Request $request)
    {
        $text = $request->get('inputProposta');

        $concorrentes = DB::table('tb_encerradas')
            ->select(DB::raw('nome_vencedor, SUM(valor_total_negociado) as total'))
            ->where([['texto_descricao_item', 'LIKE', "%{$text}%"], ['nome_vencedor', '!=', null]])
            ->groupBy(['nome_vencedor'])
            ->orderBy('total', 'desc')
            ->take(5)
            ->get();

        return response()->json($concorrentes);
    }
}
