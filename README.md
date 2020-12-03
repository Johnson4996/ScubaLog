# ScubaLog

ScubaLog is a React application I created that allows SCUBA divers to log their dives digitally. 

# Features!

  - Allows the user to view their 5 most recent dives on the dashboard
  - User can also view these 5 dives marked on the map
  - Users have the ability to add and delete items from a wishlist on the dashboard
  - Users can view a dive that they've created. they are also able to create a new one, or edit an existing one. 


### Tech

Other than React, ScubaLog only uses the Google Maps API to function.

### Installation

To run this applicaiton from your local machine from terminal...
 1. Clone this GitHub repo 
```sh
$ cd capstone
$ npm start
```

You'll also want to make sure you're running the included JSON Server to make sure you can see data. In a seperate terminal tab youll need to [clone down the api repo.](https://github.com/Johnson4996/ScubaLog-api) 

```sh
$ cd capstone-api
$ json-server -w database.json -p 8088
```
The application will be running on localhost:8000  

