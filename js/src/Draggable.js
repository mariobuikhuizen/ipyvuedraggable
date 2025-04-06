/* eslint camelcase: off */
import { VueModel } from 'jupyter-vue';
import { version } from "../package.json";

export class DraggableModel extends VueModel {
    defaults() {
        return {
            ...super.defaults(),
            ...{
                _model_name: 'DraggableModel',
                _model_module: 'jupyter-vuedraggable',
                _model_module_version: version,
                group: null,
                tag: null,
                component_data: null,
            },
        };
    }

    getVueTag() {
        return 'draggable';
    }
}

DraggableModel.serializers = {
    ...VueModel.serializers,
};
