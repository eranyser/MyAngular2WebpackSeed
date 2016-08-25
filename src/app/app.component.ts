import {Component, OnInit} from "@angular/core"

@Component({
    selector: "vue-main",
    template: `
        <h1>{{appTitle}}</h1>
     `
})
export class AppComponent implements OnInit{
    appTitle: string = "Vue Solutions Title"
    ngOnInit(){
        console.log('hi');
        //debugger;
    }

}