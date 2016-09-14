/**
 * Reddit clone built in Angular 2
 * */
System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1;
    var Article, ArticleComponent, RedditApp, RedditAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                    return false;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                    return false;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        return link.split('/')[0];
                    }
                    catch (err) {
                        return null;
                    }
                };
                return Article;
            }());
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.article = new Article('Angular 2', 'http://angular.io', 10);
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n        <div class=\"four wide column center aligned votes\">\n            <div class=\"ui statistic\">\n                <div class=\"value\">{{ article.votes }}</div>\n                <div class=\"label\">Points</div>\n            </div>\n        </div>\n        <div class=\"twelve wide column\">\n            <a class=\"ui large header\" href=\"{{ article.link }}\">{{ article.title }}</a>\n            \n            <div class=\"meta\">({{ article.domain() }})</div>\n            \n            <ul class=\"ui big horizontal list voters\">\n                <li class=\"item\">\n                    <a href (click)=\"voteUp()\"><i class=\"arrow up icon\"></i>upvote</a>\n                </li>\n                <li class=\"item\">\n                    <a href (click)=\"voteDown()\"><i class=\"arrow down icon\"></i>downvote</a>\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 1),
                        new Article('Fullstack', 'http://fullstack.io', 10),
                        new Article('Angular Homepage', 'http://angular.io', 3)
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    this.articles.push(new Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                    return false;
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n        <form class=\"ui large form segment\">\n            <h3 class=\"ui header\">Add a Link</h3>\n            \n            <div class=\"field\">\n                <label for=\"title\">Title:</label>\n                <input name=\"title\" #newtitle>\n            </div>\n            \n            <div class=\"field\">\n                <label for=\"link\">Link: </label>\n                <input name=\"link\" #newlink>\n            </div>\n            \n            <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n                Submit Link\n            </button>\n        </form>\n        \n        <div class=\"ui grid posts\">\n            <reddit-article *ngFor=\"let a of sortedArticles()\" [article]=\"a\"></reddit-article>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            RedditAppModule = (function () {
                function RedditAppModule() {
                }
                RedditAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            RedditApp,
                            ArticleComponent
                        ],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [RedditApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditAppModule);
                return RedditAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RedditAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map