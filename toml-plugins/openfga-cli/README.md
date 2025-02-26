# OpenFGA plugin

[OpenFGA](https://openfga.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add openfga "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/openfga/plugin.toml" --global
proto install openfga
```

### Per-project install

```shell
proto plugin add openfga "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/openfga/plugin.toml"
proto pin openfga latest --resolve
```