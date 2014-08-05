amd-concatenate-js
==================

This repo describes a JavaScript AMD coding pattern for easily concatenating and minifying modules and support libraries. The pattern uses Grunt concat and uglify. The result is you end up with a single, compressed library file. This is an intermediate solution to having to set up and configure something like the Dojo Optimizer or Require.js Optimizer.

Try it out here: [andygup.github.io/amd-concatenate-js/](http://andygup.github.io/amd-concatenate-js/index.html)

###Concept

The concept goes like this:

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