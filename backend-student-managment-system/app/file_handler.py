import json

FILE_PATH = "data/students.json"


def load_students():
    try:
        with open(FILE_PATH, "r") as file:
            return json.load(file)
    except:
        return []


def save_students(students):
    with open(FILE_PATH, "w") as file:
        json.dump(students, file, indent=4)