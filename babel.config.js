module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'ezwn-ux-native': './lib/ezwn-ux-native',
            "ezwn-storage-native": "./lib/ezwn-storage-native",
            'react-router-native': './lib/ezwn-ux-native/dependencies/react-router-native'
          },
        }
      ]
    ]
  };
};
