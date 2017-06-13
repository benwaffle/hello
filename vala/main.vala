[GtkTemplate (ui = "/hello/hello-window.ui")]
public class Hello.Window : Gtk.Window
{
	[GtkChild] Gtk.Label label;
	[GtkChild] Gtk.HeaderBar headerbar;
}

void on_activate (GLib.Application app)
{
	var gtk_app = app as Gtk.Application;
	var window = gtk_app.get_active_window ();

	if (window == null)
	{
		window = new Hello.Window () {
			application = gtk_app,
			default_width = 600,
			default_height = 300
		};
	}

	window.present ();
}

int main (string[] args)
{
	var app = new Gtk.Application ("com.example.hello", GLib.ApplicationFlags.FLAGS_NONE);
	app.activate.connect (on_activate);
	int ret = app.run (args);

	return ret;
}
