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

.usa-prose {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
}

.usa-prose > ol,
.usa-prose > ul {
  margin-bottom: 1em;
  margin-top: 1em;
  line-height: 1.5;
  padding-left: 3ch;
}

.usa-prose > ol:last-child,
.usa-prose > ul:last-child {
  margin-bottom: 0;
}

.usa-prose > ol ol,
.usa-prose > ol ul,
.usa-prose > ul ol,
.usa-prose > ul ul {
  margin-top: 0.25em;
}

.usa-prose > ol li,
.usa-prose > ul li {
  margin-bottom: 0.25em;
  max-width: 68ex;
}

.usa-prose > ol li:last-child,
.usa-prose > ul li:last-child {
  margin-bottom: 0;
}

.usa-prose > table {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  border-collapse: collapse;
  border-spacing: 0;
  color: #1b1b1b;
  margin: 1.25rem 0;
  text-align: left;
}

.usa-prose > table thead th {
  background-clip: padding-box;
  color: #1b1b1b;
  font-weight: 700;
  line-height: 1.3;
}

.usa-prose > table thead td,
.usa-prose > table thead th {
  background-color: #dfe1e2;
  color: #1b1b1b;
}

.usa-prose > table tbody th {
  text-align: left;
}

.usa-prose > table td,
.usa-prose > table th {
  background-color: #fff;
  border: 1px solid #1b1b1b;
  font-weight: 400;
  padding: 0.5rem 1rem;
}

.usa-prose > table caption {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-align: left;
}

.usa-prose > table th[data-sortable] {
  padding-right: 2.5rem;
  position: relative;
}

