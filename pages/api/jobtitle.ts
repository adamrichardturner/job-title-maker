import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'

interface OpenAIResponse {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: {
    text: string
    index: number
    logprobs: null
    finish_reason: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const userJobTitle: string = req.body.title

  // Construct the message for OpenAI's ChatGPT
  const prompt = `Create a funny and exaggerated LinkedIn title based on this job title: ${userJobTitle}`

  try {
    const response: AxiosResponse<OpenAIResponse> = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const generatedTitle: string = response.data.choices[0].text.trim()
    res.status(200).json({ title: generatedTitle })
  } catch (error: any) {
    console.error(
      'Error generating title:',
      error.response ? error.response.data : error.message,
    )
    res.status(500).json({ error: 'Failed to generate title' })
  }
}
