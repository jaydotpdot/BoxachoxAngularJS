# BoxachoxAngularJS
A conversion of the front-end of my dating website's homepage (boxachox.com) to AngularJS from .NET Web Forms & jQuery. (DISCLAIMER: The content is purely satirical)

For the demo I focused my time on the surface elements of the page (layout, animations, responsiveness, etc.), didn't worry about creating real services or hooking up to live data. 

What I did specifically was:
- Organized the view structure
- Got the header/navigation working responsively and added open/close functionality for the 'hamburger' menu icon at smaller screen sizes
- Worked out the transition animations for the 4 profile circles in the top section of the page (see function onProfilePreviewClick() in homeController.js)
- Worked out the keyframe animations for the 'chocolate box' in the bottom section of the page (see function toggleChocolateBoxAnim () in homeController.js)
- I quickly created a factory to get the profile data, but at this point nothing is actually hooked up to the database.

NOTES:
- If you'd like to look at CSS, I'd say look at animations.css and ignore main.css. Only because I grabbed the main.css from my main .NET project, and most of it doesn't apply here.
- 'Sign up now' is the only link in the navigation that does anything, but it's a work in progress. The route is in place, but the form is quite broken :)
