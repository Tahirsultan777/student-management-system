from flask import Blueprint, request, jsonify
from .file_handler import load_students, save_students

student_routes = Blueprint("students", __name__)


@student_routes.route("/students", methods=["GET"])
def get_students():
    students = load_students()
    return jsonify(students)


@student_routes.route("/students", methods=["POST"])
def add_student():
    students = load_students()
    data = request.json

    new_student = {
        "id": len(students) + 1,
        "name": data["name"],
        "age": data["age"],
        "course": data["course"]
    }

    students.append(new_student)
    save_students(students)

    return jsonify(new_student), 201


@student_routes.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    students = load_students()
    students = [s for s in students if s["id"] != id]

    save_students(students)

    return jsonify({"message": "Student deleted"})