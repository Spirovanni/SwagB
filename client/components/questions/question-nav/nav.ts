/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'nav-content'
})
@View({
    templateUrl: "client/components/questions/question-nav/nav.html"
})
export class NavContent {
    constructor() {
    }
}
