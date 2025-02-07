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

.usa-alert {
  background-color: #f0f0f0;
  border-left: 0.5rem solid #a9aeb1;
  color: #1b1b1b;
}

.usa-alert .usa-alert__body {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.06rem;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
}

@media all and (min-width: 64em) {
  .usa-alert .usa-alert__body {
    padding-left: 1.8333333333rem;
  }
}

.usa-alert .usa-alert__text {
  margin-bottom: 0;
  margin-top: 0;
}

.usa-alert .usa-alert__text:only-child {
  padding-bottom: 0;
  padding-top: 0;
}

.usa-alert .usa-alert__heading {
  font-family: Source Sans Pro Web,
    Helvetica Neue,
    Helvetica,
    Roboto,
    Arial,
    sans-serif;
  font-size: 1.46rem;
  line-height: 0.9;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.usa-alert .usa-alert__body > .usa-list,
.usa-alert > .usa-list {
  padding-left: 2ch;
}

.usa-alert .usa-alert__body > .usa-list:last-child,
.usa-alert > .usa-list:last-child {
  margin-bottom: 0;
}

* + .usa-alert {
  margin-top: 1rem;
}

.usa-alert--success {
  background-color: #ecf3ec;
  border-left-color: #00a91c;
}

.usa-alert--success .usa-alert__body {
  color: #1b1b1b;
  background-color: #ecf3ec;
  padding-left: 2.9166666667rem;
}

.usa-alert--success .usa-alert__body::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/check_circle.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  content: "";
  display: block;
  left: 0.5rem;
  position: absolute;
  top: 0.75rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--success .usa-alert__body::before {
    background: 0 0;
    background-color: #1b1b1b;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/check_circle.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/check_circle.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/check_circle.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/check_circle.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 2rem 2rem;
    mask-size: 2rem 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--success .usa-alert__body::before {
    left: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--success .usa-alert__body {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.usa-alert--success .usa-alert__body .usa-link {
  color: #005ea2;
}

.usa-alert--success .usa-alert__body .usa-link:visited {
  color: #54278f;
}

.usa-alert--success .usa-alert__body .usa-link:active,
.usa-alert--success .usa-alert__body .usa-link:hover {
  color: #1a4480;
}

.usa-alert--warning {
  background-color: #faf3d1;
  border-left-color: #ffbe2e;
}

.usa-alert--warning .usa-alert__body {
  color: #1b1b1b;
  background-color: #faf3d1;
  padding-left: 2.9166666667rem;
}

.usa-alert--warning .usa-alert__body::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/warning.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  content: "";
  display: block;
  left: 0.5rem;
  position: absolute;
  top: 0.75rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--warning .usa-alert__body::before {
    background: 0 0;
    background-color: #1b1b1b;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/warning.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/warning.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/warning.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/warning.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 2rem 2rem;
    mask-size: 2rem 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--warning .usa-alert__body::before {
    left: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--warning .usa-alert__body {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.usa-alert--warning .usa-alert__body .usa-link {
  color: #005ea2;
}

.usa-alert--warning .usa-alert__body .usa-link:visited {
  color: #54278f;
}

.usa-alert--warning .usa-alert__body .usa-link:active,
.usa-alert--warning .usa-alert__body .usa-link:hover {
  color: #1a4480;
}

.usa-alert--error {
  background-color: #f4e3db;
  border-left-color: #d54309;
}

.usa-alert--error .usa-alert__body {
  color: #1b1b1b;
  background-color: #f4e3db;
  padding-left: 2.9166666667rem;
}

.usa-alert--error .usa-alert__body::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  content: "";
  display: block;
  left: 0.5rem;
  position: absolute;
  top: 0.75rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--error .usa-alert__body::before {
    background: 0 0;
    background-color: #1b1b1b;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 2rem 2rem;
    mask-size: 2rem 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--error .usa-alert__body::before {
    left: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--error .usa-alert__body {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.usa-alert--error .usa-alert__body .usa-link {
  color: #005ea2;
}

.usa-alert--error .usa-alert__body .usa-link:visited {
  color: #54278f;
}

.usa-alert--error .usa-alert__body .usa-link:active,
.usa-alert--error .usa-alert__body .usa-link:hover {
  color: #1a4480;
}

.usa-alert--info {
  background-color: #e7f6f8;
  border-left-color: #00bde3;
}

.usa-alert--info .usa-alert__body {
  color: #1b1b1b;
  background-color: #e7f6f8;
  padding-left: 2.9166666667rem;
}

.usa-alert--info .usa-alert__body::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/info.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  content: "";
  display: block;
  left: 0.5rem;
  position: absolute;
  top: 0.75rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--info .usa-alert__body::before {
    background: 0 0;
    background-color: #1b1b1b;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/info.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/info.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/info.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/info.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 2rem 2rem;
    mask-size: 2rem 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--info .usa-alert__body::before {
    left: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--info .usa-alert__body {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.usa-alert--info .usa-alert__body .usa-link {
  color: #005ea2;
}

.usa-alert--info .usa-alert__body .usa-link:visited {
  color: #54278f;
}

.usa-alert--info .usa-alert__body .usa-link:active,
.usa-alert--info .usa-alert__body .usa-link:hover {
  color: #1a4480;
}

.usa-alert--emergency {
  background-color: #9c3d10;
  border-left-color: #9c3d10;
}

.usa-alert--emergency .usa-alert__body {
  color: #fff;
  background-color: #9c3d10;
  padding-left: 2.9166666667rem;
}

.usa-alert--emergency .usa-alert__body::before {
  background-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons-bg/error--white.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  content: "";
  display: block;
  left: 0.5rem;
  position: absolute;
  top: 0.75rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--emergency .usa-alert__body::before {
    background: 0 0;
    background-color: #fff;
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    -webkit-mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      linear-gradient(transparent, transparent);
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
    mask-image: url("https://intellibridge.github.io/conduit-assets/img/uswds/img/usa-icons/error.svg"),
      linear-gradient(transparent, transparent);
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 2rem 2rem;
    mask-size: 2rem 2rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--emergency .usa-alert__body::before {
    left: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--emergency .usa-alert__body {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.usa-alert--emergency .usa-alert__body .usa-link {
  color: #dfe1e2;
}

.usa-alert--emergency .usa-alert__body .usa-link:visited {
  color: #dfe1e2;
}

.usa-alert--emergency .usa-alert__body .usa-link:active,
.usa-alert--emergency .usa-alert__body .usa-link:hover {
  color: #f0f0f0;
}

.usa-alert--slim .usa-alert__body {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 2.4166666667rem;
}

.usa-alert--slim .usa-alert__body:before {
  background-size: 1.5rem;
  height: 1.5rem;
  top: 0.5rem;
  width: 1.5rem;
}

@supports ((-webkit-mask: url("")) or (mask: url(""))) {
  .usa-alert--slim .usa-alert__body:before {
    -webkit-mask-size: 1.5rem;
    mask-size: 1.5rem;
  }
}

@media all and (min-width: 64em) {
  .usa-alert--slim .usa-alert__body {
    padding-left: 3.5rem;
  }
}

.usa-alert--no-icon .usa-alert__body {
  padding-left: 0.5rem;
}

.usa-alert--no-icon .usa-alert__body:before {
  display: none;
}

@media all and (min-width: 64em) {
  .usa-alert--no-icon .usa-alert__body {
    padding-left: 1.8333333333rem;
  }
}

.usa-alert--validation .usa-checklist {
  margin-top: 1rem;
}`;