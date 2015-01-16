'use strict';

module.exports = function (grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          config: './assets/style/config.rb',
          sassDir: './assets/style/sass',
          imagesDir: './assets/img',
          cssDir: './assets/style',
          environment: 'development',
          outputStyle: 'expanded',
          force: true
        }
      },
      prod: {
        options: {
          config: './assets/style/config.rb',
          sassDir: './assets/style/sass',
          imagesDir: './assets/img',
          cssDir: './dist/style',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: './assets/img/src',
          src: ['*.{png,jpg,gif}'],
          dest: './src/img/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      styles: {
        files: ['./assets/style/**/*.{sass,scss}','./assets/img/ui/*.png'],
        tasks: ['compass:dev']
      },
      images: {
        files: ['./assets/img/src/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },

    nodewebkit: {
      options: {
        platforms: ['win', 'osx', 'linux'],
        buildDir: './dist'
      },
      src: ['./src/**/*']
    }
  });
 
  // Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask('default', ['compass:dev', 'imagemin', 'watch']);
  grunt.registerTask('compile', ['compass:prod', 'nodewebkit']);
 }