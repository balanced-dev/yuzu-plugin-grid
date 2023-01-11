module.exports = {
    initForYuzuLoader: (config) => {
        config.renderedPartialDirs.splice(0, 0, './node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
        config.renderedPartialDirs.splice(0, 0, './node_modules/yuzu-plugin-grid/_dev/_templates/_dataStructures');
        config.registeredPartialsDirs.splice(0, 0, './node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
        config.dependantDirectories.splice(0, 0, './node_modules/yuzu-plugin-grid/_dev/_templates/blocks');
    },
    initForYuzuApi: (config) => {
        config.api.files.templates.splice(0, 0, './node_modules/yuzu-plugin-grid/_dev/_templates');
    }
};