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

.usa-icon-list {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  max-width: 72ex;
}

.usa-icon-list > li {
  margin-bottom: 0;
  max-width: unset;
}

.usa-icon-list__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}

.usa-icon-list__item + .usa-icon-list__item {
  padding-top: 0.75rem;
}

.usa-prose .usa-icon-list {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  max-width: 72ex;
}

.usa-prose .usa-icon-list > li {
  margin-bottom: 0;
  max-width: unset;
}

.usa-prose .usa-icon-list__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}

.usa-prose .usa-icon-list__item + .usa-icon-list__item {
  padding-top: 0.75rem;
}

.usa-icon-list--base-lightest .usa-icon-list__icon {
  color: #f0f0f0;
}

.usa-icon-list--base-lighter .usa-icon-list__icon {
  color: #dfe1e2;
}

.usa-icon-list--base-light .usa-icon-list__icon {
  color: #a9aeb1;
}

.usa-icon-list--base .usa-icon-list__icon {
  color: #71767a;
}

.usa-icon-list--base-dark .usa-icon-list__icon {
  color: #565c65;
}

.usa-icon-list--base-darker .usa-icon-list__icon {
  color: #3d4551;
}

.usa-icon-list--base-darkest .usa-icon-list__icon {
  color: #1b1b1b;
}

.usa-icon-list--primary-lighter .usa-icon-list__icon {
  color: #d9e8f6;
}

.usa-icon-list--primary-light .usa-icon-list__icon {
  color: #73b3e7;
}

.usa-icon-list--primary .usa-icon-list__icon {
  color: #005ea2;
}

.usa-icon-list--primary-vivid .usa-icon-list__icon {
  color: #0050d8;
}

.usa-icon-list--primary-dark .usa-icon-list__icon {
  color: #1a4480;
}

.usa-icon-list--primary-darker .usa-icon-list__icon {
  color: #162e51;
}

.usa-icon-list--secondary-lighter .usa-icon-list__icon {
  color: #f3e1e4;
}

.usa-icon-list--secondary-light .usa-icon-list__icon {
  color: #f2938c;
}

.usa-icon-list--secondary .usa-icon-list__icon {
  color: #d83933;
}

.usa-icon-list--secondary-vivid .usa-icon-list__icon {
  color: #e41d3d;
}

.usa-icon-list--secondary-dark .usa-icon-list__icon {
  color: #b50909;
}

.usa-icon-list--secondary-darker .usa-icon-list__icon {
  color: #8b0a03;
}

.usa-icon-list--accent-warm-lighter .usa-icon-list__icon {
  color: #f2e4d4;
}

.usa-icon-list--accent-warm-light .usa-icon-list__icon {
  color: #ffbc78;
}

.usa-icon-list--accent-warm .usa-icon-list__icon {
  color: #fa9441;
}

.usa-icon-list--accent-warm-dark .usa-icon-list__icon {
  color: #c05600;
}

.usa-icon-list--accent-warm-darker .usa-icon-list__icon {
  color: #775540;
}

.usa-icon-list--accent-cool-lighter .usa-icon-list__icon {
  color: #e1f3f8;
}

.usa-icon-list--accent-cool-light .usa-icon-list__icon {
  color: #97d4ea;
}

.usa-icon-list--accent-cool .usa-icon-list__icon {
  color: #00bde3;
}

.usa-icon-list--accent-cool-dark .usa-icon-list__icon {
  color: #28a0cb;
}

.usa-icon-list--accent-cool-darker .usa-icon-list__icon {
  color: #07648d;
}

.usa-icon-list--error-lighter .usa-icon-list__icon {
  color: #f4e3db;
}

.usa-icon-list--error-light .usa-icon-list__icon {
  color: #f39268;
}

.usa-icon-list--error .usa-icon-list__icon {
  color: #d54309;
}

.usa-icon-list--error-dark .usa-icon-list__icon {
  color: #b50909;
}

.usa-icon-list--error-darker .usa-icon-list__icon {
  color: #6f3331;
}

.usa-icon-list--warning-lighter .usa-icon-list__icon {
  color: #faf3d1;
}

