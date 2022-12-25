import express from 'express'
import asyncHandler from 'express-async-handler'
import { completionController } from './openai/completionController.js'

const router = express.Router()

router.post('/openai/completion', asyncHandler(completionController))

export default router

