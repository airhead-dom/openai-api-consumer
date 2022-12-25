import createOpenAI from '../util/openai.js'

export const completion = async (promptText) => {
    const openaiClient = createOpenAI();

    try {
        const result = await openaiClient
            .createCompletion({
                model: 'text-davinci-003',
                prompt: promptText,
                max_tokens: 4000
            })

        const choices = result.data.choices
        return choices.map(choice => choice.text)[0]
    } catch (e) {
        console.log(e);

        return { err: "Unknown error" };
    }
}