.usa-prose > table th[data-sortable]::after {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  bottom: 0;
  content: "";
  height: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button {
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
  height: 2rem;
  width: 2rem;
  background-position: center center;
  background-size: 1.5rem;
  color: #71767a;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  position: absolute;
  right: 0.25rem;
  text-align: center;
  text-decoration: none;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:visited,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--disabled,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-button--active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-button--hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-focus,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:focus,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-prose
    > table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button:disabled,
  .usa-prose
    > table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button:disabled:hover,
  .usa-prose
    > table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"],
  .usa-prose
    > table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-prose
    > table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"]:hover,
  .usa-prose
    > table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button:disabled,
  .usa-prose
    > table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button:disabled:hover,
  .usa-prose
    > table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-prose
    > table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-prose
    > table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g.unsorted,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon
  > g.unsorted {
  fill: #1b1b1b;
}

.usa-prose
  > table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted,
.usa-prose
  > table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted {
  fill: #000;
}

.usa-prose > table th[data-sortable][aria-sort="ascending"],
.usa-prose > table th[data-sortable][aria-sort="descending"] {
  background-color: #97d4ea;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button {
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
  height: 2rem;
  width: 2rem;
  background-position: center center;
  background-size: 1.5rem;
  color: #71767a;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  position: absolute;
  right: 0.25rem;
  text-align: center;
  text-decoration: none;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-prose
    > table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button:disabled,
  .usa-prose
    > table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button:disabled:hover,
  .usa-prose
    > table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-prose
    > table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-prose
    > table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon
  > g.descending {
  fill: #1b1b1b;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button {
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
  height: 2rem;
  width: 2rem;
  background-position: center center;
  background-size: 1.5rem;
  color: #71767a;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  position: absolute;
  right: 0.25rem;
  text-align: center;
  text-decoration: none;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:hover,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-prose
    > table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button:disabled,
  .usa-prose
    > table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button:disabled:hover,
  .usa-prose
    > table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-prose
    > table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-prose
    > table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-prose
  > table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon
  > g.ascending {
  fill: #1b1b1b;
}

.usa-prose > table thead th[aria-sort] {
  background-color: #97d4ea;
  color: #1b1b1b;
}

.usa-prose > table td[data-sort-active],
.usa-prose > table th[data-sort-active] {
  background-color: #e1f3f8;
  color: #1b1b1b;
}

.usa-prose > .usa-table--borderless thead th {
  background-color: transparent;
  border-top: 0;
  color: #1b1b1b;
}

.usa-prose > .usa-table--borderless thead th[aria-sort] {
  color: #1b1b1b;
}

.usa-prose
  > .usa-table--borderless
  thead
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g.unsorted {
  fill: #1b1b1b;
}

.usa-prose
  > .usa-table--borderless
  thead
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted {
  fill: #000;
}

.usa-prose > .usa-table--borderless td,
.usa-prose > .usa-table--borderless th {
  border-left: 0;
  border-right: 0;
}

.usa-prose > .usa-table--compact td,
.usa-prose > .usa-table--compact th {
  padding: 0.25rem 0.75rem;
}

.usa-prose > .usa-table--striped tbody tr:nth-child(odd) td,
.usa-prose > .usa-table--striped tbody tr:nth-child(odd) th {
  background-color: #f0f0f0;
  color: #1b1b1b;
}

.usa-prose > .usa-table--striped tbody tr:nth-child(odd) td[data-sort-active],
.usa-prose > .usa-table--striped tbody tr:nth-child(odd) th[data-sort-active] {
  background-color: #c3ebfa;
  color: #1b1b1b;
}

@media all and (max-width: 29.99em) {
  .usa-prose > .usa-table--stacked thead {
    display: none;
  }

  .usa-prose > .usa-table--stacked td,
  .usa-prose > .usa-table--stacked th {
    border-bottom-width: 0;
    display: block;
    width: 100%;
  }

  .usa-prose > .usa-table--stacked tr {
    border-bottom: 0.25rem solid #1b1b1b;
    border-top-width: 0;
    width: 100%;
  }

  .usa-prose > .usa-table--stacked tr td:first-child,
  .usa-prose > .usa-table--stacked tr th:first-child {
    border-top-width: 0;
  }

  .usa-prose > .usa-table--stacked tr:nth-child(odd) td,
  .usa-prose > .usa-table--stacked tr:nth-child(odd) th {
    background-color: inherit;
  }

  .usa-prose > .usa-table--stacked tr:first-child td:first-child,
  .usa-prose > .usa-table--stacked tr:first-child th:first-child {
    border-top: 0.25rem solid #1b1b1b;
  }

  .usa-prose > .usa-table--stacked td[data-label],
  .usa-prose > .usa-table--stacked th[data-label] {
    padding-bottom: 0.75rem;
  }

  .usa-prose > .usa-table--stacked td[data-label]:before,
  .usa-prose > .usa-table--stacked th[data-label]:before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    margin: -0.5rem -1rem 0;
    padding: 0.75rem 1rem 0.25rem;
  }
}

@media all and (max-width: 29.99em) {
  .usa-prose > .usa-table--stacked-header thead {
    display: none;
  }

  .usa-prose > .usa-table--stacked-header td,
  .usa-prose > .usa-table--stacked-header th {
    border-bottom-width: 0;
    display: block;
    width: 100%;
  }

  .usa-prose > .usa-table--stacked-header tr {
    border-bottom: 0.25rem solid #1b1b1b;
    border-top-width: 0;
    width: 100%;
  }

  .usa-prose > .usa-table--stacked-header tr td:first-child,
  .usa-prose > .usa-table--stacked-header tr th:first-child {
    border-top-width: 0;
  }

  .usa-prose > .usa-table--stacked-header tr:nth-child(odd) td,
  .usa-prose > .usa-table--stacked-header tr:nth-child(odd) th {
    background-color: inherit;
  }

  .usa-prose > .usa-table--stacked-header tr:first-child td:first-child,
  .usa-prose > .usa-table--stacked-header tr:first-child th:first-child {
    border-top: 0.25rem solid #1b1b1b;
  }

  .usa-prose > .usa-table--stacked-header td[data-label],
  .usa-prose > .usa-table--stacked-header th[data-label] {
    padding-bottom: 0.75rem;
  }

  .usa-prose > .usa-table--stacked-header td[data-label]:before,
  .usa-prose > .usa-table--stacked-header th[data-label]:before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    margin: -0.5rem -1rem 0;
    padding: 0.75rem 1rem 0.25rem;
  }

  .usa-prose > .usa-table--stacked-header tr td:first-child,
  .usa-prose > .usa-table--stacked-header tr th:first-child {
    font-family: Source Sans Pro Web,
      Helvetica Neue,
      Helvetica,
      Roboto,
      Arial,
      sans-serif;
    font-size: 1.06rem;
    line-height: 1.1;
    background-color: #dfe1e2;
    color: #1b1b1b;
    font-weight: 700;
    padding: 0.75rem 1rem;
  }

  .usa-prose > .usa-table--stacked-header tr td:first-child:before,
  .usa-prose > .usa-table--stacked-header tr th:first-child:before {
    display: none;
  }
}

.usa-prose > .width-mobile .usa-table--stacked thead {
  display: none;
}

.usa-prose > .width-mobile .usa-table--stacked td,
.usa-prose > .width-mobile .usa-table--stacked th {
  border-bottom-width: 0;
  display: block;
  width: 100%;
}

.usa-prose > .width-mobile .usa-table--stacked tr {
  border-bottom: 0.25rem solid #1b1b1b;
  border-top-width: 0;
  width: 100%;
}

.usa-prose > .width-mobile .usa-table--stacked tr td:first-child,
.usa-prose > .width-mobile .usa-table--stacked tr th:first-child {
  border-top-width: 0;
}

.usa-prose > .width-mobile .usa-table--stacked tr:nth-child(odd) td,
.usa-prose > .width-mobile .usa-table--stacked tr:nth-child(odd) th {
  background-color: inherit;
}

.usa-prose > .width-mobile .usa-table--stacked tr:first-child td:first-child,
.usa-prose > .width-mobile .usa-table--stacked tr:first-child th:first-child {
  border-top: 0.25rem solid #1b1b1b;
}

.usa-prose > .width-mobile .usa-table--stacked td[data-label],
.usa-prose > .width-mobile .usa-table--stacked th[data-label] {
  padding-bottom: 0.75rem;
}

.usa-prose > .width-mobile .usa-table--stacked td[data-label]:before,
.usa-prose > .width-mobile .usa-table--stacked th[data-label]:before {
  content: attr(data-label);
  display: block;
  font-weight: 700;
  margin: -0.5rem -1rem 0;
  padding: 0.75rem 1rem 0.25rem;
}

.usa-prose > .width-mobile .usa-table--stacked-header thead {
  display: none;
}

.usa-prose > .width-mobile .usa-table--stacked-header td,
.usa-prose > .width-mobile .usa-table--stacked-header th {
  border-bottom-width: 0;
  display: block;
  width: 100%;
}

.usa-prose > .width-mobile .usa-table--stacked-header tr {
  border-bottom: 0.25rem solid #1b1b1b;
  border-top-width: 0;
  width: 100%;
}

.usa-prose > .width-mobile .usa-table--stacked-header tr td:first-child,
.usa-prose > .width-mobile .usa-table--stacked-header tr th:first-child {
  border-top-width: 0;
}

.usa-prose > .width-mobile .usa-table--stacked-header tr:nth-child(odd) td,
.usa-prose > .width-mobile .usa-table--stacked-header tr:nth-child(odd) th {
  background-color: inherit;
}

.usa-prose
  > .width-mobile
  .usa-table--stacked-header
  tr:first-child
  td:first-child,
.usa-prose
  > .width-mobile
  .usa-table--stacked-header
  tr:first-child
  th:first-child {
  border-top: 0.25rem solid #1b1b1b;
}

.usa-prose > .width-mobile .usa-table--stacked-header td[data-label],
.usa-prose > .width-mobile .usa-table--stacked-header th[data-label] {
  padding-bottom: 0.75rem;
}

.usa-prose > .width-mobile .usa-table--stacked-header td[data-label]:before,
.usa-prose > .width-mobile .usa-table--stacked-header th[data-label]:before {
  content: attr(data-label);
  display: block;
  font-weight: 700;
  margin: -0.5rem -1rem 0;
  padding: 0.75rem 1rem 0.25rem;
}

.usa-prose > .width-mobile .usa-table--stacked-header tr td:first-child,
.usa-prose > .width-mobile .usa-table--stacked-header tr th:first-child {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.1;
  background-color: #dfe1e2;
  color: #1b1b1b;
  font-weight: 700;
  padding: 0.75rem 1rem;
}

.usa-prose > .width-mobile .usa-table--stacked-header tr td:first-child:before,
.usa-prose > .width-mobile .usa-table--stacked-header tr th:first-child:before {
  display: none;
}

.usa-prose > .usa-table-container--scrollable {
  margin: 1.25rem 0;
  overflow-y: hidden;
}

.usa-prose > .usa-table-container--scrollable .usa-table {
  margin: 0;
}

.usa-prose > .usa-table-container--scrollable td {
  white-space: nowrap;
}

.usa-prose > p {
  line-height: 1.5;
  max-width: 68ex;
}

.usa-prose > h1,
.usa-prose > h2,
.usa-prose > h3,
.usa-prose > h4,
.usa-prose > h5,
.usa-prose > h6 {
  margin-bottom: 0;
  margin-top: 0;
  clear: both;
}

.usa-prose > * + * {
  margin-top: 1em;
  margin-bottom: 0;
}

.usa-prose > * + h1,
.usa-prose > * + h2,
.usa-prose > * + h3,
.usa-prose > * + h4,
.usa-prose > * + h5,
.usa-prose > * + h6 {
  margin-top: 1.5em;
}

.usa-prose > h1 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 2.44rem;
  line-height: 1.2;
  font-weight: 700;
}

.usa-prose > h2 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.95rem;
  line-height: 1.2;
  font-weight: 700;
}

