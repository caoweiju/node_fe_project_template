import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
const path = require('path');

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632885236093_2558';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const viewConfig = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
  };
  const staticConfig = {
    static: {
      prefix: '/localdist/',
      dir: path.join(appInfo.baseDir, 'dist'), // 关联到前端webpack打包内容
      // dirs: [
      //   {
      //     prefix: '/localdist/',
      //     dir: path.join(appInfo.baseDir, 'dist'),
      //   },
      //   {
      //     prefix: '/public/',
      //     dir: path.join(appInfo.baseDir, 'app/public'),
      //   },
      // ],
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...viewConfig,
    ...staticConfig,
  };
};
