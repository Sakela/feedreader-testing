# Feed Reader Testing (Udacity Front-End Project 7)

In this project I was given a web-based application that reads RSS feeds. I was provided with [Jasmine](http://jasmine.github.io/) library to write my test suites and make sure the required functionality passes.

## Getting Started

Download the Github repo of the project or clone it to your computer
```sh
$ cd to the folder you want to save project
$ git clone https://github.com/Sakela/feedreader-testing.git
```
To run the application you need to go to the destination where you have saved the project and open Index.html file in any browser of your choice from the root of the project's folder.

## Goals and Solutions

In order to make sure all the passing tests are correct, I would break currently tested functionality and verify that test is no longer passing. Followed Red-Green-Refactor Cycle procedure.

* RSS Feeds suite:
	**Test: Make sure that ```allFeeds``` variable is defined and not empty.**
	*Solution: Use Jasmine matchers against ```allFeeds``` and its length actual. Play with ```allFeeds``` variable, change its content or name of the variable.*

	**Test: Make sure each feed has URL defined and that URL is not empty.**
	*Solution: Loop through ```allFeeds``` array and use Jasmine matchers against each ```feed.url``` property.* 

	**Test: Make sure each feed has Name defined and that Name property is not empty.**
	*Solution: Loop through ```allFeeds``` array and use Jasmine matchers against each ```feed.name``` property.* 

* The Menu suite:
	**Test: Make sure that the menu element is hidden by default.**
	*Solution: I have used Jasmine-JQuery matchers to simplify my life here. And used their matcher that checks for DOM element to have CSS class that responsible for hiding the element. I had to analyze HTML, CSS and ```app.js``` file to see what function is changing the state.*

	**Test: Check is the menu being displayed on click and does it hide back when clicked again.**
	*Solution: I have used ```JQuery click()``` function to emulate action, and then Jasmine-JQuery matcher ```toHaveClass``` to check does DOM element has the CSS class responsible for hiding/showing the menu.*

* Initial Entries suite:
	**Test: After asynchronous ```loadFeed``` function complete, make sure ```.feed``` container has at least one child ```.entry``` element in the DOM.**
	*Solution: First of all I ran ```beforeEach``` function and called ```loadFeed``` in it, to make sure specification is ran after async function ```done()``` loading. Then I have used Jasmine-JQuery matcher ```toBeEmpty``` against ```.feed``` container.*

* New Feed Selection suite:
	**Test: After new ```loadFeed``` async function request completes check does new content overwrites old in the ```.feed``` container.**
	*Solution: Run ```beforeEach``` function and load first feed. Save resulting content into ```feedInitial``` variable. In the spec load another feed and save results into ```feedFinal``` variable and then check does the content of those variable not equal.*  
