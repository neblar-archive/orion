const chalk = require('chalk');
const shell = require('shelljs');
const args = require('minimist')(process.argv.slice(2));

process.env.NODE_ENV = 'production';
const theme = process.env.THEMEKIT_ALIAS ? process.env.THEMEKIT_ALIAS : 'theme';

const method = args.m ? args.m : 'upload';
const force = args.f === 'y' ? '-f' : '';
const buildFolder = 'build';
const config = '../themekit.yml';

if (shell.exec(`cd ${buildFolder} && ${theme} ${method} ${force} -c ${config} -e ${process.env.NODE_ENV}`).code !== 0) {
    console.log(chalk.red("Theme deployment failed"));
    return;
} else {
    console.log(chalk.green("Theme deployed successfully"));
}