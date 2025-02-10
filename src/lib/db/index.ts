import { Client } from 'pg';  

const client = new Client({  
  connectionString: process.env.DATABASE_URL,  
});  

const connectDatabase = async () => {  
  try {  
    await client.connect();  
    console.log('Connected to PostgreSQL database successfully.');  
  } catch (err) {  
    console.error('Database connection error:', err);  
  }  
};  

// Export the connectDatabase function and the client  
export { connectDatabase, client };