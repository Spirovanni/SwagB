/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {FORM_DIRECTIVES, Component, View, NgIf} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import {Starties} from 'collections/starties';

import {RouterLink} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'starty-details'
})
@View({
    templateUrl: 'client/components/starty/starty-details/starty-details.html',
    directives: [RouterLink, FORM_DIRECTIVES, NgIf]
})
@RequireUser()
export class StartyDetails extends MeteorComponent {
    starty: Object;

    constructor(params: RouteParams) {
        super();
        var startyId = params.get('startyId');
        this.subscribe('starty', () => {
            this.starty = Starties.findOne(startyId);
        }, true);
    }

    saveStarty(starty) {
      if (Meteor.userId()) {
        Starties.update(starty._id, {
          $set: {
            name: starty.name,
            description: starty.description,
            location: starty.location
          }
        });
      } else {
        alert('Please log in to change this starty');
      }
    }
}
