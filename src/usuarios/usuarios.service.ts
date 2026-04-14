import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DataSource } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { LogginDto } from './dto/loggin.dto';
import { error } from 'console';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuariosService {
  constructor(@Inject('DATA SOURCE') private datos:DataSource, private jwtService:JwtService){}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usu = this.datos.getRepository(Usuario)
    const usua = new Usuario()
    const saltOrRounds = 10;
    try{
      usua.nombreUsuario = createUsuarioDto.nombreUsuario;
      usua.email = createUsuarioDto.email;
      usua.hash_pass = await bcrypt.hash(createUsuarioDto.pass,saltOrRounds);
      await usu.save(usua);
    } catch(error: any){
      if (error.code === '23505'){
        throw new Error("el correo ya se uso antes")
      }
    }
    return usua;
  }

  async findAll() {
    const usu = this.datos.getRepository(Usuario)
    const usua = await usu.find();
    return usua;
  }

  async hacerAdmin(id: number){
    const usu = this.datos.getRepository(Usuario);
    const usua = await usu.findOne({
      where:{
        id:id
      }
    });
    
    if (!usua){
      throw new Error("no se encontro el usuario");
    }
    usua.esAdmin = true;
    await usu.save(usua);
    return usua;
  }

  async iniciarSecion(datos:LogginDto){
    const usu = this.datos.getRepository(Usuario);
    const usua = await usu.findOne({
      where:{
        email:datos.email,
      }
    })
    if (!usua){
      throw new NotFoundException('verifique que el correo');
    }
    const comparar = await bcrypt.compare(datos.pass,usua.hash_pass);
    if(!comparar){
      throw new NotFoundException('la contraseña es incorrecta');
    }
    
    const result ={
      nombreUsuario: usua.nombreUsuario,
      email: usua.email,
      ad: usua.esAdmin
    }

    return {access_token: this.jwtService.sign(result)};
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
