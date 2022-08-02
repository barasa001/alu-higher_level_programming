#!/usr/bin/python3
"""Script that takes in url and an email, sends a post request to the url"""
import requests
import sys


if __name__ == "__main__":
    r = requests.post(sys.argv[1], data={'email': sys.argv[2]})
    print(r.text)
