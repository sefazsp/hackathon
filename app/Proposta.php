<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proposta extends Model
{
    protected $table = 'tb_proposta';
    protected $primaryKey = 'id';

    public function getDataInicioPropostaAttribute($value)
    {
        return (new \DateTime($value))->format('d-m-Y H:i:s');
    }

    public function getDataFimPropostaAttribute($value)
    {
        return (new \DateTime($value))->format('d-m-Y H:i:s');
    }
    
    public function getObjetoAttribute($value)
    {
        return mb_strtoupper($value);
    }

    public function setObjetoAttribute($value)
    {
        $this->attributes['objeto'] = mb_strtoupper($value);
    }
}
