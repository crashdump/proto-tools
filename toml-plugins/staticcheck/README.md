# StaticCheck plugin

[StaticCheck](https://staticcheck.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add staticcheck "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/staticcheck/plugin.toml" --global
proto install staticcheck
```

### Per-project install

```shell
proto plugin add staticcheck "source:https://raw.githubusercontent.com/crashdump/proto-tools/main/toml-plugins/staticcheck/plugin.toml"
proto pin staticcheck latest --resolve
```