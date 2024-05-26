import mongoose from 'mongoose';

  
export default async () => {
    try {
      const uri = process.env.MONGODB_URI
      const dbName = process.env.MONGODB_NAME
      const username = process.env.MONGODB_USERNAME
        const password = process.env.MONGODB_PASSWORD
        const cluster = process.env.MONGODB_CLUSTER
        const url = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}