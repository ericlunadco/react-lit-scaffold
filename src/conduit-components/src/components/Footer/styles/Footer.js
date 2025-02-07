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

.usa-form {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.3;
}

@media all and (min-width: 30em) {
  .usa-form {
    max-width: 20rem;
  }
}

.usa-form abbr[title="required"] {
  text-decoration: none;
}

.usa-form .usa-input,
.usa-form .usa-range,
.usa-form .usa-select,
.usa-form .usa-textarea {
  max-width: none;
}

.usa-form .usa-input--2xs,
.usa-form .usa-input-group--2xs {
  max-width: 5ex;
}

.usa-form .usa-input--xs,
.usa-form .usa-input-group--xs {
  max-width: 9ex;
}

.usa-form .usa-input--sm,
.usa-form .usa-input--small,
.usa-form .usa-input-group--sm,
.usa-form .usa-input-group--small {
  max-width: 13ex;
}

.usa-form .usa-input--md,
.usa-form .usa-input--medium,
.usa-form .usa-input-group--md,
.usa-form .usa-input-group--medium {
  max-width: 20ex;
}

.usa-form .usa-input--lg,
.usa-form .usa-input-group--lg {
  max-width: 30ex;
}

.usa-form .usa-input--xl,
.usa-form .usa-input-group--xl {
  max-width: 40ex;
}

.usa-form .usa-input--2xl,
.usa-form .usa-input-group--2xl {
  max-width: 50ex;
}

.usa-form .usa-button {
  margin-top: 0.5rem;
}

@media all and (min-width: 30em) {
  .usa-form .usa-button {
    margin-top: 1.5rem;
  }
}

.usa-form a:where(:not(.usa-button)) {
  color: #005ea2;
  text-decoration: underline;
}

.usa-form a:where(:not(.usa-button)):visited {
  color: #54278f;
}

.usa-form a:where(:not(.usa-button)):hover {
  color: #1a4480;
}

.usa-form a:where(:not(.usa-button)):active {
  color: #162e51;
}

.usa-form a:where(:not(.usa-button)):focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

@media all and (min-width: 30em) {
  .usa-form--large {
    max-width: 30rem;
  }
}

.usa-show-password {
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
  cursor: pointer;
}

.usa-show-password:visited {
  color: #54278f;
}

.usa-show-password:hover {
  color: #1a4480;
}

.usa-show-password:active {
  color: #162e51;
}

