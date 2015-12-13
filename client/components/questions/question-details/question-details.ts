/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {FORM_DIRECTIVES, Component, View, NgIf} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import {Questions} from 'collections/questions';

import {RouterLink} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'question-details'
})
@View({
    templateUrl: 'client/components/questions/question-details/question-details.html',
    directives: [RouterLink, FORM_DIRECTIVES, NgIf]
})
@RequireUser()
export class QuestionDetails extends MeteorComponent {
    question: Object;

    constructor(params: RouteParams) {
        super();
        var questionId = params.get('questionId');
        this.subscribe('question', () => {
            this.question = Questions.findOne(questionId);
        }, true);
    }

    saveQuestion(question) {
      if (Meteor.userId()) {
        Questions.update(question._id, {
          $set: {
            name: question.name,
            description: question.description,
            location: question.location
          }
        });
      } else {
        alert('Please log in to change this question');
      }
    }
}
