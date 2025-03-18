const mongoose = require("mongoose");
const Item = require("./model/Item_model"); // ✅ Fixed Import Path

// MongoDB Connection
const db = "mongodb+srv://ahamednafeez70:DrCode123@cluster0.kkj57.mongodb.net/HackThon";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

const seedItems = [
  {
    name: "Coffee",
    price: 5.99,
    description: "A hot cup of freshly brewed coffee.",
  },
  {
    name: "Espresso",
    price: 4.49,
    description: "A strong and bold espresso shot.",
  },
  {
    name: "Cappuccino",
    price: 6.99,
    description: "A smooth blend of espresso and steamed milk.",
  },
];

// Function to seed data
const seedDB = async () => {
  try {
    await Item.deleteMany(); // Clear existing items
    console.log("🗑️ Old Items Deleted");
    
    await Item.insertMany(seedItems);
    console.log("✅ Items Seeded Successfully");

    mongoose.connection.close(); // Close DB connection
    console.log("🔌 MongoDB Connection Closed");
  } catch (error) {
    console.error("❌ Error Seeding Database:", error);
    mongoose.connection.close();
  }
};

// Run seeding
seedDB();
