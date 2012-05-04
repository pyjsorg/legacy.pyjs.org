import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.media.Video import Video
from pyjamas.media.Audio import Audio
from pyjamas import Window

if __name__ == '__main__':
    pyjd.setup("public/Media.html?fred=foo#me")
    if True:
        v = Video(Width="640", Height="480",
              StyleName="teststyle",
              Autoplay=True,
              Controls=True,
              src="http://acfauk/public/services/files.py?video=sample&ext=wmv",
              #src="http://172.20.0.1/home/Downloads/Jungle_alcohol.wmv")
              #src="http://172.20.0.1/home/kiss.the.girl.mp4") 
              #src="file:/home/lkcl/kiss.the.girl.mp4")
              #src="file:/home/lkcl/gizmo.webm",
              Poster="http://acfauk/public/img/coffee_cup_01.png",
            )
        RootPanel().add(v)
    
    if False:
        a = Audio(Width="160px", Height="32px",
              StyleName="teststyle",
              Autoplay=True,
              Controls=True,
              src="http://acfauk/public/services/files.py?audio=copy&ext=wma")
              #src="http://127.0.0.1/home/Lry_Crane_Copy.mp3")
              #src="file:/home/lkcl/Lry_Crane_Copy.mp3")
              #src="file:/home/lkcl/test.ogg")
        RootPanel().add(a)
    

    pyjd.run()
