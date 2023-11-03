// server.js
import * as tf from '@tensorflow/tfjs';
import multer from 'multer';
import express from 'express';
import fs from 'fs';
import { promisify } from 'util';
const app = express();
const port = process.env.PORT || 3001;

// Load the TensorFlow.js model
const modelPath = '/path/to/your/tfjs-model-directory/model.json';
const model = await tf.loadLayersModel(`${modelPath}`);

// Set up multer for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });






app.use(express.json());
app.post('/predict', upload.single('image'), async (req, res) => {
  try {
    const { buffer } = req.file;
    const image = tf.node.decodeImage(buffer);
    const prediction = await model.predict(image);
    // Process the prediction as needed and send a response
    res.json({ prediction: prediction.dataSync() });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  