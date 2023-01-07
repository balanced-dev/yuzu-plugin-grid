const fs = require('fs');
const path = require('path');
const core = require('yuzu-plugin-core');
const files = [ 
    {
        source: './_dev/_templates/blocks/gridBuilder/parGridBuilderItems.schema',
        dest: '../../_dev/_templates/blocks/__grid/gridBuilder/parGridBuilderItems.schema',
    },
    {
        source: './_dev/_templates/blocks/gridBuilder/parGridBuilderRowConfig.schema',
        dest: '../../_dev/_templates/blocks/__grid/gridBuilder/parGridBuilderRowConfig.schema',
    },
    {
        source: './_dev/_templates/blocks/gridBuilder/parGridBuilderColumnConfig.schema',
        dest: '../../_dev/_templates/blocks/__grid/gridBuilder/parGridBuilderColumnConfig.schema',
    },
    {
        source: './_dev/_templates/_dataStructures/dataGrid.schema',
        dest: '../../_dev/_templates/_dataStructures/_grid/dataGrid.schema'
    }
];

console.log(`Yuzu Definition Grid Plugin PostInstall`);

core.postInstallManageFiles(fs, path, files);