# &lt;pubsub-text&gt;
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Simple data bindings without the need of big frameworks.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install
```sh
npm i --save pubsub-text
```

## Usage

```html
<pubsub-text event="data.user.balance">User Balance:</pubsub-text>

<script type="module">
  import './node_modules/pubsub-text/src/text.js'
  
  pubSub.publish('data.user.balance', 0)
</script>
```

## Maintainers

[@vandeurenglenn](https://github.com/vandeurenglenn)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2020 Vandeuren Glenn