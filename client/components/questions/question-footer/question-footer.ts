/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'questions-footer'
})
@View({
    templateUrl: "client/components/questions/question-footer/question-footer.html"
})
export class QuestionsFooter {
    constructor() {
    }
}
