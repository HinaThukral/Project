# Project
In my project
1.index.html-
I make input tag for the text box and then add button by button tag 
There is one div for the list that i define in javascript using innerHTML

2.Styles.css-
There are some styles like color to the background,
and I call element using ids or class to give them styling
there is one tag strike ,I gave hover(means when our cursor is on that tag,color would change)

3.app.js
There is one method add-
In it firstly get an item that user enters in browser using id,class or tagname
Then call the list method to get list from localstorage,
then use the push method to insert into array,
Stringify it, means to convert javascript object into string,
Call the show method to view it on the screen

Remove-
 var id = this.getAttribute('id');
 
 this is a keyword here,it means we refer to the current object and take its id from localstorage
 Then we take list from ls,Splice it means to delete the particular item from list
 stringify and then show it
 
 Show-
 In this method,I use innerHtml
 I firslty get list from local storage then apply some tags to view output on screen ,List and
 I use strike that means line appears on the text remove
 Use Addeventlistener to call them,
 
 

