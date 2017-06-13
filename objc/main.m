#import <Foundation/Foundation.h>

#import "CoreGTK/CGTKLabel.h"
#import "CoreGTK/CGTKWindow.h"
#import "CoreGTK/CGTKHeaderBar.h"
#import "CoreGTK/CGTKSignalConnector.h"
#import "CoreGTK/CGTK.h"

/*
 * TODO: use GTK templates.
 * TODO: add GtkApplication support to CoreGTK and use it in this example.
 */

int main(int argc, char *argv[])
{
    NSAutoreleasePool *pool;
    CGTKWindow *window;
    CGTKHeaderBar *headerbar;
    CGTKLabel *label;

    /*
     * Create an autorelease pool that will be used for
     * all [object autorelease] operations.
     */
    pool = [NSAutoreleasePool new];

    /*
     * Initialize GTK+ with arguments passed on the command line.
     */
    [CGTK autoInitWithArgc:argc andArgv:argv];

    /*
     * Create a new window.
     */
    window = [[CGTKWindow alloc] init:GTK_WINDOW_TOPLEVEL];
    [window setDefaultSizeWithWidth:600 andHeight:300];

    /*
     * When the window is closed, quit the main event loop,
     * so that we can release the memory and exit this program.
     * NOTE: we can't use "delete-event" here, because CGTKSignalConnector
     * only works correctly if the handler has no additional arguments.
     */
    [CGTKSignalConnector
        connectGpointer:[window WIDGET]
        withSignal:@"destroy"
        toTarget:[CGTK class]
        withSelector:@selector(mainQuit)
        andData:NULL
    ];

    /*
     * Create a headerbar and set its title to "Hello, World!".
     */
    headerbar = [[CGTKHeaderBar alloc] init];
    [headerbar setShowCloseButton:YES];
    [headerbar setTitle: @"Hello, World!"];

    /*
     * Make the window show the headebar instead of its default title bar.
    */
    [window setTitlebar:headerbar];

    /*
     * Create a label with the text "Hello, World!",
     * and make it the window's content.
     */
    label = [[CGTKLabel alloc] init:@"Hello, World!"];
    [window add:label];

    /*
     * Make the window and all of its children visible.
     */
    [window showAll];

    /*
     * Run the GTK+ main loop.
     */
    [CGTK main];

    /*
     * Release memory.
     */
    [pool release];
    return 0;
}
