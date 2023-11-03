// // Node.js server (server.js)

// const express = require('express');
// const bodyParser = require('body-parser');
// const multer = require('multer');
const arr = () =>{
  const random1 = Math.floor(Math.random()*1000000)/1000000
const random2 = Math.floor(Math.random()*1000000)/1000000
const arr = [random1,random2]
return arr
}

// const fs = require('fs').promises;

// const app = express();
// const port = process.env.PORT || 5000;

// // Set up middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static('uploads'));

// // Define a storage location for uploaded images
// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Load your machine learning model here (e.g., TensorFlow.js)
// async function loadModel() {
//     try {
//       const model = await tf.loadLayersModel('/model.json');
//       console.log('Model loaded successfully');
//       return model;
//     } catch (error) {
//       console.error('Error loading model:', error);
//       return null;
//     }
//   }
  
//   // Usage example


// // Define a route to handle image prediction
// app.post('/api/predict', upload.single('image'), async (req, res) => {
//   try {
//     console.log(req.body.image);
//     const imageBuffer = await fs.readFile(`${req.body.image}`);
//     const prediction = async function predictImage(imageBuffer) {
//         const model = await loadModel();
//         if (model) {
//           // Make predictions
//           const predictions = model.predict(imageBuffer);
      
//           return prediction;
//         } else {
//           return null;
//         }
//       }
//     res.json({ prediction });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// app.listen(port, () => {
//   console.log('Server is running on port ${port}');
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require("path");
// const Jimp = require("jimp")


// const app = express();
// const port = process.env.PORT || 5000;

// // Set up middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static('uploads'));

// // Define a storage location for uploaded images
// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Load your machine learning model here (e.g., TensorFlow.js)
// async function loadModel() {
//     try {
//       const model = await tf.loadLayersModel('/model.json');
//       console.log('Model loaded successfully');
//       return model;
//     } catch (error) {
//       console.error('Error loading model:', error);
//       return null;
//     }
//   }

// // Define a route to handle image prediction
// app.post('/api/predict', upload.single('image'), async (req, res) => {
    
//   try {
//     const base64data = req.body.image;
//     const buff = Buffer.from(base64data.split(',')[1], 'base64');
//     const imagefrombuffer = await Jimp.read(buff);
//     const predictdata = async function predictImage(imagefrombuffer) {
//         const model = await loadModel("./model.json");
//         if (model) {
//           // Make predictions
//           const prediction = model.predict(imagefrombuffer);
//       
//           return prediction;
//         } else {
//           return null;
//         }
//       }
//     const prediction = await predictdata(imagefrombuffer);
//     console.log(prediction);
//     res.json({ predictdata });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }s
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require("path");
const Jimp = require("jimp")
const tf = require('@tensorflow/tfjs');
const mod = require("./module.json")
const { stringify } = require('querystring');
const app = express();
const port = process.env.PORT || 5000;
const url = require("url");
// const bp = require("body-parser");
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));


// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('uploads'));
// Define a storage location for uploaded images
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
{/* <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.2/dist/tf.min.js"></script> */}
const upload = multer({ storage });
// console.log(mod.weightsManifest[0].paths[0]);
// const modPath = url.parse(`'${mod.weightsManifest[0].paths[0]}'`,true).pathname
// console.log(mod.modelTopology)
// Load your machine learning model here (e.g., TensorFlow.js)
async function loadModel() {
  // tf.loadLayersModel(pathOrIOHandler, options?)
  try { 
    const args= 0.01
    class L2 {

      static className = 'L2';
  
      constructor(config) {
         return tf.regularizers.l2(config)
      }
  }
    tf.serialization.registerClass(L2);
    // tf.serialization.registerClass();
   
  //   const model = await tf.loadLayersModel(mod, tf.mod.loadOptions(
  //     allow_partial_checkpoint=false,
  //     experimental_io_device=null,
  //     experimental_skip_checkpoint=false,
  //     experimental_variable_policy=null,
  //     experimental_load_function_aliases=false
  // ))
  const model = tf.loadLayersModel("https://res.cloudinary.com/drpgvnojt/raw/upload/v1697230518/model2_xfnj5o.json", {
    weights: mod.weightsManifest[0].paths,
    format: 'tfjs',
    optimizer: 'adam',
    loss: 'mse'
  });
    // const saveResult = await model.save(mod);
      //  const model =  await tf.loadLayersModel(mod)// Update the path to your model
      
    // const model = await tf.loadLayersModel(mod.modelTopology) 
        console.log(model)
    // const model = await tf.loadLayersModel(regular)

    return model;
  } catch (error) {
    console.error('Error loading model in load model:', error);
    return null;
  }
}
// loadModel()=
// Define a route to handle image prediction
app.post('/api/predict', upload.single('image'), async (req, res) => {

  try {
    const base64data = req.body.image;
    // console.log(base64data)
    // let img = tf.browser.fromPixels(base64data.canvasEl,1);
    // const smalImg = tf.image.resizeBilinear(img, [96, 96])
    const buff = Buffer.from(base64data.split(',')[1], 'base64');
    console.log(buff);
    
    const imagefrombuffer = await Jimp.read(buff);
   
    console.log(imagefrombuffer);
    const prediction = async function predictImage(imagefrombuffer) {
      const model = await loadModel();
      if (model) {
        // Make predictions
        const prediction = model.predict(imagefrombuffer);
        return prediction;
      } else {
        return null;
      }
    }
    const result = await prediction(imagefrombuffer);
    console.log(result);
    res.json({ prediction: result });
  } catch (error) {
    // console.error('Error:', error);
    // res.status(500).json({ error: 'Server error' });
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
