/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />
/// <reference path="../../../../typings/chartist/chartist.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Starties} from 'collections/starties';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'starties-list'
})
@View({
    templateUrl: 'client/components/starty/starties-list/starties-list.html',
    directives: [NgFor, RouterLink]
})
export class StartiesList extends MeteorComponent {
    starties: Mongo.Cursor<Object>;

    constructor() {
        super();
        this.subscribe('starties', () => {
            this.starties = Starties.find();
        }, true);
    }

    removeStarty(starty) {
        Starties.remove(starty._id);
    }

    search(value) {
        if (value) {
            this.starties = Starties.find({ location: value });
        } else {
            this.starties = Starties.find();
        }
    }
}

