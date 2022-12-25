import { completion } from '../../service/openaiService.js'

// POST /api/openai/completion
export const completionController = async (req, res, next) => {
    const body = req.body;

    console.log(body);

    const result = await completion(body.prompt)

    res.status(201).json({ msg: result })
}