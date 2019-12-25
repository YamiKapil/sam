import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { MenuService } from "../menu.service";



interface item {
    author: string;
    title: string;
    urlToImage: string;
    timestamp: string;
    detail: string;
}

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})
export class HomeComponent implements OnInit {
    constructor (private menuService: MenuService){

    }
    // public items: item[] = [
    //     {
    //         "urlToImage":
    //             "https://southasianmonitor.com/wp-content/uploads/2019/09/japan-grants-20-rescue-boats-for-bangladesh-coast-guard.jpg",
    //         "title": "Japan grants 20 rescue boats for Bangladesh Coast Guard",
    //         "detail":
    //             "The Bangladesh Coast Guard and Marubeni Corporation signed a contract for manufacturing of 20 rescue boats under The project for the improvement of rescue",
    //         "timestamp": "2019-09-13T19:44:00Z",
    //         "author": "SAM Staff"
    //     }
    // ];

    // news: item[];


    ngOnInit(): void {
        // Init your component properties here.
        this.menuService.getMenu()
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
