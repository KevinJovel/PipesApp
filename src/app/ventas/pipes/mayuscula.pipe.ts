import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'mayuscula'
})
export class MayusculaPipe implements PipeTransform{
        transform(): string{
            return 'HOLA MUNDO';
        }
}