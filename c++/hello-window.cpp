#include <gtk/gtk.h>

#include "hello-window.hpp"


HelloWindow::HelloWindow()
  : Glib::ObjectBase("HelloWindow")
  , headerbar(nullptr)
  , label(nullptr)
{
  builder = Gtk::Builder::create_from_resource("/hello/hello-window.ui", "HelloWindow");
  builder->get_widget("headerbar", headerbar);
  builder->get_widget("label", label);
}
