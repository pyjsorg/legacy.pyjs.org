#!/usr/bin/env python
# -*- coding: utf-8 -*-


TARGETS = {
    'LibTest.py': dict(
        options=[
            '--no-compile-inplace',
            '--strict',
            '--dynamic',
            '^I18N[.].*.._..',
        ],
        additional_args=[
            'I18N/domain/subdomain/en_US.py',
            'I18N/domain/en_US.py',
            'I18N/en_US.py',
        ],
    ),
}


PACKAGE = {
    'title': 'libtest',
    'desc': 'libtest example',
}


def setup(targets):
    '''Setup example for translation, MUST call util.setup(targets).'''
    util.setup(targets)


def translate():
    '''Translate example, MUST call util.translate().'''
    util.translate()


def install(package):
    '''Install and cleanup example module. MUST call util.install(package)'''
    util.install(package)


##---------------------------------------##
# --------- (-: DO NOT EDIT :-) --------- #
##---------------------------------------##


import sys
import os


examples = head = os.path.abspath(os.path.dirname(__file__))
while os.path.split(examples)[1].lower() != 'examples':
    examples = os.path.split(examples)[0]
    if not examples:
        raise ValueError("Cannot determine examples directory")
sys.path.insert(0, os.path.join(examples))
from _examples import util
sys.path.pop(0)

util.init(head)

setup(TARGETS)
translate()
install(PACKAGE)
