[![Version](https://img.shields.io/npm/v/jupyter-vuedraggable.svg)](https://www.npmjs.com/package/jupyter-vuedraggable)
[![Version](https://img.shields.io/pypi/v/ipyvuedraggable.svg)](https://pypi.python.org/mariobuikhuizen/ipyvuedraggable)
[![Conda Version](https://img.shields.io/conda/vn/conda-forge/ipyvuedraggable.svg)](https://anaconda.org/conda-forge/ipyvuedraggable)

# ipyvuedraggable

Jupyter widget based on [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable).

For examples see [Examples.ipynb](Examples.ipynb)

Installation
------------

To install use pip:

    $ pip install ipyvuedraggable

Or conda:

    $ conda install -c conda-forge ipyvuedraggable

For a development installation (requires npm),

    $ git clone https://github.com/mariobuikhuizen/ipyvuedraggable.git
    $ cd ipyvuedraggable
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipyvuedraggable
    $ jupyter nbextension enable --py --sys-prefix ipyvuedraggable