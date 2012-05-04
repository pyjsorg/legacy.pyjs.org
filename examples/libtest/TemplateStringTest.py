import UnitTest
from string import Template
import sys

class TemplateStringTest(UnitTest.UnitTest):
    def test_substitute(self):
        try:
            self.assertEqual(Template('This is a test of the $first method of the $second class'
                                  ).substitute(first='substitute',second='Template'),
                            'This is a test of the substitute method of the Template class')
            self.assertEqual(Template('This is a test of the ${first} method of the ${second} class'
                                  ).substitute(first='substitute',second='Template'),
                            'This is a test of the substitute method of the Template class')
        except:
            self.fail('__metaclass__ problem, issue #658')


    def test_safe_substitute(self):
        try:
            self.assertEqual(Template('This is a test of the $first method of the $second class'
                                  ).safe_substitute(first='safe_substitute'),
                            'This is a test of the safe_substitute method of the $second class')
            self.assertEqual(Template('This is a test of the ${first} method of the ${second} class'
                                  ).safe_substitute(first='safe_substitute'),
                            'This is a test of the safe_substitute method of the ${second} class')
        except:
            self.fail('__metaclass__ problem, issue #658')

    def test__invalid1(self):
        kwargs = {'first':'substitute','second':'Template'}
        self.assertRaises(ValueError, Template('This is a test of the $0irst method of the $second class').substitute,**kwargs)

    def test__invalid2(self):
        kwargs = {'first':'substitute','second':'Template'}
        self.assertRaises(KeyError, Template('This is a test of the $first method of the $se~cond class').substitute,**kwargs)


