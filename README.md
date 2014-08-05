amd-concatenate-js
==================

This repo describes a JavaScript AMD coding pattern for easily concatenating and minifying modules and support libraries. The pattern uses Grunt concat and uglify. The result is you end up with a single, compressed library file. This is an intermediate solution for small(er) projects rather than having to set up and configure something like the Dojo Optimizer or Require.js Optimizer.

Try it out here: [andygup.github.io/amd-concatenate-js/](http://andygup.github.io/amd-concatenate-js/index.html)

### Why?

**Performance** - By collapsing a bunch of individual JavaScript libraries into a single .js file you can decrease load times. Furthermore, this pattern advocates minifying the final library file, smaller files will also load faster. Load times are even more important to mobile applications where internet connection speeds can fluctuate between good, bad and non-existant.

**Time** - If you don't need the powerful capabilities of a full Optimizer, such as if you have one or several smaller projects, then this approach can save you time and effort. It can take considerably more time properly set up and configure a full blown Optimizer and in many cases they can be overkill. 

**You can continue to use AMD** - Since you are already using AMD and have AMD dependencies, this pattern gives you powerful tools for continuing to work within that system yet take advantage of the ability to concatente and minify your .js libraries. Normally you cannot combine multiple AMD modules containing define() statements into one file without an actual Optimizer. 



### Directory structure

The directoy and file structure looks like this example:

```

/libraryDirectory1
    MainAMDModule1.js (AMD module)
    SupportLibrary1.js (a namespaced pure JavaScript library)
	SupportLibrary2.js (you can have as many of these libraries as you need)

/libraryDirectory2
	MainAMDModule2.js (AMD Module)
	SupportLibrary3.js (a namespaced pure JavaScript library)
	SupportLibrary4.js (you can have as many of these libraries as you need)


/dist (distribution directory)
	MainAMDModule1.js (concatentated, minified)
	MainAMDModule2.js (concatendated, minified)

```

### Library structure

A Grunt.js tasks will concatenate, or chain together, files that you specify into one .js file. This new file will have an internal structure that looks like this:

```

	// This is your primary AMD module
	define(["dojo/_base/declare","lib/someModule"],function(declare,someModule){
        return declare("AMDModule",[],{
			// We can now access the support libraries like this:
			var a = new O.esri.doSomething();
			var b = new O.esri.doSomethingElse();
        })
	})
	
	// This establishes the namespace that we'll assign
	// to any of our supporting .js libraries
	var O = {
    	esri:{}
	}
	
	// Example of namespaced support library #1
	O.esri.doSomething() = function(){
		//do something 
	}
	
	// Example of namespaced support library #2
	O.esri.doSomethingElse() = function(){
		//do something else
	}


```


### Loading your new library

Use [generic script injection](http://dojotoolkit.org/reference-guide/1.10/loader/amd.html#generic-script-injection) to load your new concatenated and minified library. There is no need to use dojoConfig to specify module paths, just declare the full path name in the require() statement, that's all you have to do:

```javascript

	require([“esri/map”,”../dist/MainAMDModule.js”,”dojo/domReady!"],
		function(map){     
		//…do something here
	})

```

### How does this work?

This coding pattern doesn't represent anything new, it just brings all the information together in one place. It takes advantage of the fact that within an AMD closure you can still access globals. In our case, we are defining our support libraries using globally accessible namespaces. This is no different than if you used a script tag to import a .js library like this and then accessed it's functionality from within a module:


```

	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

```


