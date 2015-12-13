/// <reference path="../typings/angular2-meteor.d.ts" />

export var Parties = new Mongo.Collection('parties');

Parties.allow({
  insert: function(party: Object) {
    var user = Meteor.user();
    return !!user;
  },
  update: function(party: Object, fields, modifier) {
    var user = Meteor.user();
    return !!user;
  },
  remove: function(party: Object) {
    var user = Meteor.user();
    return !!user;
  }
});
