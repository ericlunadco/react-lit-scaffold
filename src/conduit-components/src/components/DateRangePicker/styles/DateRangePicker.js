export const styles = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

@font-face {
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

body {
  color: #1b1b1b;
  background-color: #fff;
  overflow-x: hidden;
}

button:not([disabled]):focus,
input:not([disabled]):focus,
select:not([disabled]):focus,
textarea:not([disabled]):focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

[contentEditable="true"]:focus,
[href]:focus,
[tabindex]:focus,
iframe:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

img {
  max-width: 100%;
}

.usa-media-link {
  display: inline-block;
  line-height: 0;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-font-feature-settings: "kern" 1;
  font-feature-settings: "kern" 1;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 100%;
}

address,
cite,
dfn,
var {
  font-style: normal;
}

.usa-focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-sr-only {
  position: absolute;
  left: -999em;
  right: auto;
}

.grid-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-card {
  margin-left: auto;
  margin-right: auto;
  max-width: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-card {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-card-lg {
  margin-left: auto;
  margin-right: auto;
  max-width: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-card-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-mobile {
  margin-left: auto;
  margin-right: auto;
  max-width: 20rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-mobile {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-mobile-lg {
  margin-left: auto;
  margin-right: auto;
  max-width: 30rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-mobile-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-tablet {
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-tablet {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-tablet-lg {
  margin-left: auto;
  margin-right: auto;
  max-width: 55rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-tablet-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-desktop {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-desktop {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-desktop-lg {
  margin-left: auto;
  margin-right: auto;
  max-width: 75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-desktop-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-container-widescreen {
  margin-left: auto;
  margin-right: auto;
  max-width: 87.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .grid-container-widescreen {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-card {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-card-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 15rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-card-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-mobile {
    margin-left: auto;
    margin-right: auto;
    max-width: 20rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-mobile {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-mobile-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-mobile-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-tablet {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-tablet {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-tablet-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 55rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-tablet-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-desktop {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-desktop {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-desktop-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-desktop-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-container-widescreen {
    margin-left: auto;
    margin-right: auto;
    max-width: 87.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .mobile-lg\:grid-container-widescreen {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-card {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-card-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 15rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-card-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-mobile {
    margin-left: auto;
    margin-right: auto;
    max-width: 20rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-mobile {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-mobile-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-mobile-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-tablet {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-tablet {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-tablet-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 55rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-tablet-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-desktop {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-desktop {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-desktop-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-desktop-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-container-widescreen {
    margin-left: auto;
    margin-right: auto;
    max-width: 87.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 40em) and (min-width: 64em) {
  .tablet\:grid-container-widescreen {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-card {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-card-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 15rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-card-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-mobile {
    margin-left: auto;
    margin-right: auto;
    max-width: 20rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-mobile {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-mobile-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-mobile-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-tablet {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-tablet {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-tablet-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 55rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-tablet-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-desktop {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-desktop {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-desktop-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-desktop-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-container-widescreen {
    margin-left: auto;
    margin-right: auto;
    max-width: 87.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .desktop\:grid-container-widescreen {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.grid-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.grid-row.grid-gap {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.grid-row.grid-gap > * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

@media all and (min-width: 64em) {
  .grid-row.grid-gap {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .grid-row.grid-gap > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.grid-row.grid-gap-0 {
  margin-left: 0;
  margin-right: 0;
}

.grid-row.grid-gap-0 > * {
  padding-left: 0;
  padding-right: 0;
}

.grid-row.grid-gap-2px {
  margin-left: -1px;
  margin-right: -1px;
}

.grid-row.grid-gap-2px > * {
  padding-left: 1px;
  padding-right: 1px;
}

.grid-row.grid-gap-05 {
  margin-left: -2px;
  margin-right: -2px;
}

.grid-row.grid-gap-05 > * {
  padding-left: 2px;
  padding-right: 2px;
}

.grid-row.grid-gap-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.grid-row.grid-gap-1 > * {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.grid-row.grid-gap-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.grid-row.grid-gap-2 > * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.grid-row.grid-gap-3 {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.grid-row.grid-gap-3 > * {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.grid-row.grid-gap-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.grid-row.grid-gap-4 > * {
  padding-left: 1rem;
  padding-right: 1rem;
}

.grid-row.grid-gap-5 {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}

.grid-row.grid-gap-5 > * {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.grid-row.grid-gap-6 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.grid-row.grid-gap-6 > * {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.grid-row.grid-gap-sm {
  margin-left: -1px;
  margin-right: -1px;
}

.grid-row.grid-gap-sm > * {
  padding-left: 1px;
  padding-right: 1px;
}

.grid-row.grid-gap-md {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.grid-row.grid-gap-md > * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.grid-row.grid-gap-lg {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.grid-row.grid-gap-lg > * {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

@media all and (min-width: 30em) {
  .grid-row.mobile-lg\:grid-gap-0 {
    margin-left: 0;
    margin-right: 0;
  }

  .grid-row.mobile-lg\:grid-gap-0 > * {
    padding-left: 0;
    padding-right: 0;
  }

  .grid-row.mobile-lg\:grid-gap-2px {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.mobile-lg\:grid-gap-2px > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.mobile-lg\:grid-gap-05 {
    margin-left: -2px;
    margin-right: -2px;
  }

  .grid-row.mobile-lg\:grid-gap-05 > * {
    padding-left: 2px;
    padding-right: 2px;
  }

  .grid-row.mobile-lg\:grid-gap-1 {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }

  .grid-row.mobile-lg\:grid-gap-1 > * {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .grid-row.mobile-lg\:grid-gap-2 {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-2 > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.mobile-lg\:grid-gap-3 > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .grid-row.mobile-lg\:grid-gap-4 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .grid-row.mobile-lg\:grid-gap-4 > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid-row.mobile-lg\:grid-gap-5 {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }

  .grid-row.mobile-lg\:grid-gap-5 > * {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .grid-row.mobile-lg\:grid-gap-6 {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-6 > * {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-sm {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.mobile-lg\:grid-gap-sm > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.mobile-lg\:grid-gap-md {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-md > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.mobile-lg\:grid-gap-lg {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.mobile-lg\:grid-gap-lg > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

@media all and (min-width: 40em) {
  .grid-row.tablet\:grid-gap-0 {
    margin-left: 0;
    margin-right: 0;
  }

  .grid-row.tablet\:grid-gap-0 > * {
    padding-left: 0;
    padding-right: 0;
  }

  .grid-row.tablet\:grid-gap-2px {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.tablet\:grid-gap-2px > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.tablet\:grid-gap-05 {
    margin-left: -2px;
    margin-right: -2px;
  }

  .grid-row.tablet\:grid-gap-05 > * {
    padding-left: 2px;
    padding-right: 2px;
  }

  .grid-row.tablet\:grid-gap-1 {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }

  .grid-row.tablet\:grid-gap-1 > * {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .grid-row.tablet\:grid-gap-2 {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.tablet\:grid-gap-2 > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.tablet\:grid-gap-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.tablet\:grid-gap-3 > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .grid-row.tablet\:grid-gap-4 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .grid-row.tablet\:grid-gap-4 > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid-row.tablet\:grid-gap-5 {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }

  .grid-row.tablet\:grid-gap-5 > * {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .grid-row.tablet\:grid-gap-6 {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  .grid-row.tablet\:grid-gap-6 > * {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-row.tablet\:grid-gap-sm {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.tablet\:grid-gap-sm > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.tablet\:grid-gap-md {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.tablet\:grid-gap-md > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.tablet\:grid-gap-lg {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.tablet\:grid-gap-lg > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

@media all and (min-width: 64em) {
  .grid-row.desktop\:grid-gap-0 {
    margin-left: 0;
    margin-right: 0;
  }

  .grid-row.desktop\:grid-gap-0 > * {
    padding-left: 0;
    padding-right: 0;
  }

  .grid-row.desktop\:grid-gap-2px {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.desktop\:grid-gap-2px > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.desktop\:grid-gap-05 {
    margin-left: -2px;
    margin-right: -2px;
  }

  .grid-row.desktop\:grid-gap-05 > * {
    padding-left: 2px;
    padding-right: 2px;
  }

  .grid-row.desktop\:grid-gap-1 {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }

  .grid-row.desktop\:grid-gap-1 > * {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .grid-row.desktop\:grid-gap-2 {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.desktop\:grid-gap-2 > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.desktop\:grid-gap-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.desktop\:grid-gap-3 > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .grid-row.desktop\:grid-gap-4 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .grid-row.desktop\:grid-gap-4 > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid-row.desktop\:grid-gap-5 {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }

  .grid-row.desktop\:grid-gap-5 > * {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .grid-row.desktop\:grid-gap-6 {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  .grid-row.desktop\:grid-gap-6 > * {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-row.desktop\:grid-gap-sm {
    margin-left: -1px;
    margin-right: -1px;
  }

  .grid-row.desktop\:grid-gap-sm > * {
    padding-left: 1px;
    padding-right: 1px;
  }

  .grid-row.desktop\:grid-gap-md {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .grid-row.desktop\:grid-gap-md > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .grid-row.desktop\:grid-gap-lg {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .grid-row.desktop\:grid-gap-lg > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

[class*="grid-col"] {
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.grid-col {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  width: auto;
  max-width: 100%;
  min-width: 1px;
}

.grid-col-auto {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: auto;
  max-width: 100%;
}

.grid-col-fill {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  width: auto;
  max-width: 100%;
  min-width: 1px;
}

.grid-col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 8.3333333333%;
}

.grid-col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 16.6666666667%;
}

.grid-col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 25%;
}

.grid-col-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 33.3333333333%;
}

.grid-col-5 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 41.6666666667%;
}

.grid-col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 50%;
}

.grid-col-7 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 58.3333333333%;
}

.grid-col-8 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 66.6666666667%;
}

.grid-col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 75%;
}

.grid-col-10 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 83.3333333333%;
}

.grid-col-11 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 91.6666666667%;
}

.grid-col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 100%;
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-col {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .mobile-lg\:grid-col-fill {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .mobile-lg\:grid-col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto;
    max-width: 100%;
  }

  .mobile-lg\:grid-col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 8.3333333333%;
  }

  .mobile-lg\:grid-col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 16.6666666667%;
  }

  .mobile-lg\:grid-col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 25%;
  }

  .mobile-lg\:grid-col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 33.3333333333%;
  }

  .mobile-lg\:grid-col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 41.6666666667%;
  }

  .mobile-lg\:grid-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 50%;
  }

  .mobile-lg\:grid-col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 58.3333333333%;
  }

  .mobile-lg\:grid-col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 66.6666666667%;
  }

  .mobile-lg\:grid-col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 75%;
  }

  .mobile-lg\:grid-col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 83.3333333333%;
  }

  .mobile-lg\:grid-col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 91.6666666667%;
  }

  .mobile-lg\:grid-col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 100%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-col {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .tablet\:grid-col-fill {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .tablet\:grid-col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto;
    max-width: 100%;
  }

  .tablet\:grid-col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 8.3333333333%;
  }

  .tablet\:grid-col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 16.6666666667%;
  }

  .tablet\:grid-col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 25%;
  }

  .tablet\:grid-col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 33.3333333333%;
  }

  .tablet\:grid-col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 41.6666666667%;
  }

  .tablet\:grid-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 50%;
  }

  .tablet\:grid-col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 58.3333333333%;
  }

  .tablet\:grid-col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 66.6666666667%;
  }

  .tablet\:grid-col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 75%;
  }

  .tablet\:grid-col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 83.3333333333%;
  }

  .tablet\:grid-col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 91.6666666667%;
  }

  .tablet\:grid-col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 100%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-col {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .desktop\:grid-col-fill {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    width: auto;
    max-width: 100%;
    min-width: 1px;
  }

  .desktop\:grid-col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto;
    max-width: 100%;
  }

  .desktop\:grid-col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 8.3333333333%;
  }

  .desktop\:grid-col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 16.6666666667%;
  }

  .desktop\:grid-col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 25%;
  }

  .desktop\:grid-col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 33.3333333333%;
  }

  .desktop\:grid-col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 41.6666666667%;
  }

  .desktop\:grid-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 50%;
  }

  .desktop\:grid-col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 58.3333333333%;
  }

  .desktop\:grid-col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 66.6666666667%;
  }

  .desktop\:grid-col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 75%;
  }

  .desktop\:grid-col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 83.3333333333%;
  }

  .desktop\:grid-col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 91.6666666667%;
  }

  .desktop\:grid-col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 100%;
  }
}

.grid-offset-1 {
  margin-left: 8.3333333333%;
}

.grid-offset-2 {
  margin-left: 16.6666666667%;
}

.grid-offset-3 {
  margin-left: 25%;
}

.grid-offset-4 {
  margin-left: 33.3333333333%;
}

.grid-offset-5 {
  margin-left: 41.6666666667%;
}

.grid-offset-6 {
  margin-left: 50%;
}

.grid-offset-7 {
  margin-left: 58.3333333333%;
}

.grid-offset-8 {
  margin-left: 66.6666666667%;
}

.grid-offset-9 {
  margin-left: 75%;
}

.grid-offset-10 {
  margin-left: 83.3333333333%;
}

.grid-offset-11 {
  margin-left: 91.6666666667%;
}

.grid-offset-12 {
  margin-left: 100%;
}

.grid-offset-none {
  margin-left: 0;
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-1 {
    margin-left: 8.3333333333%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-2 {
    margin-left: 16.6666666667%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-3 {
    margin-left: 25%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-4 {
    margin-left: 33.3333333333%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-5 {
    margin-left: 41.6666666667%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-6 {
    margin-left: 50%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-7 {
    margin-left: 58.3333333333%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-8 {
    margin-left: 66.6666666667%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-9 {
    margin-left: 75%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-10 {
    margin-left: 83.3333333333%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-11 {
    margin-left: 91.6666666667%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-12 {
    margin-left: 100%;
  }
}

@media all and (min-width: 30em) {
  .mobile-lg\:grid-offset-none {
    margin-left: 0;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-1 {
    margin-left: 8.3333333333%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-2 {
    margin-left: 16.6666666667%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-3 {
    margin-left: 25%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-4 {
    margin-left: 33.3333333333%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-5 {
    margin-left: 41.6666666667%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-6 {
    margin-left: 50%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-7 {
    margin-left: 58.3333333333%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-8 {
    margin-left: 66.6666666667%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-9 {
    margin-left: 75%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-10 {
    margin-left: 83.3333333333%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-11 {
    margin-left: 91.6666666667%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-12 {
    margin-left: 100%;
  }
}

@media all and (min-width: 40em) {
  .tablet\:grid-offset-none {
    margin-left: 0;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-1 {
    margin-left: 8.3333333333%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-2 {
    margin-left: 16.6666666667%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-3 {
    margin-left: 25%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-4 {
    margin-left: 33.3333333333%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-5 {
    margin-left: 41.6666666667%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-6 {
    margin-left: 50%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-7 {
    margin-left: 58.3333333333%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-8 {
    margin-left: 66.6666666667%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-9 {
    margin-left: 75%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-10 {
    margin-left: 83.3333333333%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-11 {
    margin-left: 91.6666666667%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-12 {
    margin-left: 100%;
  }
}

@media all and (min-width: 64em) {
  .desktop\:grid-offset-none {
    margin-left: 0;
  }
}

.usa-input {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.3;
}

.usa-input {
  border-width: 1px;
  border-color: #565c65;
  border-style: solid;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  color: #1b1b1b;
  display: block;
  height: 2.5rem;
  margin-top: 0.5rem;
  max-width: 30rem;
  padding: 0.5rem;
  width: 100%;
}

@font-face {
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

.usa-input:disabled,
.usa-input[aria-disabled="true"] {
  background-color: #c9c9c9;
  color: #454545;
  cursor: not-allowed;
  opacity: 1;
  -webkit-text-fill-color: #454545;
}

.usa-input:disabled.usa-focus,
.usa-input:disabled:active,
.usa-input:disabled:focus,
.usa-input:disabled:hover,
.usa-input[aria-disabled="true"].usa-focus,
.usa-input[aria-disabled="true"]:active,
.usa-input[aria-disabled="true"]:focus,
.usa-input[aria-disabled="true"]:hover {
  background-color: #c9c9c9;
  color: #454545;
}

@media (forced-colors: active) {
  .usa-input:disabled,
  .usa-input[aria-disabled="true"] {
    border: 0;
    color: GrayText;
  }

  .usa-input:disabled.usa-focus,
  .usa-input:disabled:active,
  .usa-input:disabled:focus,
  .usa-input:disabled:hover,
  .usa-input[aria-disabled="true"].usa-focus,
  .usa-input[aria-disabled="true"]:active,
  .usa-input[aria-disabled="true"]:focus,
  .usa-input[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

@media (forced-colors: active) {
  .usa-input:disabled,
  .usa-input[aria-disabled="true"] {
    border: 2px solid GrayText;
  }
}

.usa-input--error {
  border-width: 0.25rem;
  border-color: #b50909;
  border-style: solid;
  padding-top: calc(0.5rem - 0.25rem);
  padding-bottom: calc(0.5rem - 0.25rem);
}

.usa-input--success {
  border-width: 0.25rem;
  border-color: #00a91c;
  border-style: solid;
  padding-top: calc(0.5rem - 0.25rem);
  padding-bottom: calc(0.5rem - 0.25rem);
}

.usa-icon {
  display: inline-block;
  fill: currentColor;
  height: 1em;
  position: relative;
  width: 1em;
}

.usa-icon--size-3 {
  height: 1.5rem;
  width: 1.5rem;
}

.usa-icon--size-4 {
  height: 2rem;
  width: 2rem;
}

.usa-icon--size-5 {
  height: 2.5rem;
  width: 2.5rem;
}

.usa-icon--size-6 {
  height: 3rem;
  width: 3rem;
}

.usa-icon--size-7 {
  height: 3.5rem;
  width: 3.5rem;
}

.usa-icon--size-8 {
  height: 4rem;
  width: 4rem;
}

.usa-icon--size-9 {
  height: 4.5rem;
  width: 4.5rem;
}

.usa-date-picker__wrapper {
  display: none;
  position: relative;
  max-width: 30rem;
}

.usa-date-picker__wrapper:focus {
  outline: 0;
}

.usa-date-picker__button:disabled,
.usa-date-picker__calendar__date:disabled,
.usa-date-picker__calendar__month-selection:disabled,
.usa-date-picker__calendar__month:disabled,
.usa-date-picker__calendar__next-month:disabled,
.usa-date-picker__calendar__next-year-chunk:disabled,
.usa-date-picker__calendar__next-year:disabled,
.usa-date-picker__calendar__previous-month:disabled,
.usa-date-picker__calendar__previous-year-chunk:disabled,
.usa-date-picker__calendar__previous-year:disabled,
.usa-date-picker__calendar__year-selection:disabled,
.usa-date-picker__calendar__year:disabled,
.usa-date-picker__external-input[aria-disabled="true"]
  + .usa-date-picker__button,
[aria-disabled="true"].usa-date-picker__button,
[aria-disabled="true"].usa-date-picker__calendar__date,
[aria-disabled="true"].usa-date-picker__calendar__month,
[aria-disabled="true"].usa-date-picker__calendar__month-selection,
[aria-disabled="true"].usa-date-picker__calendar__next-month,
[aria-disabled="true"].usa-date-picker__calendar__next-year,
[aria-disabled="true"].usa-date-picker__calendar__next-year-chunk,
[aria-disabled="true"].usa-date-picker__calendar__previous-month,
[aria-disabled="true"].usa-date-picker__calendar__previous-year,
[aria-disabled="true"].usa-date-picker__calendar__previous-year-chunk,
[aria-disabled="true"].usa-date-picker__calendar__year,
[aria-disabled="true"].usa-date-picker__calendar__year-selection {
  cursor: not-allowed;
  opacity: 0.6;
}

.usa-date-picker__button:hover:disabled,
.usa-date-picker__calendar__date:hover:disabled,
.usa-date-picker__calendar__month-selection:hover:disabled,
.usa-date-picker__calendar__month:hover:disabled,
.usa-date-picker__calendar__next-month:hover:disabled,
.usa-date-picker__calendar__next-year-chunk:hover:disabled,
.usa-date-picker__calendar__next-year:hover:disabled,
.usa-date-picker__calendar__previous-month:hover:disabled,
.usa-date-picker__calendar__previous-year-chunk:hover:disabled,
.usa-date-picker__calendar__previous-year:hover:disabled,
.usa-date-picker__calendar__year-selection:hover:disabled,
.usa-date-picker__calendar__year:hover:disabled,
.usa-date-picker__external-input[aria-disabled="true"]
  + .usa-date-picker__button:hover,
[aria-disabled="true"].usa-date-picker__button:hover,
[aria-disabled="true"].usa-date-picker__calendar__date:hover,
[aria-disabled="true"].usa-date-picker__calendar__month-selection:hover,
[aria-disabled="true"].usa-date-picker__calendar__month:hover,
[aria-disabled="true"].usa-date-picker__calendar__next-month:hover,
[aria-disabled="true"].usa-date-picker__calendar__next-year-chunk:hover,
[aria-disabled="true"].usa-date-picker__calendar__next-year:hover,
[aria-disabled="true"].usa-date-picker__calendar__previous-month:hover,
[aria-disabled="true"].usa-date-picker__calendar__previous-year-chunk:hover,
[aria-disabled="true"].usa-date-picker__calendar__previous-year:hover,
[aria-disabled="true"].usa-date-picker__calendar__year-selection:hover,
[aria-disabled="true"].usa-date-picker__calendar__year:hover {
  background-color: initial;
}

@media (forced-colors: active) {
  .usa-date-picker__button:disabled,
  .usa-date-picker__calendar__date:disabled,
  .usa-date-picker__calendar__month-selection:disabled,
  .usa-date-picker__calendar__month:disabled,
  .usa-date-picker__calendar__next-month:disabled,
  .usa-date-picker__calendar__next-year-chunk:disabled,
  .usa-date-picker__calendar__next-year:disabled,
  .usa-date-picker__calendar__previous-month:disabled,
  .usa-date-picker__calendar__previous-year-chunk:disabled,
  .usa-date-picker__calendar__previous-year:disabled,
  .usa-date-picker__calendar__year-selection:disabled,
  .usa-date-picker__calendar__year:disabled,
  .usa-date-picker__external-input[aria-disabled="true"]
    + .usa-date-picker__button,
  [aria-disabled="true"].usa-date-picker__button,
  [aria-disabled="true"].usa-date-picker__calendar__date,
  [aria-disabled="true"].usa-date-picker__calendar__month,
  [aria-disabled="true"].usa-date-picker__calendar__month-selection,
  [aria-disabled="true"].usa-date-picker__calendar__next-month,
  [aria-disabled="true"].usa-date-picker__calendar__next-year,
  [aria-disabled="true"].usa-date-picker__calendar__next-year-chunk,
  [aria-disabled="true"].usa-date-picker__calendar__previous-month,
  [aria-disabled="true"].usa-date-picker__calendar__previous-year,
  [aria-disabled="true"].usa-date-picker__calendar__previous-year-chunk,
  [aria-disabled="true"].usa-date-picker__calendar__year,
  [aria-disabled="true"].usa-date-picker__calendar__year-selection {
    background-color: GrayText;
  }

  .usa-date-picker__button:hover:disabled,
  .usa-date-picker__calendar__date:hover:disabled,
  .usa-date-picker__calendar__month-selection:hover:disabled,
  .usa-date-picker__calendar__month:hover:disabled,
  .usa-date-picker__calendar__next-month:hover:disabled,
  .usa-date-picker__calendar__next-year-chunk:hover:disabled,
  .usa-date-picker__calendar__next-year:hover:disabled,
  .usa-date-picker__calendar__previous-month:hover:disabled,
  .usa-date-picker__calendar__previous-year-chunk:hover:disabled,
  .usa-date-picker__calendar__previous-year:hover:disabled,
  .usa-date-picker__calendar__year-selection:hover:disabled,
  .usa-date-picker__calendar__year:hover:disabled,
  .usa-date-picker__external-input[aria-disabled="true"]
    + .usa-date-picker__button:hover,
  [aria-disabled="true"].usa-date-picker__button:hover,
  [aria-disabled="true"].usa-date-picker__calendar__date:hover,
  [aria-disabled="true"].usa-date-picker__calendar__month-selection:hover,
  [aria-disabled="true"].usa-date-picker__calendar__month:hover,
  [aria-disabled="true"].usa-date-picker__calendar__next-month:hover,
  [aria-disabled="true"].usa-date-picker__calendar__next-year-chunk:hover,
  [aria-disabled="true"].usa-date-picker__calendar__next-year:hover,
  [aria-disabled="true"].usa-date-picker__calendar__previous-month:hover,
  [aria-disabled="true"].usa-date-picker__calendar__previous-year-chunk:hover,
  [aria-disabled="true"].usa-date-picker__calendar__previous-year:hover,
  [aria-disabled="true"].usa-date-picker__calendar__year-selection:hover,
  [aria-disabled="true"].usa-date-picker__calendar__year:hover {
    background-color: GrayText;
  }
}

.usa-date-picker__button,
.usa-date-picker__calendar__date,
.usa-date-picker__calendar__month,
.usa-date-picker__calendar__month-selection,
.usa-date-picker__calendar__next-month,
.usa-date-picker__calendar__next-year,
.usa-date-picker__calendar__next-year-chunk,
.usa-date-picker__calendar__previous-month,
.usa-date-picker__calendar__previous-year,
.usa-date-picker__calendar__previous-year-chunk,
.usa-date-picker__calendar__year,
.usa-date-picker__calendar__year-selection {
  background-color: #f0f0f0;
  border: 0;
  width: 100%;
}

.usa-date-picker__button:not([disabled]),
.usa-date-picker__calendar__date:not([disabled]),
.usa-date-picker__calendar__month-selection:not([disabled]),
.usa-date-picker__calendar__month:not([disabled]),
.usa-date-picker__calendar__next-month:not([disabled]),
.usa-date-picker__calendar__next-year-chunk:not([disabled]),
.usa-date-picker__calendar__next-year:not([disabled]),
.usa-date-picker__calendar__previous-month:not([disabled]),
.usa-date-picker__calendar__previous-year-chunk:not([disabled]),
.usa-date-picker__calendar__previous-year:not([disabled]),
.usa-date-picker__calendar__year-selection:not([disabled]),
.usa-date-picker__calendar__year:not([disabled]) {
  cursor: pointer;
}

.usa-date-picker__button:not([disabled]):focus,
.usa-date-picker__calendar__date:not([disabled]):focus,
.usa-date-picker__calendar__month-selection:not([disabled]):focus,
.usa-date-picker__calendar__month:not([disabled]):focus,
.usa-date-picker__calendar__next-month:not([disabled]):focus,
.usa-date-picker__calendar__next-year-chunk:not([disabled]):focus,
.usa-date-picker__calendar__next-year:not([disabled]):focus,
.usa-date-picker__calendar__previous-month:not([disabled]):focus,
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):focus,
.usa-date-picker__calendar__previous-year:not([disabled]):focus,
.usa-date-picker__calendar__year-selection:not([disabled]):focus,
.usa-date-picker__calendar__year:not([disabled]):focus {
  outline-offset: -4px;
}

.usa-date-picker__button:not([disabled]):hover,
.usa-date-picker__calendar__date:not([disabled]):hover,
.usa-date-picker__calendar__month-selection:not([disabled]):hover,
.usa-date-picker__calendar__month:not([disabled]):hover,
.usa-date-picker__calendar__next-month:not([disabled]):hover,
.usa-date-picker__calendar__next-year-chunk:not([disabled]):hover,
.usa-date-picker__calendar__next-year:not([disabled]):hover,
.usa-date-picker__calendar__previous-month:not([disabled]):hover,
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover,
.usa-date-picker__calendar__previous-year:not([disabled]):hover,
.usa-date-picker__calendar__year-selection:not([disabled]):hover,
.usa-date-picker__calendar__year:not([disabled]):hover {
  background-color: #dfe1e2;
}

@media (forced-colors: active) {
  .usa-date-picker__button:not([disabled]):hover,
  .usa-date-picker__calendar__date:not([disabled]):hover,
  .usa-date-picker__calendar__month-selection:not([disabled]):hover,
  .usa-date-picker__calendar__month:not([disabled]):hover,
  .usa-date-picker__calendar__next-month:not([disabled]):hover,
  .usa-date-picker__calendar__next-year-chunk:not([disabled]):hover,
  .usa-date-picker__calendar__next-year:not([disabled]):hover,
  .usa-date-picker__calendar__previous-month:not([disabled]):hover,
  .usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover,
  .usa-date-picker__calendar__previous-year:not([disabled]):hover,
  .usa-date-picker__calendar__year-selection:not([disabled]):hover,
  .usa-date-picker__calendar__year:not([disabled]):hover {
    background-color: buttontext;
  }
}

.usa-date-picker__button:not([disabled]):active,
.usa-date-picker__calendar__date:not([disabled]):active,
.usa-date-picker__calendar__month-selection:not([disabled]):active,
.usa-date-picker__calendar__month:not([disabled]):active,
.usa-date-picker__calendar__next-month:not([disabled]):active,
.usa-date-picker__calendar__next-year-chunk:not([disabled]):active,
.usa-date-picker__calendar__next-year:not([disabled]):active,
.usa-date-picker__calendar__previous-month:not([disabled]):active,
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):active,
.usa-date-picker__calendar__previous-year:not([disabled]):active,
.usa-date-picker__calendar__year-selection:not([disabled]):active,
.usa-date-picker__calendar__year:not([disabled]):active {
  background-color: #a9aeb1;
}

@media (forced-colors: active) {
  .usa-date-picker__button:not([disabled]):active,
  .usa-date-picker__calendar__date:not([disabled]):active,
  .usa-date-picker__calendar__month-selection:not([disabled]):active,
  .usa-date-picker__calendar__month:not([disabled]):active,
  .usa-date-picker__calendar__next-month:not([disabled]):active,
  .usa-date-picker__calendar__next-year-chunk:not([disabled]):active,
  .usa-date-picker__calendar__next-year:not([disabled]):active,
  .usa-date-picker__calendar__previous-month:not([disabled]):active,
  .usa-date-picker__calendar__previous-year-chunk:not([disabled]):active,
  .usa-date-picker__calendar__previous-year:not([disabled]):active,
  .usa-date-picker__calendar__year-selection:not([disabled]):active,
  .usa-date-picker__calendar__year:not([disabled]):active {
    background-color: buttontext;
  }
}

.usa-date-picker--active .usa-date-picker__button {
  background-color: #f0f0f0;
}

@media (forced-colors: active) {
  .usa-date-picker--active .usa-date-picker__button {
    background-color: buttontext;
  }
}

.usa-date-picker--active .usa-date-picker__calendar {
  z-index: 400;
}

.usa-date-picker__button {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background-color: transparent;
  background-position: center;
  background-size: 1.5rem;
  margin-top: 0.5em;
  width: 3em;
}

@media (forced-colors: active) {
  .usa-date-picker__button {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    -webkit-mask-size: 1.5rem !important;
    mask-size: 1.5rem !important;
    position: relative;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__button {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/calendar_today.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}

  .usa-date-picker__button:not([disabled]):hover {
    background-color: Highlight;
  }
}

.usa-date-picker--initialized .usa-date-picker__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.usa-date-picker__calendar {
  background-color: #f0f0f0;
  left: auto;
  max-width: 20rem;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 100;
}

.usa-date-picker__calendar__table {
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
  width: 100%;
}

.usa-date-picker__calendar__table th {
  font-weight: 400;
}

.usa-date-picker__calendar__table td {
  padding: 0;
}

.usa-date-picker__calendar__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
}

.usa-date-picker__calendar__cell {
  background-color: #f0f0f0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.usa-date-picker__calendar__cell--center-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__cell--center-items:not([disabled]):hover {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

.usa-date-picker__calendar__next-month,
.usa-date-picker__calendar__next-year,
.usa-date-picker__calendar__previous-month,
.usa-date-picker__calendar__previous-year {
  background-position: center;
  background-size: auto 1.5rem;
  height: 1.5rem;
  padding: 20px 10px;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__next-month,
  .usa-date-picker__calendar__next-year,
  .usa-date-picker__calendar__previous-month,
  .usa-date-picker__calendar__previous-year {
    -webkit-mask-size: 1.5rem !important;
    mask-size: 1.5rem !important;
  }
}

.usa-date-picker__calendar__previous-year:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__previous-year:not([disabled]) {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    background-color: buttonText;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__previous-year:not([disabled]) {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_before.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}
}

.usa-date-picker__calendar__previous-month:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__previous-month:not([disabled]) {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    background-color: buttonText;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__previous-month:not([disabled]) {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}
}

.usa-date-picker__calendar__next-year:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__next-year:not([disabled]) {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    background-color: buttonText;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__next-year:not([disabled]) {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_far_next.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}
}

.usa-date-picker__calendar__next-month:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__next-month:not([disabled]) {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    background-color: buttonText;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__next-month:not([disabled]) {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}
}

.usa-date-picker__calendar__day-of-week {
  padding: 6px 0;
}

.usa-date-picker__calendar__date {
  padding: 10px 0;
}

.usa-date-picker__calendar__date--focused {
  outline: 2px solid #162e51;
  outline-offset: -2px;
  position: relative;
  z-index: 100;
}

.usa-date-picker__calendar__date--next-month:not([disabled]),
.usa-date-picker__calendar__date--previous-month:not([disabled]) {
  color: #5d5d52;
}

.usa-date-picker__calendar__date--range-date,
.usa-date-picker__calendar__date--selected {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__date--range-date:not([disabled]),
.usa-date-picker__calendar__date--selected:not([disabled]) {
  background-color: #0050d8;
  color: #f9f9f9;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--range-date:not([disabled]),
  .usa-date-picker__calendar__date--selected:not([disabled]) {
    border: ActiveText 2px solid;
  }
}

.usa-date-picker__calendar__date--range-date:not([disabled]):hover,
.usa-date-picker__calendar__date--selected:not([disabled]):hover {
  background-color: #0050d8;
  color: #e6e6e6;
}

.usa-date-picker__calendar__date--range-date:not([disabled]):focus,
.usa-date-picker__calendar__date--selected:not([disabled]):focus {
  background-color: #0050d8;
  color: #f9f9f9;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--range-date:not([disabled]):focus,
  .usa-date-picker__calendar__date--selected:not([disabled]):focus {
    border: ActiveText 2px solid;
  }
}

.usa-date-picker__calendar__date--range-date:not([disabled]):active,
.usa-date-picker__calendar__date--selected:not([disabled]):active {
  background-color: #1a4480;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--range-date:not([disabled]):active,
  .usa-date-picker__calendar__date--selected:not([disabled]):active {
    background-color: Highlight;
  }
}

.usa-date-picker__calendar__date--range-date-start {
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
}

.usa-date-picker__calendar__date--range-date-end {
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}

.usa-date-picker__calendar__date--within-range {
  background-color: #cfe8ff;
}

.usa-date-picker__calendar__date--within-range:not([disabled]) {
  background-color: #cfe8ff;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--within-range:not([disabled]) {
    border: Highlight 2px solid;
  }
}

.usa-date-picker__calendar__date--within-range:not([disabled]):hover {
  background-color: #cfe8ff;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--within-range:not([disabled]):hover {
    border: Highlight 2px solid;
  }
}

.usa-date-picker__calendar__date--within-range:not([disabled]):focus {
  background-color: #cfe8ff;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--within-range:not([disabled]):focus {
    border: Highlight 2px solid;
  }
}

.usa-date-picker__calendar__date--within-range:not([disabled]):active {
  background-color: #cfe8ff;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__date--within-range:not([disabled]):active {
    background-color: Highlight;
  }
}

@media all and (max-width: 19.99em) {
  .usa-date-picker__calendar__month-label {
    min-width: 100%;
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }
}

@media all and (min-width: 20em) {
  .usa-date-picker__calendar__month-label {
    -webkit-box-flex: 4;
    -ms-flex: 4;
    flex: 4;
    text-align: center;
  }
}

.usa-date-picker__calendar__month-selection,
.usa-date-picker__calendar__year-selection {
  display: inline-block;
  height: 100%;
  padding: 8px 4px;
  width: auto;
}

@media all and (max-width: 19.99em) {
  .usa-date-picker__calendar__month-selection,
  .usa-date-picker__calendar__year-selection {
    padding-bottom: 0;
    padding-top: 12px;
  }
}

.usa-date-picker__calendar__month-picker {
  padding: 20px 5px;
}

@media all and (max-width: 19.99em) {
  .usa-date-picker__calendar__month-picker {
    padding-bottom: 12px;
    padding-top: 12px;
  }

  .usa-date-picker__calendar__month-picker tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

.usa-date-picker__calendar__month {
  padding: 10px 0;
}

.usa-date-picker__calendar__month--focused {
  outline: 2px solid #162e51;
  outline-offset: -2px;
  position: relative;
  z-index: 100;
}

.usa-date-picker__calendar__month--selected {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__month--selected:not([disabled]) {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__month--selected:not([disabled]):hover {
  background-color: #0050d8;
  color: #e6e6e6;
}

.usa-date-picker__calendar__month--selected:not([disabled]):focus {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__month--selected:not([disabled]):active {
  background-color: #1a4480;
}

.usa-date-picker__calendar__year-picker {
  padding: 20px 5px;
}

.usa-date-picker__calendar__next-year-chunk,
.usa-date-picker__calendar__previous-year-chunk {
  background-position: center;
  background-size: auto 2rem;
  margin: auto;
  padding: 40px 0;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__next-year-chunk,
  .usa-date-picker__calendar__previous-year-chunk {
    -webkit-mask-size: 1.5rem !important;
    mask-size: 1.5rem !important;
  }
}

.usa-date-picker__calendar__previous-year-chunk:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__previous-year-chunk:not([disabled]) {
    background-image: none;
  }

  .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    content: "";
    vertical-align: middle;
    margin-left: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_before.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}

  .usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover {
    border: 2px solid transparent;
    background-color: transparent;
  }
}

.usa-date-picker__calendar__next-year-chunk:not([disabled]) {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-date-picker__calendar__next-year-chunk:not([disabled]) {
    background-image: none;
  }

  .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    display: inline-block;
    height: 2.5rem;
    width: 3rem;
    content: "";
    vertical-align: middle;
    margin-left: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 2.5rem 2.5rem;
      mask-size: 2.5rem 2.5rem;
    }
}

  .usa-date-picker__calendar__next-year-chunk:not([disabled]):hover {
    border: 2px solid transparent;
    background-color: transparent;
  }
}

.usa-date-picker__calendar__year {
  padding: 10px 0;
}

.usa-date-picker__calendar__year--focused {
  outline: 2px solid #162e51;
  outline-offset: -2px;
  position: relative;
  z-index: 100;
}

.usa-date-picker__calendar__year--selected {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__year--selected:not([disabled]) {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__year--selected:not([disabled]):hover {
  background-color: #0050d8;
  color: #e6e6e6;
}

.usa-date-picker__calendar__year--selected:not([disabled]):focus {
  background-color: #0050d8;
  color: #f9f9f9;
}

.usa-date-picker__calendar__year--selected:not([disabled]):active {
  background-color: #1a4480;
}

.usa-date-range-picker {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 1rem;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.usa-date-range-picker .usa-form-group {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 200px;
}`;