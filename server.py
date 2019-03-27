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

@app.route('/main')
def main():
    return render_template("main.html")

@app.route('/cards')
def cards():
    return render_template('cards.html')

@app.route('/policy')
def policy():
    return render_template('policy.html')

if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
    )
