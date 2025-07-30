import google.generativeai as genai
import json
import re
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("AIzaSyDUClq0SgIcsHqjtQzpHpr7FcPkyVQMWOM")
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")

PROMPT_TEMPLATE = """
तुम एक स्मार्ट नागरिक शिकायत प्रणाली हो...  # shortened for brevity
Conversation:
{conversation_log}
"""


def ask_gemini_followup_or_result(conversation_log):
    prompt = PROMPT_TEMPLATE.format(conversation_log=conversation_log)
    response = model.generate_content(prompt)
    text = response.text.strip()
    print("🔁 Gemini Response:", text)
    return text


def is_structured_json(text):
    try:
        match = re.search(r"\{[\s\S]*\}", text)
        if match:
            parsed = json.loads(match.group())
            if "शिकायत" in parsed:
                return parsed
    except json.JSONDecodeError:
        return None
    return None