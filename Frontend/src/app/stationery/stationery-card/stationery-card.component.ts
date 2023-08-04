import { Component } from "@angular/core";


@Component({
    selector: 'app-stationery-card',
    templateUrl: 'stationery-card.component.html',
    styleUrls: ['stationery-card.component.css']

}

)
export class StationeryCardComponent{

     
    Stationery: any ={
        "Id":1,
        "Type": "Book",
        "Price": 420,
        "Name": "kraft book 120 sheets"
    }
}