.usa-icon-list--warning-light .usa-icon-list__icon {
  color: #fee685;
}

.usa-icon-list--warning .usa-icon-list__icon {
  color: #ffbe2e;
}

.usa-icon-list--warning-dark .usa-icon-list__icon {
  color: #e5a000;
}

.usa-icon-list--warning-darker .usa-icon-list__icon {
  color: #936f38;
}

.usa-icon-list--success-lighter .usa-icon-list__icon {
  color: #ecf3ec;
}

.usa-icon-list--success-light .usa-icon-list__icon {
  color: #70e17b;
}

.usa-icon-list--success .usa-icon-list__icon {
  color: #00a91c;
}

.usa-icon-list--success-dark .usa-icon-list__icon {
  color: #008817;
}

.usa-icon-list--success-darker .usa-icon-list__icon {
  color: #216e1f;
}

.usa-icon-list--info-lighter .usa-icon-list__icon {
  color: #e7f6f8;
}

.usa-icon-list--info-light .usa-icon-list__icon {
  color: #99deea;
}

.usa-icon-list--info .usa-icon-list__icon {
  color: #00bde3;
}

.usa-icon-list--info-dark .usa-icon-list__icon {
  color: #009ec1;
}

.usa-icon-list--info-darker .usa-icon-list__icon {
  color: #2e6276;
}

.usa-icon-list--disabled-lighter .usa-icon-list__icon {
  color: #c9c9c9;
}

.usa-icon-list--disabled-light .usa-icon-list__icon {
  color: #919191;
}

.usa-icon-list--disabled .usa-icon-list__icon {
  color: #757575;
}

.usa-icon-list--disabled-dark .usa-icon-list__icon {
  color: #454545;
}

.usa-icon-list--disabled-darker .usa-icon-list__icon {
  color: #1b1b1b;
}

.usa-icon-list--emergency .usa-icon-list__icon {
  color: #9c3d10;
}

.usa-icon-list--emergency-dark .usa-icon-list__icon {
  color: #332d29;
}

.usa-icon-list__icon .usa-icon {
  display: block;
  height: 1.5rem;
  position: relative;
  width: 1.5rem;
}

.usa-icon-list__content > ol,
.usa-icon-list__content > p,
.usa-icon-list__content > ul {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  max-width: 72ex;
}

.usa-icon-list[class*="usa-icon-list--size-"] {
  max-width: none;
}

.usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {
  height: 1.005rem;
  width: 1.005rem;
}

.usa-icon-list--size-micro .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.67rem;
  padding-left: 0.268rem;
}

.usa-icon-list--size-micro .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.61rem;
}

.usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {
  height: 1.2rem;
  width: 1.2rem;
}

.usa-icon-list--size-1 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.8rem;
  padding-left: 0.32rem;
}

.usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.73rem;
}

.usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {
  height: 1.305rem;
  width: 1.305rem;
}

.usa-icon-list--size-2 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.87rem;
  padding-left: 0.348rem;
}

.usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.79rem;
}

.usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {
  height: 1.395rem;
  width: 1.395rem;
}

.usa-icon-list--size-3 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.93rem;
  padding-left: 0.372rem;
}

.usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.85rem;
}

.usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.usa-icon-list--size-4 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1rem;
  padding-left: 0.4rem;
}

.usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.91rem;
}

.usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {
  height: 1.59rem;
  width: 1.59rem;
}

.usa-icon-list--size-5 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.06rem;
  padding-left: 0.424rem;
}

.usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.98rem;
}

.usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {
  height: 1.695rem;
  width: 1.695rem;
}

.usa-icon-list--size-6 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.13rem;
  padding-left: 0.452rem;
}

.usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.04rem;
}

.usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {
  height: 1.8rem;
  width: 1.8rem;
}

.usa-icon-list--size-7 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.2rem;
  padding-left: 0.48rem;
}

.usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.1rem;
}

.usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {
  height: 1.995rem;
  width: 1.995rem;
}

.usa-icon-list--size-8 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.33rem;
  padding-left: 0.532rem;
}

.usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.22rem;
}

.usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {
  height: 2.19rem;
  width: 2.19rem;
}

.usa-icon-list--size-9 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.46rem;
  padding-left: 0.584rem;
}

.usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.34rem;
}

.usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {
  height: 2.4rem;
  width: 2.4rem;
}

.usa-icon-list--size-10 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.6rem;
  padding-left: 0.64rem;
}

.usa-icon-list--size-10 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.46rem;
}

.usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {
  height: 2.79rem;
  width: 2.79rem;
}

.usa-icon-list--size-11 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.86rem;
  padding-left: 0.744rem;
}

.usa-icon-list--size-11 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.71rem;
}

.usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {
  height: 3.195rem;
  width: 3.195rem;
}

.usa-icon-list--size-12 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 2.13rem;
  padding-left: 0.852rem;
}

.usa-icon-list--size-12 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.95rem;
}

.usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {
  height: 3.6rem;
  width: 3.6rem;
}

.usa-icon-list--size-13 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 2.4rem;
  padding-left: 0.96rem;
}

.usa-icon-list--size-13 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.2rem;
}

.usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {
  height: 3.99rem;
  width: 3.99rem;
}

.usa-icon-list--size-14 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 2.66rem;
  padding-left: 1.064rem;
}

.usa-icon-list--size-14 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.44rem;
}

.usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {
  height: 4.785rem;
  width: 4.785rem;
}

.usa-icon-list--size-15 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 3.19rem;
  padding-left: 1.276rem;
}

.usa-icon-list--size-15 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.93rem;
}

.usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {
  height: 5.595rem;
  width: 5.595rem;
}

.usa-icon-list--size-16 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 3.73rem;
  padding-left: 1.492rem;
}

.usa-icon-list--size-16 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 3.42rem;
}

.usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {
  height: 6.39rem;
  width: 6.39rem;
}

.usa-icon-list--size-17 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 4.26rem;
  padding-left: 1.704rem;
}

.usa-icon-list--size-17 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 3.9rem;
}

.usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {
  height: 7.98rem;
  width: 7.98rem;
}

.usa-icon-list--size-18 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 5.32rem;
  padding-left: 2.128rem;
}

.usa-icon-list--size-18 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 4.88rem;
}

.usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {
  height: 11.985rem;
  width: 11.985rem;
}

.usa-icon-list--size-19 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 7.99rem;
  padding-left: 3.196rem;
}

.usa-icon-list--size-19 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 7.32rem;
}

.usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {
  height: 13.98rem;
  width: 13.98rem;
}

.usa-icon-list--size-20 .usa-icon-list__content {
  max-width: 72ex;
  font-size: 9.32rem;
  padding-left: 3.728rem;
}

.usa-icon-list--size-20 .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 8.54rem;
}

.usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {
  height: 1.305rem;
  width: 1.305rem;
}

.usa-icon-list--size-3xs .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.87rem;
  padding-left: 0.348rem;
}

.usa-icon-list--size-3xs .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.79rem;
}

.usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {
  height: 1.395rem;
  width: 1.395rem;
}

.usa-icon-list--size-2xs .usa-icon-list__content {
  max-width: 72ex;
  font-size: 0.93rem;
  padding-left: 0.372rem;
}

.usa-icon-list--size-2xs .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.85rem;
}

.usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.usa-icon-list--size-xs .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1rem;
  padding-left: 0.4rem;
}

.usa-icon-list--size-xs .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.91rem;
}

.usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {
  height: 1.59rem;
  width: 1.59rem;
}

.usa-icon-list--size-sm .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.06rem;
  padding-left: 0.424rem;
}

.usa-icon-list--size-sm .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.98rem;
}

.usa-icon-list--size-md .usa-icon-list__icon .usa-icon {
  height: 1.695rem;
  width: 1.695rem;
}

.usa-icon-list--size-md .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.13rem;
  padding-left: 0.452rem;
}

.usa-icon-list--size-md .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.04rem;
}

.usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {
  height: 2.19rem;
  width: 2.19rem;
}

