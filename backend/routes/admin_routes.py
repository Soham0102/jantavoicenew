from flask import Blueprint, request, session, jsonify
from config import complaints_collection
from bson.objectid import ObjectId

admin_routes = Blueprint("admin_routes", __name__)

# Dummy credentials
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"

# 🔐 Admin Login
@admin_routes.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.json
    if data.get("username") == ADMIN_USERNAME and data.get("password") == ADMIN_PASSWORD:
        session["admin_logged_in"] = True
        return jsonify({"success": True, "message": "Login successful."})
    return jsonify({"success": False, "message": "Invalid credentials."}), 401

# 🚪 Admin Logout
@admin_routes.route("/api/admin/logout", methods=["POST"])
def admin_logout():
    session.pop("admin_logged_in", None)
    return jsonify({"success": True, "message": "Logged out successfully."})

# 📅 Get all complaints
@admin_routes.route("/api/admin/complaints", methods=["GET"])
def get_all_complaints():
    if not session.get("admin_logged_in"):
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    complaints = list(complaints_collection.find({}, {"_id": 0}))
    return jsonify({"success": True, "complaints": complaints})

# ✅ Update complaint status: Pending / Processing / Resolved
@admin_routes.route("/api/admin/update_status", methods=["POST"])
def update_status():
    if not session.get("admin_logged_in"):
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    data = request.json
    complaint_id = data.get("id")
    new_status = data.get("status")

    if not complaint_id or not new_status:
        return jsonify({"success": False, "message": "Missing ID or status"}), 400

    result = complaints_collection.update_one(
        {"id": complaint_id},
        {"$set": {"status": new_status}}
    )

    if result.modified_count == 1:
        return jsonify({"success": True, "message": f"Status updated to {new_status}."})
    else:
        # 🔁 Check if complaint exists with same status
        exists = complaints_collection.find_one({"id": complaint_id})
        if exists:
            return jsonify({"success": True, "message": "Status already set."})
        return jsonify({"success": False, "message": "Complaint not found."})
