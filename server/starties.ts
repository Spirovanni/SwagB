/// <reference path="../typings/angular2-meteor.d.ts" />

import {Starties} from 'collections/starties';

function buildQuery(startyId?: string): Object {
    var isAvailable = {
        $or: [
            { public: true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    };

    if (startyId) {
        return { $and: [{ _id: startyId }, isAvailable] };
    }

    return isAvailable;
}

Meteor.publish('starties', function() {
    return Starties.find(buildQuery.call(this));
});

Meteor.publish('starty', function(startyId) {
    return Starties.find(buildQuery.call(this, startyId));
});
