import { createComponent } from '@lit/react';
import * as React from 'react';
import { Alert } from '../conduit-components/src/components/Alerts/conduit-alert';
import { Button } from '../conduit-components/src/components/Button/conduit-button';
import { PieChart } from '../conduit-components/src/components/PieChart/pie-chart';
import { Modal } from '../conduit-components/src/components/Modal/usa-modal';
import { ConduitTable } from '../conduit-components/src/components/Table/table';
import { Accordion } from '../conduit-components/src/components/Accordion/conduit-accordion';
import { Banner } from '../conduit-components/src/components/Banner/conduit-banner';
import { Breadcrumb } from '../conduit-components/src/components/Breadcrumb/conduit-breadcrumb';
import { ButtonGroup } from '../conduit-components/src/components/ButtonGroup/conduit-button-group';
import { ConduitCard as Card } from '../conduit-components/src/components/Card/conduit-card';
import { CharacterCount } from '../conduit-components/src/components/CharacterCount/conduit-character-count';
import { Checkbox } from '../conduit-components/src/components/Checkbox/conduit-checkbox';
import { Collection } from '../conduit-components/src/components/Collection/conduit-collection';
import { ComboBox } from '../conduit-components/src/components/ComboBox/conduit-combo-box';
import { DatePicker } from '../conduit-components/src/components/DatePicker/conduit-date-picker';
import { DateRangePicker } from '../conduit-components/src/components/DateRangePicker/conduit-date-range-picker';
import { FileInput } from '../conduit-components/src/components/FileInput/conduit-file-input';
import { Footer } from '../conduit-components/src/components/Footer/conduit-footer';
import { Form } from '../conduit-components/src/components/Form/conduit-form';
import { Grid } from '../conduit-components/src/components/Grid/conduit-grid';
import { Header } from '../conduit-components/src/components/Header/conduit-header';
import { Icon } from '../conduit-components/src/components/Icon/conduit-icon';
import { IconList } from '../conduit-components/src/components/IconList/conduit-icon-list';
import { Identifier } from '../conduit-components/src/components/Identifier/conduit-identifier';
import { InPageNavigation } from '../conduit-components/src/components/InPageNavigation/conduit-in-page-navigation';
import { InputMask } from '../conduit-components/src/components/InputMask/conduit-input-mask';
import { InputPrefix } from '../conduit-components/src/components/InputPrefix/conduit-input-prefix';
import { LanguageSelector } from '../conduit-components/src/components/LanguageSelector/conduit-language-selector';
import { LineGraph as LineChart } from '../conduit-components/src/components/LineChart/line-chart.ts';
import { Link } from '../conduit-components/src/components/Link/conduit-link';
import { List } from '../conduit-components/src/components/List/conduit-list';
import { MemorableDate } from '../conduit-components/src/components/MemorableDate/conduit-memorable-date';
import { Pagination } from '../conduit-components/src/components/Pagination/conduit-pagination';
import { ProcessList } from '../conduit-components/src/components/ProcessList/conduit-process-list';
import { Prose } from '../conduit-components/src/components/Prose/conduit-prose';
import { RadioButtons } from '../conduit-components/src/components/RadioButtons/conduit-radio-buttons';
import { Search } from '../conduit-components/src/components/Search/conduit-search';
import { Select } from '../conduit-components/src/components/Select/conduit-select';
import { Sidenav } from '../conduit-components/src/components/Sidenav/conduit-sidenav';
import { Summary } from '../conduit-components/src/components/Summary/conduit-summary';
import { Tag } from '../conduit-components/src/components/Tag/conduit-tag';
import { TextArea } from '../conduit-components/src/components/TextArea/conduit-text-area';
import { TimePicker } from '../conduit-components/src/components/TimePicker/conduit-time-picker';
import { Tooltip } from '../conduit-components/src/components/Tooltip/conduit-tooltip';
import { ValidationMessage } from '../conduit-components/src/components/ValidationMessage/conduit-validation-message';

export const AccordionComponent = createComponent({
  tagName: 'conduit-accordion',
  elementClass: Accordion,
  react: React,
});

export const BannerComponent = createComponent({
  tagName: 'conduit-banner',
  elementClass: Banner,
  react: React,
});

export const BreadcrumbComponent = createComponent({
  tagName: 'conduit-breadcrumb',
  elementClass: Breadcrumb,
  react: React,
});

export const ButtonGroupComponent = createComponent({
  tagName: 'conduit-button-group',
  elementClass: ButtonGroup,
  react: React,
});

export const CardComponent = createComponent({
  tagName: 'conduit-card',
  elementClass: Card,
  react: React,
});

export const CharacterCountComponent = createComponent({
  tagName: 'conduit-character-count',
  elementClass: CharacterCount,
  react: React,
});

export const CheckboxComponent = createComponent({
  tagName: 'conduit-checkbox',
  elementClass: Checkbox,
  react: React,
});

