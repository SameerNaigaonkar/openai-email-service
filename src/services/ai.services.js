const openai = require("../config/openai.config");

// open ai service integration : to commnunicate with openAi api from backend 

// generateEmailText function to return ai generated email text.

const generateEmailText = async (prompt) => {

    const response = await openai.chat.completions.create({
        // openai is a client
        // .chat.completions.create(): is used for the chat based ai model, which we have to use . 
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: " you are a professional email writer ." },
            { role: "user", content: prompt }
        ],

    });

    return response.choices[0].message.content;
    // as oopenai returns multiple choices : so [0]-it will return or takes the  first choice .
    // message.content :- it will extracts the actual content of ai response.
};


module.exports = { generateEmailText }
