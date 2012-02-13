from google.appengine.ext.webapp import util
from django.core.handlers.wsgi import WSGIHandler

def main():
    application = WSGIHandler()
    util.run_wsgi_app(application)

if __name__ == "__main__":
    main()
