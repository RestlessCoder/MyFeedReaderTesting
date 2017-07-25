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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have Urls', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); // expect each feed url url is defined
                expect(feed.url.length).not.toBe(0); // expect each feed url is not empty
                expect(typeof feed.url).toEqual('string'); // expect each feed url is string
            });
        });

        it('have Names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); // expect each feed name is defined
                expect(feed.name.length).not.toBe(0); // expect the feed name is not empty
                expect(typeof feed.name).toEqual('string'); // expect each feed name is not empty
            });
        });
    });

    describe('The Menu', function() {
        var body = $('body');

        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy(); // expect the menu elemet is hidden by default
        });

        describe('changes visibility when the menu icon is clicked', function() {
            // before expectations functions run, trigger click event on the menu icon
            beforeEach(function() {
                $('.menu-icon-link').trigger('click');
            });

            it('and the menu displayed correctly', function() {
                expect(body.hasClass('menu-hidden')).toBeFalsy(); // expect the menu to display correctly
            });

            it('and the menu is hidden correctly', function() { 
                expect(body.hasClass('menu-hidden')).toBeTruthy(); // expect the menu hides correctly
            });
        });
    });

    describe('Initial Entries', function() {
        // before expectation function run, run loadFeed function with first feed source
        beforeEach(function(done) {
            loadFeed(0, done); // Call loadFeed() for initial entries. loadFeed() function will call done() when it's done
        });

        it('has at least a minimum 1 entry in feed container', function(done) {
            var feed = $('.feed');

            expect(feed.find('.entry').length).toBeGreaterThan(0); // ensure there is at least a single .entry element within the .feed container
            done();
        });
    });
          
    describe('New Feed Selection', function() {
        var oldContent;

        // Before the test run, retrieve and store the content of the initial screen the load the new feed
        // afterwards, run loadFeed function with the second feed source
        beforeEach(function(done) {
            loadFeed(1, function() {
                oldContent = $('.feed').html();
                done();
            });
        });

        // Ensure the content has been changed compared to the old content
        it('content should be changes', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(oldContent);
                done();
            });
          
        });
    });

}());
