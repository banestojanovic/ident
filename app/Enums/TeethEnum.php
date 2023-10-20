<?php

namespace App\Enums;

enum TeethEnum: string
{
    case T_11 = '11';
    case T_12 = '12';
    case T_13 = '13';
    case T_14 = '14';
    case T_15 = '15';
    case T_16 = '16';
    case T_17 = '17';
    case T_18 = '18';
    case T_21 = '21';
    case T_22 = '22';
    case T_23 = '23';
    case T_24 = '24';
    case T_25 = '25';
    case T_26 = '26';
    case T_27 = '27';
    case T_28 = '28';
    case T_31 = '31';
    case T_32 = '32';
    case T_33 = '33';
    case T_34 = '34';
    case T_35 = '35';
    case T_36 = '36';
    case T_37 = '37';
    case T_38 = '38';
    case T_41 = '41';
    case T_42 = '42';
    case T_43 = '43';
    case T_44 = '44';
    case T_45 = '45';
    case T_46 = '46';
    case T_47 = '47';
    case T_48 = '48';

    public static function toArray(): array
    {
        $array = [];
        foreach (self::cases() as $case) {
            $array[$case->value] = str_replace('T_', 'Zub ', $case->name);
        }

        return $array;
    }
}
