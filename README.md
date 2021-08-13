
# Yelpcamp

![Website Preview](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_campgrounds.png?raw=true)

A website to find new camping grounds around the world and see what other people have to say about them.

---

### Table of Contents

- [Description](#description)
- [Illustrations](#illustrations)
- [Technologies](#technologies)
- [Link To Website](#link-to-website)
- [Reflection](#reflection)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Yelpcamp is a website that allows users to discover new campgrounds and rate campgrounds they've visited. It has a clean and minimalistic interface which is user-friendly and easy to use. Users can look for campgrounds in a specific area by using the map feature, which lists all the campgrounds that have been rated. It allows users to leave reviews on other peoples campgrounds if they've visited them too. When reviewing a campground, the user can add more information on the campground such as images, pricing, location, name of the place, and a description. Altogether, Yelpcamp is simple, yet effective, website allowing users to look for new campgrounds, and see which one caters to their needs.

## Illustrations

#### Homepage

![Homepage](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_.png?raw=true)

#### Campgrounds Map Page

![Campgrounds Map Page](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_campgrounds.png?raw=true)

#### Show Campgrounds Page

![Show Campgrounds Page](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_campgrounds%20(2).png?raw=true)

#### Login Page

![Login Page](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_login.png?raw=true)

#### Register Page
![Register Page](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_register.png?raw=true)

#### Creating a New Campground

![Creating a New Campground](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_campgrounds_new.png?raw=true)

#### Viewing a Campground

![Viewing a Campground](https://github.com/GURPREETSINGHMULTANI/Yelpcamp-Project/blob/master/Images/yelpcamp-personal-project.herokuapp.com_campgrounds_6115a57217a4510015abd5d5.png?raw=true)

## Technologies

- HTML
- CSS
- Bootstrap 5
- Node 
- NPM
- Express
- Mapbox
- Heroku
- EJS
- Passport JS
- MongoDB
- Mongoose 
- Cloudinary 
- Joi
- Express-Session
- Connect-Flash
- Bcrpyt

## Link To Website

#### Link To Website On Heroku

`https://yelpcamp-personal-project.herokuapp.com/`

## Reflection

Yelpcamp was a 2 month long project which helped me apply my newly learned front-end and back-end skills and combine everything to create a website that actually simulated real-world websites. The objective of the project was to learn how to use multiple different technologies together and create something substanial. 

Yelpcamp was the first time, since starting my self-taught software engineering journey, where I actually applied all the skills I had learned. This included using HTML, CSS and Bootstrap to create a stunning looking front-end interface while incorporating MongoDB and Mongoose to implement some sort of back-end. 

I also learned that while it is possible to create everything yourself, there are also many tools and services online that can help you fast-forward your progress. One such example is Mapbox, Mapbox allowed me to implement stunning looking maps while not coding everything from scratch. 

When implementing authentication and authorization, I learned the different methods that can be used to prevent users from hacking into others accounts. For example, how to provide feedback to users when they are logging in, so they can not merely hack an account by guessing. As well, how to store passwords in a database, different hashing algorithms, password salts, and how to add authorization so users can't access routes that should only be accessible to logged in users.

By using MongoDB, I had the opportunity to learn the different type of databases, the difference between NoSQL and SQL databases, and how to decide which database to use in your project. Within MongoDB, I also learned the different data storage patterns to efficiently store your data. For example, when and when not to use "One To Few" Relationships, "One To Many" Relationships, and "One To Bajillions Relationships.

Along with MongoDB and Mongoose, I learned the importance of resolving common security issues related to databases, such as Mongo injection attacks. Additionally, I also took a deeper dive into other common security issues like cross site scripting, turning off session and cookies if the site is not secure, and using Helmet to secure Express apps by setting various HTTP headers.

I also implemented validations so that data is tested before it is stored in a database. For example, when adding a new campground, there is a section to enter a price, however some users might enter a decimal, and while this does not cause issues when storing the data in a database. When retrieving the data, the system can crash because it requires a integer value. 

All in all, the main technologies implemented in this project are HTML, CSS, Bootstrap, Javascript, Express, MongoDB, Mongoose, Cloudinary, and Mapbox, and a significant amount of other smaller technologies that can be accessed when using Node and NPM. Altogether, Yelpcamp was a successful project that taught me a lot about the web development field, and what sort of commitment goes into building full stack apps. Going forward, I plan on integrating React with Node, MongoDB, and Express to create a full MERN Stack application, so I can experience using the full stack.

## License

MIT License

Copyright (c) [2021] [Gurpreet Singh Multani]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author Info

- LinkedIn - [Gurpreet Singh Multani](https://ca.linkedin.com/in/gurpreet-singh-multani-0a277a203?trk=people-guest_people_search-card)

[Back To The Top](#Yelpcamp)
