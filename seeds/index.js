const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '60d27298d59d2f419822e2b4',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: { type: "Point", coordinates: [cities[random1000].longitude, cities[random1000].latitude] },
            images: [
                {
                    url: "https://res.cloudinary.com/dhdnybdgp/image/upload/v1624652281/YelpCamp/pgnjxxwuxjbu18ew2hil.jpg",
                    filename: "YelpCamp/pgnjxxwuxjbu18ew2hil"
                },
                {
                    url: "https://res.cloudinary.com/dhdnybdgp/image/upload/v1624652281/YelpCamp/xjjzoun3gusaqv6jprzk.jpg",
                    filename: "YelpCamp/xjjzoun3gusaqv6jprzk"
                },
                {
                    url: "https://res.cloudinary.com/dhdnybdgp/image/upload/v1624652281/YelpCamp/xwhd24vvjzkhd8b63viq.jpg",
                    filename: "YelpCamp/xwhd24vvjzkhd8b63viq"
                }
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, mollitia alias sapiente officiis perferendis molestiae ex obcaecati ratione distinctio unde nostrum dignissimos dolores quidem, similique adipisci nihil harum vel dolorem.',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})