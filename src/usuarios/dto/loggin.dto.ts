import { PickType } from "@nestjs/swagger";
import { CreateUsuarioDto } from "./create-usuario.dto";

export class LogginDto extends PickType(CreateUsuarioDto,[
    'email',
    'pass'
]){}