.usa-show-password:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-show-password.usa-button--active,
.usa-show-password.usa-button--disabled,
.usa-show-password.usa-button--hover,
.usa-show-password:active,
.usa-show-password:disabled,
.usa-show-password:disabled.usa-button--active,
.usa-show-password:disabled.usa-button--hover,
.usa-show-password:disabled.usa-focus,
.usa-show-password:disabled:active,
.usa-show-password:disabled:focus,
.usa-show-password:disabled:hover,
.usa-show-password:hover,
.usa-show-password[aria-disabled="true"],
.usa-show-password[aria-disabled="true"].usa-button--active,
.usa-show-password[aria-disabled="true"].usa-button--hover,
.usa-show-password[aria-disabled="true"].usa-focus,
.usa-show-password[aria-disabled="true"]:active,
.usa-show-password[aria-disabled="true"]:focus,
.usa-show-password[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-show-password.usa-button--hover {
  color: #1a4480;
}

.usa-show-password.usa-button--active {
  color: #162e51;
}

.usa-show-password:disabled,
.usa-show-password:disabled:hover,
.usa-show-password[aria-disabled="true"],
.usa-show-password[aria-disabled="true"]:focus,
.usa-show-password[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-show-password:disabled,
  .usa-show-password:disabled:hover,
  .usa-show-password[aria-disabled="true"],
  .usa-show-password[aria-disabled="true"]:focus,
  .usa-show-password[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-form__note,
.usa-show-password {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 0.93rem;
  line-height: 1.3;
  float: right;
  margin: 0.25rem 0 1rem;
}

.usa-label {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.3;
  display: block;
  font-weight: 400;
  margin-top: 1.5rem;
  max-width: 30rem;
}

.usa-label--error {
  font-weight: 700;
  margin-top: 0;
}

.usa-label--required {
  color: #b50909;
}

.usa-list {
  margin-bottom: 1em;
  margin-top: 1em;
  line-height: 1.5;
  padding-left: 3ch;
}

.usa-list:last-child {
  margin-bottom: 0;
}

.usa-list ol,
.usa-list ul {
  margin-top: 0.25em;
}

.usa-list li {
  margin-bottom: 0.25em;
  max-width: 68ex;
}

.usa-list li:last-child {
  margin-bottom: 0;
}

.usa-list--unstyled {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
}

.usa-list--unstyled > li {
  margin-bottom: 0;
  max-width: unset;
}

.usa-prose .usa-list--unstyled {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
}

.usa-prose .usa-list--unstyled > li {
  margin-bottom: 0;
  max-width: unset;
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

.usa-footer {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  overflow: hidden;
}

.usa-footer .grid-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .usa-footer .grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-footer .grid-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.usa-footer .grid-row.grid-gap {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.usa-footer .grid-row.grid-gap > * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

@media all and (min-width: 64em) {
  .usa-footer .grid-row.grid-gap {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .usa-footer .grid-row.grid-gap > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.usa-footer .grid-row.grid-gap-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.usa-footer .grid-row.grid-gap-1 > * {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.usa-footer .grid-row.grid-gap-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.usa-footer .grid-row.grid-gap-2 > * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.usa-footer .grid-row.grid-gap-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.usa-footer .grid-row.grid-gap-4 > * {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 30em) {
  .usa-footer .grid-row.mobile-lg\:grid-gap-2 {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  .usa-footer .grid-row.mobile-lg\:grid-gap-2 > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.usa-footer .grid-row [class*="grid-col"] {
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.usa-footer .grid-row .grid-col-auto {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: auto;
  max-width: 100%;
}

@media all and (min-width: 30em) {
  .usa-footer .grid-row .mobile-lg\:grid-col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto;
    max-width: 100%;
  }

  .usa-footer .grid-row .mobile-lg\:grid-col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 33.3333333333%;
  }

  .usa-footer .grid-row .mobile-lg\:grid-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 50%;
  }

  .usa-footer .grid-row .mobile-lg\:grid-col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 66.6666666667%;
  }

  .usa-footer .grid-row .mobile-lg\:grid-col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 100%;
  }
}

@media all and (min-width: 40em) {
  .usa-footer .grid-row .tablet\:grid-col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 33.3333333333%;
  }

  .usa-footer .grid-row .tablet\:grid-col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 66.6666666667%;
  }
}

@media all and (min-width: 64em) {
  .usa-footer .grid-row .desktop\:grid-col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto;
    max-width: 100%;
  }

  .usa-footer .grid-row .desktop\:grid-col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 25%;
  }
}

.usa-footer__return-to-top {
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  line-height: 0.9;
}

.usa-footer__return-to-top a {
  color: #005ea2;
  text-decoration: underline;
}

.usa-footer__return-to-top a:visited {
  color: #54278f;
}

.usa-footer__return-to-top a:hover {
  color: #1a4480;
}

.usa-footer__return-to-top a:active {
  color: #162e51;
}

.usa-footer__return-to-top a:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-footer__nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-left: 0;
  padding-right: 0;
  border-bottom: 1px solid #a9aeb1;
}

@media all and (min-width: 64em) {
  .usa-footer__nav {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 30em) {
  .usa-footer__nav {
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: none;
  }
}

@media all and (min-width: 30em) and (min-width: 64em) {
  .usa-footer__nav {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-footer__nav > ul {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
}

.usa-footer__primary-section {
  background-color: #f0f0f0;
}

.usa-footer__primary-section > .grid-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .usa-footer__primary-section > .grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-footer__primary-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .usa-footer__primary-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-footer__primary-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-footer__primary-content {
  line-height: 1.1;
}

.usa-footer__primary-link {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  color: #1b1b1b;
  font-weight: 700;
  display: block;
}

@media all and (min-width: 30em) {
  .usa-footer__primary-link {
    padding-left: 0;
    padding-right: 0;
  }
}

.usa-footer__primary-link--button {
  width: 100%;
  border: 0;
  cursor: pointer;
}

.usa-footer__primary-link--button::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1.25rem 1.25rem;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  content: "";
  vertical-align: middle;
  margin-right: 0.25rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-footer__primary-link--button::before {
    background: 0 0;
    background-color: currentColor;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 1.25rem 1.25rem;
    mask-size: 1.25rem 1.25rem;
  }
}

.usa-footer__primary-link--button:not([disabled]):focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: -0.25rem;
}

.usa-footer__primary-link--button::before {
  height: 1.25rem;
  width: 1.25rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-size: contain;
  content: "";
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 0.25rem;
  margin-left: -0.25rem;
}

@media (forced-colors: active) {
  .usa-footer__primary-link--button::before {
    background-color: buttonText !important;
  }
}

.usa-footer__primary-link--button + .usa-list--unstyled {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.usa-footer__primary-link--button[aria-expanded="false"]::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/navigate_next.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1.25rem 1.25rem;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  content: "";
  vertical-align: middle;
  margin-right: 0.25rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-footer__primary-link--button[aria-expanded="false"]::before {
    background: 0 0;
    background-color: currentColor;
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
    -webkit-mask-size: 1.25rem 1.25rem;
    mask-size: 1.25rem 1.25rem;
  }
}

.usa-footer__primary-link--button[aria-expanded="false"] + .usa-list--unstyled {
  display: none;
}

.usa-footer__secondary-link {
  line-height: 1.1;
  margin-left: 1rem;
  padding: 0;
}

.usa-footer__secondary-link a {
  color: #005ea2;
  text-decoration: underline;
}

.usa-footer__secondary-link a:visited {
  color: #54278f;
}

.usa-footer__secondary-link a:hover {
  color: #1a4480;
}

.usa-footer__secondary-link a:active {
  color: #162e51;
}

.usa-footer__secondary-link a:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-footer__secondary-link + .usa-footer__secondary-link {
  padding-top: 1rem;
}

@media all and (min-width: 30em) {
  .usa-footer__secondary-link {
    margin-left: 0;
  }
}

.usa-footer__contact-info {
  line-height: 1.1;
}

.usa-footer__contact-info a {
  color: #1b1b1b;
}

@media all and (min-width: 30em) {
  .usa-footer__contact-info {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }
}

.usa-footer__primary-content {
  border-top: 1px solid #a9aeb1;
}

@media all and (min-width: 30em) {
  .usa-footer__primary-content {
    border: none;
  }
}

.usa-sign-up {
  padding-bottom: 2rem;
  padding-top: 1.5rem;
}

.usa-sign-up .usa-button,
.usa-sign-up .usa-label {
  margin-top: 0.75rem;
}

.usa-sign-up__heading {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.34rem;
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
}

.usa-footer__secondary-section {
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  color: #1b1b1b;
  background-color: #dfe1e2;
}

.usa-footer__secondary-section > .grid-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media all and (min-width: 64em) {
  .usa-footer__secondary-section > .grid-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-footer__secondary-section > .grid-container > .grid-row {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.usa-footer__secondary-section a {
  color: #1b1b1b;
}

.usa-footer__logo {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

@media all and (min-width: 30em) {
  .usa-footer__logo {
    margin-bottom: 0;
    margin-top: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

.usa-footer__logo-img {
  max-width: 5rem;
}

.usa-footer__logo-heading {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.46rem;
  line-height: 0.9;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.usa-footer__contact-links {
  margin-top: 1.5rem;
}

@media all and (min-width: 30em) {
  .usa-footer__contact-links {
    margin-top: 0;
    text-align: right;
  }
}

.usa-footer__contact-heading {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.46rem;
  line-height: 1.1;
  font-weight: 700;
  margin-top: 0;
}

@media all and (min-width: 30em) {
  .usa-footer__contact-heading {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }
}

.usa-footer__social-links {
  line-height: 0.9;
  padding-bottom: 0.5rem;
}

.usa-footer__social-links a {
  text-decoration: none;
}

@media all and (min-width: 30em) {
  .usa-footer__social-links {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}

.usa-social-link {
  height: 3rem;
  width: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 0.25rem;
}

.usa-social-link:hover {
  background-color: #fff;
}

@media (forced-colors: active) {
  .usa-social-link {
    background-color: #d3d3d3;
    forced-color-adjust: none;
  }
}

.usa-social-link__icon {
  display: block;
  height: auto;
  width: 100%;
}

@media all and (min-width: 30em) {
  .usa-footer__address {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}

@media all and (min-width: 64em) {
  .usa-footer--slim .usa-footer__nav {
    padding-left: 0;
    padding-right: 0;
  }
}

.usa-footer--slim .usa-footer__address {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

@media all and (min-width: 30em) {
  .usa-footer--slim .usa-footer__address {
    padding: 0;
  }
}

.usa-footer--slim .usa-footer__logo {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.usa-footer--slim .usa-footer__logo-img {
  max-width: 3rem;
}

.usa-footer--slim .usa-footer__contact-info {
  display: inline-block;
}

@media all and (min-width: 30em) {
  .usa-footer--slim .usa-footer__contact-info {
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-top: 0;
  }
}

.usa-footer--big .usa-footer__nav {
  margin-left: -1rem;
  margin-right: -1rem;
}

@media all and (min-width: 30em) {
  .usa-footer--big .usa-footer__nav {
    border-bottom: 1px solid #a9aeb1;
    padding-top: 2rem;
  }
}

@media all and (min-width: 40em) {
  .usa-footer--big .usa-footer__nav {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    border-bottom: none;
  }
}

.usa-footer--big .usa-footer__primary-link {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.98rem;
  line-height: 1.2;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

@media all and (min-width: 30em) {
  .usa-footer--big .usa-footer__primary-link {
    padding-bottom: 0;
    padding-top: 0;
    margin-bottom: 0.5rem;
  }

  .usa-footer--big .usa-footer__primary-link:hover {
    cursor: auto;
    text-decoration: none;
  }
}

.usa-footer--big
  .usa-footer__primary-content--collapsible
  .usa-footer__primary-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.usa-footer--big .usa-footer__primary-content--collapsible .usa-list--unstyled {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.25rem;
}

@media all and (min-width: 30em) {
  .usa-footer--big
    .usa-footer__primary-content--collapsible
    .usa-list--unstyled {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2rem;
    padding-top: 0.75rem;
  }
}

.usa-footer__return-to-top {
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  background-color: #f0f0f0;
  text-align: center;
}

.usa-footer__return-to-top a {
  color: #005ea2;
  text-decoration: none;
}

.usa-footer__return-to-top a:hover {
  text-decoration: underline;
}

.usa-footer__primary-section {
  background-color: #dfe1e2;
}

.usa-footer__secondary-section {
  background-color: #f0f0f0;
}

.usa-footer__logo {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.usa-footer__logo img {
  max-width: 10rem;
}

.usa-footer__social-links {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

@media all and (min-width: 30em) {
  .usa-footer__social-links {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}

.usa-footer__contact-info {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

@media all and (min-width: 30em) {
  .usa-footer__contact-info {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}`;