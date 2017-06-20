#!/usr/bin/env gjs

imports.gi.versions.Gtk = '3.0';

const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const System = imports.system;

const HelloWindow = new Lang.Class({
    Name: 'HelloWindow',
    Extends: Gtk.Window,

    _init(application) {
        this.parent({
            application,
            default_width: 600,
            default_height: 300,
        });

        let headerbar = new Gtk.HeaderBar({
            visible: true,
            show_close_button: true,
            title: 'Hello, World!',
        });
        this.set_titlebar(headerbar);

        let label = new Gtk.Label({
            visible: true,
            use_markup: true,
            label: '<span size="larger" weight="bold">Hello, World!</span>',
        });
        this.add(label);
    },
});

let app = new Gtk.Application({
    application_id: 'com.example.Hello',
    flags: Gio.ApplicationFlags.FLAGS_NONE,
});

app.connect('activate', app => {
    let win = app.get_active_window();

    if (!win)
        win = new HelloWindow(app);

    win.present();
});

app.run([System.programInvocationName].concat(ARGV));
