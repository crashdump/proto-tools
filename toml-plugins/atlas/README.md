# AtlasGo plugin

[AtlasGo](https://github.com/ariga/atlas) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add atlas "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/atlas/plugin.toml" --global
proto install atlas
```

### Per-project install

```shell
proto plugin add atlas "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/atlas/plugin.toml"
proto pin atlas latest --resolve
```
