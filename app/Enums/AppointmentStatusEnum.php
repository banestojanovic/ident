<?php

namespace App\Enums;

enum AppointmentStatusEnum: int
{
    case inactive = 0;
    case active = 1;
    case scheduled = 2;
    case finished = 3;
    case cancelled = 4;
}

