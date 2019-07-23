# Coding Challenge

Hello and welcome to this exciting coding challenge. In this challenge, you are tasked to build a My Binge List app as a React Web App.
So let's get to the details, shall we?

## The "App"

We provided you with a `artboards/artboards.pdf` file for the expected UI. Of course if you were building this for real, we would have also given you all the redlines etc. but this is a coding challenge after all and what we are looking for is how you write the code rather than being 100% pixel perfect to the design. Also, keep in mind, the design is created by a fellow engineer ;)

Having said that, please stick to the design and build something very similar to what we are asking for here. We also provided you with some sliced assets in the `/assets` folder that you received with this challenge.

Here is what we are asking you to build:

* The first screen illustrates the user being asked to type in a genre name (e.g. Action, War ...) and get a list of movies in that genre. When there is nothing yet typed, the instructions are shown.
* The user can only type one genre, if they type 2 or more, only the first one is used. The search starts when the user hits the search button.
* The second screen illustrates the user receiving the query results for the given genre. The search results are shown in a thumbnail view as shown in the screenshot. There are 2 columns and the results are rendered in the left-to-right-down-left order.
* When the size of the screen is large enough - desktop, tablet or landscape orientation - a detail cell view with more details is shown as illustrated in the final screenshot.
* In the detailed cell view, you will notice a `More Info` button, for this take home portion of the challenge, you do not need to implement any actions on that button.
* Calculate the [median](https://en.wikipedia.org/wiki/Median) rating of the returned results and if a movie's rating is above or equal to the median, display a star as shown in the screenshot.
Optional:
* Each movie cell has a button with a bookmark icon at the top left corner. If a user taps this button, then they add the movie to their favorites and the icon changes as illustrated in the artboard. And if they tap it again, they remove it from their favorites.
* If they tap the favorite button on any of those movies, then the movie is not a favorite anymore and gets removed from the favorites.
* There is a button (same bookmark icon style), at the top right of the screen. If a user taps this button, than they navigate to their favorites.
* The favorites screen shows all the movies they favorited. In order to go back to the search screen, they tap back. When they go back the search state is preserved. I.e. if they were looking for War movies, the same movies are shown.

## Getting the data

We built a simple node.js server for you so that you can retrieve the data, without using an external service. We retrieved a small subset of movie data from [TMDB](https://www.themoviedb.org/documentation/api) for you so you don't have to connect to their live servers and instead use our service. To do that:

* If not already installed, install [Docker for Mac](https://docs.docker.com/docker-for-mac/install/) or [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) depending on your platform. 
* In the terminal, go to the folder you unzipped this coding challenge and run `docker-compose up`. This will download the docker container and run the service for you.
* Now the service will be available at `http://localhost:4000`
* You can read about how to use this service at [its repo](https://github.com/keremk/movie-service).
  * For this challenge you can use the REST endpoints
  * You do not need to persist the favorites back to the server. For the purposes of this challenge they can be kept in memory and not persisted. 
  * If you prefer and already know GraphQL, you can also use the GraphQL service http://localhost:4000/graphql but it is not required for this challenge. And if you don't have enough time it is more important that you spend time on your code quality then using GraphQL endpoints.

## What are we looking for?

* Please only implement what we ask for. Additional features will not positively effect your review. What we are looking for mainly is code quality and tests, so please spend your time wisely. You can find the details in the rubric.md file that we provided to you.
* You are allowed to use 3rd party libraries. But your choice of 3rd party libraries will also be part of our review process, so please choose selectively.
* Having a test-driven mindset is very important for us, so please spend time on writing good tests and come up with a testable design.
* Do refrain from showing-off knowledge of technologies, architectures, techniques if they are not appropriate for the given challenge. We would like to see pragmatic engineering trade-offs not over-engineering.
* Do refrain from using technologies, frameworks if you are not experienced with them. We would like to see your best work.
* We would like to see a React solution to this challenge, since that is what you will be using anyways if you end up joining us.
* The app needs to be a responsive Web app.
* You need to build your own components, please do not use ready made ones from other libraries out there.

## How to submit?

Well, we do like to see how you arrive to your final submission, not just the final solution. So we are asking you to push your solution into the current repository into the master branch. (HINT: Small incremental commits that build up, are something we like in real life.)

Please do not forget to write a good README file that explains us how to run your code, perhaps some of your assumptions or approaches that needs describing. If you end up changing our backend node.js based service code, please don't forget to include that either.

