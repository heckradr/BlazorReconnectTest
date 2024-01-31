# BlazorReconnectTest

## Description
This sample blazor server project contains a component named "ReconnectModal". The intent of this component is to do an automatic reconnect with javascript if blazor fails to reconnect to the server. This could happen if the maximum retry count of the internal reconnect-mechnism is exceeded or if the (web)-server was restarted. In this case the integrated reconnect does not work and the user has to reload the page. 

The use-case for this control is for pages / visualizations without user intervention (e.g. smart signage, information displays).


## Problem
Sometimes, after the javascript "location.reload(true)" command, the page crashes. In this case the typical blazor error bar (An unhandled error has occurred. Reload) is shown. In the console the error message "The list of component operations is not valid. (blazor.web.js)" is logged.

I saw this error only if multiple clients (browser windows) reconnects to the same time.

## Steps to reproduce

- checkout project
- open with vs code or visual studio
- compile and start the project
- point minimum two browsers to the url http://localhost:5006
- re-start the debugger
- you will notice the ReconnectModal: First it will try to restore the connection but this fails (Connection failed, Reconnecting...). Then after a sleep time of 5 seconds the javascript call will reload the whole page.
- when the error occurs one of the 2 pages will stop working with the typical blazor error bar
- the error does not occur on every attempt, maybe you have to repeat the steps
  
![image](https://github.com/heckradr/BlazorReconnectTest/assets/48717990/7ef80d1b-69aa-4b0a-b0f1-9dd1ad93abbf)
