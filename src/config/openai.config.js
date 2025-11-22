const OpenAI = require("openai");

const dotenv = require("dotenv");
// const { default: OpenAI } = require("openai");
dotenv.config();


const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})


module.exports = openai ;