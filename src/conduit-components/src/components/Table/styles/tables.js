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

.usa-table {
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

.usa-table thead th {
  background-clip: padding-box;
  color: #1b1b1b;
  font-weight: 700;
  line-height: 1.3;
}

.usa-table thead td,
.usa-table thead th {
  background-color: #dfe1e2;
  color: #1b1b1b;
}

.usa-table tbody th {
  text-align: left;
}

.usa-table td,
.usa-table th {
  background-color: #fff;
  border: 1px solid #1b1b1b;
  font-weight: 400;
  padding: 0.5rem 1rem;
}

.usa-table caption {
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

.usa-table th[data-sortable] {
  padding-right: 2.5rem;
  position: relative;
}

.usa-table th[data-sortable]::after {
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

.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button,
.usa-table th[data-sortable][aria-sort="none"] .usa-table__header__button {
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

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:visited,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--disabled,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--hover,
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-button--active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-button--hover,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled.usa-focus,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:focus,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:hover,
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--disabled,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled.usa-focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:hover,
.usa-table th[data-sortable][aria-sort="none"] .usa-table__header__button:hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button[aria-disabled="true"]:hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button:disabled,
  .usa-table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button:disabled:hover,
  .usa-table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"],
  .usa-table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-table
    th[data-sortable]:not([aria-sort])
    .usa-table__header__button[aria-disabled="true"]:hover,
  .usa-table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button:disabled,
  .usa-table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button:disabled:hover,
  .usa-table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-table
    th[data-sortable][aria-sort="none"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g.unsorted,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button
  .usa-icon
  > g.unsorted {
  fill: #1b1b1b;
}

.usa-table
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted,
.usa-table
  th[data-sortable][aria-sort="none"]
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted {
  fill: #000;
}

.usa-table th[data-sortable][aria-sort="ascending"],
.usa-table th[data-sortable][aria-sort="descending"] {
  background-color: #97d4ea;
}

.usa-table
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

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--disabled,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled.usa-focus,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:focus,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button:disabled,
  .usa-table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button:disabled:hover,
  .usa-table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-table
    th[data-sortable][aria-sort="descending"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-table
  th[data-sortable][aria-sort="descending"]
  .usa-table__header__button
  .usa-icon
  > g.descending {
  fill: #1b1b1b;
}

.usa-table th[data-sortable][aria-sort="ascending"] .usa-table__header__button {
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

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:visited {
  color: #54278f;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:hover {
  color: #1a4480;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:active {
  color: #162e51;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:focus {
  outline: 0.25rem solid #2491ff;
  outline-offset: 0;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--disabled,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-button--active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled.usa-focus,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:focus,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-button--hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"].usa-focus,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:active,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-decoration: underline;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--hover {
  color: #1a4480;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button.usa-button--active {
  color: #162e51;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button:disabled:hover,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"],
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:focus,
.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button[aria-disabled="true"]:hover {
  color: #757575;
}

@media (forced-colors: active) {
  .usa-table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button:disabled,
  .usa-table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button:disabled:hover,
  .usa-table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"],
  .usa-table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"]:focus,
  .usa-table
    th[data-sortable][aria-sort="ascending"]
    .usa-table__header__button[aria-disabled="true"]:hover {
    color: GrayText;
  }
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon
  > g {
  fill: transparent;
}

.usa-table
  th[data-sortable][aria-sort="ascending"]
  .usa-table__header__button
  .usa-icon
  > g.ascending {
  fill: #1b1b1b;
}

.usa-table thead th[aria-sort] {
  background-color: #97d4ea;
  color: #1b1b1b;
}

.usa-table td[data-sort-active],
.usa-table th[data-sort-active] {
  background-color: #e1f3f8;
  color: #1b1b1b;
}

.usa-table--borderless thead th {
  background-color: transparent;
  border-top: 0;
  color: #1b1b1b;
}

.usa-table--borderless thead th[aria-sort] {
  color: #1b1b1b;
}

.usa-table--borderless
  thead
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button
  .usa-icon
  > g.unsorted {
  fill: #1b1b1b;
}

.usa-table--borderless
  thead
  th[data-sortable]:not([aria-sort])
  .usa-table__header__button:hover
  .usa-icon
  > g.unsorted {
  fill: #000;
}

.usa-table--borderless td,
.usa-table--borderless th {
  border-left: 0;
  border-right: 0;
}

.usa-table--compact td,
.usa-table--compact th {
  padding: 0.25rem 0.75rem;
}

.usa-table--striped tbody tr:nth-child(odd) td,
.usa-table--striped tbody tr:nth-child(odd) th {
  background-color: #f0f0f0;
  color: #1b1b1b;
}

.usa-table--striped tbody tr:nth-child(odd) td[data-sort-active],
.usa-table--striped tbody tr:nth-child(odd) th[data-sort-active] {
  background-color: #c3ebfa;
  color: #1b1b1b;
}

@media all and (max-width: 29.99em) {
  .usa-table--stacked thead {
    display: none;
  }

  .usa-table--stacked td,
  .usa-table--stacked th {
    border-bottom-width: 0;
    display: block;
    width: 100%;
  }

  .usa-table--stacked tr {
    border-bottom: 0.25rem solid #1b1b1b;
    border-top-width: 0;
    width: 100%;
  }

  .usa-table--stacked tr td:first-child,
  .usa-table--stacked tr th:first-child {
    border-top-width: 0;
  }

  .usa-table--stacked tr:nth-child(odd) td,
  .usa-table--stacked tr:nth-child(odd) th {
    background-color: inherit;
  }

  .usa-table--stacked tr:first-child td:first-child,
  .usa-table--stacked tr:first-child th:first-child {
    border-top: 0.25rem solid #1b1b1b;
  }

  .usa-table--stacked td[data-label],
  .usa-table--stacked th[data-label] {
    padding-bottom: 0.75rem;
  }

  .usa-table--stacked td[data-label]:before,
  .usa-table--stacked th[data-label]:before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    margin: -0.5rem -1rem 0;
    padding: 0.75rem 1rem 0.25rem;
  }
}

@media all and (max-width: 29.99em) {
  .usa-table--stacked-header thead {
    display: none;
  }

  .usa-table--stacked-header td,
  .usa-table--stacked-header th {
    border-bottom-width: 0;
    display: block;
    width: 100%;
  }

  .usa-table--stacked-header tr {
    border-bottom: 0.25rem solid #1b1b1b;
    border-top-width: 0;
    width: 100%;
  }

  .usa-table--stacked-header tr td:first-child,
  .usa-table--stacked-header tr th:first-child {
    border-top-width: 0;
  }

  .usa-table--stacked-header tr:nth-child(odd) td,
  .usa-table--stacked-header tr:nth-child(odd) th {
    background-color: inherit;
  }

  .usa-table--stacked-header tr:first-child td:first-child,
  .usa-table--stacked-header tr:first-child th:first-child {
    border-top: 0.25rem solid #1b1b1b;
  }

  .usa-table--stacked-header td[data-label],
  .usa-table--stacked-header th[data-label] {
    padding-bottom: 0.75rem;
  }

  .usa-table--stacked-header td[data-label]:before,
  .usa-table--stacked-header th[data-label]:before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    margin: -0.5rem -1rem 0;
    padding: 0.75rem 1rem 0.25rem;
  }

  .usa-table--stacked-header tr td:first-child,
  .usa-table--stacked-header tr th:first-child {
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

  .usa-table--stacked-header tr td:first-child:before,
  .usa-table--stacked-header tr th:first-child:before {
    display: none;
  }
}

.width-mobile .usa-table--stacked thead {
  display: none;
}

.width-mobile .usa-table--stacked td,
.width-mobile .usa-table--stacked th {
  border-bottom-width: 0;
  display: block;
  width: 100%;
}

.width-mobile .usa-table--stacked tr {
  border-bottom: 0.25rem solid #1b1b1b;
  border-top-width: 0;
  width: 100%;
}

.width-mobile .usa-table--stacked tr td:first-child,
.width-mobile .usa-table--stacked tr th:first-child {
  border-top-width: 0;
}

.width-mobile .usa-table--stacked tr:nth-child(odd) td,
.width-mobile .usa-table--stacked tr:nth-child(odd) th {
  background-color: inherit;
}

.width-mobile .usa-table--stacked tr:first-child td:first-child,
.width-mobile .usa-table--stacked tr:first-child th:first-child {
  border-top: 0.25rem solid #1b1b1b;
}

.width-mobile .usa-table--stacked td[data-label],
.width-mobile .usa-table--stacked th[data-label] {
  padding-bottom: 0.75rem;
}

.width-mobile .usa-table--stacked td[data-label]:before,
.width-mobile .usa-table--stacked th[data-label]:before {
  content: attr(data-label);
  display: block;
  font-weight: 700;
  margin: -0.5rem -1rem 0;
  padding: 0.75rem 1rem 0.25rem;
}

.width-mobile .usa-table--stacked-header thead {
  display: none;
}

.width-mobile .usa-table--stacked-header td,
.width-mobile .usa-table--stacked-header th {
  border-bottom-width: 0;
  display: block;
  width: 100%;
}

.width-mobile .usa-table--stacked-header tr {
  border-bottom: 0.25rem solid #1b1b1b;
  border-top-width: 0;
  width: 100%;
}

.width-mobile .usa-table--stacked-header tr td:first-child,
.width-mobile .usa-table--stacked-header tr th:first-child {
  border-top-width: 0;
}

.width-mobile .usa-table--stacked-header tr:nth-child(odd) td,
.width-mobile .usa-table--stacked-header tr:nth-child(odd) th {
  background-color: inherit;
}

.width-mobile .usa-table--stacked-header tr:first-child td:first-child,
.width-mobile .usa-table--stacked-header tr:first-child th:first-child {
  border-top: 0.25rem solid #1b1b1b;
}

.width-mobile .usa-table--stacked-header td[data-label],
.width-mobile .usa-table--stacked-header th[data-label] {
  padding-bottom: 0.75rem;
}

.width-mobile .usa-table--stacked-header td[data-label]:before,
.width-mobile .usa-table--stacked-header th[data-label]:before {
  content: attr(data-label);
  display: block;
  font-weight: 700;
  margin: -0.5rem -1rem 0;
  padding: 0.75rem 1rem 0.25rem;
}

.width-mobile .usa-table--stacked-header tr td:first-child,
.width-mobile .usa-table--stacked-header tr th:first-child {
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

.width-mobile .usa-table--stacked-header tr td:first-child:before,
.width-mobile .usa-table--stacked-header tr th:first-child:before {
  display: none;
}

.usa-table-container--scrollable {
  margin: 1.25rem 0;
  overflow-y: hidden;
}

.usa-table-container--scrollable .usa-table {
  margin: 0;
}

.usa-table-container--scrollable td {
  white-space: nowrap;
}

.width-mobile .usa-table--stacked-header tr {
  border-bottom: 0;
}

.width-mobile .usa-table--stacked-header tr th {
  border-top: 0.25rem solid #1b1b1b;
}

.width-mobile .usa-table--stacked-header tr th:first-child {
  border-top-width: 0.25rem;
}

.width-mobile .usa-table--stacked-header tr:last-child td:last-child {
  border-bottom: 0.25rem solid #1b1b1b;
}`;