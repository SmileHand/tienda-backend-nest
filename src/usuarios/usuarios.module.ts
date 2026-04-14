import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports:[DatabaseModule,JwtModule.registerAsync({
    useFactory: ()=> ({
      secret: process.env.SECRETO,
    })
  })],
  controllers: [UsuariosController],
  providers: [UsuariosService,AuthGuard],
})
export class UsuariosModule {}
