/// <reference path="../../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../../typings/angular2/angular2.d.ts" />

/*
 * Angular Directives
 */
import {Component, View} from 'angular2/angular2';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'app'
    selector: 'box-content', // <box-content></box-content>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [`
     //Eric Meyer's Reset CSS v2.0 - http://cssreset.com
		html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}

		html,body{
			width:100%;
			height:100%;
		}
		.container{
			width:100%;
			max-width:1800px;
			margin:0 auto;
			overflow: hidden;
		}

		/* Image containers */
		.feature-image{
			width:31%;
			padding-bottom: 23%;
			margin:.5em 1%;
			display:block;
			float:left;
		}
		.header-image{
			height:500px;
		}

		@media (max-width:1024px){
			.feature-image {
				width:31%;
				padding-bottom: 65%;
				margin: .5em 1%;
			}
		}
		@media (max-width:480px){
			.header-image, .feature-image {
				height:auto;
				width:100%;
				padding-bottom: 75%;
				margin: .25em 0;
			}
		}

    .parallax-container {
      min-height: 380px;
      line-height: 0;
      height: auto;
      color: rgba(33, 174, 159, 0.9);
    }
      .parallax-container .section {
        width: 100%;
      }

    .dance {
        width: 100%;
        height: 400px;
        position: absolute;
        background-repeat: no-repeat;
        background-size: contain;

    }
    `],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: `

                        <div id="myQuiz" ng-controller="QuizController">

                            <h1>What's your <span>player type?</span> </h1>

                            <div class="progressbar">
                            {{totalQuestions}}

                            </div>
                            <div class="intro">

                            <h2>Welcome</h2>
                            <p>Click begin to test your knowledge of Saturn.</p>
                            <p class="btn">Begin</p>


                            </div>
                            <div class="question answered">
                                <p class="txt">This is a question</p>
                                <p class="ans">Answer 1</p>
                                <p class="ans">Answer 2</p>
                                <p class="ans">Answer 3</p>
                                <p class="ans">Answer 4</p>
                                <div class="feedback">

                                    <p>You are <strong>correct</strong>!</p>
                                    <p>oops! That is not correct.</p>
                                    <p>Additional feedback.</p>
                                    <div class="btn">Continue</div>

                                </div>
                            </div>
                            <div class="results">
                                <h3>Results</h3>
                                <p>You scored X% by correctly answering X of the total X questions.</p>
                                <p>Use the links below to challenge your friends.</p>
                                <div class="share">
                                    <a class="btn email" href="#">Email</a>
                                    <a class="btn twitter" href="#">Tweet</a>

                                </div>
                            </div>
                        </div>

  `
})

export class BodyContent {
    constructor() {
    }
}
