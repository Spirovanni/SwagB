/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts-ui.d.ts" />

import {Component, View} from 'angular2/angular2';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/angular2';

import {Questions} from 'collections/questions';

import {AccountsUI} from 'meteor-accounts-ui';

@Component({
    selector: 'questions-form'
})
@View({
    templateUrl: 'client/components/questions/questions-form/questions-form.html',
    directives: [FORM_DIRECTIVES, AccountsUI]
})
export class QuestionsForm {
    questionsForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.questionsForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            public: [false]
        });
    }

    addQuestion(question) {
        if (this.questionsForm.valid) {
            if (Meteor.userId()) {
                Questions.insert({
                    name: question.name,
                    description: question.description,
                    location: question.location,
                    public: question.public,
                    owner: Meteor.userId()
                });

                (<Control>this.questionsForm.controls['name']).updateValue('');
                (<Control>this.questionsForm.controls['description']).updateValue('');
                (<Control>this.questionsForm.controls['location']).updateValue('');
                (<Control>this.questionsForm.controls['public']).updateValue(false);
            } else {
                alert('Please log in to add a question');
            }
        }
    }
}
