#!/usr/bin/env gjs

imports.gi.versions.Gtk = '3.0';

const ByteArray = imports.byteArray;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const System = imports.system;

const UI_TEMPLATE = ByteArray.fromString(`
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <template class="HelloWindow" parent="GtkWindow">
    <child type="titlebar">
      <object class="GtkHeaderBar" id="headerbar">
        <property name="visible">true</property>
        <property name="show-close-button">true</property>
        <property name="title">Hello, World!</property>
      </object>
    </child>
    <child>
      <object class="GtkLabel" id="label">
        <property name="label">Hello, World!</property>
        <property name="visible">true</property>
        <attributes>
          <attribute name="weight" value="bold"/>
          <attribute name="scale" value="2"/>
        </attributes>
      </object>
    </child>
  </template>
</interface>
`);

const HelloWindow = new Lang.Class({
    Name: 'HelloWindow',
    GTypeName: 'HelloWindow',
    Extends: Gtk.Window,

    Template: UI_TEMPLATE,

    _init(application) {
        this.parent({
            application,
            default_width: 600,
            default_height: 300,
        });
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
