import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUsuarioDto {

    @ApiProperty({example: "Christian Rodriguez", description:"Pones el nombre de usuario"})
    @IsString()
    nombreUsuario!: string;

    @ApiProperty({example: "chris.rodri@gmail.com", description:"Pones el correo al que se registra"})
    @IsString()
    email!: string;
    
    @ApiProperty({example:"miContrasenaSegura", description:"Pones la contraseña aqui"})
    @IsString()
    pass!: string;
}
