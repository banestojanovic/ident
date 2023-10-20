<?php

namespace App\Enums;

enum UserRoleEnum: int
{
    case admin = 1;
    case dentist = 2;
    case assistant = 3;
}
