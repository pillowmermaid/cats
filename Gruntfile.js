module.exports = function(grunt) {


 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   watch: {
    sass: {
       options: {
         livereload: false
       },
       files: ['styles/sass/**/*.scss'],
       tasks: ['sass']
     }
   },
   sass: {
     dist: {
       files: {
         'styles/css/bundle.css': 'styles/sass/main.scss',
       },
       options: {
         style: 'compressed'
       }
     }
   }
 });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
