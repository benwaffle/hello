all: hello

PKGS = gtk+-3.0
VALA_PKGS = $(foreach pkg,$(PKGS),--pkg=$(pkg))

SOURCES = main.vala

resources.c: hello.gresources.xml $(shell glib-compile-resources --generate-dependencies hello.gresources.xml)
	glib-compile-resources hello.gresources.xml --generate-source --target=resources.c --c-name hello ;

hello.c: $(SOURCES) resources.c hello.gresources.xml $(shell glib-compile-resources --generate-dependencies hello.gresources.xml)
	valac --target-glib=2.38 --gresources=hello.gresources.xml $(VALA_PKGS) main.vala -C

hello: hello.c
	gcc -g -o $@ main.c resources.c $(shell pkg-config --cflags --libs $(PKGS))

clean:
	rm -f hello main.c resources.c
