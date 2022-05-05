import os

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

print(os.environ['HOME'])

driver = webdriver.Chrome()
driver.get("https://jqueryui.com/resources/demos/progressbar/download.html")

# be set up as a timeout

# did not really wait 3 seconds
# if the element is already there in that web page

# just set once
# be basically applied across all the elements
driver.implicitly_wait(3)

btnA = driver.find_element(By.ID, "downloadButton")
btnA.click()

progressA = driver.find_element(By.CLASS_NAME, "progress-label")
print(f"{progressA.text}")

# explicit wait
# wait for unexpected condition

WebDriverWait(driver, 30).until(
    EC.text_to_be_present_in_element(
        # element filtration
        (By.CLASS_NAME, "progress-label"),
        'Complete!'
        # text expected
    )
)

print(f"{progressA.text}")
