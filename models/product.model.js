const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please enter product name"],
    },

    quntity: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },

  {
    timestamps: true,
  }
);

const Products = mongoose.model("product", ProductSchema);
module.exports = Products;
