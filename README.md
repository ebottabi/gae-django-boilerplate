# Google App Engine: Django Boilerplate
This boilerplate gets you started to use Django 1.2 on Google App Engine. It has one "Hello, world" app to start you off with and will run right off as-is (you should still complete initial setup below). 

## Initial Setup
1. Rename the sample_app folder to your choosing.
2. In settings.py:
    - Change the 'sample_app' entry in the INSTALLED_APPS to your app folder name
    - Change the SECRET_KEY variable to something else super complex
3. In urls.py, change the reference to 'sample_app' to your app folder name

## The sample_app app (an HTML5 boiler plate)
This app has one view, no models, and links to one static html page. The html page is a HTML5 boilerplate page which has jQuery, Modernizr, and Google Analytics hooks built in. It also links and serves robots.txt, humans.txt, crossbrowser.xml, and icons.
