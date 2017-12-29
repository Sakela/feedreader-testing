/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('should have "allFeed" variable defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have each feed url defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have each feed name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* This suite tests Menu functionality for hiding and showing */
    describe('The Menu', function() {    
        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden on default', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });

         /* This spec ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should change visibility on click', function() {
            $('.menu-icon-link').click();
            expect($('body')).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

    /* This Initial Entries suite checks for correct functionality of async loadFeed function, verifies loading content for feed container */
    describe('Initial Entries', function() {
        /* Spec ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should load at least one feed after complete async request', function(done) {
            expect($('.feed .entry')).not.toBeEmpty();
            done();
        });
    });
        

    /* New Feed Selection suite checks overwrite functionality of loadFeed function when new feed is being loaded */
    describe('New Feed Selection', function() {
        /* This spec ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feedInitial, feedFinal;

        beforeEach(function(done) {            
            loadFeed(0, function() {
                feedInitial = $('.feed').html();
                done();                
            });
        });

        it('should change content when new feed has been loaded', function(done) {
            loadFeed(1, function() {
                feedFinal = $('.feed').html();
                expect(feedInitial).not.toBe(feedFinal);
                done();
            });           
        });
    });        
}());
