/* eslint-disable prettier/prettier */

import { IsInt, IsString } from "class-validator";

//Validation Perform
export class BookDto{

    @IsInt()
    id:number;
    
    @IsString()
    name:string;    
}