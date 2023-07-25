/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./dto/pipes/book.pipe";
import { BookException } from "./book.exception";
@Controller('book')
export class BookController{

    @Get('/:id')
    findBookById(@Param('id',ParseIntPipe) id:number) : string{
        console.log(id,typeof(id));
        return 'book by id';
    }
    @Get('/')
    exceptionCheck(): string {
        throw new BookException();
        return 'hello books api';
    }

    @Post('/add')
    addBook(@Body(new BookPipe()) book:BookDto) :string {
        return 'add book';
    }

    

}