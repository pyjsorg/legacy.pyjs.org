#!/usr/bin/env python
import os, sys, glob, shutil

options = " ".join(sys.argv[1:])
if not options:
    options = "-O"
for pyjsbuild in ('../bin/pyjsbuild.py', '../bin/pyjsbuild', None):
    if os.path.exists(pyjsbuild):
        break
if not pyjsbuild:
    sys.stderr.write("Cannot find pyjsbuild")
    sys.exit(1)

def guessMainScriptName(d):
    if os.path.isfile('build.sh'):
        for line in file('build.sh'):
            line = line.strip()
            if not line or line.startswith('#'): continue
            name = line.split()[-1]
            f = name + '.py'
            if os.path.isfile(f): return name
    for f in glob.glob('*.py'):
        name, ext = os.path.splitext(f)
        if name.lower() in d.lower(): return name
    return ''

for d in os.listdir('.'):
    if os.path.isdir(d):
        os.chdir(d)
        try:
            name = guessMainScriptName(d)
            if not name: 
                print "Skipping directory %s because no main script found" % d
                continue
            f = name + '.py'
            print("********** Building %s **********" % name.upper())
            if os.path.isdir('output'): 
                shutil.rmtree(os.path.join(".", "output")) # Why should we skip compilation here ? Just clean first.
            res = os.system("python ../%s %s %s" % (pyjsbuild, options, f))
        except Exception, e:
            print "Error encountered for %s - %r" % (d, e)
        finally:
            #raw_input('Press any key')
            os.chdir("..")
 