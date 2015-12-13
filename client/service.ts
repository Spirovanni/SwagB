/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/firebase/firebase.d.ts" />
/// <reference path="../typings/chartist/chartist.d.ts" />

export class FirebaseService{
    dataRef: Firebase;
    constructor() {
        this.dataRef = new Firebase('https://angmap.firebaseio.com/votes');
    }
}
