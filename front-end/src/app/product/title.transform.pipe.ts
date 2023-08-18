import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'titleTransform'})
export class TitleTransformPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value === 'shoulderbags') {
            return 'Shoulder Bags'
        } else if (value === 'designerbags') {
            return 'Designer Bags'
        }
        return 
    }
}