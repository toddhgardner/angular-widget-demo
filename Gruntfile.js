module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.initConfig({

    connect: {
      server: {
        options: {
          protocol: "http",
          port: 80,
          directory: ["src"],
          keepalive: true
        }
      }

    }

  });

  grunt.registerTask("server", "Start the custom server", function() {
    grunt.log.writeln("Started web server on port 80...");
    require("./server.js");
  });

};
