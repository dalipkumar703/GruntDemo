module.exports = function(grunt) {
    // Do grunt-related things in here
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        shell: {
            
            npm_test: {
              command: 'npm run test',
              
            }
          }
      });
      
    grunt.registerTask('test', function(){
      var tasks = [];
      var engine =  grunt.option('target');

      process.env.SEARCH_ENGINE= engine;
      tasks.push('shell:npm_test');
      grunt.task.run(tasks);
    });
  };