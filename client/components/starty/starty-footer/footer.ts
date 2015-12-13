/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'footer-content'
})
@View({
    templateUrl: "client/components/starty/starty-footer/footer.html"
})
export class FooterContent {
    constructor() {
    }
}
