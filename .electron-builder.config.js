/**
 * TODO: Rewrite this config to ESM
 * But currently electron-builder doesn't support ESM configs
 * @see https://github.com/develar/read-config-file/issues/10
 */

/**
 * @type {() => import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = async function () {
  const {getVersion} = await import('./version/getVersion.mjs');

  return {
    directories: {
      output: 'dist',
      buildResources: 'buildResources',
    },
    // extraResources: ['update.exe'], // 暂时移除关于自动更新的内容，代码还有些问题
    files: ['packages/**/dist/**'],
    extraMetadata: {
      version: getVersion(),
    },

    mac: {
      target: 'dir',
    },
    // 如果使用ia32架构，需要在windows上打包应用，需要注意electron要使用32位版本
    // pnpm add --config.arch=ia32  electron -D
    // https://github.com/bytenode/bytenode/issues/98#issuecomment-758606113
    win: {
      target: {
        target: 'nsis',
        arch: ['ia32'],
      },
      requestedExecutionLevel: 'requireAdministrator',
    },

    // Specify linux target just for disabling snap compilation
    linux: {
      target: 'deb',
    },

    nsis: {
      oneClick: false,
      perMachine: true,
      installerLanguages: 'zh_CN',
      allowToChangeInstallationDirectory: true,
    },

    // 暂时移除关于自动更新的内容，代码还有些问题（因为去除了 asar，所以如何计算还需要重新规划）
    // async afterPack(context) {
    //   const path = await import('node:path');
    //   const name =
    //     process.env.npm_package_productName ||
    //     process.env.npm_package_name
    //   let dir = context.appOutDir
    //   const platform = context.electronPlatformName
    //   if (platform === 'darwin') {
    //     dir = path.resolve(
    //       dir,
    //       `${name}.app`,
    //       'Contents',
    //       'Resources',
    //       'app'
    //     )
    //   }
    //   if (platform === 'win32') {
    //     dir = path.resolve(dir, 'resources', 'app')
    //   }
    //   const crypto = await import('node:crypto');
    //   const fs = await import('node:fs');
    //   const fsPromise = await import('node:fs/promises');
    //   const md5 = crypto
    //     .createHash('md5')
    //     .update(fs.readFileSync(dir))
    //     .digest('hex')
    //   await fsPromise.writeFile(
    //     path.resolve(context.outDir, 'update-md5.txt'),
    //     md5
    //   )
    //   await fsPromise.cp(dir, path.resolve(context.outDir, 'app'), {
    //     force: true,
    //   })
    // },
  };
};
