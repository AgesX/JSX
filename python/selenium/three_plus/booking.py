from selenium import webdriver
from selenium.webdriver.common.by import By

import booking.constants as const


class Booking(webdriver.Chrome):
    def __init__(self, gg=True):
        super(Booking, self).__init__()
        # implicit wait ,
        # will allow us to wait some amount of time,
        # until the element is ready on the website
        self.implicitly_wait(15)
        self.maximize_window()
        self.tearDown = gg

    def land_first_page(self):
        self.get(const.BASE_URL)

    def change_currency(self, currency="USD"):
        btn = self.find_element(By.CSS_SELECTOR, 'button[data-tooltip-text="选择你使用的货币"]')
        btn.click()
        # 寻找元素， 包含子串
        # asterisk equal
        selectedA = self.find_element(By.CSS_SELECTOR,
                                      f'a[data-modal-header-async-url-param*="selected_currency={currency}"]')
        selectedA.click()

    def select_to_go(self, place):
        search_field = self.find_element(By.ID, "ss")
        # clear the exsiting text
        search_field.clear()
        search_field.send_keys(place)
        firstResult = self.find_element(By.CSS_SELECTOR, 'li[data-i="0"]')
        firstResult.click()

    def select_date(self, checkIn, checkOut):
        check_in = self.find_element(By.CSS_SELECTOR, f'td[data-date="{checkIn}"]')
        check_in.click()
        check_out = self.find_element(By.CSS_SELECTOR, f'td[data-date="{checkOut}"]')
        check_out.click()

    def selectAdults(self, count):
        btn = self.find_element(By.ID, "xp__guests__toggle")
        btn.click()

    # once we have finished everything
    def __exit__(self, exc_type, exc_val, exc_tb):
        # to shut down the chrome browser
        if self.tearDown:
            self.quit()
