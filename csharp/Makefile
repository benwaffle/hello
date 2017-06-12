
all: hello.exe

# On Fedora, install mono and gtk-sharp3-devel
hello.exe: main.cs
	mcs -pkg:gtk-sharp-3.0 -out:$@ main.cs

clean:
	rm -f hello.exe
