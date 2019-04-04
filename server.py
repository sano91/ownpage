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

@app.route('/upload', methods=['post'])
def upload():
    picOrvideo = request.form.get('upload')
    title = request.form.get("uploadTitle")
    print(picOrvideo, title)
    return redirect('/main')


@app.route('/registration', methods=['POST'])
def registration():
    unsuccess_registration = False
    new_name = request.form.get("new_user")
    new_password = request.form.get("new_password")
    print(new_name, new_password)
    new_user = data_manager.add_new_user(new_name, new_password)
    if new_user == 1:
        return render_template('main.html', unsuccess_registration=True)
    else:
        return redirect('/main')
@app.route('/login', methods=['post'])
def login():
    user_name = request.form.get('user_name')
    password = request.form.get('password')
    valid_user = data_manager.get_username(user_name)
    if valid_user == 1:
        return render_template('main.html', invalid_user=True)
    else:
        validation = data_manager.get_validation(user_name, password)
        if validation == True:
            session['username'] = user_name
            return redirect('/main')
        else:
            return render_template('main.html', invalid_user=True)

@app.route('/fibonacci')
def fibonacci():
    return render_template("fibonacci.html")

@app.route('/pets')
def pets():
    return render_template('pets.html')

@app.route('/tic-tac-toe')
def tic():
    return render_template('tictac.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('main'))

@app.route('/dragula')
def ants():
    return render_template('dragula.html')

if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
    )
