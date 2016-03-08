import {Component} from 'angular2/core';
import {HelloComponent} from './hello.component'

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
    public title = "Hello MAL Las Vegas!"
}