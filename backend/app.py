from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.complaint_routes import complaint_routes
from routes.admin_routes import admin_routes
import os
from routes.voice_routes import voice_routes
from routes.voice_bot_route import voice_bot


# Import voice bot logic
from voice_bot.jantavoice import start_conversation

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = "super_secret_key_change_later"

app.register_blueprint(complaint_routes)
app.register_blueprint(admin_routes)
app.register_blueprint(voice_routes)
app.register_blueprint(voice_bot)

# Route to trigger voice complaint from frontend
@app.route("/api/voice-complaint", methods=["POST"])
def voice_complaint():
    try:
        result = start_conversation()
        return jsonify({"message": "Voice complaint submitted successfully!", "data": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)

