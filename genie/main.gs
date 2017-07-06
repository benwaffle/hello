namespace Hello
	[GtkTemplate (ui = "/hello/hello-window.ui")]
	class Window : Gtk.Window
		[GtkChild]
		label : Gtk.Label

		[GtkChild]
		headerbar : Gtk.HeaderBar

def on_activate (app : GLib.Application)
	var gtk_app = app as Gtk.Application
	var window = gtk_app.get_active_window ()

	if (window == null)
		window = new Hello.Window ()
		window.application = gtk_app
		window.default_width = 600
		window.default_height = 300

	window.present ()

init
	var app = new Gtk.Application ("com.example.hello", GLib.ApplicationFlags.FLAGS_NONE);
	app.activate.connect (on_activate);
	ret : int = app.run (args)
	Process.exit (ret)

