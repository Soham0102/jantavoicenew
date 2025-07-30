# backend/utils/telegram_utils.py

from telegram import Bot
import asyncio
import os
import sys

# Import the speak_hindi() from the voice bot (cross-folder import)
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../voice_bot")))
from voice_bot.voice_bot_hindi import speak_hindi

TELEGRAM_BOT_TOKEN = '8068514104:AAGg0uIpLrDjPoAcvhM7bRHJuu50sWCxHXI'
TELEGRAM_CHAT_ID = '1659217344'

async def _send_message_async(data, complaint_id):
    bot = Bot(token=TELEGRAM_BOT_TOKEN)

    message = f"""📢 आपकी शिकायत दर्ज हो गई है!

📝 आपकी शिकायत: "{data.get('शिकायत')}"
👤 नाम: {data.get('शिकायतकर्ता का नाम')}
📍 स्थान: {data.get('स्थान')}
📞 मोबाइल: {data.get('मोबाइल नंबर')}


हम आपकी समस्या के समाधान के लिए जल्द से जल्द कार्रवाई करेंगे।
"""

    await bot.send_message(chat_id=TELEGRAM_CHAT_ID, text=message, parse_mode='Markdown')
    speak_hindi("आपकी शिकायत टेलीग्राम पर भेज दी गई है। धन्यवाद।")

def send_telegram_message(data, complaint_id):
    asyncio.run(_send_message_async(data, complaint_id))