from voice_bot_hindi import speak_hindi, listen_hindi
from gemini_ai import ask_gemini_followup_or_result, is_structured_json
from backend.utils.telegram_utils import send_telegram_message
import json
import requests

def stream_voice_complaint():
    conversation = []
    yield "🤖 बोलें: नमस्ते! जनतावॉइस में आपका स्वागत है। कृपया अपनी समस्या बताएं।"

    while True:
        user_reply = listen_hindi()
        if not user_reply:
            yield "🤖 मैंने कुछ सुना नहीं। कृपया दोहराएं।"
            continue

        conversation.append(f"यूज़र: {user_reply}")
        yield f"🧑‍💬 यूज़र: {user_reply}"

        chat_log = "\n".join(conversation)
        ai_reply = ask_gemini_followup_or_result(chat_log)
        json_result = is_structured_json(ai_reply)

        if json_result:
            summary = json_result.get("बोलने_लायक_सारांश", "आपकी शिकायत दर्ज की गई है।")
            yield f"🤖 सारांश: {summary}"

            announcement = json_result.get("अंतिम_घोषणा", "आपकी शिकायत संबंधित विभाग को भेज दी गई है।")
            yield f"📢 घोषणा: {announcement}"

            yield f"✅ JSON तैयार:\n{json.dumps(json_result, ensure_ascii=False)}"

            # Send to backend
            try:
                res = requests.post("http://localhost:5000/api/complaints", json=json_result)
                yield f"📬 Backend से जवाब: {res.json()}"
            except Exception as e:
                yield f"❌ Backend Error: {str(e)}"

            # Telegram
            send_telegram_message(json_result, json_result.get("complaint_id", "CMP-UNKNOWN"))

            return

        yield f"🤖 सिस्टम: {ai_reply}"
        conversation.append(ai_reply)
