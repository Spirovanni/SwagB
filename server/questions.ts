/// <reference path="../typings/angular2-meteor.d.ts" />

import {Questions} from 'collections/questions';

function buildQuery(questionId?: string): Object {
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

    if (questionId) {
        return { $and: [{ _id: questionId }, isAvailable] };
    }

    return isAvailable;
}

Meteor.publish('questions', function() {
    return Questions.find(buildQuery.call(this));
});

Meteor.publish('question', function(questionId) {
    return Questions.find(buildQuery.call(this, questionId));
});
