require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");


// database connection
connection();
const products = [
  {
    image: "./assets/Ordinateur.png",
    title: "Dell XPS 13",
    description: "13.3-inch Laptop, Intel Core i7, 16GB RAM, 512GB SSD",
    price: 1499,
    rating: 4.5
  },
  {
    image: "", // Empty or undefined
    title: "iPhone 12 Pro",
    description: "6.1-inch Super Retina XDR Display, 128GB, Pacific Blue",
    price: 999,
    rating: 4.7
  }
];

 
   
  

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);

// Retrieve all products
app.get('/api/products', (req, res) => {
    res.json(products);
  });

app.listen("8080", console.log(`server work`));