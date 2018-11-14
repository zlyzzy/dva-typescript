module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        development: process.argv.slice(-1)[0] === 'development',
      },
    ],
    '@babel/preset-typescript',
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-transform-runtime',
    "@babel/plugin-syntax-dynamic-import",
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'ant'],
    [
      'import',
      {
        libraryName: 'ant-design-pro', libraryDirectory: 'lib', style: true, camel2DashComponentName: false,
      },
      'ant-design-pro',
    ],
  ];

  return {
    presets,
    plugins,
  };
};
