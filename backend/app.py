from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def get_db():
    return sqlite3.connect("./backend/database.db")

@app.route("/jobs", methods=["GET"])
def get_jobs():
    conn = get_db()
    jobs = conn.execute("SELECT * FROM jobs").fetchall()
    conn.close()

    return jsonify([{
        "id": j[0],
        "company": j[1],
        "role": j[2],
        "status": j[3],
        "notes": j[4]
    } for j in jobs])

@app.route("/jobs", methods=["POST"])
def add_job():
    data = request.json

    conn = get_db()
    conn.execute(
        "INSERT INTO jobs (company, role, status, notes) VALUES (?, ?, ?, ?)",
        (data["company"], data["role"], data["status"], data["notes"])
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "Job added"})

@app.route("/jobs/<int:id>", methods=["DELETE"])
def delete_job(id):
    conn = get_db()
    conn.execute("DELETE FROM jobs WHERE id = ?", (id,))
    conn.commit()
    conn.close()

    return jsonify({"message": "Deleted"})

if __name__=="__main__":
    app.run()