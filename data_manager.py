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


@connection.connection_handler
def new_api_wars_user(cursor, new_name, new_password):
    new_password = util.hash_password(new_password)

    cursor.execute("""
    insert into starwarsuser(name, password)
    values (%(name)s, %(hashed_password)s);
    """,
                   {'name': new_name, 'hashed_password': new_password})


@connection.connection_handler
def apiwarslogin(cursor, name, password):
    cursor.execute("""
    select password from starwarsuser
    where name = %(name)s;
    """,
                   {'name': name})
    result = cursor.fetchall()
    print(password, result)
    if len(result) > 0:
        validation = util.verify_password(password, result[0]["password"])
        if validation == True:
            return True
    else:
        return False


@connection.connection_handler
def check_planet(cursor, planet):
    cursor.execute("""
    select votes from planetvotes
    where planet_name = %(planet)s
    """,
                   {'planet': planet})
    planet = cursor.fetchone()
    return planet


@connection.connection_handler
def get_planet_vote(cursor, planet):
    cursor.execute("""
    select votes from planetvotes
    where planet_name = %(planet)s;
    """,
                   {'planet': planet})
    return cursor.fetchone()


@connection.connection_handler
def add_planet_vote(cursor, planet, vote):
    cursor.execute("""
    update planetvotes
    set votes = %(vote)s
    where planet_name = %(planet)s;
    """,
                   {'vote': vote, 'planet': planet})


@connection.connection_handler
def get_planet_votes(cursor):
    cursor.execute("""
    select planet_name, votes from planetvotes
    order by votes desc;
    """)
    return cursor.fetchall()


@connection.connection_handler
def add_new_planet(cursor, planet):
    cursor.execute("""
    insert into planetvotes(planet_name,  votes)
    values(%(planet)s, 1) 
    """,
                   {'planet': planet})
