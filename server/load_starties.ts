import {Starties} from 'collections/starties';

export function loadStarties() {
    if (Starties.find().count() === 0) {

    var starties = [
        {
            'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep.',
            'location': 'Palo Alto',
            'public': true
        },
        {
            'name': 'All dubstep all the timez',
            'description': 'Get it on!',
            'location': 'Palo Alto',
            'public': true
        },
        {
            'name': 'All dubstep all the time',
            'description': 'Get it on!',
            'location': 'Palo Altoz',
            'public': true
        },
        {
            'name': 'All the time yo!',
            'description': 'Get it on!',
            'location': 'Palo Alta',
            'public': true
        },
        {
            'name': 'Savage lounging',
            'description': 'Leisure suit required. And only fiercest manners.',
            'location': 'San Francisco',
            'public': false
        }
    ];

    for (var i = 0; i < starties.length; i++) {
        Starties.insert(starties[i]);
    }
  }
};
