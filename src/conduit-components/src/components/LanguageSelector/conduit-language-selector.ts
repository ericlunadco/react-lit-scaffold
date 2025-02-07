import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles as style } from './styles/LanguageSelector.js';

interface Language {
  code: string;
  name: string;
  flag?: string;
  native?: string;
}

@customElement('conduit-language-selector')
export class LanguageSelector extends LitElement {
  @property({ type: Array }) languages: Language[] = [];
  @property({ type: String }) selected = 'en';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) showFlags = true;
  @property({ type: Boolean }) showNative = true;
  @property({ type: String }) label = 'Select language';
  @property({ type: String }) buttonLabel = 'Language';

  private expanded = false;

  private handleSelect(code: string) {
    if (this.disabled) return;
    
    this.selected = code;
    this.expanded = false;
    
    this.dispatchEvent(new CustomEvent('language-change', {
      detail: { 
        code,
        language: this.languages.find(lang => lang.code === code)
      },
      bubbles: true,
      composed: true
    }));
  }

  private toggleDropdown() {
    if (this.disabled) return;
    this.expanded = !this.expanded;
  }

  private handleKeydown(e: KeyboardEvent) {
    if (this.disabled) return;

    switch (e.key) {
      case 'Escape':
        this.expanded = false;
        break;
      case 'Enter':
      case ' ':
        this.toggleDropdown();
        break;
    }
  }

  private getSelectedLanguage(): Language | undefined {
    return this.languages.find(lang => lang.code === this.selected);
  }

  render() {
    const selectedLang = this.getSelectedLanguage();

    return html`
      <style>
        ${style}
      </style>
      <div class="usa-language-selector">
        <label class="usa-sr-only" id="language-selector-label">
          ${this.label}
        </label>

        <button
          class="usa-button usa-button--outline usa-language-selector__trigger"
          aria-expanded="${this.expanded}"
          aria-controls="language-selector-list"
          aria-labelledby="language-selector-label"
          ?disabled="${this.disabled}"
          @click="${this.toggleDropdown}"
          @keydown="${this.handleKeydown}"
        >
          ${selectedLang && this.showFlags && selectedLang.flag ? html`
            <img 
              src="${selectedLang.flag}" 
              alt="${selectedLang.name} flag"
              class="usa-language-selector__flag"
            />
          ` : ''}
          <span class="usa-language-selector__label">
            ${selectedLang ? html`
              ${selectedLang.name}
              ${this.showNative && selectedLang.native ? html`
                <span class="usa-language-selector__native">${selectedLang.native}</span>
              ` : ''}
            ` : this.buttonLabel}
          </span>
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
            <use xlink:href="/assets/img/sprite.svg#expand_more"></use>
          </svg>
        </button>

        <ul
          id="language-selector-list"
          class="usa-language-selector__list ${this.expanded ? 'is-visible' : ''}"
          role="listbox"
          aria-labelledby="language-selector-label"
          ?hidden="${!this.expanded}"
        >
          ${this.languages.map(lang => html`
            <li
              class="usa-language-selector__item ${lang.code === this.selected ? 'is-selected' : ''}"
              role="option"
              aria-selected="${lang.code === this.selected}"
            >
              <button
                class="usa-language-selector__item-button"
                @click="${() => this.handleSelect(lang.code)}"
                ?disabled="${this.disabled}"
              >
                ${this.showFlags && lang.flag ? html`
                  <img 
                    src="${lang.flag}" 
                    alt="${lang.name} flag"
                    class="usa-language-selector__flag"
                  />
                ` : ''}
                <span class="usa-language-selector__item-label">
                  ${lang.name}
                  ${this.showNative && lang.native ? html`
                    <span class="usa-language-selector__native">${lang.native}</span>
                  ` : ''}
                </span>
                ${lang.code === this.selected ? html`
                  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                    <use xlink:href="/assets/img/sprite.svg#check"></use>
                  </svg>
                ` : ''}
              </button>
            </li>
          `)}
        </ul>
      </div>
    `;
  }
}