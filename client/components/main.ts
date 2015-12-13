/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/chartist/chartist.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Starties} from 'collections/starties';
import {StartiesForm} from 'client/components/starty/starties-form/starties-form';
import {FireForm} from 'client/components/starty/starties-fireform/starties-fireform';
import {FireStats} from 'client/components/starty/starties-firestats/starties-firestats';
import {FooterContent} from 'client/components/starty/starty-footer/footer';
import {BodyContent} from 'client/components/starty/starty-body/body';
import {NavContent} from 'client/components/starty/starty-nav/nav';
import {StartiesList} from 'client/components/starty/starties-list/starties-list';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/index.html',
    directives: [NgFor, StartiesForm, FireStats, FireForm, NavContent, FooterContent, BodyContent, StartiesList, RouterLink]
})
export class MainContent {
    constructor() {
    }
}
