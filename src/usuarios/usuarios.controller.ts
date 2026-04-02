import {  Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor (private usuariosServicios: UsuariosService){}

}
