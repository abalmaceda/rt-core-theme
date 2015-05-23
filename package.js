Package.describe({
  name: 'rt-core-theme',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('theme-data.js', 'server');
  api.export(['ThemeData']);

  // AUTOGENERATED
  api.addFiles([
     'theme/products/productGrid/productGrid.less',
     'theme/products/productList/productList.less',
     'theme/products/products.less',
     'theme/layout/layout.less',
     'theme/layout/footer/footer.less',
  ], 'server', {isAsset:true});
});
