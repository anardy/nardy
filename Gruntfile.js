module.exports = function(grunt){
	
  	grunt.initConfig({
		jshint: {
			all: ['assets/js/*.js']
		},
		uglify: {
			build: {
				files: {
					'build/js/nardy.min.js': ['assets/js/nardy.js']
				}
			}
		},
    });
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint', 'uglify']);

};