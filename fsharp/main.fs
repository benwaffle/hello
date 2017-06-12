open Gtk

module Hello =

    type HelloWindow (title:string) =
        inherit Window (title)

    [<EntryPoint>]
    let main argv =
        Application.Init ()
        use win = new HelloWindow "Hello, World!" 
        (600, 300) |> win.SetDefaultSize
        win.Present ()

        use label = new Label (Markup="<span size='larger' weight='bold'>Hello, World!</span>")
        label.Show ()
        label |> win.Add

        win.DeleteEvent.Add (fun _ -> Application.Quit () )

        Application.Run ()

        0 // return an integer exit code

