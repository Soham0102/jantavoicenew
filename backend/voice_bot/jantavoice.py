import os
import sys

# Ensure parent directory is in path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from voice_bot.voice_bot_hindi import speak_hindi, listen_hindi
from voice_bot.gemini_ai import ask_gemini_followup_or_result, is_structured_json
import json
import requests
from utils.telegram_utils import send_telegram_message


def send_to_backend(json_data):
    url = "http://localhost:5000/api/complaint"   # ← singular
    try:
        res = requests.post(url, json=json_data)
        print("✅ Backend response:", res.json())
    except Exception as e:
        print("❌ Failed to send to backend:", e)



def start_conversation():
    # Simplified flow with fixed follow-up questions for reliability
    conversation = []
    # First prompt
    speak_hindi("नमस्ते! जनतावॉइस में आपका स्वागत है। कृपया अपनी समस्या बताएं।")
    
    # 1. Collect issue description
    while True:
        issue = listen_hindi()
        if issue:
            conversation.append(f"यूज़र: {issue}")
            break
        speak_hindi("कृपया समस्या बताएं।")

    # 2. Collect location
    speak_hindi("कृपया उस स्थान का नाम बताएं जहाँ समस्या है।")
    while True:
        location = listen_hindi()
        if location:
            conversation.append(f"यूज़र: {location}")
            break
        speak_hindi("कृपया स्थान बताएं।")

    # 3. Collect user name
    speak_hindi("कृपया अपना नाम बताएं।")
    while True:
        name = listen_hindi()
        if name:
            conversation.append(f"यूज़र: {name}")
            break
        speak_hindi("कृपया नाम बताएं।")

    # 4. Collect mobile number (spoken digits)
    speak_hindi("कृपया अपना दस अंकों का मोबाइल नंबर बताएं।")
    while True:
        mobile = listen_hindi()
        if mobile and len(mobile.replace(" ", "")) >= 10:
            mobile = ''.join(filter(str.isdigit, mobile))
            conversation.append(f"यूज़र: {mobile}")
            break
        speak_hindi("कृपया सही मोबाइल नंबर बताएं।")

    # Build structured JSON
    result = {
        "शिकायत": issue,
        "स्थान": location,
        "शिकायतकर्ता का नाम": name,
        "मोबाइल नंबर": mobile,
        "बोलने_लायक_सारांश": f"शिकायत {location} से संबंधित है।",
        "अंतिम_घोषणा": "शिकायत दर्ज हो चुकी है और संबंधित विभाग को भेज दी गई है। धन्यवाद!"
    }

    # Speak summary and announcement
    speak_hindi(result["बोलने_लायक_सारांश"])
    speak_hindi(result["अंतिम_घोषणा"])

    # Print and save
    print("अंतिम शिकायत:")
    print(json.dumps(result, indent=2, ensure_ascii=False))
    with open("complaints.json", "a", encoding="utf-8") as file:
        file.write(json.dumps(result, ensure_ascii=False) + "\n")

    # Send to backend and Telegram
    send_to_backend(result)
    send_telegram_message(result, result.get("complaint_id", "CMP-UNKNOWN"))

    # Return for API
    return {"output": "\n".join(conversation), **result}


if __name__ == "__main__":
    start_conversation()
