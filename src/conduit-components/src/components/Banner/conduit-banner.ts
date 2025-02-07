import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles as style } from './styles/Banner.js';
import UsaFlag from '../../node_modules/@uswds/uswds/packages/usa-banner/src/img/us_flag_small.png';
import IconDotGov from '../../node_modules/@uswds/uswds/dist/img/icon-dot-gov.svg';
import IconHttps from '../../node_modules/@uswds/uswds/dist/img/icon-https.svg';
@customElement('conduit-banner')
export class Banner extends LitElement {
  @property({ type: String }) bannertype = 'gov';

  // Add a property to track if the banner is expanded
  @property({ type: Boolean }) expanded = false;

  // Toggle the banner's expanded state
  toggleBanner() {
    this.expanded = !this.expanded;
  }

  render() {
    if (this.bannertype === 'mil') {
      return html`
        <style>
          ${style}
        </style>
        <section class="usa-banner" aria-label="Official website of the United States government">
          <div class="usa-accordion">
            <header class="usa-banner__header">
              <div class="usa-banner__inner">
                <div class="grid-col-auto">
                  <img
                    aria-hidden="true"
                    class="usa-banner__header-flag"
                    src="${UsaFlag}"
                    alt=""
                  />
                </div>
                <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                  <p class="usa-banner__header-text">An official website of the United States government</p>
                  <p class="usa-banner__header-action">Here’s how you know</p>
                </div>
                <button
                  type="button"
                  class="usa-accordion__button usa-banner__button"
                  aria-expanded="${this.expanded}"
                  aria-controls="gov-banner-dot-mil"
                  @click="${this.toggleBanner}"
                >
                  <span class="usa-banner__button-text">Here’s how you know</span>
                </button>
              </div>
            </header>
            <div
              class="usa-banner__content usa-accordion__content"
              id="gov-banner-dot-mil"
              ?hidden="${!this.expanded}"
            >
              <div class="grid-row grid-gap-lg">
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconDotGov}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Official websites use .mil</strong><br />
                      A <strong>.mil</strong> website belongs to an official U.S. Department of Defense
                      organization.
                    </p>
                  </div>
                </div>
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconHttps}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Secure .mil websites use HTTPS</strong><br />
                      A <strong>lock</strong> (<span class="icon-lock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description-dot-mil" focusable="false">
                          <title id="banner-lock-title-dot-mil">Lock</title>
                          <desc id="banner-lock-description-dot-mil">Locked padlock icon</desc>
                          <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
                        </svg>
                      </span>) or <strong>https://</strong> means you’ve safely connected to the .mil website. Share sensitive information only on official, secure websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    } else if (this.bannertype === 'mil-es') {
      return html`
        <style>
          ${style}
        </style>
        <section class="usa-banner" aria-label="Un sitio oficial del Gobierno de Estados Unidos,">
          <div class="usa-accordion">
            <header class="usa-banner__header">
              <div class="usa-banner__inner">
                <div class="grid-col-auto">
                  <img
                    aria-hidden="true"
                    class="usa-banner__header-flag"
                    src="${UsaFlag}"
                    alt=""
                  />
                </div>
                <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                  <p class="usa-banner__header-text">Un sitio oficial del Gobierno de Estados Unidos</p>
                  <p class="usa-banner__header-action">Así es como usted puede verificarlo</p>
                </div>
                <button
                  type="button"
                  class="usa-accordion__button usa-banner__button"
                  aria-expanded="${this.expanded}"
                  aria-controls="gov-banner-dot-mil-lang-es"
                  @click="${this.toggleBanner}"
                >
                  <span class="usa-banner__button-text">Así es como usted puede verificarlo</span>
                </button>
              </div>
            </header>
            <div
              class="usa-banner__content usa-accordion__content"
              id="gov-banner-dot-mil-lang-es"
              ?hidden="${!this.expanded}"
            >
              <div class="grid-row grid-gap-lg">
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconDotGov}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Los sitios web oficiales usan .mil</strong><br />
                      Un sitio web <strong>.mil</strong> pertenece a una organización oficial del
                      Departamento de Defensa de EE. UU.
                    </p>
                  </div>
                </div>
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconHttps}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Los sitios web seguros .mil usan HTTPS</strong><br />
                      Un <strong>candado</strong> (<span class="icon-lock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description-dot-mil-spanish" focusable="false">
                          <title id="banner-lock-title-dot-mil-spanish">Lock</title>
                          <desc id="banner-lock-description-dot-mil-spanish">Locked padlock icon</desc>
                          <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
                        </svg>
                      </span>) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .mil. Comparta información sensible sólo en sitios web oficiales y seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    } else if (this.bannertype === 'gov-es') {
      return html`
        <style>
          ${style}
        </style>
        <section class="usa-banner" aria-label="Un sitio oficial del Gobierno de Estados Unidos">
          <div class="usa-accordion">
            <header class="usa-banner__header">
              <div class="usa-banner__inner">
                <div class="grid-col-auto">
                  <img
                    aria-hidden="true"
                    class="usa-banner__header-flag"
                    src="${UsaFlag}"

                    alt=""
                  />
                </div>
                <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                  <p class="usa-banner__header-text">Un sitio oficial del Gobierno de Estados Unidos</p>
                  <p class="usa-banner__header-action">Así es como usted puede verificarlo</p>
                </div>
                <button
                  type="button"
                  class="usa-accordion__button usa-banner__button"
                  aria-expanded="${this.expanded}"
                  aria-controls="gov-banner-lang-es"
                  @click="${this.toggleBanner}"
                >
                  <span class="usa-banner__button-text">Así es como usted puede verificarlo</span>
                </button>
              </div>
            </header>
            <div
              class="usa-banner__content usa-accordion__content"
              id="gov-banner-lang-es"
              ?hidden="${!this.expanded}"
            >
              <div class="grid-row grid-gap-lg">
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconDotGov}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Los sitios web oficiales usan .gov</strong><br />
                      Un sitio web <strong>.gov</strong> pertenece a una organización oficial del
                      Gobierno de Estados Unidos.
                    </p>
                  </div>
                </div>
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconHttps}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Los sitios web seguros .gov usan HTTPS</strong><br />
                      Un <strong>candado</strong> (<span class="icon-lock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description-spanish" focusable="false">
                          <title id="banner-lock-title-spanish">Lock</title>
                          <desc id="banner-lock-description-spanish">Locked padlock icon</desc>
                          <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
                        </svg>
                      </span>) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    } else {
      return html`
        <style>
          ${style}
        </style>
        <section class="usa-banner" aria-label="Official website of the United States government">
          <div class="usa-accordion">
            <header class="usa-banner__header">
              <div class="usa-banner__inner">
                <div class="grid-col-auto">
                  <img
                    aria-hidden="true"
                    class="usa-banner__header-flag"
                    src="${UsaFlag}"
                    alt=""
                  />
                </div>
                <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                  <p class="usa-banner__header-text">An official website of the United States government</p>
                  <p class="usa-banner__header-action">Here’s how you know</p>
                </div>
                <button
                  type="button"
                  class="usa-accordion__button usa-banner__button"
                  aria-expanded="${this.expanded}"
                  aria-controls="gov-banner-default"
                  @click="${this.toggleBanner}"
                >
                  <span class="usa-banner__button-text">Here’s how you know</span>
                </button>
              </div>
            </header>
            <div
              class="usa-banner__content usa-accordion__content"
              id="gov-banner-default"
              ?hidden="${!this.expanded}"
            >
              <div class="grid-row grid-gap-lg">
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconDotGov}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Official websites use .gov</strong><br />
                      A <strong>.gov</strong> website belongs to an official government organization in the United States.
                    </p>
                  </div>
                </div>
                <div class="usa-banner__guidance tablet:grid-col-6">
                  <img
                    class="usa-banner__icon usa-media-block__img"
                    src="${IconHttps}"
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div class="usa-media-block__body">
                    <p>
                      <strong>Secure .gov websites use HTTPS</strong><br />
                      A <strong>lock</strong> (<span class="icon-lock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description-default" focusable="false">
                          <title id="banner-lock-title-default">Lock</title>
                          <desc id="banner-lock-description-default">Locked padlock icon</desc>
                          <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
                        </svg>
                      </span>) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
}
