import hashlib


def hash_room(room_code):
    hash_code = hashlib.md5()
    hash_code.update(str(room_code).encode('utf8'))
    return hash_code.hexdigest()[:12]
