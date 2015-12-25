module.exports = {
  // src: {
  //   path: 'assets/',
  //   css: 'assets/styles/scss/',
  //   img: 'assets/images/',
  //   js: 'assets/js/',
  //   html: 'views/'
  // },
  // dist: {
  //   path: 'public/',
  //   css: 'public/stylesheets/',
  //   img: 'public/images/',
  //   js: 'public/javascripts/',
  //   html: 'public/views/',
  //   fonts: 'public/fonts/'
  // },
  'styles': {
    'src' : 'assets/styles/scss/*.scss',
    'dest': 'public/stylesheets'
  },

  'scripts': {
    'src' : 'assets/js/**/*.js',
    'dest': 'public/javascripts'
  },

  'images': {
    'src' : ['assets/images/**/*', '!assets/images/sprites', '!assets/images/sprites/**'],
    'dest': 'public/images'
  },

  'sprity': {
    'src': 'assets/images/sprites/**/*.{png,jpg}',
    'dest': 'public/images',
    'cssPath': 'public/stylesheets',
  },

  'fonts': {
    'src' : ['assets/fonts/**/*'],
    'dest': 'public/fonts'
  },
  // test: {
  //   path: 'tests/',
  //   unit: 'tests/unit/',
  //   functional: 'tests/functional/'
  // },
  'bower': {
    'path': 'assets/bower_components/'
  },
  'npm': {
    'path': 'node_modules/'
  }
};
