import { Input, Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs';
class Data{
    key: string;
    value: string
}
@Injectable()
export class DataService{
    private messageSource = new BehaviorSubject<string>('default');
    private dataSource = new BehaviorSubject<Data>({key:'default', value: 'default'});
    currentMessage = this.messageSource.asObservable();
    currentData = this.dataSource.asObservable();

    constructor() {}
    changeMessage(message){
        this.messageSource.next(message);
    }
    changeData(data: Data){
        this.dataSource.next(data);
    }




}
