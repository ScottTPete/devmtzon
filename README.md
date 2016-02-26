Day 1
--

## D1) Install Dependencies
### Explanation
####
You will need to run npm and bower to get all the dependencies you need

## D1) Folder Structure
### Explanation
####
Proper and consistent folder structure can save you and your team hours of work.  The most important rule of folder structure is consistency.  Create a folder for you server files

### Code
####
* Create a new repository
* Create the following files in this structure in your project folder

```
public/
    /components
      /home
        homeCtrl.js
        homeView.html
      /quiz
        quizCtrl.js
        /views
          quizContainerView.html
          questionListWrapperView.html
          questionDetailView.html
      /results
        resultsCtrl.js
        resultsView.html
      /services
        quizService.js
     /css
        style.css
        (already included, but feel free to make adjustments)
    /images
      (already included)

```

## Create and test your app

### Setup the App

####

We want to get our angular app set up and make sure it works.
Setup a basic app using ui-router.  Name your app `quizApp`.
Setup 3 controllers : `homeCtrl`, `quizCtrl`, `resultsCtrl`

####
* Create your html file and add references to
  * angular.js (Get this from the cdn)
  * ui-router (Google `angular ui-router cdn`)
  * all of your controllers you made in step 1
  * your stylesheet
  * https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css
  * https://fonts.googleapis.com/css?family=Roboto:400,500,700,300


* Setup your angular app and name it `quizApp`
  * Do this in app.js using the `angular.module` syntax
  * Add your ng-app to your page referencing your app
  * Run your page in the browser and check the console for errors

* Create your controllers in `homeCtrl.js` and `quizCtrl.js`.  Match the controller name to the file name, without the extension.

####
TODO


### Creating our first Route

####

Set up your first route using the `homeView` and `homeCtrl`.

Resolve a list of available quizzes from the service.

####

ui-router is a library that will swap out the content of elements we specify based on the state of our application.  To make this work we need to do three things:
- Bring the library into our page,
- tell it where we want things to be swapped out,
- give it instructions for what to swap and when

We bring the library in by adding a reference in index.html and then adding it as a dependency in the module declaration (hint: square brackets).

We add a `ui-view` tag in our index to tell it where to swap things out.

We setup routing instructions (using `$stateProvider`) by adding a config to our module and giving it `.state`s

We also want to add a $urlRouterProvider.otherwise('/home').  This will force any visitors to the home route if they try to go anywhere we haven't defined.

##### Overview of routing concepts

UI Routing works based off of a 'state'.  The state in this case is represented as a string.  We will have 3 primary states in our application : `home`, `quiz`, `results`

Each state can also have substates.  In this application we will have 1 substate `quiz.view`.  This is still a string, but we are designating a substate by using a period to separate it from its parent.

####

##### Bring the Library in
We already added a reference to ui-router in our `index.html`
