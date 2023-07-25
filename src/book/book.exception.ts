/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus } from "@nestjs/common";


export class BookException extends HttpException{
    constructor(){
        super('This is my Custom Book Exception', HttpStatus.BAD_REQUEST);
    }
}