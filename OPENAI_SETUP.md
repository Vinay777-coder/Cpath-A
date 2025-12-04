# OpenAI API Setup Guide (RECOMMENDED)

## Step 1: Get OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create account
3. Click "Create new secret key"
4. Name it "Pathuu Chat" and copy the key

## Step 2: Add to Environment  
Add to your .env.local file:
```
OPENAI_API_KEY=sk-your_api_key_here
```

## Step 3: Restart Server
```bash
npm run dev
```

**Pros:**
- Most reliable responses
- Great conversation context
- Higher rate limits
- Professional quality answers
- Better understanding of technical topics

**Cons:**
- Costs money after free trial ($3 credit)
- Roughly $0.002 per conversation
- Need credit card for continued use

## Pricing
- GPT-3.5-turbo: $0.0015/1K tokens (input) + $0.002/1K tokens (output)
- Average conversation: ~500 tokens = $0.002
- 1000 conversations ≈ $2

**This is the BEST option for production use!**