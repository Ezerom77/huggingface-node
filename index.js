import { HfInference } from "@huggingface/inference";

import { config } from "dotenv";
config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

//pegando una url de imagen
const imageURl =
  "https://images.theconversation.com/files/436873/original/file-20211210-188518-18vam90.jpeg";

//descargamos y convertimos a blob para  subir al modelo
const response = await fetch(imageURl);
const blob = await response.blob();

const model = "Salesforce/blip-image-captioning-large";

try {
  const result = await hf.imageToText({
    data: blob,
    model,
  });
  console.log(result);
} catch (error) {
  console.log(error.message);
}
