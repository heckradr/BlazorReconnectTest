This sample project contains a component named "ReconnectModal". The intent of this component is to do an automatic reconnect with javascript if blazor fails to reconnect to the server. This could happen if the maximum retry count of the internal reconnect-mechnism is exceeded or if the (web)-server was restarted. In this case the integrated reconnect does not work and the user has to reload the page. 

The use-case for this control is for pages / visualizations without user intervention (e.g. smart signage, information displays).


Problem:

Sometimes, after the javascript "location.reload(true)" command the page crashes. In this case the typical blazor error bar (An unhandled error has occurred. Reload) is shown. In the console the error message "The list of component operations is not valid. (blazor.web.js)" is logged.
