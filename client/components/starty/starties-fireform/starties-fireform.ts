/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {FirebaseService} from '../../../service';

@Component({
    selector: 'fire-form',
    componentServices: [FirebaseService]
})
@View({
    templateUrl: "client/components/starty/starties-fireform/starties-fireform.html"
})
export class FireForm {
    dataRef: Firebase;
    constructor() {
        this.dataRef = new FirebaseService().dataRef;
    }
    addVote(vote){
        this.dataRef.push(vote);
    }

    vote(superhero: string, username: string) {
        var self = this;
        if(username == "" || username == undefined) {
            Materialize.toast("You can't vote without a username!", 4000);
            return;
        }

        var alreadyVoted = false;
        self.dataRef.once("value", function(snapshot) {

            snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                if(childData.name == username) {
                    Materialize.toast("You can't vote because you already voted for " + childData.vote + "!", 4000);
                    alreadyVoted = true;
                    return true;
                }
            });

            if(alreadyVoted == false ){
                self.addVote({name: username, vote: superhero,date: new Date().getTime()});
                Materialize.toast('You voted for&nbsp;<b> '+superhero+'</b>. Thanks!', 4000)
            }
        });


    }
}
