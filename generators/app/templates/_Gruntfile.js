/* global module */
module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-markdown');
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/modules/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'www/css/ionic.css': 'bower_components/ionic/scss/ionic.scss'
        }
      }
    },
    copy: {
      arquivos: {
        files: {
          "www/index.html": ["app/index.html"],
          "www/css/font-awesome.min.css": ["bower_components/font-awesome/css/font-awesome.min.css"],
          "www/js/ionic.bundle.js": ["bower_components/ionic/js/ionic.bundle.js"],
          "www/js/angular-resource.min.js": ["bower_components/angular-resource/angular-resource.min.js"],
          "www/js/index.js": ["app/modules/index.js"]
        }
      },
      fontes_fa: {
        expand: true,
        cwd: 'bower_components/font-awesome/',
        src: 'fonts/*',
        dest: 'www'
      },
      fontes_ionic: {
        expand: true,
        cwd: 'bower_components/ionic/',
        src: 'fonts/*',
        dest: 'www'
      },
      resources: {
        expand: true,
        cwd: 'app/resources',
        src: '*',
        dest: 'www/resources'
      },
      templates: {
        expand: true,
        cwd: 'app/modules',
        src: '**/*.html',
        dest: 'www/templates',
        flatten: true,
        filter: 'isFile'
      }
    },
    concat: {
      directives_js: {
        files: {
          "www/js/directives.js": ["app/modules/**/*.directive.js"]
        }
      },
      filters_js: {
        files: {
          "www/js/filters.js": ["app/modules/**/*.filter.js"]
        }
      },
      modules_js: {
        files: {
          "www/js/modules.js": ["app/modules/**/*.module.js"]
        }
      },
      controllers_js: {
        files: {
          "www/js/controllers.js": ["app/modules/**/*.controller.js"]
        }
      },
      services_js: {
        files: {
          "www/js/services.js": ["app/modules/**/*.service.js"]
        }
      },
      routes_js: {
        files: {
          "www/js/routes.js": ["app/modules/**/*.route.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["app/modules/**/*.js"],
        tasks: ["scripts"]
      },
      html: {
        files: ["app/**/*.html"],
        tasks: ["html"]
      }
    }
  });
  grunt.registerTask('scripts', ['jshint', 'concat', 'copy']);
  grunt.registerTask('html', ['copy']);
  grunt.registerTask('build', ['scripts', 'html', 'sass']);
  grunt.registerTask('default', ['build', 'watch']);
};