.usa-icon-list--size-lg .usa-icon-list__content {
  max-width: 72ex;
  font-size: 1.46rem;
  padding-left: 0.584rem;
}

.usa-icon-list--size-lg .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.34rem;
}

.usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {
  height: 3.195rem;
  width: 3.195rem;
}

.usa-icon-list--size-xl .usa-icon-list__content {
  max-width: 72ex;
  font-size: 2.13rem;
  padding-left: 0.852rem;
}

.usa-icon-list--size-xl .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.95rem;
}

.usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {
  height: 3.99rem;
  width: 3.99rem;
}

.usa-icon-list--size-2xl .usa-icon-list__content {
  max-width: 72ex;
  font-size: 2.66rem;
  padding-left: 1.064rem;
}

.usa-icon-list--size-2xl .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.44rem;
}

.usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {
  height: 4.785rem;
  width: 4.785rem;
}

.usa-icon-list--size-3xl .usa-icon-list__content {
  max-width: 72ex;
  font-size: 3.19rem;
  padding-left: 1.276rem;
}

.usa-icon-list--size-3xl .usa-icon-list__content .usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.93rem;
}

@media all and (min-width: 30em) {
  .mobile-lg\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {
    height: 1.005rem;
    width: 1.005rem;
  }

  .mobile-lg\:usa-icon-list--size-micro .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.67rem;
    padding-left: 0.268rem;
  }

  .mobile-lg\:usa-icon-list--size-micro
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.61rem;
  }

  .mobile-lg\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {
    height: 1.2rem;
    width: 1.2rem;
  }

  .mobile-lg\:usa-icon-list--size-1 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.8rem;
    padding-left: 0.32rem;
  }

  .mobile-lg\:usa-icon-list--size-1
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.73rem;
  }

  .mobile-lg\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .mobile-lg\:usa-icon-list--size-2 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .mobile-lg\:usa-icon-list--size-2
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .mobile-lg\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .mobile-lg\:usa-icon-list--size-3 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .mobile-lg\:usa-icon-list--size-3
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .mobile-lg\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .mobile-lg\:usa-icon-list--size-4 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .mobile-lg\:usa-icon-list--size-4
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .mobile-lg\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .mobile-lg\:usa-icon-list--size-5 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .mobile-lg\:usa-icon-list--size-5
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .mobile-lg\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .mobile-lg\:usa-icon-list--size-6 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .mobile-lg\:usa-icon-list--size-6
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .mobile-lg\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {
    height: 1.8rem;
    width: 1.8rem;
  }

  .mobile-lg\:usa-icon-list--size-7 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.2rem;
    padding-left: 0.48rem;
  }

  .mobile-lg\:usa-icon-list--size-7
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.1rem;
  }

  .mobile-lg\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {
    height: 1.995rem;
    width: 1.995rem;
  }

  .mobile-lg\:usa-icon-list--size-8 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.33rem;
    padding-left: 0.532rem;
  }

  .mobile-lg\:usa-icon-list--size-8
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.22rem;
  }

  .mobile-lg\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .mobile-lg\:usa-icon-list--size-9 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .mobile-lg\:usa-icon-list--size-9
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .mobile-lg\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {
    height: 2.4rem;
    width: 2.4rem;
  }

  .mobile-lg\:usa-icon-list--size-10 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.6rem;
    padding-left: 0.64rem;
  }

  .mobile-lg\:usa-icon-list--size-10
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.46rem;
  }

  .mobile-lg\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {
    height: 2.79rem;
    width: 2.79rem;
  }

  .mobile-lg\:usa-icon-list--size-11 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.86rem;
    padding-left: 0.744rem;
  }

  .mobile-lg\:usa-icon-list--size-11
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.71rem;
  }

  .mobile-lg\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .mobile-lg\:usa-icon-list--size-12 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .mobile-lg\:usa-icon-list--size-12
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .mobile-lg\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {
    height: 3.6rem;
    width: 3.6rem;
  }

  .mobile-lg\:usa-icon-list--size-13 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.4rem;
    padding-left: 0.96rem;
  }

  .mobile-lg\:usa-icon-list--size-13
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.2rem;
  }

  .mobile-lg\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .mobile-lg\:usa-icon-list--size-14 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .mobile-lg\:usa-icon-list--size-14
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .mobile-lg\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .mobile-lg\:usa-icon-list--size-15 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .mobile-lg\:usa-icon-list--size-15
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }

  .mobile-lg\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {
    height: 5.595rem;
    width: 5.595rem;
  }

  .mobile-lg\:usa-icon-list--size-16 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.73rem;
    padding-left: 1.492rem;
  }

  .mobile-lg\:usa-icon-list--size-16
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.42rem;
  }

  .mobile-lg\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {
    height: 6.39rem;
    width: 6.39rem;
  }

  .mobile-lg\:usa-icon-list--size-17 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 4.26rem;
    padding-left: 1.704rem;
  }

  .mobile-lg\:usa-icon-list--size-17
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.9rem;
  }

  .mobile-lg\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {
    height: 7.98rem;
    width: 7.98rem;
  }

  .mobile-lg\:usa-icon-list--size-18 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 5.32rem;
    padding-left: 2.128rem;
  }

  .mobile-lg\:usa-icon-list--size-18
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 4.88rem;
  }

  .mobile-lg\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {
    height: 11.985rem;
    width: 11.985rem;
  }

  .mobile-lg\:usa-icon-list--size-19 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 7.99rem;
    padding-left: 3.196rem;
  }

  .mobile-lg\:usa-icon-list--size-19
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 7.32rem;
  }

  .mobile-lg\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {
    height: 13.98rem;
    width: 13.98rem;
  }

  .mobile-lg\:usa-icon-list--size-20 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 9.32rem;
    padding-left: 3.728rem;
  }

  .mobile-lg\:usa-icon-list--size-20
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 8.54rem;
  }

  .mobile-lg\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .mobile-lg\:usa-icon-list--size-3xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .mobile-lg\:usa-icon-list--size-3xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .mobile-lg\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .mobile-lg\:usa-icon-list--size-2xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .mobile-lg\:usa-icon-list--size-2xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .mobile-lg\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .mobile-lg\:usa-icon-list--size-xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .mobile-lg\:usa-icon-list--size-xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .mobile-lg\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .mobile-lg\:usa-icon-list--size-sm .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .mobile-lg\:usa-icon-list--size-sm
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .mobile-lg\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .mobile-lg\:usa-icon-list--size-md .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .mobile-lg\:usa-icon-list--size-md
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .mobile-lg\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .mobile-lg\:usa-icon-list--size-lg .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .mobile-lg\:usa-icon-list--size-lg
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .mobile-lg\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .mobile-lg\:usa-icon-list--size-xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .mobile-lg\:usa-icon-list--size-xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .mobile-lg\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .mobile-lg\:usa-icon-list--size-2xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .mobile-lg\:usa-icon-list--size-2xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .mobile-lg\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .mobile-lg\:usa-icon-list--size-3xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .mobile-lg\:usa-icon-list--size-3xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }
}

