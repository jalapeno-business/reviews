module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-run');
  grunt.initConfig({
    run: {
      webpack: {
        cmd: 'npm',
        args: [
          'run',
          'webpack-prod',
        ],
      },
      s3: {
        cmd: 'aws',
        args: [
          's3',
          'cp',
          './client/dist/reviews.js',
          's3://fec-zagat/',
          '--grants',
          'read=uri=http://acs.amazonaws.com/groups/global/AllUsers',
        ],
      },
    },
  });
  grunt.registerTask('build', ['run:webpack']);
  grunt.registerTask('deploy', ['run:s3']);
  grunt.registerTask('build-deploy', ['run:webpack', 'run:s3']);
};
