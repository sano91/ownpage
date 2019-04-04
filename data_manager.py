import connection

from psycopg2 import sql
import util


@connection.connection_handler
def add_new_user(cursor, new_name, new_password):
    submission_time = util.get_submission_time()
    new_password = util.hash_password(new_password)
    try:
        cursor.execute("""
        insert into regduser(id, hashed_password, submission_time)
        values (%(id)s, %(hashed_password)s, %(submission_time)s);
        """,
                       {'id': new_name, 'hashed_password': new_password, 'submission_time': submission_time})
    except:
        return 1


@connection.connection_handler
def get_username(cursor, username):
    try:
        cursor.execute("""select id from regduser
        where id = %(user_name)s;
        """,
                               {"user_name": username})
    except:
        return 1

@connection.connection_handler
def get_validation(cursor, user_id, pw):
    cursor.execute("""
    SELECT hashed_password FROM regduser
    WHERE id = %(id)s;
    """,
                   {'id': user_id})

    result = cursor.fetchall()
    if result:
        result = result[0]['hashed_password']
        validation = util.verify_password(pw, result)
        if validation == True:
            return True
        else:
            return False
    else:
        return False

