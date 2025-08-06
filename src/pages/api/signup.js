import { MongoClient } from 'mongodb'

// MongoDB connection string (use your own)
const MONGODB_URI = process.env.MONGODB_URI
const DATABASE_NAME = 'bizenglish'
const COLLECTION_NAME = 'emails'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      const db = client.db(DATABASE_NAME)
      const collection = db.collection(COLLECTION_NAME)

      // Get the email from the form
      const { email } = req.body

      if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address' })
      }

      // Insert the email into the database
      const result = await collection.insertOne({ email, date: new Date() })

      client.close()

      res.status(200).json({ message: 'Email successfully added!' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
