import {Component} from 'angular2/core';
import {HelloComponent} from './hello.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/mal.component.html'
})
export class AppComponent {
    public title = "Hello MAL Las Vegas!";

    public speakers = [{ name: "Allen Conway", profile: "http://bit.ly/1R7VM0v" },
        { name: "Brent Edwards", profile: "http://bit.ly/1XdIgNb" },
        { name: "Jason Bock", profile: "http://bit.ly/1py8Vd7" },
        { name: "Kevin Ford", profile: "http://bit.ly/1py8Tlu" }];
}