/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { BookDto } from "../book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) : Promise<any>{
        // if(value.id == 1) return value
        // else throw new BadRequestException("Validation Failed.");

        //1. class transformer object convert to class
        const bookClass = plainToClass(BookDto,value);

        //2. validate class
        const errors = await validate(bookClass);

        if(errors.length > 0){
            throw new BadRequestException('Validation Failed' + JSON.stringify(errors));
        }

        console.log(value, typeof(value));
        return value;
    }

    ////////////IMPORTANT/////////////// YOU CAN USE BUILT IN VALIDATION PIPE too instead of all this.///////////////////////////////

}