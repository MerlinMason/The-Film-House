#Filmhouse WordPress Theme

###Built upon the wp-starter project

wp-starter make use of the following projects:

- https://github.com/
- http://editorconfig.org/
- http://csslint.net/
- http://www.jshint.com/
- http://lesscss.org/
- http://bower.io/
- http://gruntjs.com/
- https://github.com/ai/autoprefixer

##Requirements for local dev

- node.js v0.10.21 +
- grunt.js v0.4.1 +
- Bower v1.2.7 +

##Getting Setup
Once Bower is installed, you can then install all dependencies by running:

    bower install

Once Grunt is installed you can install all dependencies by running:

    npm install

note: please see Bower/Grunt documentation for help with installation.

##Using Grunt

You can use the Grunt watch task to watch .less and .js files for changes and automatically process them.

    $ grunt watch

Alternatively, you can process them at anytime with the following commands.

    $ grunt buildcss
    $ grunt buildjs

The CSS build does the following process:
- Compiles all the .less files imported into style.less
- Autoprefixes the compiled style.css with vendor prefixes (by default it supports current browser version -2)
- Checks the prefixed file for CSS Lint errors (based on .csslintrc config)
- Minifies the file
- Mac OSX users will then receive a notification upon successful build

The JS build does the following process:
- jshints your project.js file (based on .jshintrc config)
- Concatinates all javascript files used in the site
- Minifies the concatinated file
- Mac OSX users will then receive a notification upon successful build

##To Do List

Change Sizes:

DONE - Project title size : W-580px by H-150px
DONE - Play button : W-60px by H-60px
DONE (but to 150px as per email conversation) - TFH Logo : W-80px by H-60PX
DONE (as per email conversation max-width 60px) Project rectangle shapes : W- 60px by H-40px

1 - WAITING - Font Change - Rishab fonts attached; please change as per mockups perviously sent

2 - DONE - Page icons at the top - Make them central, 16:9. At the moment they’re often square and there’s an issue with the way they change with different size windows. We need them need to be a touch magnified when the cursor hovers over them. Also make them smaller. Also, the text below that appears below these should be center aligned to the boxes. 
They also need to be behind the radial gradient at the top that appears during a hover over the logo.

3 - DONE - Radial Gradient at top - needs to be darker, slightly curved. See mock-up reference. Make the gradient shade smoother should not be able to see where the gradient ends almost blends into BG image.

4 - DONE - Radial gradient at bottom - needs to be one under description; see mockups for reference. Also needs to be always present as per mockups; there’s a hint of the gradient even before it has popped up. 

5 - DONE - Film Title and one-line description. These need to be aligned, and moved to the left side of the screen as per mockups. And Need to be made drastically smaller as per mock ups. One line description to be in all caps.

6 - DONE - Vimeo video popup - This needs to be smaller, not full screen. The video also needs to shrink with the page shrink.

7 - DONE - Transitions between pages - these are good.

8 - DONE - Text under the page icons at top - Needs to be centre-aligned.

9 - DONE - Play button - Should be exactly like the mockups. Currently it looks a little stretched. It should also be bright white. Permanently like it is when you hover over it. And when you hover over it. There should be a little glow from it.

9.1 WAITING - Play button - please also make it lower, as per the mockups. We want the description to come up earlier, just as the user approaches the play button, the description should pop up.

9.2 - The Film titile and description should align up with the play button side by side, as per mock up.

10 - DONE - TFH Logo - There’s a proportion issue, the shape needs to be constrained. Rishab to send logo with text as a single image file.

11 - DONE - Description text ‘about, links and credits’ needs to be all capitals, as per mock ups. Also make it smaller as per mockups.

12 - DONE - Description text - Needs to be left justified. i.e., ‘Directed by…’ etc, on their own lines. 

13 - WAITING - Loading icon - Please get rid of this.

14 - DONE - Top Margin - Please drop the logo and the top icons a little bit, it’s too high. As per mockup.

15 - DONE - Bottom Margin - Please raise the bottom description text, it is too close to the bottom of the frame. As per mockup.

16 - DONE - Text - please make all text white, as opposed to the off white grey.

17. - DONE - Change the ‘X’ on the black over lay pages to ‘CLOSE’. The ‘x’ we feel looks like a design element and not something functional. Also moved to the bottom, as per mockup.

18. - WAITING - Background images to be higher-res

19. - WAITING - TFH Library needs a ‘close’ button.

20 - WAITNG - Please remove categories from the library page. We will go with a ‘show all’ button and a ‘search’ box function. Rishab is mocking this up.

21 - DONE - When I go to the ‘library’ page, and then click ‘contact’, for example, the logo disappears.

22. PARTIALLY DONE - about.contact.follow.library sections
- the close button needs to be centre-aligned and say ‘CLOSE’, much lower in the page
- the playbutton and the thumbnails need to be smaller, we’re thinking a 3 x 3 type set up.

23. DONE - The gradient shade that transitions in from the top where the logo is, should only occur when you hover over our logo.

24. DONE - Our logo to be made smaller and in general all elements to be smaller than now. 

25. WAITING FOR EMAIL INFO TO COMPLETE - Also, in the follow page please check the mockup and add spacing as per also dividing line between the info. 

26. DONE - Add more spacing between the 'about', 'contact' 'follow' library' bar. as per mock up. Also make it smaller.

27. DONE - Add 'line' element below the 'about' 'contact' to show which page is selected, as per mockups.

Mobile Site:
Generally, please look at the spacing and layout in the mockups, as the build is very different.

1. DONE - Smaller logo. And always present, as per mockups.
2. DONE - INFO should be all caps and lower
3. DONE - Arrows slightly bigger, and arrows.
4. DONE - The ‘about’ page should be as per the mockups, spacing, alignment and all.
5. DONE - Film title and play button should be central.
6. DONE - Keep ‘x’ on mobile site.
7. DONE - There should be a bar of black on which the ‘x’ is, that is permeant. Scrolling appears underneath it.
8. DONE - The 'about' and the rest of the titles should be in caps.

REJECTED - The tablet and iPad apps need to be like the desktop site, and not the mobile site.

DONE - Overall, most of the screen elements could be a little smaller. As per the mockups, please take a look at the subtleties.

WAITING - Question: We may have only 6 pieces to upload at this stage. Can we have the capacity to activate and deactivate the top icons in even numbers (so that it’s balanced?) 
