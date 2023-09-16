import { nanoid } from '@reduxjs/toolkit';

// Встроенный инструмент для формирования id
{
    id: nanoid()
}

// Сторонняя библиотека для id
import { v4 as uuidv4 } from 'uuid';

{
    id: uuidv4()
}