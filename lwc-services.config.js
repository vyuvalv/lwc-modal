/* eslint-disable no-undef */
// will move the resources from SLDS node modules to your local resources folder
const srcFolder = 'src/client';
const buildFolder = './dist';

module.exports = {
    buildDir: `${buildFolder}`,
    sourceDir: `./${srcFolder}`,

    resources: [
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: `${srcFolder}/resources/assets`
        },
        { from: `${srcFolder}/resources/`, to: `${buildFolder}/resources/` }
    ],
    devServer: { proxy: { '/': 'http://localhost:5000' } }
};
