# Hangry!
## Project 4: Software Engineering Immersive 9-21

Hangry is an app that will connect users to recipe suggestions of meals that they can create with the ingredients they have on hand. When logged in, users can enter an ingredient and are met with receipe options filter by that ingredient. They can then add recepies that interest them to their user account for later reference.

The rather ambitious plan here was to build a full-stack app using a Flask backend with a MongoDB database connection, and a Vue.js front end. Vue was a brand new technology for me, and I had fairly minimal experience with Flask. Creating a full CRUD, RESTful app, using both my own database API as well as a 3rd party API was a lofty goal.

But, I'm not one to backdown from a challenge.

NETLIFY DEPLOYMENT LINK:
[Hangry App](https://mystifying-mccarthy-7142e6.netlify.app/)

## Summary

In the end, this app is paired down a bit from the original goals, but we got close! The app currently returns a random recipe from a 3rd Party API, and is built using Vue.js. The backend is Node/Express, but currently there is no connection to the back end for storing user accounts and data, but the connection to MongoDB is there and waiting to be tied into Vue for creating user accounts and favorites lists in the near future.

## Technologies Used

For this project I began building the backend with Python and Flask, connected to MongoDB. I also planned to build the front end with Vue.js. Flask was very new to me, and Vue was totally new! This proved to be ambitious for a short 10 day project window, and after struggling to connect my Flask backend to MongoDB, eventually I decided to rebuild the entire backend with Node.js and Express as I was more familiar, and I really wanted to focus on exploring and learning Vue.js.

In the end this project used a MEVN stack. Vue was actually really exciting to learn and implement. I know that I have only just scratched the surface of it's usability, and look forward to improving this app as I learn more about the framework!

## Challenges & Improvements

I did not have time to complete all the aspects of the project that I hoped to, but I believe I have set myself up with a good working app that has the groundwork laid to further develop into a robust app.
While the current version returns a random recipe from a 3rd Party API, the foundation is there and was previously implemented to have a user enter an ingredient and get results based on that. But without the user accounts connected, instead I implemented the random functionality. While the backend is setup and connected to allow a user to create an account and store "favorites", but I was struggling with time to implement the authentication within the time frame, but I have left all the back end code in place for implemetation at a later date.

Another objective is to revist connecting Flask to MongoDB, as this was pretty confusing to me initially. Another challange to tackle!

## Original Wireframes

![Wireframe image](/images/Hangry-wireframe-1.png)

![Wireframe image](/images/Hangry-wireframe-2.png)
