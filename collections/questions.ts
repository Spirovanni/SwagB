/// <reference path="../typings/angular2-meteor.d.ts" />

export var Questions = new Mongo.Collection('questions');

Questions.allow({
  insert: function(question: Object) {
    var user = Meteor.user();
    return !!user;
  },
  update: function(question: Object, fields, modifier) {
    var user = Meteor.user();
    return !!user;
  },
  remove: function(question: Object) {
    var user = Meteor.user();
    return !!user;
  }
});
