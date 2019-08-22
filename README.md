# ipyvuedraggable

Jupyter widget based on [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable).

For examples see [Examples.ipynb](Examples.ipynb)

## Installation

This library is based on development versions of some dependencies:

| project | branch |
|---------|--------|
| [ipyvue](https://github.com/mariobuikhuizen/ipyvue.git) | experimental |
| [ipyvuetify](https://github.com/mariobuikhuizen/ipyvuetify.git) | ipyvue |

    git clone -b experimental https://github.com/mariobuikhuizen/ipyvue.git
    pip install -e ipyvue
    jupyter nbextension install --py --symlink --sys-prefix ipyvue
    jupyter nbextension enable --py --sys-prefix ipyvue

    git clone -b ipyvue https://github.com/mariobuikhuizen/ipyvuetify.git
    pip install -e ipyvuetify
    jupyter nbextension install --py --symlink --sys-prefix ipyvuetify
    jupyter nbextension enable --py --sys-prefix ipyvuetify

    git clone https://github.com/mariobuikhuizen/ipyvuedraggable.git
    pip install -e ipyvuedraggable
    jupyter nbextension install --py --symlink --sys-prefix ipyvuedraggable
    jupyter nbextension enable --py --sys-prefix ipyvuedraggable
