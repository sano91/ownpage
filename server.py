from flask import Flask, render_template, redirect, request, session, url_for, escape
import util
import data_manager
import connection
from datetime import datetime

app = Flask(__name__)

app.secret_key = b'420hokik420/'


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/main', methods=['GET', 'POST'])
def main():
    return render_template("main.html")


@app.route('/cards')
def cards():
    return render_template('cards.html')


@app.route('/policy')
def policy():
    return render_template('policy.html')


@app.route('/regis', methods=['POST'])
def regis():
    new_name = request.form.get("new_user")
    new_password = request.form.get("new_password")
    print(new_password,new_name)
    login_name = request.form.get("login_name")
    login_password = request.form.get("login_password")
    return render_template("main.html")







if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
    )
