from django import template

register = template.Library()

def cuts(value,arg):
    return value.replace(arg,'')

register.filter('cuts',cuts)