@media all and (min-width: 40em) {
  .tablet\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {
    height: 1.005rem;
    width: 1.005rem;
  }

  .tablet\:usa-icon-list--size-micro .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.67rem;
    padding-left: 0.268rem;
  }

  .tablet\:usa-icon-list--size-micro
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.61rem;
  }

  .tablet\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {
    height: 1.2rem;
    width: 1.2rem;
  }

  .tablet\:usa-icon-list--size-1 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.8rem;
    padding-left: 0.32rem;
  }

  .tablet\:usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.73rem;
  }

  .tablet\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .tablet\:usa-icon-list--size-2 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .tablet\:usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .tablet\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .tablet\:usa-icon-list--size-3 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .tablet\:usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .tablet\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tablet\:usa-icon-list--size-4 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .tablet\:usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .tablet\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .tablet\:usa-icon-list--size-5 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .tablet\:usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .tablet\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .tablet\:usa-icon-list--size-6 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .tablet\:usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .tablet\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {
    height: 1.8rem;
    width: 1.8rem;
  }

  .tablet\:usa-icon-list--size-7 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.2rem;
    padding-left: 0.48rem;
  }

  .tablet\:usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.1rem;
  }

  .tablet\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {
    height: 1.995rem;
    width: 1.995rem;
  }

  .tablet\:usa-icon-list--size-8 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.33rem;
    padding-left: 0.532rem;
  }

  .tablet\:usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.22rem;
  }

  .tablet\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .tablet\:usa-icon-list--size-9 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .tablet\:usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .tablet\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {
    height: 2.4rem;
    width: 2.4rem;
  }

  .tablet\:usa-icon-list--size-10 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.6rem;
    padding-left: 0.64rem;
  }

  .tablet\:usa-icon-list--size-10
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.46rem;
  }

  .tablet\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {
    height: 2.79rem;
    width: 2.79rem;
  }

  .tablet\:usa-icon-list--size-11 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.86rem;
    padding-left: 0.744rem;
  }

  .tablet\:usa-icon-list--size-11
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.71rem;
  }

  .tablet\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .tablet\:usa-icon-list--size-12 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .tablet\:usa-icon-list--size-12
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .tablet\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {
    height: 3.6rem;
    width: 3.6rem;
  }

  .tablet\:usa-icon-list--size-13 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.4rem;
    padding-left: 0.96rem;
  }

  .tablet\:usa-icon-list--size-13
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.2rem;
  }

  .tablet\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .tablet\:usa-icon-list--size-14 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .tablet\:usa-icon-list--size-14
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .tablet\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .tablet\:usa-icon-list--size-15 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .tablet\:usa-icon-list--size-15
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }

  .tablet\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {
    height: 5.595rem;
    width: 5.595rem;
  }

  .tablet\:usa-icon-list--size-16 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.73rem;
    padding-left: 1.492rem;
  }

  .tablet\:usa-icon-list--size-16
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.42rem;
  }

  .tablet\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {
    height: 6.39rem;
    width: 6.39rem;
  }

  .tablet\:usa-icon-list--size-17 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 4.26rem;
    padding-left: 1.704rem;
  }

  .tablet\:usa-icon-list--size-17
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.9rem;
  }

  .tablet\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {
    height: 7.98rem;
    width: 7.98rem;
  }

  .tablet\:usa-icon-list--size-18 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 5.32rem;
    padding-left: 2.128rem;
  }

  .tablet\:usa-icon-list--size-18
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 4.88rem;
  }

  .tablet\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {
    height: 11.985rem;
    width: 11.985rem;
  }

  .tablet\:usa-icon-list--size-19 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 7.99rem;
    padding-left: 3.196rem;
  }

  .tablet\:usa-icon-list--size-19
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 7.32rem;
  }

  .tablet\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {
    height: 13.98rem;
    width: 13.98rem;
  }

  .tablet\:usa-icon-list--size-20 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 9.32rem;
    padding-left: 3.728rem;
  }

  .tablet\:usa-icon-list--size-20
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 8.54rem;
  }

  .tablet\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .tablet\:usa-icon-list--size-3xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .tablet\:usa-icon-list--size-3xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .tablet\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .tablet\:usa-icon-list--size-2xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .tablet\:usa-icon-list--size-2xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .tablet\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tablet\:usa-icon-list--size-xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .tablet\:usa-icon-list--size-xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .tablet\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .tablet\:usa-icon-list--size-sm .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .tablet\:usa-icon-list--size-sm
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .tablet\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .tablet\:usa-icon-list--size-md .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .tablet\:usa-icon-list--size-md
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .tablet\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .tablet\:usa-icon-list--size-lg .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .tablet\:usa-icon-list--size-lg
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .tablet\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .tablet\:usa-icon-list--size-xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .tablet\:usa-icon-list--size-xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .tablet\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .tablet\:usa-icon-list--size-2xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .tablet\:usa-icon-list--size-2xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .tablet\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .tablet\:usa-icon-list--size-3xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .tablet\:usa-icon-list--size-3xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }
}

