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
