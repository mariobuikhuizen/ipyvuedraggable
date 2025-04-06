from ._version import __version__  # noqa: F401
from .Draggable import *  # noqa: F401, F403


def _jupyter_labextension_paths():
    return [{
        'src': 'labextension',
        'dest': 'jupyter-vuedraggable',
    }]

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension',
        'dest': 'jupyter-vuedraggable',
        'require': 'jupyter-vuedraggable/extension'
    }]
