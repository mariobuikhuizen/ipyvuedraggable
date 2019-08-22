const base = require('@jupyter-widgets/base');
const index = require('../index');

module.exports = {
    id: 'jupyter-vuedraggable',
    requires: [base.IJupyterWidgetRegistry],
    activate(app, widgets) {
        widgets.registerWidget({
            name: 'jupyter-vuedraggable',
            version: index.version,
            exports: index,
        });
    },
    autoStart: true,
};
