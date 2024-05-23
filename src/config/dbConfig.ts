import mongoose from 'mongoose';

  
export default async () => {
    try {
      const uri = process.env.MONGODB_URI
      const dbName = process.env.MONGODB_NAME
        const url = `${uri}/${dbName}?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}