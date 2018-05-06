<?php

namespace App\Http\Controllers;

use App\Proposta;
use Illuminate\Http\Request;

class PropostaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show(Request $request)
    {
        $text = $request->get('inputProposta');

        $proposta = Proposta::where('objeto', 'LIKE' , "%{$text}%")->groupBy('oc')->get();

        return response()->json($proposta);
    }
}
