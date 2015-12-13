/// <reference path="../typings/angular2-meteor.d.ts" />

export var Starties = new Mongo.Collection('starties');

Starties.allow({
  insert: function(starty: Object) {
    var user = Meteor.user();
    return !!user;
  },
  update: function(starty: Object, fields, modifier) {
    var user = Meteor.user();
    return !!user;
  },
  remove: function(starty: Object) {
    var user = Meteor.user();
    return !!user;
  }
});
