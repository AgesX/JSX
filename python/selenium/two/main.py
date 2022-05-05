import os

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

print(os.environ['HOME'])

driver = webdriver.Chrome()
driver.get("https://syntaxprojects.com/basic-first-form-demo.php")
driver.implicitly_wait(5)
inputOne = driver.find_element(By.ID, "sum1")

inputTwo = driver.find_element(By.ID, "sum2")

inputOne.send_keys(111)

inputTwo.send_keys(Keys.NUMPAD1, Keys.NUMPAD9)

# CSS selector
# specify the HTML element,
# followed by the key value match
btn = driver.find_element(By.CSS_SELECTOR, 'button[onclick="return total()"]')
btn.click()
