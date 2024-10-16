import { Controller, Get } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootcamps(): string{
        return "aqui se mostraran todos los bootcamps"
    }
}
