from django.conf.urls.defaults import *

urlpatterns = patterns('',
    (r'^', include('sample_app.urls')),
)
