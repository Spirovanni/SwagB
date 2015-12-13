import {Questions} from 'collections/questions';

export function loadQuestions() {
    if (Questions.find().count() === 0) {

    var questions = [
        {
            'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep.',
            'location': 'Palo Alto',
            'public': true
        },
        {
            'name': 'All dubstep all the time',
            'description': 'Get it on!',
            'location': 'Palo Alto',
            'public': true
        },
        {
            'name': 'Savage lounging',
            'description': 'Leisure suit required. And only fiercest manners.',
            'location': 'San Francisco',
            'public': false
        }
    ];

    for (var i = 0; i < questions.length; i++) {
        Questions.insert(questions[i]);
    }
  }
};
