from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import os
import time

class TestSidebar(LiveServerTestCase):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.selenium = webdriver.Chrome()
        cls.selenium.implicitly_wait(10)

    @classmethod
    def tearDownClass(cls):
        cls.selenium.quit()
        super().tearDownClass()

    def test_sidebar_elements(cls):
        cls.selenium.get(cls.live_server_url)
        time.sleep(2)

        # Check if the sidebar is present
        sidebar = cls.selenium.find_element(By.CLASS_NAME, 'sidebar-container')
        cls.assertIsNotNone(sidebar)

        # Check the presence of logo, company name, and buttons
        logo = cls.selenium.find_element(By.CLASS_NAME, 'header-logo')
        cls.assertIsNotNone(logo)

        company_name = cls.selenium.find_element(By.CLASS_NAME, 'company-name')
        cls.assertIsNotNone(company_name)

        new_task_button = cls.selenium.find_element(By.CLASS_NAME, 'new-task-button')
        cls.assertIsNotNone(new_task_button)

        menu_header = cls.selenium.find_element(By.CLASS_NAME, 'header-text')
        cls.assertEqual(menu_header.text, 'menu')

    def test_toggle_sidebar(self):
        self.selenium.get(self.live_server_url)
        time.sleep(2)

        # Initially, sidebar should be expanded
        sidebar_expanded = self.selenium.find_element(By.CLASS_NAME, 'sidebar-expanded')
        self.assertIsNotNone(sidebar_expanded)

        # Click the close button to collapse the sidebar
        close_button = self.selenium.find_element(By.CLASS_NAME, 'sidebar-opened-button')
        close_button.click()
        time.sleep(1)

        # Check if sidebar is collapsed
        sidebar_collapsed = self.selenium.find_element(By.CLASS_NAME, 'sidebar-closed-button')
        self.assertIsNotNone(sidebar_collapsed)

        # Click the open button to expand the sidebar
        open_button = self.selenium.find_element(By.CLASS_NAME, 'sidebar-closed-button')
        open_button.click()
        time.sleep(1)

        # Check if sidebar is expanded again
        sidebar_expanded = self.selenium.find_element(By.CLASS_NAME, 'sidebar-expanded')
        self.assertIsNotNone(sidebar_expanded)

    def test_sidebar_navigation(self):
        self.selenium.get(self.live_server_url)
        time.sleep(2)

        # Click on the 'projects' link
        projects_link = self.selenium.find_element(By.CSS_SELECTOR, 'a[href="project.html"]')
        projects_link.click()
        time.sleep(2)

        # Check if the URL changed to 'project.html'
        self.assertIn('project.html', self.selenium.current_url)

        # Navigate back
        self.selenium.back()
        time.sleep(2)

        # Click on the 'overview' link
        overview_link = self.selenium.find_element(By.CSS_SELECTOR, 'a[href="login.html"]')
        overview_link.click()
        time.sleep(2)

        # Check if the URL changed to 'login.html'
        self.assertIn('login.html', self.selenium.current_url)
