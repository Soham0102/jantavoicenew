from flask import Blueprint, request, jsonify, session
from config import complaints_collection
from utils.generate_id import generate_complaint_id, generate_token
import datetime

complaint_routes = Blueprint("complaint_routes", __name__)

@complaint_routes.route("/api/complaint", methods=["POST"])
def submit_complaint():
    try:
        data = request.json

        complaint_id = generate_complaint_id()
        token = generate_token()

        complaint = {
            "id": complaint_id,
            "token": token,
            "type": "text",
            "name": data.get("name"),
            "location": data.get("location"),
            "department": data.get("department"),
            "description": data.get("description"),
            "timestamp": datetime.datetime.utcnow(),
            "status": "Pending"
        }

        complaints_collection.insert_one(complaint)
        print(f"[New Complaint] ID: {complaint_id}, Token: {token}")

        return jsonify({
            "success": True,
            "message": "Complaint submitted successfully.",
            "complaintId": complaint_id,
            "token": token
        }), 201

    except Exception as e:
        return jsonify({
            "success": False,
            "message": "Submission failed.",
            "error": str(e)
        }), 500

@complaint_routes.route("/api/complaint/status", methods=["PUT"])
def update_complaint_status():
    try:
        if "admin_logged_in" not in session:
            return jsonify({"success": False, "message": "Unauthorized"}), 401

        data = request.json
        complaint_id = data.get("id")
        new_status = data.get("status")

        if not complaint_id or not new_status:
            return jsonify({"success": False, "message": "Invalid input"}), 400

        result = complaints_collection.update_one(
            {"id": complaint_id},
            {"$set": {"status": new_status}}
        )

        if result.modified_count == 0:
            return jsonify({"success": False, "message": "No complaint found with the given ID"}), 404

        return jsonify({"success": True, "message": "Complaint status updated successfully"}), 200

    except Exception as e:
        print("Error updating status:", e)
        return jsonify({
            "success": False,
            "message": "Internal server error",
            "error": str(e)
        }), 500
