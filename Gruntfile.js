/*global module:false*/
module.exports = function(grunt) {

	var os = require( 'os' ),
	path = require( 'path' ),
	isWindows = os.platform().toLowerCase().indexOf( 'win' ) === 0; // watch out for 'darwin'

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );



	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		qunit: {
			files: ['test/index.html']
		}
	});

	// Default task.
	grunt.registerTask('default', []);
	// Travis
	grunt.registerTask('travis', []);

};
