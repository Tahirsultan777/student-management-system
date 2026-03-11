from flask import Flask
from flask_cors import CORS
from .routes import student_routes


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(student_routes)

    return app