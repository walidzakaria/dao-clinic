import datetime
import re

from django.utils import timezone

from configurations.models import Coupon


def convert_to_date(str_date):
    """ Validates & convert string date into date object """
    result = None
    x = re.compile(r'^\d{2}\-\d{2}\-\d{4}$')
    validated_date = x.match(str_date)
    if validated_date:
        result = datetime.datetime.strptime(str_date, '%d-%m-%Y').date()
    return  result


def get_valid_coupon(code):
    """ :return valid coupon object """
    today = timezone.now()
    coupon = Coupon.objects.filter(
        valid_from__lte=today).filter(
        valid_till__gte=today).filter(code=code).first()
    return coupon


def get_valid_coupon_by_id(id):
    """ :return valid coupon object """
    today = timezone.now()
    coupon = Coupon.objects.filter(
        valid_from__lte=today).filter(
        valid_till__gte=today).filter(id=id).first()
    return coupon
