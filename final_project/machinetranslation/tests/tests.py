import unittest
from translator import frenchToEnglish, englishToFrench

class TestTranslator(unittest.TestCase):
    def test_frenchToEnglish(self):
        self.assertEqual(frenchToEnglish("Bonjour"), "Hello")
        self.assertEqual(frenchToEnglish("Null"), "Null")
        self.assertNotEqual(frenchToEnglish("Bonjour"), "Goodbye")
        
    def test_englishToFrench(self):
        self.assertEqual(englishToFrench("Hello"), "Bonjour")
        self.assertEqual(englishToFrench("Null"), "Null")
        self.assertEqual(englishToFrench("Hello"), "Oui")


if __name__ == '__main__':
    unittest.main()