.usa-prose > h3 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 1.34rem;
  line-height: 1.2;
  font-weight: 700;
}

.usa-prose > h4 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.98rem;
  line-height: 1.2;
  font-weight: 700;
}

.usa-prose > h5 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  font-size: 0.91rem;
  line-height: 1.2;
  font-weight: 700;
}

.usa-prose > h6 {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 0.87rem;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.usa-prose--small {
  font-size: 0.9rem;
}

.usa-prose--small h1 {
  font-size: 1.8rem;
}

.usa-prose--small h2 {
  font-size: 1.6rem;
}

.usa-prose--small h3 {
  font-size: 1.4rem;
}

.usa-prose--small h4 {
  font-size: 1.2rem;
}

.usa-prose--small h5 {
  font-size: 1.1rem;
}

.usa-prose--small h6 {
  font-size: 1rem;
}

.usa-prose--large {
  font-size: 1.1rem;
}

.usa-prose--large h1 {
  font-size: 2.2rem;
}

.usa-prose--large h2 {
  font-size: 2rem;
}

.usa-prose--large h3 {
  font-size: 1.8rem;
}

.usa-prose--large h4 {
  font-size: 1.6rem;
}

.usa-prose--large h5 {
  font-size: 1.4rem;
}

.usa-prose--large h6 {
  font-size: 1.2rem;
}

.usa-prose--measure {
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}

.usa-prose--center {
  text-align: center;
}

.usa-prose--right {
  text-align: right;
}

.usa-prose p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.usa-prose h1,
.usa-prose h2,
.usa-prose h3,
.usa-prose h4,
.usa-prose h5,
.usa-prose h6 {
  font-family: Merriweather Web,
    Georgia,
    Cambria,
    Times New Roman,
    Times,
    serif;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.usa-prose ol,
.usa-prose ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.usa-prose ol li,
.usa-prose ul li {
  margin-bottom: 0.5rem;
}

.usa-prose blockquote {
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-left: 0.25rem solid #005ea2;
  background-color: #f0f0f0;
  font-style: italic;
}

.usa-prose blockquote p:last-child {
  margin-bottom: 0;
}

.usa-prose code {
  padding: 0.2em 0.4em;
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  font-family: Roboto Mono Web,
    Bitstream Vera Sans Mono,
    Consolas,
    Courier,
    monospace;
  font-size: 0.875em;
}

.usa-prose pre {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  overflow-x: auto;
}

.usa-prose pre code {
  padding: 0;
  background-color: transparent;
}

.usa-prose hr {
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid #dfe1e2;
}

.usa-prose a {
  color: #005ea2;
  text-decoration: underline;
}

.usa-prose a:hover {
  color: #1a4480;
}

.usa-prose a:visited {
  color: #54278f;
}

.usa-prose img {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}

.usa-prose table {
  width: 100%;
  margin: 1.5rem 0;
  border-collapse: collapse;
}

.usa-prose table td,
.usa-prose table th {
  padding: 0.75rem;
  border: 1px solid #dfe1e2;
  text-align: left;
}

.usa-prose table th {
  background-color: #f0f0f0;
  font-weight: 700;
}

.usa-prose table tr:nth-child(even) {
  background-color: #f0f0f0;
}`;