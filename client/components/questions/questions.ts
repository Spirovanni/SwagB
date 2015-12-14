/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/angular2/angular2.d.ts" />
/// <reference path="../../../typings/chartist/chartist.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Questions} from 'collections/questions';
import {QuestionsForm} from 'client/components/questions/questions-form/questions-form';
import {FireForm} from 'client/components/starty/starties-fireform/starties-fireform';
import {FireStats} from 'client/components/starty/starties-firestats/starties-firestats';
import {QuestionsFooter} from 'client/components/questions/question-footer/question-footer';
import {QuestionBody} from 'client/components/questions/questions-body/question-body';
import {NavContent} from 'client/components/questions/question-nav/nav';
import {QuestionsList} from 'client/components/questions/questions-list/questions-list';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'questions'
})
@View({
    templateUrl: 'client/components/questions/index.html',
    directives: [NgFor, QuestionsForm, FireStats, FireForm, NavContent, QuestionsFooter, QuestionBody, QuestionsList, RouterLink]
})
export class QuestionContent {
    constructor() {
    }
}