export const CollectionComponent = createComponent({
  tagName: 'conduit-collection',
  elementClass: Collection,
  react: React,
});

export const ComboBoxComponent = createComponent({
  tagName: 'conduit-combo-box',
  elementClass: ComboBox,
  react: React,
});

export const DatePickerComponent = createComponent({
  tagName: 'conduit-date-picker',
  elementClass: DatePicker,
  react: React,
});

export const DateRangePickerComponent = createComponent({
  tagName: 'conduit-date-range-picker',
  elementClass: DateRangePicker,
  react: React,
});

export const FileInputComponent = createComponent({
  tagName: 'conduit-file-input',
  elementClass: FileInput,
  react: React,
});

export const FooterComponent = createComponent({
  tagName: 'conduit-footer',
  elementClass: Footer,
  react: React,
});

export const FormComponent = createComponent({
  tagName: 'conduit-form',
  elementClass: Form,
  react: React,
});

export const GridComponent = createComponent({
  tagName: 'conduit-grid',
  elementClass: Grid,
  react: React,
});

export const HeaderComponent = createComponent({
  tagName: 'conduit-header',
  elementClass: Header,
  react: React,
});

export const IconComponent = createComponent({
  tagName: 'conduit-icon',
  elementClass: Icon,
  react: React,
});

export const IconListComponent = createComponent({
  tagName: 'conduit-icon-list',
  elementClass: IconList,
  react: React,
});

export const IdentifierComponent = createComponent({
  tagName: 'conduit-identifier',
  elementClass: Identifier,
  react: React,
});

export const InPageNavigationComponent = createComponent({
  tagName: 'conduit-in-page-navigation',
  elementClass: InPageNavigation,
  react: React,
});

export const InputMaskComponent = createComponent({
  tagName: 'conduit-input-mask',
  elementClass: InputMask,
  react: React,
});

export const InputPrefixComponent = createComponent({
  tagName: 'conduit-input-prefix',
  elementClass: InputPrefix,
  react: React,
});

export const LanguageSelectorComponent = createComponent({
  tagName: 'conduit-language-selector',
  elementClass: LanguageSelector,
  react: React,
});

export const LineChartComponent = createComponent({
  tagName: 'conduit-line-chart',
  elementClass: LineChart,
  react: React,
});

export const LinkComponent = createComponent({
  tagName: 'conduit-link',
  elementClass: Link,
  react: React,
});

export const ListComponent = createComponent({
  tagName: 'conduit-list',
  elementClass: List,
  react: React,
});

export const MemorableDateComponent = createComponent({
  tagName: 'conduit-memorable-date',
  elementClass: MemorableDate,
  react: React,
});

export const PaginationComponent = createComponent({
  tagName: 'conduit-pagination',
  elementClass: Pagination,
  react: React,
});

export const ProcessListComponent = createComponent({
  tagName: 'conduit-process-list',
  elementClass: ProcessList,
  react: React,
});

export const ProseComponent = createComponent({
  tagName: 'conduit-prose',
  elementClass: Prose,
  react: React,
});

export const RadioButtonsComponent = createComponent({
  tagName: 'conduit-radio-buttons',
  elementClass: RadioButtons,
  react: React,
});

export const SearchComponent = createComponent({
  tagName: 'conduit-search',
  elementClass: Search,
  react: React,
});

export const SelectComponent = createComponent({
  tagName: 'conduit-select',
  elementClass: Select,
  react: React,
});

export const SidenavComponent = createComponent({
  tagName: 'conduit-sidenav',
  elementClass: Sidenav,
  react: React,
});

export const SummaryComponent = createComponent({
  tagName: 'conduit-summary',
  elementClass: Summary,
  react: React,
});

export const TagComponent = createComponent({
  tagName: 'conduit-tag',
  elementClass: Tag,
  react: React,
});

export const TextAreaComponent = createComponent({
  tagName: 'conduit-text-area',
  elementClass: TextArea,
  react: React,
});

export const TimePickerComponent = createComponent({
  tagName: 'conduit-time-picker',
  elementClass: TimePicker,
  react: React,
});

export const TooltipComponent = createComponent({
  tagName: 'conduit-tooltip',
  elementClass: Tooltip,
  react: React,
});

export const ValidationMessageComponent = createComponent({
  tagName: 'conduit-validation-message',
  elementClass: ValidationMessage,
  react: React,
});

export const AlertComponent = createComponent({
  tagName: 'conduit-alert',
  elementClass: Alert,
  react: React,
});

export const ButtonComponent = createComponent({
  tagName: 'conduit-button',
  elementClass: Button,
  react: React,
});

export const PieChartComponent = createComponent({
  tagName: 'pie-chart',
  elementClass: PieChart,
  react: React,
});

export const ModalComponent = createComponent({
  tagName: 'usa-modal',
  elementClass: Modal,
  react: React,
});

export const TableComponent = createComponent({
  tagName: 'conduit-table',
  elementClass: ConduitTable,
  react: React,
});
