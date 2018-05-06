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
            ->select(DB::raw('nome_vencedor, SUM(valor_total_negociado) as total'))
            ->where([['texto_descricao_item', 'LIKE', "%{$text}%"], ['nome_vencedor', '!=', null]])
            ->groupBy(['nome_vencedor'])
            ->orderBy('total', 'desc')
            ->take(5)
            ->get();

        return response()->json($concorrentes);
    }

    public function competitividade(Request $request)
    {
        $text = $request->get('inputProposta');

        $return1 = DB::table('tb_encerradas')->select(DB::raw('COUNT(1) as count'))->where([['texto_descricao_item', 'LIKE' , "%{$text}%"], ['status', 'LIKE', 'DESERTO']])->first(['COUNT']);
        $return2 = DB::table('tb_encerradas')->select(DB::raw('COUNT(1) as count'))->where([['texto_descricao_item', 'LIKE' , "%{$text}%"], ['status', 'LIKE', '%COM VENCEDOR%']])->first(['COUNT']);

        return response()->json([$return1, $return2]);
    }
}
