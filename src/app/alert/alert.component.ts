import { Component } from '@angular/core';

@Component({
    selector: 'app-alert',
    template: `<app-servers></app-servers><h4>I'm alert</h4>
    <app-servers></app-servers>`,
    styles:[`h4{
        color: red
    }`]
})
export class AlertComponent{

}