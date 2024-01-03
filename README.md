# Half-Tone

[![NPM version](http://img.shields.io/npm/v/@spaceninja/half-tone.svg)](https://www.npmjs.org/package/@spaceninja/half-tone)

A simple web component to apply a halftone filter to an image.

- [Demo](https://half-tone.netlify.app/)

## How Does It Work?

Wrap a standard `<img>` element in a `<half-tone>` element, and it will automatically have a halftone filter applies.

## Installation

```shell
npm install @spaceninja/half-tone
```

## Usage

```html
<half-tone>
  <img src="..." alt="..." />
</half-tone>

<script type="module" src="half-tone.js"></script>
```

### Attributes

You can configure the filter by setting any of the following attributes on the `<half-tone>` element.

| attribute          | default value |
| ------------------ | ------------- |
| `dot-size`         | `4px`         |
| `dot-color`        | `#333`        |
| `dot-contrast`     | `2000%`       |
| `dot-angle`        | `15deg`       |
| `photo-brightness` | `80%`         |
| `photo-contrast`   | `120%`        |
| `photo-blur`       | `2px`         |
| `blend-mode`       | `hard-light`  |
