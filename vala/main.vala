[GtkTemplate (ui = "/hello/hello-window.ui")]
public class Hello.Window : Gtk.Window {
	[GtkChild] Gtk.Label label;
	[GtkChild] Gtk.HeaderBar headerbar;

	public Window (Gtk.Application app) {
		Object (application: app);
	}
}

int main (string[] args) {
	var app = new Gtk.Application ("com.example.hello", ApplicationFlags.FLAGS_NONE);
	app.activate.connect (() => {
		if (app.active_window == null) {
			new Hello.Window (app).show_all();
		}
		app.active_window.present ();
	});
	return app.run (args);
}
