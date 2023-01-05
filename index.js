module.exports = {
    initForYuzuLoader: (config) => {
        config.renderedPartialDirs.push('./node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
        config.renderedPartialDirs.push('./node_modules/yuzu-plugin-grid/_dev/_templates/_dataStructures');
        config.registeredPartialsDirs.push('./node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
        config.dependantDirectories.push('./node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
    },
    initForYuzuApi: (config) => {
        config.api.files.templates.push('./node_modules/yuzu-plugin-grid/_dev/_templates');
    }
};