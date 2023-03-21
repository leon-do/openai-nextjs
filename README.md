# OpenAI API

## Getting Started

Create `.env`

Add OpenAI API Key: https://platform.openai.com/account/api-keys

```bash
OPENAI_API_KEY=sk-keyhere
```

First, run the development server:

```bash
npm run dev
```

## Endpoints

### http://localhost:3000/api/chat

Given a chat conversation, the model will return a chat completion response.

### http://localhost:3000/api/completion

Given a prompt, the model will return one or more predicted completions, and can also return the probabilities of alternative tokens at each position.

### http://localhost:3000/api/image/createImage

Creates an image given a prompt.

### http://localhost:3000/api/edit

Given a prompt and an instruction, the model will return an edited version of the prompt.
