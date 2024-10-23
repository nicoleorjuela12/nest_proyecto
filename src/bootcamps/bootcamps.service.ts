import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';


@Injectable()
export class BootcampsService {
  findOneBy(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }

  //obtener una instancia del repositorio
  //como atributo d la clase service 

  constructor(
    @InjectRepository(Bootcamp) private  bootcampRepository: Repository<Bootcamp>,
  ) {}


  create(createBootcampDto: CreateBootcampDto) {
    return 'This action adds a new bootcamp';
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOneById (id: number) {
    return this.bootcampRepository.findOneBy({id});
  }



  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return `This action updates a #${id} bootcamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
function Param(arg0: string): (target: BootcampsService, propertyKey: "findOneById", parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

