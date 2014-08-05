/**
 * This Grunt file shows a pattern for concatenating an AMD file and it's supporting
 * pure, non-AMD JavaScript libraries into a single concatenated, minified and mangled
 * .js library file. You can then use the AMD generic script injection
 * pattern to import the new library.
 *
 * Example, from index.html you can access the new library like this:
 *
 * require([“esri/map”,”dist/test.min.js”,”dojo/domReady!"],
 * function(map){
 *      //…do something here
 * })
 *
 * @author @agup (http://www.andygup.net)
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: [
                    'Gruntfile.js',
                    'libs/*.js'
                ],

                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: '\n',
                banner: '/* \n' +
                    '* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '*   Copyright (c) <%= grunt.template.today("yyyy") %> Environmental Systems Research Institute, Inc.\n' +
                    '*   Apache License \n' +
                    '*/\n'
            },
            full: {
                src: [
                    'libs/AMDModule.js',    // Our primary AMD module
                    'libs/test_ns.js',      // A pure JS library to set the namespace
                    'libs/fixIt.js',        // A pure JS library that is used by the primary AMD module
                ],
                dest: 'dist/test-src.js'
            }
        },

        uglify: {
            options: {
                compress: {
                  drop_console: true //remove console.log statements :)
                },
                wrap: false,
                mangle: {
                    except: ['O'] // Keep 'O' because that's our namespace for our .js libraries.
                }
            },
            dist: {
                files: {
                    'dist/test.min.js': ['dist/test-src.js']
                }
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build',['concat','uglify']);
}