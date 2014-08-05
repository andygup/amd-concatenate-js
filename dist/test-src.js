/* 
* offline-editor - v0.0.1 - 2014-08-04
*   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
*   Apache License 
*/
/**
 * This creates our top-level 'module'.
 * NOTE: it contains a define statement.
 * All other .js libraries in this directory that do not have an Esri library dependency
 * can use pure JavaScript.
 */
define(["dojo/_base/declare"],function(declare){
        return declare("AMDModule",[],{
            hello: "This is the main AMD module",
            calc: function(){

                //Let's try to integrate the fixIt() library and then retrieve a property
                var f = new O.esri.fixIt();
                console.log("AMDModule.calc() and injecting fixIt()! " + f.variable1);
            }
        })
})

/**
 * This file creates the namespace for any pure JavaScript libraries
 * that we want to refer to in our primary AMD module.
 * In this case our namespace shall be: O.esri
 *
 * @type {{esri: {}}}
 */
var O = {
    esri:{}
}
/**
 * This is a stand-alone, public JavaScript library that can be concatenated
 * along with an AMD module.
 */
O.esri.fixIt = function() {
    console.log("fixIt library has loaded!");
    var text = "Public property of the fixIt() function."
    this.variable1 = text;
}



