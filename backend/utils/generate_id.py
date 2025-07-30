import random
import string

def generate_complaint_id():
    return str(random.randint(100000, 999999))

def generate_token(length=12):
    chars = string.ascii_letters + string.digits
    return ''.join(random.choices(chars, k=length))
