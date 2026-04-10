import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DataSource } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(@Inject('DATA SOURCE') private datos:DataSource){}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usu = this.datos.getRepository(Usuario)
    const usua = new Usuario()
    const saltOrRounds = 10;
    usua.nombreUsuario = createUsuarioDto.nombreUsuario;
    usua.email = createUsuarioDto.email;
    usua.hash_pass = await bcrypt.hash(createUsuarioDto.pass,saltOrRounds);
    await usu.save(usua);
    return usua;
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
