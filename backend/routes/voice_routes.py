from flask import Blueprint, jsonify
from voice_bot.jantavoice import start_conversation

voice_routes = Blueprint('voice_routes', __name__)

@voice_routes.route('/api/voice-complaint', methods=['GET'])
def handle_voice_complaint():
    try:
        final_result = start_conversation()
        return jsonify({"status": "success", "data": final_result})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})
