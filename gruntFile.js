module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            files: ["tmp/"]
        },
        uglify: {
            my_target: {
                files: {
                    'app/js/application.min.js': [
                        // APP FILES
                        'app/js/app.js',
                        'app/js/services.js',
                        'app/js/controllers.js',
                        'app/js/filters.js',
                    ],
                    'app/js/dependencies.min.js': [
                        // DEPENDENCIES FILES
                        'vendor/angular/angular.js',
                        'vendor/ui-router/release/angular-ui-router.js',
                        'vendor/angular-resource/angular-resource.js',
                        'vendor/angular-animate/angular-animate.js',
                        'vendor/angular-aria/angular-aria.js',
                        'vendor/angular-material/angular-material.js',
                    ]
                }
            }
        },
        haml: {
            app: {
                files: {
                    "app/index.html": "src/index.haml",
                    "app/partials/sidenav.html": "src/partials/sidenav.haml",
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'app/css/application.css': 'src/css/app.sass'
                }
            }
        },
        coffee: {
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: './src/js',
                        src: ['*.coffee'],
                        dest: 'app/js',
                        ext: '.js'
                    }
                ]
            }
        },
        watch: {
            js: {
                files: ['src/js/*'],
                tasks: ['coffee','uglify']
            },
            css: {
                files: ['src/css/*'],
                tasks: ['sass']
            },
            haml: {
                files: ['src/index.haml','src/partials/*'],
                tasks: ['haml']
            }
        }
    });
    grunt.loadNpmTasks('grunt-haml');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("default", ["clean", "haml", "coffee", "sass", "uglify"]);
};