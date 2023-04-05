require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let messages = [];

module.exports.ask = async (question) => {

    messages.push({
            role: "user", 
            content: question
    });

	const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
    });

    console.log(completion.data.choices);

    const message = completion.data.choices[0].message;
    messages.push(message);
    return message;
}
