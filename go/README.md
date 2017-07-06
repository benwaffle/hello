# Golang Hello World GTK+3 example
## Build instructions

To build the example, you need to have the Go compiler installed and you need
to have gotk3 bindings installed.

To install Go compiler on Fedora, for example, execute:

> \\# dnf install golang

To be able to use the compiler, you need to setup the GOPATH environment
variable, if you haven't already.

> $ mkdir ~/go

> $ echo 'export GOPATH=~/go' >> .bashrc

> $ source ~/.bashrc

Afterwards, get the GTK+3 golang bindings with:

> $ go get github.com/gotk3/gotk3/gtk

After the requirements are satisfied, you can build and run the example by
executing:

> $ go build -o hello hello.go && ./hello

To build without debug data, to get smaller binary:

> $ go build -ldflags="-s -w" -o hello hello.go && ./hello

If you wish to just run the code, in an interpreter-y way:

> $ go run ./hello.go

