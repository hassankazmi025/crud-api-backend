const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
//Form url encoded
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send('"Hello Node API Server updated');
});

//routes
app.use("/api/products", productRoute);

//read all api
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// read api through id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await Product.findById(id);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//create api
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
  // console.log(req.body);
  // res.send(req.body);
// });

//update a product

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//delete a product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not Found" });
//     }
//     res.status(200).json({ message: "product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//Create Connection

mongoose
  .connect(
    "mongodb+srv://remygray:Sh3WdwBbGsvEebwb@backenddb.iqx74.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("DB is Connected");
    app.listen(3000, () => {
      console.log("server is running on port  30000");
    });
  })
  .catch(() => {
    console.log("Error");
  });
