import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LogginDto } from './dto/loggin.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiOperation({
    summary:'crear usuario'
  })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @ApiOperation({
    summary: 'mostrar usuarios',
    description: 'este endpoint devolvera todos los usuarios'
  })
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary:'hacer admin',
    description: 'este endpoint hara admin al usuario deseado'
  })
  @Patch('admin/:id')
  hacerAdmin(@Param('id')id: string){
    return this.usuariosService.hacerAdmin(+id);
  }

  @ApiOperation({
    summary: 'loggin de usuario'
  })
  @Post('loggin')
  loggin(@Body() loggin:LogginDto){
    return this.usuariosService.iniciarSecion(loggin);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }


}
