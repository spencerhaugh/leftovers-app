

class User(db.Document):
    username = db.StringField(required=True, unique=True)
    email = db.StringField(required=True, unique=True)



