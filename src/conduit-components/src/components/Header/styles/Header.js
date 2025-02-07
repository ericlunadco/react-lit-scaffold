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

.usa-focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-sr-only {
  position: absolute;
  left: -999em;
  right: auto;
}

.usa-skipnav {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  color: #005ea2;
  text-decoration: underline;
  background: 0 0;
  left: 0;
  padding: 0.5rem 1rem;
  position: absolute;
  top: -3.8rem;
  -webkit-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
  z-index: 100;
}

.usa-skipnav:visited {
  color: #54278f;
}

.usa-skipnav:hover {
  color: #1a4480;
}

.usa-skipnav:active {
  color: #162e51;
}

.usa-skipnav:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-skipnav.usa-focus,
.usa-skipnav:focus {
  background: #fff;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

.usa-skipnav__container {
  position: relative;
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

.usa-search {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  position: relative;
}

.usa-search::after {
  clear: both;
  content: "";
  display: block;
}

.usa-search [role="search"],
.usa-search[role="search"],
.usa-search[role="search"] > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.usa-search [type="submit"] {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  height: 2rem;
  margin: 0;
  padding: 0;
  width: 3rem;
}

@media all and (min-width: 30em) {
  .usa-search [type="submit"] {
    padding-left: 1rem;
    padding-right: 1rem;
    width: auto;
  }
}

@media (forced-colors: active) {
  .usa-search [type="submit"]::before {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/search.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.5rem 1.5rem;
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    content: "";
    vertical-align: middle;
    margin-right: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-search [type="submit"]::before {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/search.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/search.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/search.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/search.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 1.5rem 1.5rem;
      mask-size: 1.5rem 1.5rem;
    }
}

  .usa-search [type="submit"]:focus {
    outline-offset: 0;
  }
}

@media (forced-colors: active) and (min-width: 30em) {
  .usa-search [type="submit"]::before {
    content: none;
  }
}

@media all and (min-width: 30em) {
  .usa-search__submit-icon {
    display: none;
  }
}

@media (forced-colors: active) {
  .usa-search__submit-icon {
    display: none;
  }
}

@media all and (min-width: 30em) {
  .usa-search--big .usa-search__input,
  .usa-search--big [type="search"] {
    font-size: 1.06rem;
    height: 3rem;
  }
}

@media all and (min-width: 30em) {
  .usa-search--big .usa-search__submit,
  .usa-search--big [type="submit"] {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.46rem;
    height: 3rem;
    width: auto;
  }
}

.usa-search--small .usa-search__submit,
.usa-search--small [type="submit"] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-width: 3rem;
}

@media (forced-colors: active) and (min-width: 30em) {
  .usa-search--small [type="submit"]::before {
    content: "";
  }
}

.usa-search--small .usa-search__submit-icon {
  height: 1.5rem;
  width: 1.5rem;
  display: block;
}

@media (forced-colors: active) {
  .usa-search--small .usa-search__submit-icon {
    display: none;
  }
}

input[type="search"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.usa-search__input,
[type="search"] {
  padding-bottom: 0;
  padding-top: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  border-top-right-radius: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  font-size: 1rem;
  height: 2rem;
  margin: 0;
}

.usa-search__submit-text {
  display: none;
}

@media all and (min-width: 30em) {
  .usa-search__submit-text {
    display: block;
  }
}

.usa-accordion {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  color: #1b1b1b;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
}

.usa-accordion > li {
  margin-bottom: 0;
  max-width: unset;
}

.usa-accordion > ul li ul {
  list-style: disc;
}

.usa-accordion > ul li ul > li > ul {
  list-style: circle;
}

.usa-accordion > ul li ul > li > ul > li > ul {
  list-style: square;
}

.usa-accordion + .usa-accordion,
.usa-accordion + .usa-accordion--bordered {
  margin-top: 0.5rem;
}

.usa-accordion--bordered .usa-accordion__content {
  border-bottom: 0.25rem solid #f0f0f0;
  border-left: 0.25rem solid #f0f0f0;
  border-right: 0.25rem solid #f0f0f0;
  padding-bottom: 1rem;
}

.usa-accordion--bordered .usa-accordion__heading {
  margin-bottom: 0;
}

.usa-accordion__heading,
.usa-prose .usa-accordion__heading {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 0.9;
  margin: 0;
}

.usa-accordion__heading:not(:first-child),
.usa-prose .usa-accordion__heading:not(:first-child) {
  margin-top: 0.5rem;
}

.usa-accordion__content {
  color: #1b1b1b;
  background-color: #fff;
  margin-top: 0;
  overflow: auto;
  padding: 1rem 1.25rem calc(1rem - 0.25rem) 1.25rem;
}

.usa-accordion__content > :first-child {
  margin-top: 0;
}

.usa-accordion__content > :last-child {
  margin-bottom: 0;
}

.usa-accordion__button {
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
  color: #1b1b1b;
  background-color: #f0f0f0;
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
  background-position: right 1.25rem center;
  background-size: 1.5rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  margin: 0;
  padding: 1rem 3.5rem 1rem 1.25rem;
  text-decoration: none;
  width: 100%;
}

.usa-accordion__button:visited {
  color: #54278f;
}

.usa-accordion__button:hover {
  color: #1a4480;
}

.usa-accordion__button:active {
  color: #162e51;
}

.usa-accordion__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-accordion__button.usa-button--active,
.usa-accordion__button.usa-button--disabled,
.usa-accordion__button.usa-button--hover,
.usa-accordion__button:active,
.usa-accordion__button:disabled,
.usa-accordion__button:disabled.usa-button--active,
.usa-accordion__button:disabled.usa-button--hover,
.usa-accordion__button:disabled.usa-focus,
.usa-accordion__button:disabled:active,
.usa-accordion__button:disabled:focus,
.usa-accordion__button:disabled:hover,
.usa-accordion__button:hover,
.usa-accordion__button[aria-disabled="true"],
.usa-accordion__button[aria-disabled="true"].usa-button--active,
.usa-accordion__button[aria-disabled="true"].usa-button--hover,
.usa-accordion__button[aria-disabled="true"].usa-focus,
.usa-accordion__button[aria-disabled="true"]:active,
.usa-accordion__button[aria-disabled="true"]:focus,
.usa-accordion__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-accordion__button.usa-button--hover {
  color: #1a4480;
}

.usa-accordion__button.usa-button--active {
  color: #162e51;
}

.usa-accordion__button:disabled,
.usa-accordion__button:disabled:hover,
.usa-accordion__button[aria-disabled="true"],
.usa-accordion__button[aria-disabled="true"]:focus,
.usa-accordion__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-accordion__button:disabled,
  .usa-accordion__button:disabled:hover,
  .usa-accordion__button[aria-disabled="true"],
  .usa-accordion__button[aria-disabled="true"]:focus,
  .usa-accordion__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-accordion__button:hover {
  color: #1b1b1b;
  background-color: #dfe1e2;
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
  text-decoration: none;
}

@media (forced-colors: active) {
  .usa-accordion__button {
    border: 2px solid transparent;
    position: relative;
  }

  .usa-accordion__button::before {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.5rem 1.5rem;
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    height: 100%;
    position: absolute;
    right: 1.25rem;
    top: 0;
    content: "";
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-accordion__button::before {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 1.5rem 1.5rem;
      mask-size: 1.5rem 1.5rem;
    }
}
}

.usa-accordion__button[aria-expanded="false"] {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
  background-size: 1.5rem;
}

.usa-accordion__button[aria-expanded="false"]:hover {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
    -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
    linear-gradient(transparent, transparent);
  background-repeat: no-repeat;
}

@media (forced-colors: active) {
  .usa-accordion__button[aria-expanded="false"]::before {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.5rem 1.5rem;
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    height: 100%;
    position: absolute;
    right: 1.25rem;
    top: 0;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-accordion__button[aria-expanded="false"]::before {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 1.5rem 1.5rem;
      mask-size: 1.5rem 1.5rem;
    }
}
}

@-webkit-keyframes slidein-left {
  from {
    -webkit-transform: translateX(15rem);
    transform: translateX(15rem);
  }

  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slidein-left {
  from {
    -webkit-transform: translateX(15rem);
    transform: translateX(15rem);
  }

  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.usa-nav {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 0.9;
}

@media all and (max-width: 63.99em) {
  .usa-nav {
    position: absolute;
    right: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    position: fixed;
    background: #fff;
    border-right: 0;
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem;
    width: 15rem;
    z-index: 500;
  }

  .usa-nav.is-visible {
    -webkit-animation: slidein-left 0.3s ease-in-out;
    animation: slidein-left 0.3s ease-in-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media all and (min-width: 64em) {
  .usa-nav {
    float: right;
    position: relative;
  }
}

@media all and (min-width: 64em) {
  .usa-nav .usa-search {
    margin-left: 1rem;
  }
}

.usa-nav .usa-accordion {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 0.9;
}

@media all and (max-width: 63.99em) {
  .usa-nav__primary {
    margin-bottom: 0;
    margin-top: 0;
    list-style-type: none;
    padding-left: 0;
    margin-top: 1.5rem;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }

  .usa-nav__primary > li {
    margin-bottom: 0;
    max-width: unset;
  }

  .usa-nav__primary-item {
    border-top: 1px solid #dfe1e2;
  }

  .usa-nav__primary a:not(.usa-button) {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .usa-nav__primary a:not(.usa-button):hover {
    background-color: #f0f0f0;
    text-decoration: none;
  }

  .usa-nav__primary a:not(.usa-button):not(.usa-current) {
    color: #565c65;
  }

  .usa-nav__primary a:not(.usa-button):not(.usa-current):hover {
    color: #005ea2;
  }

  .usa-nav__primary a:not(.usa-button):not(.usa-current):focus {
    outline-offset: 0;
  }

  .usa-nav__primary .usa-current {
    position: relative;
    color: #005ea2;
    font-weight: 700;
  }

  .usa-nav__primary .usa-current::after {
    background-color: #005ea2;
    border-radius: 99rem;
    content: "";
    display: block;
    position: absolute;
    bottom: 0.25rem;
    top: 0.25rem;
    width: 0.25rem;
    left: 0.25rem;
  }
}

@media all and (max-width: 63.99em) and (min-width: 40em) {
  .usa-nav__primary .usa-current {
    position: relative;
  }

  .usa-nav__primary .usa-current::after {
    background-color: #005ea2;
    border-radius: 99rem;
    content: "";
    display: block;
    position: absolute;
    bottom: 0.25rem;
    top: 0.25rem;
    width: 0.25rem;
    left: 0;
  }
}

@media all and (max-width: 63.99em) {
  .usa-nav__primary a {
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
}

.usa-nav__primary .usa-nav__primary-item a {
  text-decoration: none;
}

.usa-nav__primary > .usa-nav__primary-item {
  line-height: 1.1;
}

@media all and (min-width: 64em) {
  .usa-nav__primary > .usa-nav__primary-item {
    font-size: 0.93rem;
    line-height: 0.9;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary > .usa-nav__primary-item > a {
    line-height: 0.9;
    padding: 1rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #565c65;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: 700;
  }

  .usa-nav__primary > .usa-nav__primary-item > a:hover {
    color: #005ea2;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary > .usa-nav__primary-item > a,
  .usa-nav__primary > .usa-nav__primary-item > button {
    height: 100%;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary a {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
}

.usa-nav__primary button {
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
  position: relative;
  color: #565c65;
  font-weight: 400;
  line-height: 1.1;
  padding: 0.75rem 1rem;
  text-decoration: none;
}

.usa-nav__primary button:visited {
  color: #54278f;
}

.usa-nav__primary button:hover {
  color: #1a4480;
}

.usa-nav__primary button:active {
  color: #162e51;
}

.usa-nav__primary button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-nav__primary button.usa-button--active,
.usa-nav__primary button.usa-button--disabled,
.usa-nav__primary button.usa-button--hover,
.usa-nav__primary button:active,
.usa-nav__primary button:disabled,
.usa-nav__primary button:disabled.usa-button--active,
.usa-nav__primary button:disabled.usa-button--hover,
.usa-nav__primary button:disabled.usa-focus,
.usa-nav__primary button:disabled:active,
.usa-nav__primary button:disabled:focus,
.usa-nav__primary button:disabled:hover,
.usa-nav__primary button:hover,
.usa-nav__primary button[aria-disabled="true"],
.usa-nav__primary button[aria-disabled="true"].usa-button--active,
.usa-nav__primary button[aria-disabled="true"].usa-button--hover,
.usa-nav__primary button[aria-disabled="true"].usa-focus,
.usa-nav__primary button[aria-disabled="true"]:active,
.usa-nav__primary button[aria-disabled="true"]:focus,
.usa-nav__primary button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-nav__primary button.usa-button--hover {
  color: #1a4480;
}

.usa-nav__primary button.usa-button--active {
  color: #162e51;
}

.usa-nav__primary button:disabled,
.usa-nav__primary button:disabled:hover,
.usa-nav__primary button[aria-disabled="true"],
.usa-nav__primary button[aria-disabled="true"]:focus,
.usa-nav__primary button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-nav__primary button:disabled,
  .usa-nav__primary button:disabled:hover,
  .usa-nav__primary button[aria-disabled="true"],
  .usa-nav__primary button[aria-disabled="true"]:focus,
  .usa-nav__primary button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary button {
    line-height: 0.9;
    padding: 1rem;
    font-size: 0.93rem;
    font-weight: 700;
  }
}

@media (forced-colors: active) {
  .usa-nav__primary button {
    forced-color-adjust: auto;
  }
}

.usa-nav__primary button:hover {
  color: #005ea2;
  background-color: #f0f0f0;
  text-decoration: none;
}

@media all and (min-width: 64em) {
  .usa-nav__primary button:hover {
    background-color: transparent;
  }
}

.usa-nav__primary button[aria-expanded],
.usa-nav__primary button[aria-expanded]:hover {
  background-image: none;
}

@media (forced-colors: active) {
  .usa-nav__primary button[aria-expanded]::before,
  .usa-nav__primary button[aria-expanded]:hover::before {
    content: none;
  }
}

.usa-nav__primary button[aria-expanded] span::after {
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.usa-nav__primary button[aria-expanded="false"] span::after {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1.25rem 1.25rem;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  content: "";
  vertical-align: middle;
  margin-left: auto;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-nav__primary button[aria-expanded="false"] span::after {
    background: 0 0;
    background-color: ButtonText;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/add.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 1.25rem 1.25rem;
    mask-size: 1.25rem 1.25rem;
  }
}

.usa-nav__primary button[aria-expanded="false"] span::after:hover {
  background-color: buttonText;
}

@media all and (min-width: 64em) {
  .usa-nav__primary button[aria-expanded="false"] span::after {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_more.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1rem 1rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    content: "";
    vertical-align: middle;
    margin-left: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-nav__primary button[aria-expanded="false"] span::after {
      background: 0 0;
      background-color: ButtonText;
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
      -webkit-mask-size: 1rem 1rem;
      mask-size: 1rem 1rem;
    }
}

  .usa-nav__primary button[aria-expanded="false"] span::after {
    right: 0.75rem;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary button[aria-expanded="false"]:hover span::after {
    background-color: #1a4480;
  }
}

@media (min-width: 64em) and (forced-colors: active) {
  .usa-nav__primary button[aria-expanded="false"]:hover span::after {
    background-color: ButtonText;
  }
}

.usa-nav__primary button[aria-expanded="true"] span::after {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1.25rem 1.25rem;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  content: "";
  vertical-align: middle;
  margin-left: auto;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-nav__primary button[aria-expanded="true"] span::after {
    background: 0 0;
    background-color: ButtonText;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/remove.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 1.25rem 1.25rem;
    mask-size: 1.25rem 1.25rem;
  }
}

.usa-nav__primary button[aria-expanded="true"] span::after {
  position: absolute;
  right: 0;
}

@media (forced-colors: active) {
  .usa-nav__primary button[aria-expanded="true"] span::after {
    background-color: ButtonText;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary button[aria-expanded="true"] {
    background-image: none;
    background-color: #162e51;
    color: #fff;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .usa-nav__primary button[aria-expanded="true"] span::after {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_less.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1rem 1rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    content: "";
    vertical-align: middle;
    margin-left: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-nav__primary button[aria-expanded="true"] span::after {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_less.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_less.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_less.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/expand_less.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 1rem 1rem;
      mask-size: 1rem 1rem;
    }
}

  .usa-nav__primary button[aria-expanded="true"] span::after {
    right: 0.75rem;
    background-color: #fff;
  }
}

@media (min-width: 64em) and (min-width: 64em) and (forced-colors: active) {
  .usa-nav__primary button[aria-expanded="true"] span::after {
    background-color: ButtonText;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__primary .usa-accordion__button span {
    display: inline-block;
    margin-right: 0;
    padding-right: 1rem;
  }
}

.usa-nav__secondary {
  margin-top: 1rem;
}

@media all and (min-width: 64em) {
  .usa-nav__secondary {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    bottom: 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.93rem;
    margin-top: 0.5rem;
    min-width: calc(27ch + 3rem);
    position: absolute;
    right: 2rem;
  }
}

.usa-nav__secondary .usa-search {
  margin-top: 1rem;
  width: 100%;
}

@media all and (min-width: 64em) {
  .usa-nav__secondary .usa-search {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

.usa-nav__secondary-links {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  line-height: 1.3;
  margin-top: 1.5rem;
}

@media all and (min-width: 64em) {
  .usa-nav__secondary-links {
    -webkit-column-gap: 0.5rem;
    -moz-column-gap: 0.5rem;
    column-gap: 0.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    line-height: 0.9;
    margin-bottom: 0.25rem;
    margin-top: 0;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__secondary-links .usa-nav__secondary-item {
    padding-left: 0.25rem;
  }

  .usa-nav__secondary-links
    .usa-nav__secondary-item
    + .usa-nav__secondary-item {
    border-left: 1px solid #dfe1e2;
    padding-left: 0.5rem;
  }
}

.usa-nav__secondary-links a {
  color: #71767a;
  display: inline-block;
  font-size: 0.93rem;
  text-decoration: none;
}

.usa-nav__secondary-links a:hover {
  color: #005ea2;
  text-decoration: underline;
}

@media all and (max-width: 63.99em) {
  .usa-nav__submenu {
    margin-bottom: 0;
    margin-top: 0;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  .usa-nav__submenu > li {
    margin-bottom: 0;
    max-width: unset;
  }

  .usa-nav__submenu-item {
    border-top: 1px solid #dfe1e2;
    font-size: 0.93rem;
  }

  .usa-nav__submenu .usa-current::after {
    display: none;
  }
}

@media all and (max-width: 63.99em) and (min-width: 40em) {
  .usa-nav__submenu .usa-current::after {
    display: none;
  }
}

@media all and (max-width: 63.99em) {
  .usa-nav__submenu a:not(.usa-button) {
    padding-left: 2rem;
  }

  .usa-nav__submenu .usa-nav__submenu a:not(.usa-button) {
    padding-left: 3rem;
  }

  .usa-nav__submenu .usa-nav__submenu .usa-nav__submenu a:not(.usa-button) {
    padding-left: 4rem;
  }
}

@media all and (min-width: 64em) {
  .usa-nav__submenu {
    margin-bottom: 0;
    margin-top: 0;
    list-style-type: none;
    padding-left: 0;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: #162e51;
    width: 15rem;
    position: absolute;
    z-index: 400;
  }
}

.usa-nav__submenu[aria-hidden="true"] {
  display: none;
}

@media all and (min-width: 64em) {
  .usa-nav__submenu .usa-nav__submenu-item a {
    padding-left: 1rem;
    padding-right: 1rem;
    color: #fff;
    line-height: 1.3;
    display: block;
  }

  .usa-nav__submenu .usa-nav__submenu-item a:focus {
    outline-offset: -0.25rem;
  }

  .usa-nav__submenu .usa-nav__submenu-item a:hover {
    color: #fff;
    text-decoration: underline;
  }
}

.usa-nav__submenu-list {
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
}

.usa-nav__submenu-list > li {
  margin-bottom: 0;
  max-width: unset;
}

.usa-nav__submenu-list .usa-nav__submenu-list-item {
  margin: 0;
  font-size: 0.93rem;
}

.usa-nav__submenu-list .usa-nav__submenu-list-item a {
  line-height: 1.3;
}

.usa-nav__close {
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
  height: 3rem;
  width: 3rem;
  background-image: none;
  color: currentColor;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  float: right;
  margin: -0.75rem -1rem 1rem auto;
  text-align: center;
}

.usa-nav__close:visited {
  color: #54278f;
}

.usa-nav__close:hover {
  color: #1a4480;
}

.usa-nav__close:active {
  color: #162e51;
}

.usa-nav__close:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-nav__close.usa-button--active,
.usa-nav__close.usa-button--disabled,
.usa-nav__close.usa-button--hover,
.usa-nav__close:active,
.usa-nav__close:disabled,
.usa-nav__close:disabled.usa-button--active,
.usa-nav__close:disabled.usa-button--hover,
.usa-nav__close:disabled.usa-focus,
.usa-nav__close:disabled:active,
.usa-nav__close:disabled:focus,
.usa-nav__close:disabled:hover,
.usa-nav__close:hover,
.usa-nav__close[aria-disabled="true"],
.usa-nav__close[aria-disabled="true"].usa-button--active,
.usa-nav__close[aria-disabled="true"].usa-button--hover,
.usa-nav__close[aria-disabled="true"].usa-focus,
.usa-nav__close[aria-disabled="true"]:active,
.usa-nav__close[aria-disabled="true"]:focus,
.usa-nav__close[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-nav__close.usa-button--hover {
  color: #1a4480;
}

.usa-nav__close.usa-button--active {
  color: #162e51;
}

.usa-nav__close:disabled,
.usa-nav__close:disabled:hover,
.usa-nav__close[aria-disabled="true"],
.usa-nav__close[aria-disabled="true"]:focus,
.usa-nav__close[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-nav__close:disabled,
  .usa-nav__close:disabled:hover,
  .usa-nav__close[aria-disabled="true"],
  .usa-nav__close[aria-disabled="true"]:focus,
  .usa-nav__close[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

@media (forced-colors: active) {
  .usa-nav__close::before {
    background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/close.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.25rem 1.25rem;
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
    content: "";
    vertical-align: middle;
    margin-right: auto;
  }

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
    .usa-nav__close::before {
      background: 0 0;
      background-color: ButtonText;
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/close.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/close.svg"),
        linear-gradient(transparent, transparent);
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/close.svg"),
        -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
      mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/close.svg"),
        linear-gradient(transparent, transparent);
      -webkit-mask-position: center center;
      mask-position: center center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 1.25rem 1.25rem;
      mask-size: 1.25rem 1.25rem;
    }
}

  .usa-nav__close::before {
    background-color: buttonText;
  }
}

.usa-nav__close:hover {
  color: currentColor;
  text-decoration: none;
}

@media all and (min-width: 64em) {
  .usa-nav__close {
    display: none;
  }
}

.usa-nav__close img {
  width: 1.5rem;
}

@media (forced-colors: active) {
  .usa-nav__close img {
    display: none;
  }
}

.usa-nav__close + * {
  clear: both;
}

.usa-js-mobile-nav--active {
  overflow: hidden;
}

@media (min-width: 63.06rem) {
  .usa-js-mobile-nav--active.is-safari {
    overflow-y: scroll;
    position: fixed;
    top: var(--scrolltop, 0);
  }
}

.usa-header {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
}

.usa-header::after {
  clear: both;
  content: "";
  display: block;
}

.usa-header a {
  border-bottom: none;
}

@media all and (min-width: 64em) {
  .usa-header .usa-search {
    float: right;
  }
}

@media all and (min-width: 64em) {
  .usa-header [role="search"] {
    float: right;
    max-width: calc(27ch + 3rem);
    width: 100%;
  }
}

.usa-header [type="search"] {
  min-width: 0;
}

@media all and (min-width: 64em) {
  .usa-header + .usa-hero {
    border-top: 1px solid #fff;
  }
}

@media all and (min-width: 64em) {
  .usa-header + .usa-section,
  .usa-header + main {
    border-top: 1px solid #dfe1e2;
  }
}

@media all and (max-width: 63.99em) {
  .usa-logo {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    font-size: 0.93rem;
    line-height: 0.9;
    margin-left: 1rem;
  }
}

@media all and (min-width: 64em) {
  .usa-logo {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.46rem;
    line-height: 1.1;
  }
}

.usa-logo a {
  color: #1b1b1b;
  text-decoration: none;
}

.usa-logo__text {
  display: block;
  font-style: normal;
  font-weight: 700;
  margin: 0;
}

.usa-menu-btn {
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
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #005ea2;
  color: #fff;
  font-size: 0.87rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.usa-menu-btn:visited {
  color: #54278f;
}

.usa-menu-btn:hover {
  color: #1a4480;
}

.usa-menu-btn:active {
  color: #162e51;
}

.usa-menu-btn:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-menu-btn.usa-button--active,
.usa-menu-btn.usa-button--disabled,
.usa-menu-btn.usa-button--hover,
.usa-menu-btn:active,
.usa-menu-btn:disabled,
.usa-menu-btn:disabled.usa-button--active,
.usa-menu-btn:disabled.usa-button--hover,
.usa-menu-btn:disabled.usa-focus,
.usa-menu-btn:disabled:active,
.usa-menu-btn:disabled:focus,
.usa-menu-btn:disabled:hover,
.usa-menu-btn:hover,
.usa-menu-btn[aria-disabled="true"],
.usa-menu-btn[aria-disabled="true"].usa-button--active,
.usa-menu-btn[aria-disabled="true"].usa-button--hover,
.usa-menu-btn[aria-disabled="true"].usa-focus,
.usa-menu-btn[aria-disabled="true"]:active,
.usa-menu-btn[aria-disabled="true"]:focus,
.usa-menu-btn[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-menu-btn.usa-button--hover {
  color: #1a4480;
}

.usa-menu-btn.usa-button--active {
  color: #162e51;
}

.usa-menu-btn:disabled,
.usa-menu-btn:disabled:hover,
.usa-menu-btn[aria-disabled="true"],
.usa-menu-btn[aria-disabled="true"]:focus,
.usa-menu-btn[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-menu-btn:disabled,
  .usa-menu-btn:disabled:hover,
  .usa-menu-btn[aria-disabled="true"],
  .usa-menu-btn[aria-disabled="true"]:focus,
  .usa-menu-btn[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

@media all and (min-width: 64em) {
  .usa-menu-btn {
    display: none;
  }
}

.usa-menu-btn:hover {
  background-color: #1a4480;
  color: #fff;
  text-decoration: none;
}

.usa-menu-btn:active {
  color: #fff;
}

.usa-menu-btn:visited {
  color: #fff;
}

.usa-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  -webkit-transition: opacity 0.15s ease-in-out;
  transition: opacity 0.15s ease-in-out;
  visibility: hidden;
  z-index: 400;
}

.usa-overlay.is-visible {
  opacity: 1;
  visibility: visible;
}

@media all and (min-width: 64em) {
  .usa-header--basic .usa-navbar {
    position: relative;
    width: 33%;
  }

  .usa-header--basic .usa-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 0.25rem 0.5rem;
    width: 100%;
  }

  .usa-header--basic .usa-nav-container {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .usa-header--basic .usa-nav__link:hover,
  .usa-header--basic .usa-nav__primary-item > .usa-current {
    position: relative;
  }

  .usa-header--basic .usa-nav__link:hover::after,
  .usa-header--basic .usa-nav__primary-item > .usa-current::after {
    background-color: #005ea2;
    border-radius: 0;
    content: "";
    display: block;
    position: absolute;
    height: 0.25rem;
    left: 1rem;
    right: 1rem;
    bottom: -0.25rem;
  }
}

@media (min-width: 64em) and (forced-colors: active) {
  .usa-header--basic .usa-nav__link:hover::after,
  .usa-header--basic .usa-nav__primary-item > .usa-current::after {
    background-color: ButtonText;
  }
}

@media all and (min-width: 64em) {
  .usa-header--basic .usa-nav__link[aria-expanded="true"]::after,
  .usa-header--basic .usa-nav__link[aria-expanded="true"]:hover::after {
    display: none;
  }

  .usa-header--basic .usa-nav__primary {
    width: auto;
  }

  .usa-header--basic .usa-nav__primary-item:last-of-type {
    position: relative;
  }

  .usa-header--basic .usa-nav__primary-item:last-of-type .usa-nav__submenu {
    position: absolute;
    right: 0;
  }

  .usa-header--basic .usa-search {
    top: 0;
  }
}

.usa-header--basic.usa-header--megamenu .usa-nav__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media all and (min-width: 64em) {
  .usa-header--basic.usa-header--megamenu .usa-nav__inner {
    display: block;
    float: right;
    margin-top: -2.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-header--basic.usa-header--megamenu .usa-nav__primary-item:last-of-type {
    position: static;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended {
    padding-top: 0;
  }

  .usa-header--extended .usa-nav__primary-item > .usa-current,
  .usa-header--extended .usa-nav__primary-item > .usa-nav__link:hover {
    position: relative;
  }

  .usa-header--extended .usa-nav__primary-item > .usa-current::after,
  .usa-header--extended .usa-nav__primary-item > .usa-nav__link:hover::after {
    background-color: #005ea2;
    border-radius: 0;
    content: "";
    display: block;
    position: absolute;
    height: 0.25rem;
    left: 1rem;
    right: 1rem;
    bottom: 0;
  }
}

@media (min-width: 64em) and (forced-colors: active) {
  .usa-header--extended .usa-nav__primary-item > .usa-current::after,
  .usa-header--extended .usa-nav__primary-item > .usa-nav__link:hover::after {
    background-color: ButtonText;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__link[aria-expanded="true"]::after,
  .usa-header--extended .usa-nav__link[aria-expanded="true"]:hover::after {
    display: none;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-logo {
    font-size: 2.13rem;
    margin: 2rem 0 1.5rem;
    max-width: 33%;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-navbar {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    height: auto;
    overflow: auto;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .usa-header--extended .usa-navbar {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav {
    border-top: 1px solid #dfe1e2;
    padding: 0;
    width: 100%;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__inner {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .usa-header--extended .usa-nav__inner {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__primary {
    margin-left: -1rem;
  }

  .usa-header--extended .usa-nav__primary::after {
    clear: both;
    content: "";
    display: block;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__link {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__submenu .usa-grid-full {
    padding-left: 0.75rem;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-nav__submenu.usa-megamenu {
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

html.usa-js-loading .usa-nav__submenu,
html.usa-js-loading .usa-nav__submenu.usa-megamenu {
  position: absolute;
  left: -999em;
  right: auto;
}

.usa-megamenu .usa-col {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

@media all and (min-width: 64em) {
  .usa-megamenu .usa-col {
    -webkit-box-flex: 4;
    -ms-flex: 4 1 0%;
    flex: 4 1 0%;
  }

  .usa-megamenu .usa-col .usa-nav__submenu-item a {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .usa-megamenu .usa-col:first-child .usa-nav__submenu-item a {
    padding-left: 0;
  }

  .usa-megamenu .usa-col:last-child .usa-nav__submenu-item a {
    padding-right: 0;
  }
}

@media all and (min-width: 64em) {
  .usa-megamenu.usa-nav__submenu {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2rem;
    padding-top: 2rem;
    left: -33%;
    right: 0;
    width: auto;
  }
}

@media all and (min-width: 64em) {
  .usa-megamenu.usa-nav__submenu::before {
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: #162e51;
    content: "";
    display: block;
    position: absolute;
    width: calc(50vw - 32rem + 2rem);
    right: 100%;
  }
}

@media all and (min-width: 64em) {
  .usa-megamenu.usa-nav__submenu::after {
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: #162e51;
    content: "";
    display: block;
    position: absolute;
    width: calc(50vw - 32rem + 2rem);
    left: 100%;
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-megamenu.usa-nav__submenu::before {
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: #162e51;
    content: "";
    display: block;
    position: absolute;
    width: calc(50vw - 32rem);
  }
}

@media all and (min-width: 64em) {
  .usa-header--extended .usa-megamenu.usa-nav__submenu::after {
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: #162e51;
    content: "";
    display: block;
    position: absolute;
    width: calc(50vw - 32rem);
  }
}

@media all and (min-width: 64em) {
  .usa-nav-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .usa-nav-container::after {
    clear: both;
    content: "";
    display: block;
  }
}

@media all and (min-width: 64em) and (min-width: 64em) {
  .usa-nav-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.usa-navbar {
  height: 3rem;
}

@media all and (max-width: 63.99em) {
  .usa-navbar {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dfe1e2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media all and (min-width: 64em) {
  .usa-navbar {
    border-bottom: none;
    display: inline-block;
    height: auto;
  }
}`;