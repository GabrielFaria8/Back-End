import { ApiPropertyOptional } from "@nestjs/swagger";
import {  IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { alteraFilmeDTO } from "src/filme/dto/atualizaFilme.dto";



export class alteraSerieDTO extends alteraFilmeDTO{    
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Breaking Bad',
        description: `O nome será utilizado para identificar a série.`,
    })
    nomeSerie: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '01',
        description: `O número é usado para identificar a ordem dos episódios`,
    })
    episodio: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '03',
        description: `O número é usado para identificar a ordem das temporadas e para agrupar os mesmos episódios de uma temporada`,
    })
    temporada: number;
}