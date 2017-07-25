## Feed Reader Testing
This is the Udacity Feed Reader Testing Project. This project uses the Jasmine testing framework to create valid, robust and cleanly implemented javascript function. By using all the test cases to pass without any kind of failures.

### Installation
To run the application:
1. Download the GitHub zip file or clone the repository onto your local workstation:
    * Zip file - [https://github.com/RestlessCoder/MyFeedReaderTesting/archive/master.zip](https://github.com/RestlessCoder/MyFeedReaderTesting/archive/master.zip "download zip file")
    * Git clone - [https://github.com/RestlessCoder/MyFeedReaderTesting.git](https://github.com/RestlessCoder/MyFeedReaderTesting.git "git clone repository")
2. Open a browser window and navigate to the index.html file in your application's directory.

### Test Cases
These test cases are all in `jasmine/spec/feedreader.js`

1. **`RSS Feeds`:**
    * **'are defined'**
        * Tests to see if all the ***allFeeds*** variable is defined.
     * **'have Urls'**
        * Check each feed whether the Urls are valid or not.
    * **'have Names'**
        * Check each feed whether the Names are valid or not.

2. **`The Menu`:**
    * **'is hidden by default'**
        * Tests if the menu element is hidden by default by checking the ***menu-hidden*** class.
    * **'change visibility when the menu icon is clicked'**
        * Check that the menu icon changes its visibility when user click on it.

3. **`Initial Entries`:**
    * **'has at least a minimum 1 entry in feed container'**
        * Check if there is at least a single ***.entry*** element within the ***.feed*** container.
    
4. **`New Feed Selection`:**
    * **'content should be changes'**
        * Check when a new feed is loaded by the loadFeed function that the content actually changes.
   