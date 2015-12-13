/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />
/// <reference path="../../../../typings/chartist/chartist.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Questions} from 'collections/questions';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'questions-list'
})
@View({
    templateUrl: 'client/components/questions/questions-list/questions-list.html',
    directives: [NgFor, RouterLink]
})
export class QuestionsList extends MeteorComponent {
    questions: Mongo.Cursor<Object>;

    constructor() {
        super();
        this.subscribe('questions', () => {
            this.questions = Questions.find();
        }, true);
    }

    removeQuestion(question) {
        Questions.remove(question._id);
    }

    search(value) {
        if (value) {
            this.questions = Questions.find({ location: value });
        } else {
            this.questions = Questions.find();
        }
    }
}

