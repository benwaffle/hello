#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;
const Lang = imports.lang;

const HelloWindow = new Lang.Class({
  Name: 'HelloWindow',
  Extends: Gtk.Window,

  _init: function(app) {
    this.parent({ application: app,
                  default_width: 600,
                  default_height: 300 });

    let headerbar = new Gtk.HeaderBar({
      'visible': true,
      'show-close-button': true,
      'title': 'Hello, World!'
    });
    this.set_titlebar(headerbar);

    let label = new Gtk.Label({
      'visible': true,
      'use-markup': true,
      'label': '<span size="larger" weight="bold">Hello, World!</span>'
    });
    this.add(label);
  }
});

let app = new Gtk.Application({
  'application-id': 'com.example.Hello',
  'flags': Gio.ApplicationFlags.FLAGS_NONE
});

app.connect('activate', function(app, event) {
  let win = app.get_active_window();

  if (win == null)
    win = new HelloWindow(app);

  win.present();
});

app.run(null);
