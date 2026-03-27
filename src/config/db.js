const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    
    // Check if it's the specific placeholder URI
    if (!uri || uri === 'your_mongodb_uri_here' || uri.includes('<password>')) {
      throw new Error('Placeholder URI detected');
    }

    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`❌ Atlas Connection Failed: ${error.message}`);
    console.log('--- Falling back to Mock DB (Memory Server) ---');
    try {
      const mongod = await MongoMemoryServer.create();
      const mockUri = mongod.getUri();
      await mongoose.connect(mockUri);
      console.log('Successfully connected to Mock Database.');
    } catch (innerError) {
      console.error(`Mock Database failed: ${innerError.message}`);
    }
  }
};

module.exports = connectDB;
