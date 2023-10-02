# Linkedin Bio Generator

This is a [Next.js](https://nextjs.org/) TypeScript project that integrates with OpenAI's [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis) to produce a humorous recommendation of a Linkedin Bio based on the user's input job title.

The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled with Tailwind CSS.

It utilises server side rendering via Next.js API routes to protect the API key.

# Preview

![](preview.png)

# Live Demo

You can view this project in its most up-to-date form at [https://linkedin-bio.vercel.app/](https://linkedin-bio.vercel.app/)

## Getting Started

Register for an API key with OpenAI's [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis) and ensure you have sufficient credits in your quota.

In the project root directory store a **.env.local** file and save within it your ChatGPT API key as follows:

```bash
OPENAI_API_KEY="PUT_KEY_HERE"
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
