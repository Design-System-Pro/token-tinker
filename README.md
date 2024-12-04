# Token Tinker

A GitHub Action to transform and process design tokens exported from Tokens Studio.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Contributing](#contributing)

## Overview

Token Tinker is a utility that helps you transform design tokens exported from Tokens Studio into various formats. It streamlines the process of integrating design tokens into your development workflow.

## Features

- Transform Tokens Studio exports
- Support for multiple output formats
- Automated token processing
- Customizable transformation rules
- Integration with design systems

## Usage

```yaml
name: Transform Design Tokens
on:
  push:
    paths:
      - 'tokens/**'

jobs:
  transform:
    runs-on: ubuntu-latest
    steps:
      - uses: @design-system-pro/token-tinker@v0.1.0
        with:
          tokens-path: './tokens/'
          build-path: './build/'
          tokens-export-type: 'single'
```

## Configuration

| Parameter | Description | Required |
|-----------|-------------|----------|
| `tokens-path` | Path to the exported tokens file | Yes |
| `build-path` | Path to output the transformed tokens | Yes |
| `tokens-export-type` | Type of Tokens Studio export: "single" for single file or "multiple" for multiple files | No |

### action.yml Inputs

The following inputs can be defined in the `action.yml` file:

| Input Name | Description | Default | Required |
|------------|-------------|---------|----------|
| `tokens-path` | Path to the tokens json files | `./tokens/` | true |
| `build-path` | Path to output the transformed tokens | `./build/` | true |
| `tokens-export-type` | Type of Tokens Studio export: "single" or "multiple" | `single` | false |

## License

MIT

## Contributing

Contributions welcome! Please read the contributing guidelines before submitting a PR.
