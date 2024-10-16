import { Controller, Get, Param,  Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Endpoint:puerta de proyecto
  //acepta peticiones de clientes bajo una url semantica
  // retornar  el (los) datos esperados al cliente 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //segundo endpoint - Estructura 
  // 1. verbo (metodo) Http sobre el cual recibir la peticion
  //metodos como GET, POST, PUT,DELETE 
  //2. fIRMA DEL METODO A EJECUTAR CUANDO SE INVOQUE EL ENDPOINT

  @Get  ("/ficha")
  getFicha(): string {
    return "endpoint de la ficha 2902093";
  }

  //tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param ('id') id:string, 
                @Param ('ciudad') ciudad:string, 
                @Query ('nombre')nombre:string, 
                @Query('edad') edad:number) : Student {
    return new Student(+id,nombre,edad, ciudad);
    
  }






}
