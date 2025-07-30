from flask import Blueprint, jsonify
import subprocess

voice_bot = Blueprint('voice_bot', __name__)

@voice_bot.route('/api/voice-complaint', methods=['GET'])
def run_voice_bot():
    try:
        # Run the jantavoice.py script
        result = subprocess.run(['python', 'jantavoice.py'], capture_output=True, text=True, timeout=120)
        return jsonify({
            "status": "success",
            "output": result.stdout
        })
    except subprocess.TimeoutExpired:
        return jsonify({"status": "error", "message": "Voice bot timed out"}), 500
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
