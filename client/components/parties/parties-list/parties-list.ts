/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

import {Parties} from 'collections/parties';

import {PartiesForm} from '../parties-form/parties-form';

import {RouterLink} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'parties-list'
})
@View({
    templateUrl: 'client/components/parties/parties-list/parties-list.html',
    directives: [NgFor, PartiesForm, RouterLink]
})
export class PartiesList extends MeteorComponent {
    parties: Mongo.Cursor<Object>;

    constructor() {
        super();
        this.subscribe('parties', () => {
            this.parties = Parties.find();
        }, true);
    }

    removeParty(party) {
        Parties.remove(party._id);
    }

    search(value) {
        if (value) {
            this.parties = Parties.find({ location: value });
        } else {
            this.parties = Parties.find();
        }
    }
}
