# Voting App


## Free Code Camp Challenge

[**HEROKU APP**](https://fccvotingapp1.herokuapp.com) - https://fccvotingapp1.herokuapp.com

This app was built in MERN stack.
### User Stories
- As an authenticated user, I can keep my polls and come back later to access them.
- As an authenticated user, I can share my polls with my friends.
- As an authenticated user, I can see the aggregate results of my polls.
- As an authenticated user, I can delete polls that I decide I don't want anymore.
- As an authenticated user, I can create a poll with any number of possible items.
- As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
- As an unauthenticated or authenticated user, I can see the results of polls in chart form.
- As an authenticated user, if I don't like the options on a poll, I can create a new option.


### Keys configuration
To properly works on your local machine you need to create a dev.js inside the config folder:


```
module.exports ={
    googleClientID: "",
    googleClientSecret:"",
    twitterCostumerKey:"",
    twitterCostumerSecret:"",
    githubClientID:"",
    githubClientSecret:"",
    mongoURI:"",
    cookieKey:""

}
```
