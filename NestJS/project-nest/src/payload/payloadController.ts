import { Body, Controller, Post} from '@nestjs/common';
import { CreateObjectDto } from './create-object-dto.interface';
@Controller('payload')
export class PayloadController {
    @Post() 
    async create(@Body() createDto: CreateObjectDto) 
    {// this.objects.push(createDto);
        return `This action adds a new object with name: ${createDto.name}`;
    }
}