from functools import wraps
from flask_login import current_user
from flask import abort, session



def donor_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not current_user.is_authenticated or current_user.role != "donor":
            abort(403)
        return f(*args, **kwargs)
    return decorated


def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not current_user.is_authenticated or not current_user.is_admin:
            abort(403)
        return f(*args, **kwargs)
    return decorated


def hospital_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get("hospital_id"):
            abort(403)
        return f(*args, **kwargs)
    return decorated
