import { Configuration, OpenAIApi } from "openai";

let openAI

const createOpenAi = () => {
    if (openAI != null)
        return openAI

    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey == undefined || apiKey === '') {
        console.error('Open AI API key is not defined!')
        process.exit(1)
    }

    const configuration = new Configuration({
        organization: 'org-j6siZ7ALPXJKneSfOyQU4qa7',
        apiKey: process.env.OPENAI_API_KEY,
    });

    const _openAI = new OpenAIApi(configuration);
    openAI = _openAI

    return openAI
}


export default createOpenAi