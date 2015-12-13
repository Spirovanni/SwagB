/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts-ui.d.ts" />

import {Component, View} from 'angular2/angular2';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/angular2';

import {Starties} from 'collections/starties';

import {AccountsUI} from 'meteor-accounts-ui';

@Component({
    selector: 'starties-form'
})
@View({
    templateUrl: 'client/components/starty/starties-form/starties-form.html',
    directives: [FORM_DIRECTIVES, AccountsUI]
})
export class StartiesForm {
    startiesForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.startiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            public: [false]
        });
    }

    addStarty(starty) {
        if (this.startiesForm.valid) {
            if (Meteor.userId()) {
                Starties.insert({
                    name: starty.name,
                    description: starty.description,
                    location: starty.location,
                    public: starty.public,
                    owner: Meteor.userId()
                });

                (<Control>this.startiesForm.controls['name']).updateValue('');
                (<Control>this.startiesForm.controls['description']).updateValue('');
                (<Control>this.startiesForm.controls['location']).updateValue('');
                (<Control>this.startiesForm.controls['public']).updateValue(false);
            } else {
                alert('Please log in to add a starty');
            }
        }
    }
}
