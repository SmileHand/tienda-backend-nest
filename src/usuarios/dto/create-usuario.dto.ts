import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {

    @ApiProperty({example: "Christian Rodriguez", description:"Pones el nombre de usuario"})
    @IsString()
    @IsNotEmpty()
    nombreUsuario!: string;

    @ApiProperty({example: "chris.rodri@gmail.com", description:"Pones el correo al que se registra"})
    @IsString()
    @IsNotEmpty()
    email!: string;
    
    @ApiProperty({example:"miContrasenaSegura", description:"Pones la contraseña aqui"})
    @IsString()
    @IsNotEmpty()
    pass!: string;
}
