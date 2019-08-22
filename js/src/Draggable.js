/* eslint camelcase: off */
import { VueModel } from 'jupyter-vue';

export class DraggableModel extends VueModel {
    defaults() {
        return {
            ...super.defaults(),
            ...{
                _model_name: 'DraggableModel',
                _model_module: 'jupyter-vuedraggable',
                _view_module_version: '0.0.1',
                _model_module_version: '0.0.1',
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

VueModel.serializers = {
    ...VueModel.serializers,
};
