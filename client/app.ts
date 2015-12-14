/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/meteor-accounts.d.ts" />
/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, provide} from 'angular2/angular2';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {MainContent} from 'client/app/main';
import {PartiesList} from 'client/components/parties/parties-list/parties-list';
import {QuestionsList} from 'client/components/questions/questions-list/questions-list';
import {QuestionContent} from 'client/components/questions/questions';
import {PartyDetails} from 'client/components/parties/party-details/party-details';
import {StartiesList} from 'client/components/starty/starties-list/starties-list';
import {StartyDetails} from 'client/components/starty/starty-details/starty-details';

@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'MainContent', component: MainContent },
    { path: '/starty/:startyId', as: 'StartyDetails', component: StartyDetails },
    { path: '/starties', as: 'StartiesList', component: StartiesList },
    { path: '/parties', as: 'PartiesList', component: PartiesList },
    { path: '/questionslist', as: 'QuestionsList', component: QuestionsList },
    { path: '/questions', as: 'QuestionContent', component: QuestionContent },
    { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])
class Socially {}

bootstrap(Socially, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
