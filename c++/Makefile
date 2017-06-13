all: hello

WARNINGS = -Wall
PKGS = gtkmm-3.0
DEBUG = -g

SOURCES = \
	hello-window.cpp \
	main.cpp

HEADERS = hello-window.hpp

resources.c: hello.gresources.xml $(shell glib-compile-resources --generate-dependencies hello.gresources.xml)
	glib-compile-resources hello.gresources.xml --generate-header --target=resources.h --c-name hello ; \
	glib-compile-resources hello.gresources.xml --generate-source --target=resources.c --c-name hello ;

hello: $(SOURCES) $(HEADERS) hello.gresources.xml resources.c
	$(CXX) -o hello $(WARNINGS) $(DEBUG) $(SOURCES) resources.c $(shell pkg-config --cflags --libs $(PKGS))

clean:
	rm -f hello resources.c resources.h