@media all and (min-width: 64em) {
  .desktop\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {
    height: 1.005rem;
    width: 1.005rem;
  }

  .desktop\:usa-icon-list--size-micro .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.67rem;
    padding-left: 0.268rem;
  }

  .desktop\:usa-icon-list--size-micro
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.61rem;
  }

  .desktop\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {
    height: 1.2rem;
    width: 1.2rem;
  }

  .desktop\:usa-icon-list--size-1 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.8rem;
    padding-left: 0.32rem;
  }

  .desktop\:usa-icon-list--size-1
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.73rem;
  }

  .desktop\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .desktop\:usa-icon-list--size-2 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .desktop\:usa-icon-list--size-2
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .desktop\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .desktop\:usa-icon-list--size-3 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .desktop\:usa-icon-list--size-3
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .desktop\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .desktop\:usa-icon-list--size-4 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .desktop\:usa-icon-list--size-4
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .desktop\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .desktop\:usa-icon-list--size-5 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .desktop\:usa-icon-list--size-5
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .desktop\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .desktop\:usa-icon-list--size-6 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .desktop\:usa-icon-list--size-6
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .desktop\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {
    height: 1.8rem;
    width: 1.8rem;
  }

  .desktop\:usa-icon-list--size-7 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.2rem;
    padding-left: 0.48rem;
  }

  .desktop\:usa-icon-list--size-7
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.1rem;
  }

  .desktop\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {
    height: 1.995rem;
    width: 1.995rem;
  }

  .desktop\:usa-icon-list--size-8 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.33rem;
    padding-left: 0.532rem;
  }

  .desktop\:usa-icon-list--size-8
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.22rem;
  }

  .desktop\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .desktop\:usa-icon-list--size-9 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .desktop\:usa-icon-list--size-9
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .desktop\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {
    height: 2.4rem;
    width: 2.4rem;
  }

  .desktop\:usa-icon-list--size-10 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.6rem;
    padding-left: 0.64rem;
  }

  .desktop\:usa-icon-list--size-10
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.46rem;
  }

  .desktop\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {
    height: 2.79rem;
    width: 2.79rem;
  }

  .desktop\:usa-icon-list--size-11 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.86rem;
    padding-left: 0.744rem;
  }

  .desktop\:usa-icon-list--size-11
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.71rem;
  }

  .desktop\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .desktop\:usa-icon-list--size-12 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .desktop\:usa-icon-list--size-12
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .desktop\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {
    height: 3.6rem;
    width: 3.6rem;
  }

  .desktop\:usa-icon-list--size-13 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.4rem;
    padding-left: 0.96rem;
  }

  .desktop\:usa-icon-list--size-13
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.2rem;
  }

  .desktop\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .desktop\:usa-icon-list--size-14 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .desktop\:usa-icon-list--size-14
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .desktop\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .desktop\:usa-icon-list--size-15 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .desktop\:usa-icon-list--size-15
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }

  .desktop\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {
    height: 5.595rem;
    width: 5.595rem;
  }

  .desktop\:usa-icon-list--size-16 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.73rem;
    padding-left: 1.492rem;
  }

  .desktop\:usa-icon-list--size-16
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.42rem;
  }

  .desktop\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {
    height: 6.39rem;
    width: 6.39rem;
  }

  .desktop\:usa-icon-list--size-17 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 4.26rem;
    padding-left: 1.704rem;
  }

  .desktop\:usa-icon-list--size-17
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 3.9rem;
  }

  .desktop\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {
    height: 7.98rem;
    width: 7.98rem;
  }

  .desktop\:usa-icon-list--size-18 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 5.32rem;
    padding-left: 2.128rem;
  }

  .desktop\:usa-icon-list--size-18
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 4.88rem;
  }

  .desktop\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {
    height: 11.985rem;
    width: 11.985rem;
  }

  .desktop\:usa-icon-list--size-19 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 7.99rem;
    padding-left: 3.196rem;
  }

  .desktop\:usa-icon-list--size-19
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 7.32rem;
  }

  .desktop\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {
    height: 13.98rem;
    width: 13.98rem;
  }

  .desktop\:usa-icon-list--size-20 .usa-icon-list__content {
    max-width: 72ex;
    font-size: 9.32rem;
    padding-left: 3.728rem;
  }

  .desktop\:usa-icon-list--size-20
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 8.54rem;
  }

  .desktop\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {
    height: 1.305rem;
    width: 1.305rem;
  }

  .desktop\:usa-icon-list--size-3xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.87rem;
    padding-left: 0.348rem;
  }

  .desktop\:usa-icon-list--size-3xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.79rem;
  }

  .desktop\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {
    height: 1.395rem;
    width: 1.395rem;
  }

  .desktop\:usa-icon-list--size-2xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 0.93rem;
    padding-left: 0.372rem;
  }

  .desktop\:usa-icon-list--size-2xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.85rem;
  }

  .desktop\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .desktop\:usa-icon-list--size-xs .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1rem;
    padding-left: 0.4rem;
  }

  .desktop\:usa-icon-list--size-xs
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.91rem;
  }

  .desktop\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {
    height: 1.59rem;
    width: 1.59rem;
  }

  .desktop\:usa-icon-list--size-sm .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.06rem;
    padding-left: 0.424rem;
  }

  .desktop\:usa-icon-list--size-sm
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 0.98rem;
  }

  .desktop\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {
    height: 1.695rem;
    width: 1.695rem;
  }

  .desktop\:usa-icon-list--size-md .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.13rem;
    padding-left: 0.452rem;
  }

  .desktop\:usa-icon-list--size-md
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.04rem;
  }

  .desktop\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {
    height: 2.19rem;
    width: 2.19rem;
  }

  .desktop\:usa-icon-list--size-lg .usa-icon-list__content {
    max-width: 72ex;
    font-size: 1.46rem;
    padding-left: 0.584rem;
  }

  .desktop\:usa-icon-list--size-lg
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.34rem;
  }

  .desktop\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {
    height: 3.195rem;
    width: 3.195rem;
  }

  .desktop\:usa-icon-list--size-xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.13rem;
    padding-left: 0.852rem;
  }

  .desktop\:usa-icon-list--size-xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 1.95rem;
  }

  .desktop\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {
    height: 3.99rem;
    width: 3.99rem;
  }

  .desktop\:usa-icon-list--size-2xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 2.66rem;
    padding-left: 1.064rem;
  }

  .desktop\:usa-icon-list--size-2xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.44rem;
  }

  .desktop\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {
    height: 4.785rem;
    width: 4.785rem;
  }

  .desktop\:usa-icon-list--size-3xl .usa-icon-list__content {
    max-width: 72ex;
    font-size: 3.19rem;
    padding-left: 1.276rem;
  }

  .desktop\:usa-icon-list--size-3xl
    .usa-icon-list__content
    .usa-icon-list__title {
    font-family: Merriweather Web,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
    font-size: 2.93rem;
  }
}

.usa-icon-list__title {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.98rem;
  line-height: 1.2;
  margin-bottom: 0;
  padding-top: 0.425ex;
}

.usa-icon-list__title + * {
  margin-top: 0.5rem;
}

.usa-icon-list__content {
  font-size: 1.06rem;
  padding-left: 0.424rem;
}

.usa-icon-list__content > :first-child {
  margin-top: 0;
}

.usa-icon-list__content > :last-child {
  margin-bottom: 0;
}

.usa-icon-list__content ul li {
  list-style-type: disc;
}

.usa-icon-list--horizontal {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1rem;
}

.usa-icon-list--horizontal .usa-icon-list__item {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  margin-bottom: 0;
}

.usa-icon-list--size-small .usa-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.usa-icon-list--size-small .usa-icon-list__content {
  font-size: 0.875rem;
}

.usa-icon-list--size-large .usa-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.usa-icon-list--size-large .usa-icon-list__content {
  font-size: 1.125rem;
}

.usa-icon-list__subtext {
  display: block;
  color: #71767a;
  font-size: 0.875em;
  margin-top: 0.25rem;
}`;