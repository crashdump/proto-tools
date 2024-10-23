# Mockery plugin

[Mockery](https://github.com/vektra/mockery) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add mockery "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/mockery/plugin.toml" --global
proto install mockery
```

### Per-project install

```shell
proto plugin add mockery "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/mockery/plugin.toml"
proto pin mockery latest --resolve
```