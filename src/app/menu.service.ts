import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class MenuService {
    items: any;

    constructor(private http: HttpClient){

    }

    public getMenu (){
      return this.http.get("https://south-asian-monitor.com/public/api/menu")
      .subscribe(result=>{
    console.log(result);
    },
        error => {console.log(error);
    });
    }

}
