@echo off 
cls

call coffee -c "core/jquery.shapeshift.coffee"
echo "Finished compiling coffeescript"

call node "minify.js"
echo "Finished minifying"

pause