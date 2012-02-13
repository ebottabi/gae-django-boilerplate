from google.appengine.ext.webapp import util
from google.appengine.dist import use_library

use_library('django','1.2')

def main():
    from django.core.handlers.wsgi import WSGIHandler
    application = WSGIHandler()
    util.run_wsgi_app(application)

if __name__ == "__main__":
    main()
