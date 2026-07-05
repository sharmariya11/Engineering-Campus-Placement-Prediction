from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model and preprocessor
model = joblib.load("artifacts/model.pkl")
preprocessor = joblib.load("artifacts/preprocessor.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = {
        "Gender": [request.form["Gender"]],
        "10th board": [request.form["10th_board"]],
        "10th marks": [float(request.form["10th_marks"])],
        "12th board": [request.form["12th_board"]],
        "12th marks": [float(request.form["12th_marks"])],
        "Stream": [request.form["Stream"]],
        "Cgpa": [float(request.form["Cgpa"])],
        "Internships(Y/N)": [request.form["Internship"]],
        "Training(Y/N)": [request.form["Training"]],
        "Backlog in 5th sem": [request.form["Backlog"]],
        "Innovative Project(Y/N)": [request.form["Project"]],
        "Communication level": [int(request.form["Communication"])],
        "Technical Course(Y/N)": [request.form["TechnicalCourse"]]
    }

    df = pd.DataFrame(data)

    transformed_data = preprocessor.transform(df)

    prediction = model.predict(transformed_data)

    return render_template(
        "result.html",
        prediction=prediction[0]
    )


if __name__ == "__main__":
    app.run(debug=True)