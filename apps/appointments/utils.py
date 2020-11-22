import datetime
import re


def convert_to_date(str_date):
    """ Validates & convert string date into date object """
    result = None
    x = re.compile(r'^\d{2}\-\d{2}\-\d{4}$')
    validated_date = x.match(str_date)
    if validated_date:
        result = datetime.datetime.strptime(str_date, '%d-%m-%Y').date()
    return  result
