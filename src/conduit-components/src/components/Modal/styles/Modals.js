export const styles = `@font-face {
  font-family: "Roboto Mono Web";
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-300.woff2") format("woff2");
}

@font-face {
  font-family: "Roboto Mono Web";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-regular.woff2")
    format("woff2");
}

@font-face {
  font-family: "Roboto Mono Web";
  font-style: normal;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-700.woff2") format("woff2");
}

@font-face {
  font-family: "Roboto Mono Web";
  font-style: italic;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-300italic.woff2")
    format("woff2");
}

@font-face {
  font-family: "Roboto Mono Web";
  font-style: italic;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-italic.woff2")
    format("woff2");
}

@font-face {
  font-family: "Roboto Mono Web";
  font-style: italic;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/roboto-mono/roboto-mono-v5-latin-700italic.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-light-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-regular-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: normal;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-bold-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: italic;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-lightitalic-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: italic;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-italic-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Source Sans Pro Web";
  font-style: italic;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/source-sans-pro/sourcesanspro-bolditalic-webfont.woff2")
    format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-Light.woff2") format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-Regular.woff2")
    format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: normal;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-Bold.woff2") format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: italic;
  font-weight: 300;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-LightItalic.woff2")
    format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: italic;
  font-weight: 400;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-Italic.woff2")
    format("woff2");
}

@font-face {
  font-family: "Merriweather Web";
  font-style: italic;
  font-weight: 700;
  font-display: fallback;
  src: url("https://intellibridge.github.io/conduit-assets/img/uswds/fonts/merriweather/Latin-Merriweather-BoldItalic.woff2")
    format("woff2");
}

.usa-button {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 0.9;
  color: #fff;
  background-color: #005ea2;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  margin-right: 0.5rem;
  padding: 0.75rem 1.25rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
}

@media all and (min-width: 30em) {
  .usa-button {
    width: auto;
  }
}

.usa-button:visited {
  color: #fff;
}

.usa-button.usa-button--hover,
.usa-button:hover {
  color: #fff;
  background-color: #1a4480;
  border-bottom: 0;
  text-decoration: none;
}

.usa-button.usa-button--active,
.usa-button:active {
  color: #fff;
  background-color: #162e51;
}

.usa-button:not([disabled]).usa-focus,
.usa-button:not([disabled]):focus {
  outline-offset: 0.25rem;
}

.usa-button:disabled,
.usa-button[aria-disabled="true"] {
  background-color: #c9c9c9;
  color: #454545;
  cursor: not-allowed;
  opacity: 1;
}

.usa-button:disabled.usa-focus,
.usa-button:disabled:active,
.usa-button:disabled:focus,
.usa-button:disabled:hover,
.usa-button[aria-disabled="true"].usa-focus,
.usa-button[aria-disabled="true"]:active,
.usa-button[aria-disabled="true"]:focus,
.usa-button[aria-disabled="true"]:hover {
  background-color: #c9c9c9;
  color: #454545;
}

@media (forced-colors: active) {
  .usa-button:disabled,
  .usa-button[aria-disabled="true"] {
    border: 0;
    color: GrayText;
  }

  .usa-button:disabled.usa-focus,
  .usa-button:disabled:active,
  .usa-button:disabled:focus,
  .usa-button:disabled:hover,
  .usa-button[aria-disabled="true"].usa-focus,
  .usa-button[aria-disabled="true"]:active,
  .usa-button[aria-disabled="true"]:focus,
  .usa-button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-button:disabled.usa-button--active,
.usa-button:disabled.usa-button--hover,
.usa-button[aria-disabled="true"].usa-button--active,
.usa-button[aria-disabled="true"].usa-button--hover {
  background-color: #c9c9c9;
  color: #454545;
  cursor: not-allowed;
  opacity: 1;
}

.usa-button:disabled.usa-button--active.usa-focus,
.usa-button:disabled.usa-button--active:active,
.usa-button:disabled.usa-button--active:focus,
.usa-button:disabled.usa-button--active:hover,
.usa-button:disabled.usa-button--hover.usa-focus,
.usa-button:disabled.usa-button--hover:active,
.usa-button:disabled.usa-button--hover:focus,
.usa-button:disabled.usa-button--hover:hover,
.usa-button[aria-disabled="true"].usa-button--active.usa-focus,
.usa-button[aria-disabled="true"].usa-button--active:active,
.usa-button[aria-disabled="true"].usa-button--active:focus,
.usa-button[aria-disabled="true"].usa-button--active:hover,
.usa-button[aria-disabled="true"].usa-button--hover.usa-focus,
.usa-button[aria-disabled="true"].usa-button--hover:active,
.usa-button[aria-disabled="true"].usa-button--hover:focus,
.usa-button[aria-disabled="true"].usa-button--hover:hover {
  background-color: #c9c9c9;
  color: #454545;
}

@media (forced-colors: active) {
  .usa-button:disabled.usa-button--active,
  .usa-button:disabled.usa-button--hover,
  .usa-button[aria-disabled="true"].usa-button--active,
  .usa-button[aria-disabled="true"].usa-button--hover {
    border: 0;
    color: GrayText;
  }

  .usa-button:disabled.usa-button--active.usa-focus,
  .usa-button:disabled.usa-button--active:active,
  .usa-button:disabled.usa-button--active:focus,
  .usa-button:disabled.usa-button--active:hover,
  .usa-button:disabled.usa-button--hover.usa-focus,
  .usa-button:disabled.usa-button--hover:active,
  .usa-button:disabled.usa-button--hover:focus,
  .usa-button:disabled.usa-button--hover:hover,
  .usa-button[aria-disabled="true"].usa-button--active.usa-focus,
  .usa-button[aria-disabled="true"].usa-button--active:active,
  .usa-button[aria-disabled="true"].usa-button--active:focus,
  .usa-button[aria-disabled="true"].usa-button--active:hover,
  .usa-button[aria-disabled="true"].usa-button--hover.usa-focus,
  .usa-button[aria-disabled="true"].usa-button--hover:active,
  .usa-button[aria-disabled="true"].usa-button--hover:focus,
  .usa-button[aria-disabled="true"].usa-button--hover:hover {
    color: GrayText;
  }
}

@media (forced-colors: active) {
  .usa-button:disabled:not(.usa-button--unstyled),
  .usa-button[aria-disabled="true"]:not(.usa-button--unstyled) {
    border: 2px solid GrayText;
  }
}

@media (forced-colors: active) {
  .usa-button:not(.usa-button--unstyled) {
    border: 2px solid transparent;
  }
}

.usa-button--accent-cool {
  color: #1b1b1b;
  background-color: #00bde3;
}

.usa-button--accent-cool:visited {
  color: #1b1b1b;
  background-color: #00bde3;
}

.usa-button--accent-cool.usa-button--hover,
.usa-button--accent-cool:hover {
  color: #1b1b1b;
  background-color: #28a0cb;
}

.usa-button--accent-cool.usa-button--active,
.usa-button--accent-cool:active {
  color: #fff;
  background-color: #07648d;
}

.usa-button--accent-warm {
  color: #1b1b1b;
  background-color: #fa9441;
}

.usa-button--accent-warm:visited {
  color: #1b1b1b;
  background-color: #fa9441;
}

.usa-button--accent-warm.usa-button--hover,
.usa-button--accent-warm:hover {
  color: #fff;
  background-color: #c05600;
}

.usa-button--accent-warm.usa-button--active,
.usa-button--accent-warm:active {
  color: #fff;
  background-color: #775540;
}

.usa-button--outline {
  background-color: transparent;
  -webkit-box-shadow: inset 0 0 0 2px #005ea2;
  box-shadow: inset 0 0 0 2px #005ea2;
  color: #005ea2;
}

.usa-button--outline:visited {
  color: #005ea2;
}

.usa-button--outline.usa-button--hover,
.usa-button--outline:hover {
  background-color: transparent;
  -webkit-box-shadow: inset 0 0 0 2px #1a4480;
  box-shadow: inset 0 0 0 2px #1a4480;
  color: #1a4480;
}

.usa-button--outline.usa-button--active,
.usa-button--outline:active {
  background-color: transparent;
  -webkit-box-shadow: inset 0 0 0 2px #162e51;
  box-shadow: inset 0 0 0 2px #162e51;
  color: #162e51;
}

.usa-button--outline.usa-button--inverse {
  -webkit-box-shadow: inset 0 0 0 2px #dfe1e2;
  box-shadow: inset 0 0 0 2px #dfe1e2;
  color: #dfe1e2;
}

.usa-button--outline.usa-button--inverse:visited {
  color: #dfe1e2;
}

.usa-button--outline.usa-button--inverse.usa-button--hover,
.usa-button--outline.usa-button--inverse:hover {
  -webkit-box-shadow: inset 0 0 0 2px #f0f0f0;
  box-shadow: inset 0 0 0 2px #f0f0f0;
  color: #f0f0f0;
}

.usa-button--outline.usa-button--inverse.usa-button--active,
.usa-button--outline.usa-button--inverse:active {
  background-color: transparent;
  -webkit-box-shadow: inset 0 0 0 2px #fff;
  box-shadow: inset 0 0 0 2px #fff;
  color: #fff;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled {
  color: #005ea2;
  text-decoration: underline;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: left;
  color: #dfe1e2;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited {
  color: #54278f;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover {
  color: #1a4480;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:active {
  color: #162e51;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled,
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-focus,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:focus,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"],
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"].usa-button--active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"].usa-button--hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"].usa-focus,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:focus,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover {
  color: #1a4480;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active {
  color: #162e51;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"],
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:focus,
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,
  .usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,
  .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"],
  .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:focus,
  .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited {
  color: #dfe1e2;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover {
  color: #f0f0f0;
}

.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,
.usa-button--outline.usa-button--inverse.usa-button--unstyled:active {
  color: #fff;
}

.usa-button--base {
  color: #fff;
  background-color: #71767a;
}

.usa-button--base.usa-button--hover,
.usa-button--base:hover {
  color: #fff;
  background-color: #565c65;
}

.usa-button--base.usa-button--active,
.usa-button--base:active {
  color: #fff;
  background-color: #3d4551;
}

.usa-button--secondary {
  color: #fff;
  background-color: #d83933;
}

.usa-button--secondary.usa-button--hover,
.usa-button--secondary:hover {
  color: #fff;
  background-color: #b50909;
}

.usa-button--secondary.usa-button--active,
.usa-button--secondary:active {
  color: #fff;
  background-color: #8b0a03;
}

.usa-button--big {
  border-radius: 0.25rem;
  font-size: 1.46rem;
  padding: 1rem 1.5rem;
}

.usa-button--outline-inverse:disabled,
.usa-button--outline-inverse[aria-disabled="true"],
.usa-button--outline:disabled,
.usa-button--outline[aria-disabled="true"] {
  background-color: transparent;
  color: #757575;
  cursor: not-allowed;
  opacity: 1;
}

.usa-button--outline-inverse:disabled.usa-focus,
.usa-button--outline-inverse:disabled:active,
.usa-button--outline-inverse:disabled:focus,
.usa-button--outline-inverse:disabled:hover,
.usa-button--outline-inverse[aria-disabled="true"].usa-focus,
.usa-button--outline-inverse[aria-disabled="true"]:active,
.usa-button--outline-inverse[aria-disabled="true"]:focus,
.usa-button--outline-inverse[aria-disabled="true"]:hover,
.usa-button--outline:disabled.usa-focus,
.usa-button--outline:disabled:active,
.usa-button--outline:disabled:focus,
.usa-button--outline:disabled:hover,
.usa-button--outline[aria-disabled="true"].usa-focus,
.usa-button--outline[aria-disabled="true"]:active,
.usa-button--outline[aria-disabled="true"]:focus,
.usa-button--outline[aria-disabled="true"]:hover {
  background-color: transparent;
  color: #757575;
}

@media (forced-colors: active) {
  .usa-button--outline-inverse:disabled,
  .usa-button--outline-inverse[aria-disabled="true"],
  .usa-button--outline:disabled,
  .usa-button--outline[aria-disabled="true"] {
    border: 0;
    color: GrayText;
  }

  .usa-button--outline-inverse:disabled.usa-focus,
  .usa-button--outline-inverse:disabled:active,
  .usa-button--outline-inverse:disabled:focus,
  .usa-button--outline-inverse:disabled:hover,
  .usa-button--outline-inverse[aria-disabled="true"].usa-focus,
  .usa-button--outline-inverse[aria-disabled="true"]:active,
  .usa-button--outline-inverse[aria-disabled="true"]:focus,
  .usa-button--outline-inverse[aria-disabled="true"]:hover,
  .usa-button--outline:disabled.usa-focus,
  .usa-button--outline:disabled:active,
  .usa-button--outline:disabled:focus,
  .usa-button--outline:disabled:hover,
  .usa-button--outline[aria-disabled="true"].usa-focus,
  .usa-button--outline[aria-disabled="true"]:active,
  .usa-button--outline[aria-disabled="true"]:focus,
  .usa-button--outline[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-button--outline:disabled,
.usa-button--outline[aria-disabled="true"] {
  -webkit-box-shadow: inset 0 0 0 2px #c9c9c9;
  box-shadow: inset 0 0 0 2px #c9c9c9;
}

.usa-button--outline:disabled.usa-button--inverse,
.usa-button--outline[aria-disabled="true"].usa-button--inverse {
  -webkit-box-shadow: inset 0 0 0 2px #919191;
  box-shadow: inset 0 0 0 2px #919191;
  color: #919191;
}

@media (forced-colors: active) {
  .usa-button--outline:disabled.usa-button--inverse,
  .usa-button--outline[aria-disabled="true"].usa-button--inverse {
    color: GrayText;
  }
}

.usa-button--unstyled {
  color: #005ea2;
  text-decoration: underline;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: left;
}

.usa-button--unstyled:visited {
  color: #54278f;
}

.usa-button--unstyled:hover {
  color: #1a4480;
}

.usa-button--unstyled:active {
  color: #162e51;
}

.usa-button--unstyled:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-button--unstyled.usa-button--active,
.usa-button--unstyled.usa-button--disabled,
.usa-button--unstyled.usa-button--hover,
.usa-button--unstyled:active,
.usa-button--unstyled:disabled,
.usa-button--unstyled:disabled.usa-button--active,
.usa-button--unstyled:disabled.usa-button--hover,
.usa-button--unstyled:disabled.usa-focus,
.usa-button--unstyled:disabled:active,
.usa-button--unstyled:disabled:focus,
.usa-button--unstyled:disabled:hover,
.usa-button--unstyled:hover,
.usa-button--unstyled[aria-disabled="true"],
.usa-button--unstyled[aria-disabled="true"].usa-button--active,
.usa-button--unstyled[aria-disabled="true"].usa-button--hover,
.usa-button--unstyled[aria-disabled="true"].usa-focus,
.usa-button--unstyled[aria-disabled="true"]:active,
.usa-button--unstyled[aria-disabled="true"]:focus,
.usa-button--unstyled[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-button--unstyled.usa-button--hover {
  color: #1a4480;
}

.usa-button--unstyled.usa-button--active {
  color: #162e51;
}

.usa-button--unstyled:disabled,
.usa-button--unstyled:disabled:hover,
.usa-button--unstyled[aria-disabled="true"],
.usa-button--unstyled[aria-disabled="true"]:focus,
.usa-button--unstyled[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-button--unstyled:disabled,
  .usa-button--unstyled:disabled:hover,
  .usa-button--unstyled[aria-disabled="true"],
  .usa-button--unstyled[aria-disabled="true"]:focus,
  .usa-button--unstyled[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-button-group {
  margin-bottom: 0;
  margin-top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style-type: none;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
  padding-left: 0;
}

@media all and (min-width: 30em) {
  .usa-button-group {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.usa-button-group__item {
  margin: 0.25rem;
}

@media all and (min-width: 30em) {
  .usa-button-group__item:last-child {
    margin-right: 0;
  }
}

.usa-button-group__item .usa-button {
  margin-left: 0;
  margin-right: 0;
}

.usa-button-group--segmented {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 0;
  margin-right: 0;
}

@media all and (min-width: 30em) {
  .usa-button-group--segmented {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}

.usa-button-group--segmented .usa-button {
  position: relative;
  width: calc(100% + 2px);
}

@media all and (min-width: 30em) {
  .usa-button-group--segmented .usa-button {
    width: auto;
  }
}

.usa-button-group--segmented .usa-button:active,
.usa-button-group--segmented .usa-button:hover {
  z-index: 2;
}

.usa-button-group--segmented .usa-button:focus {
  z-index: 3;
}

.usa-button-group--segmented .usa-button-group__item {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

@media all and (min-width: 30em) {
  .usa-button-group--segmented .usa-button-group__item {
    width: auto;
  }
}

.usa-button-group--segmented .usa-button-group__item:first-child > .usa-button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}

.usa-button-group--segmented .usa-button-group__item:last-child > .usa-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-right: 0;
  margin-left: -2px;
  width: calc(100% + 2px);
}

@media all and (min-width: 30em) {
  .usa-button-group--segmented
    .usa-button-group__item:last-child
    > .usa-button {
    margin-left: -1px;
    width: auto;
  }
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:first-child):not(:last-child))
  > .usa-button {
  border-radius: 0;
  margin-right: -1px;
  margin-left: -1px;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button::before {
  border-right: 1px solid #1a4480;
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  right: 1px;
  top: 0;
  width: 1px;
  z-index: 3;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button--secondary::before {
  border-right-color: #b50909;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button--accent-cool::before {
  border-right-color: #28a0cb;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button--base::before {
  border-right-color: #565c65;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  [class*="usa-button"]:disabled::before,
.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  [class*="usa-button"][aria-disabled="true"]::before {
  border-right-color: #fff;
}

.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button--outline::before,
.usa-button-group--segmented
  .usa-button-group__item:where(:not(:last-child))
  .usa-button:active::before {
  display: none;
}

.usa-js-no-click {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.usa-js-no-click .usa-modal,
.usa-js-no-click .usa-modal * {
  pointer-events: auto;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

[data-open-modal] * {
  pointer-events: none;
}

.usa-modal-wrapper {
  text-align: center;
  -webkit-transition: opacity 0.15s ease-in-out;
  transition: opacity 0.15s ease-in-out;
}

.usa-modal-wrapper.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: fixed;
}

.usa-modal-wrapper.is-visible {
  visibility: visible;
  opacity: 1;
  position: fixed;
  z-index: 99999;
}

.usa-modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1.5rem;
  position: fixed;
  scroll-behavior: smooth;
  top: 0;
  width: 100%;
}

.usa-modal-overlay:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.usa-modal-overlay[data-force-action="true"] {
  pointer-events: none;
}

.usa-modal-overlay[data-force-action="true"] * {
  pointer-events: auto;
}

.usa-js-loading .usa-modal-wrapper {
  position: absolute;
  left: -999em;
  right: auto;
}

.usa-js-loading .usa-modal-wrapper:target {
  position: static;
}

.usa-modal {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  background: #fff;
  color: #1b1b1b;
  display: inline-block;
  margin: 1.25rem auto;
  max-width: 30rem;
  position: relative;
  text-align: left;
  vertical-align: middle;
  width: 100%;
}

.usa-modal:focus {
  outline: 0;
}

.usa-modal__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
  padding-top: 2rem;
  width: 100%;
}

.usa-modal__main {
  margin: 0 auto;
  padding: 0.5rem 2rem 2rem;
}

.usa-modal-wrapper [data-close-modal] > .usa-icon,
.usa-modal-wrapper [data-close-modal] > .usa-icon use {
  pointer-events: none !important;
}

.usa-modal__close {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-item-align: end;
  align-self: flex-end;
  background-color: transparent;
  color: #71767a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 0.93rem;
  margin: -2rem 0 0 auto;
  padding: 0.25rem 0.25rem;
  width: auto;
}

.usa-modal__close:active,
.usa-modal__close:hover {
  background-color: transparent;
  color: #1b1b1b;
}

.usa-modal__close:focus {
  outline-offset: 0;
}

.usa-modal__close .usa-icon {
  height: 2rem;
  margin: 2px 2px 0 0;
  width: 2rem;
}

.usa-modal__heading {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.34rem;
  line-height: 1.4;
  margin-top: 0;
}

.usa-modal__footer {
  margin-top: 1.5rem;
}

.usa-modal--lg {
  max-width: 55rem;
  width: 100%;
}

.usa-modal--lg .usa-modal__main {
  padding-bottom: 4rem;
  padding-top: 1.25rem;
  width: 100%;
  max-width: 40rem;
}

@media all and (min-width: 40em) {
  .usa-modal--lg .usa-modal__heading {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }
}

.usa-js-modal--active {
  overflow: hidden;
}

.usa-modal-wrapper {
  visibility: hidden;
}

.usa-modal__bg__close {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  top: 0;
  left: 0;
}`;