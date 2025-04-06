from traitlets import Unicode, Dict
from ipyvue import VueWidget
from ._version import __version__

class Draggable(VueWidget):

    _model_name = Unicode('DraggableModel').tag(sync=True)

    _model_module = Unicode('jupyter-vuedraggable').tag(sync=True)

    _model_module_version = Unicode(__version__).tag(sync=True)

    group = Dict().tag(sync=True)

    tag = Unicode().tag(sync=True)

    component_data = Dict().tag(sync=True)


__all__ = ['Draggable']
