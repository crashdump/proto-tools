# Encore plugin

[Encore](https://encore.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add encore "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/encore/plugin.toml" --global
proto install encore
```

### Per-project install

```shell
proto plugin add encore "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/encore/plugin.toml"
proto pin encore latest --resolve
```
