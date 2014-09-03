module.exports = function(grunt){
	
	grunt.initConfig({
		jshint: {
			all: ['js/*.js']
		},
		uglify: {
			build: {
				files: {
					'js/build/nardy.min.js': ['js/nardy.js']
				}
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['jshint', 'uglify']);

};