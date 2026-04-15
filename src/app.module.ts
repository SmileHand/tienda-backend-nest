import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DatabaseModule } from './database/database.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ComandaModule } from './comanda/comanda.module';


@Module({
  imports: [UsuariosModule, DatabaseModule, ProductosModule, PedidosModule, ComandaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
