
all: hello.exe

# On Fedora, install mono, fsharp, and gtk-sharp3-devel
hello.exe: main.fs
	fsharpc `pkg-config --libs gtk-sharp-3.0` --out:$@ main.fs

clean:
	rm -f hello.exe
