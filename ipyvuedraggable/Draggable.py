from traitlets import Unicode, Dict
from ipyvue import VueWidget


class Draggable(VueWidget):

    _model_name = Unicode('DraggableModel').tag(sync=True)

    _model_module = Unicode('jupyter-vuedraggable').tag(sync=True)

    _model_module_version = Unicode('^0.0.1').tag(sync=True)

    group = Dict().tag(sync=True)

    tag = Unicode().tag(sync=True)

    component_data = Dict().tag(sync=True)


__all__ = ['Draggable']
