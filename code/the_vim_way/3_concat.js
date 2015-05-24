/***
 * Excerpted from "Practical Vim",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/dnvim for more book information.
***/


but we could make this a
little easier on the eye by padding each + sign with spaces to make it look like this:

Keystrokes
Buffer Contents
{start}
var foo = "method("+argument1+","+argument2+")";

f+   The f{char} command tells Vim to look
ahead for the next occurrence of the specified character and then move the cursor
directly to it if a match is found (see f ).
var foo = "method("+argument1+","+argument2+")";

s?+?<Esc>  The s command compounds two steps into one: it deletes the character under the
cursor and then enters Insert mode.

var foo = "method(" +_argument1+","+argument2+")";
;   The ; command will repeat the last
search that the f command performed.

var foo = "method(" + argument1+","+argument2+")";
.   we can repeat the
change with the dot command;
var foo = "method(" + argument1 +_","+argument2+")";
;.
var foo = "method(" + argument1 + "," +_argument2+")";
;.


var foo = "method("+argument1+","+argument2+")";
