from flask import Flask
from flask_cors import CORS
from routes.complaint_routes import complaint_routes
from routes.admin_routes import admin_routes

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Allow frontend cookies

# 🔐 Secret key for session
app.secret_key = "super_secret_key_change_later"

# 🧩 Register Blueprints
app.register_blueprint(complaint_routes)
app.register_blueprint(admin_routes)

if __name__ == "__main__":
    app.run(debug=True)
