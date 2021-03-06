/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/meteor-accounts.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {FORM_DIRECTIVES, Component, View, NgIf} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import {Parties} from 'collections/parties';

import {RouterLink} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'party-details'
})
@View({
    templateUrl: 'client/components/parties/party-details/party-details.html',
    directives: [RouterLink, FORM_DIRECTIVES, NgIf]
})
@RequireUser()
export class PartyDetails extends MeteorComponent {
    party: Object;

    constructor(params: RouteParams) {
        super();
        var partyId = params.get('partyId');
        this.subscribe('party', () => {
            this.party = Parties.findOne(partyId);
        }, true);
    }

    saveParty(party) {
      if (Meteor.userId()) {
        Parties.update(party._id, {
          $set: {
            name: party.name,
            description: party.description,
            location: party.location
          }
        });
      } else {
        alert('Please log in to change this party');
      }
    }
}
