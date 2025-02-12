
# Conduit Components Library

## Overview
This library provides a collection of web components built with LitElement for building modern web applications.

## Components

### Banner
A government banner component that can be expanded/collapsed.
- `bannertype`: string (default: 'gov') - Type of banner
- `expanded`: boolean (default: false) - Whether the banner is expanded

### Breadcrumb
Navigation component showing the current page location within a navigational hierarchy.
- `items`: Array<BreadcrumbItem> - Array of breadcrumb links
  ```typescript
  interface BreadcrumbItem {
    text: string;  // Display text for the breadcrumb
    href: string;  // URL for the breadcrumb link
  }
  ```

### Button
- `buttonformat`: The button format/style. Options: `'primary'`, `'secondary'`, `'accentcool'`, `'accentwarm'`, `'secondaryinverse'`, `'base'`, `'warning'`, `'unstyled'`. Default is `'primary'`.
- `ariadisabled`: Boolean to set the aria-disabled attribute. Default is `false`.

### ButtonGroup
- `segmented`: Boolean to determine if the button group should be segmented. Default is `false`.

### Card
A versatile container for grouping related content.
- `title`: string - Card title
- `subtitle`: string - Optional card subtitle
- `media`: string - Optional URL for card media
- `flag`: string - Optional flag text
- `layout`: 'horizontal' | 'vertical' - Card layout direction

### Collection
A list of items with titles and descriptions.
- `items`: Array<{ title: string, description: string }> - Array of collection items with titles and descriptions
- `columns`: number (default: 3) - Number of columns to display

### ComboBox
A combination of a dropdown list and input field.
- `options`: Array<ComboBoxOption> - Array of options for the combo box
  ```typescript
  interface ComboBoxOption {
    value: string;     // The option's value
    label: string;     // The option's display text
    disabled?: boolean; // Whether the option is disabled
  }
  ```
- `value`: string - Current selected value
- `placeholder`: string - Placeholder text
- `disabled`: boolean (default: false) - Whether the combo box is disabled

### DatePicker
- `value`: The selected date value in ISO format (YYYY-MM-DD)
- `min`: The minimum allowed date in ISO format (YYYY-MM-DD)
- `max`: The maximum allowed date in ISO format (YYYY-MM-DD)
- `disabled`: Boolean to disable the date picker. Default is `false`.

### FileInput
- `label`: Label text for the file input
- `instructions`: Instructions text shown in the drop zone
- `buttonText`: Text for the file selection button
- `accept`: String specifying allowed file types (e.g., '.pdf,.doc,image/*')
- `multiple`: Boolean to allow multiple file selection
- `disabled`: Boolean to disable the file input
- `files`: Array of File objects representing selected files

### InputPrefix
- `prefix`: Text or content to show before the input
- `suffix`: Text or content to show after the input
- `value`: The input value
- `placeholder`: Placeholder text
- `type`: Input type (e.g. 'text', 'number', etc.)
- `disabled`: Boolean to disable the input
- `required`: Boolean to mark input as required
- `label`: Label text for the input
- `errorMessage`: Error message to display

### ProcessList
- `items`: Array of process items where each item has:
  ```typescript
  interface ProcessItem {
    title: string;      // Step title
    description?: string; // Optional step description
    status?: 'complete' | 'current' | 'upcoming'; // Optional status
  }
  ```
- `counter`: Boolean to show step numbers

### RadioButtons
- `name`: Name attribute for the radio button group
- `options`: Array of radio options where each option has:
  ```typescript
  interface RadioOption {
    value: string;      // Option value
    label: string;      // Display label
    disabled?: boolean; // Optional disabled state
  }
  ```
- `value`: Currently selected value
- `disabled`: Boolean to disable all radio buttons
- `required`: Boolean to mark the group as required
- `label`: Label text for the radio group
- `errorMessage`: Error message to display

### Search
- `placeholder`: Placeholder text for the search input
- `value`: Current search value
- `size`: Size of the search input ('small', 'medium', 'big')
- `disabled`: Boolean to disable the search input
- `label`: Label text for the search input

### Select
- `options`: Array of select options where each option has:
  ```typescript
  interface SelectOption {
    value: string;      // Option value
    label: string;      // Display text
    disabled?: boolean; // Optional disabled state
    group?: string;     // Optional group name for grouping options
  }
  ```
- `value`: Currently selected value
- `placeholder`: Placeholder text
- `disabled`: Boolean to disable the select
- `required`: Boolean to mark as required
- `label`: Label text for the select
- `errorMessage`: Error message to display

### Sidenav
- `items`: Array of navigation items where each item has:
  ```typescript
  interface SidenavItem {
    text: string;       // Display text
    href?: string;      // Optional link URL
    current?: boolean;  // Whether this is the current page
    children?: SidenavItem[]; // Optional nested items
  }
  ```
- `expanded`: Boolean to control expanded state
- `current`: Currently active item

### Summary
- `title`: Summary title text
- `items`: Array of summary items where each item has:
  ```typescript
  interface SummaryItem {
    label: string;      // Item label
    value: string;      // Item value
    action?: {         // Optional action
      text: string;    // Action text
      href: string;    // Action URL
    }
  }
  ```
- `bordered`: Boolean to show borders
- `size`: Size variant ('small', 'medium', 'large')

### TextArea
- `value`: Current text content
- `placeholder`: Placeholder text
- `rows`: Number of visible text rows
- `maxlength`: Maximum allowed characters
- `disabled`: Boolean to disable the textarea
- `required`: Boolean to mark as required
- `label`: Label text for the textarea
- `errorMessage`: Error message to display

### TimePicker
- `value`: Selected time value in 24-hour format (HH:mm)
- `min`: Minimum allowed time in 24-hour format (HH:mm)
- `max`: Maximum allowed time in 24-hour format (HH:mm)
- `step`: Time increment step in minutes (e.g., 15 for quarter-hour increments)
- `disabled`: Boolean to disable the time picker
- `required`: Boolean to mark as required
- `label`: Label text for the time picker
- `errorMessage`: Error message to display

### ValidationMessage
- `message`: Message text to display
- `type`: Type of message ('error', 'warning', 'success')
- `visible`: Boolean to control visibility

### DonutChart
- `percentageNum`: number (default: 50) - Number to display
- `linecolor`: string (default: 'black') - Color of the chart line
- `textmiddle`: string (default: percentageNum + '%') - Text to display in middle
- `strokeends`: string ('rounded' | '') - Style of stroke ends
- `bgstroke`: string - Background stroke color
- `ariadisabled`: boolean (default: false) - Whether ARIA is disabled

### Footer
- `links`: Array<FooterLink> - Array of footer navigation links
  ```typescript
  interface FooterLink {
    text: string;      // Link text
    href: string;      // Link URL
  }
  ```
- `socialLinks`: Array<SocialLink> - Array of social media links
  ```typescript
  interface SocialLink extends FooterLink {
    icon: string;      // Icon name for the social link
  }
  ```

### Grid
- `gap`: number | string - Gap between grid items (0, '2px', '05', 1-6, 'sm', 'md', 'lg')
- Responsive classes for different screen sizes

### Icon
- `name`: string - Name of the icon to display
- `size`: string (default: '1em') - Size of the icon
- `color`: string (default: 'currentColor') - Color of the icon

### Identifier
- `identity`: string - Identifier value
- `domain`: string - Domain value
- `text`: string - Text to display
- `type`: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium' | 'large'
- `removable`: boolean (default: false) - Whether the identifier can be removed
- `prefix`: string - Prefix text

### InPageNavigation
- `items`: Array<{ id: string, label: string }> - Array of navigation items
- `activeId`: string - Currently active section ID
- `offset`: number (default: 0) - Scroll offset

### LanguageSelector
- `languages`: Array<Language> - Array of language options
  ```typescript
  interface Language {
    code: string;      // Language code
    name: string;      // Language name
    native?: string;   // Optional native name
    flag?: string;     // Optional flag icon
  }
  ```
- `selected`: string (default: 'en')
- `disabled`: boolean (default: false)
- `showFlags`: boolean (default: true)
- `showNative`: boolean (default: true)

### LineChart
- `data`: Array<{ value: number }> - Array of data points
- `width`: number (default: 600) - Chart width
- `height`: number (default: 400) - Chart height
- `color`: string (default: '#007bff') - Line color

### MemorableDate
- `value`: string - Date value in ISO format
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `label`: string - Field label
- `errorMessage`: string - Error message to display

### Modal
- `open`: boolean (default: false) - Whether the modal is visible
- `heading`: string - Modal header text
- `size`: 'default' | 'large'
- `forcedAction`: boolean (default: false)
- `buttontitle`: string
- `modaltitle`: string
- `modaldescription`: string
- `modalactionbutton`: string
- `modalcancelbutton`: string

### Pagination
- `currentPage`: number (default: 1)
- `totalPages`: number (default: 1)
- `boundaryCount`: number (default: 1)
- `siblingCount`: number (default: 1)
- `disabled`: boolean (default: false)

### PieChart
- `data`: Array<Slice> - Array of data for chart slices
  ```typescript
  interface Slice {
    value: number;     // Numerical value
    color: string;     // Slice color
    label?: string;    // Optional label
  }
  ```
- `width`: number (default: 400)
- `height`: number (default: 400)

## Usage Examples

### Using ProcessList
```html
<conduit-process-list
  .items=${[
    { title: 'Step 1', description: 'Complete this first', status: 'complete' },
    { title: 'Step 2', description: 'Currently here', status: 'current' },
    { title: 'Step 3', description: 'Not started', status: 'upcoming' }
  ]}
  ?counter=${true}
></conduit-process-list>
```

### Using Select
```html
<conduit-select
  .options=${[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2', disabled: true },
    { group: 'Group 1', value: 'option3', label: 'Option 3' }
  ]}
  value="option1"
  label="Select an option"
  ?required=${true}
></conduit-select>
```

### Using Sidenav
```html
<conduit-sidenav
  .items=${[
    {
      text: 'Section 1',
      href: '/section1',
      children: [
        { text: 'Subsection 1.1', href: '/section1/sub1' },
        { text: 'Subsection 1.2', href: '/section1/sub2', current: true }
      ]
    },
    { text: 'Section 2', href: '/section2' }
  ]}
  ?expanded=${true}
></conduit-sidenav>
```

### Using Button
```html
<conduit-button
  buttonformat="accentcool"
  ?ariadisabled=${false}
>
  Click me
</conduit-button>
```

### Using ButtonGroup
```html
<conduit-button-group ?segmented=${true}>
  <conduit-button buttonformat="primary">First</conduit-button>
  <conduit-button buttonformat="primary">Second</conduit-button>
  <conduit-button buttonformat="primary">Third</conduit-button>
</conduit-button-group>
```

### Using DatePicker
```html
<conduit-date-picker
  value="2024-03-20"
  min="2024-01-01"
  max="2024-12-31"
  ?disabled=${false}
></conduit-date-picker>
```

### Using FileInput
```html
<conduit-file-input
  label="Upload Documents"
  instructions="Drag files here or"
  buttonText="Choose files"
  accept=".pdf,.doc,.docx"
  ?multiple=${true}
  ?disabled=${false}
></conduit-file-input>
```

### Using InputPrefix
```html
<conduit-input-prefix
  prefix="$"
  suffix=".00"
  value="100"
  placeholder="Enter amount"
  type="number"
  label="Price"
  ?required=${true}
  ?disabled=${false}
  errorMessage=""
></conduit-input-prefix>
```

### Using RadioButtons
```html
<conduit-radio-buttons
  name="fruits"
  .options=${[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana', disabled: true },
    { value: 'orange', label: 'Orange' }
  ]}
  value="apple"
  label="Select a fruit"
  ?required=${true}
  ?disabled=${false}
></conduit-radio-buttons>
```

### Using Search
```html
<conduit-search
  placeholder="Search..."
  value=""
  size="medium"
  label="Search records"
  ?disabled=${false}
></conduit-search>
```

### Using Summary
```html
<conduit-summary
  title="Order Summary"
  .items=${[
    { label: 'Order ID', value: '12345' },
    { label: 'Status', value: 'Processing' },
    {
      label: 'Total',
      value: '$99.99',
      action: {
        text: 'View details',
        href: '/order/12345'
      }
    }
  ]}
  ?bordered=${true}
  size="medium"
></conduit-summary>
```

### Using TextArea
```html
<conduit-text-area
  value="Initial content"
  placeholder="Enter your message"
  rows="4"
  maxlength="500"
  label="Message"
  ?required=${true}
  ?disabled=${false}
  errorMessage=""
></conduit-text-area>
```

### Using TimePicker
```html
<conduit-time-picker
  value="14:30"
  min="09:00"
  max="17:00"
  step="15"
  label="Appointment Time"
  ?required=${true}
  ?disabled=${false}
></conduit-time-picker>
```

### Using ValidationMessage
```html
<conduit-validation-message
  message="Please fill out all required fields"
  type="error"
  ?visible=${true}
></conduit-validation-message>
```

### Using Banner
```html
<conduit-banner
  bannertype="gov"
  ?expanded=${false}
></conduit-banner>
```

### Using Card
```html
<conduit-card
  title="Featured Content"
  subtitle="Supporting information"
  media="path/to/image.jpg"
  flag="New"
  layout="vertical"
>
  <div slot="content">
    Card content goes here
  </div>
  <div slot="actions">
    <conduit-button buttonformat="primary">Learn More</conduit-button>
  </div>
</conduit-card>
```

### Using Collection
```html
<conduit-collection
  .items=${[
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' }
  ]}
  columns="3"
></conduit-collection>
```

### Using ComboBox
```html
<conduit-combo-box
  .options=${[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2', disabled: true },
    { value: 'opt3', label: 'Option 3' }
  ]}
  value="opt1"
  placeholder="Select an option"
  ?disabled=${false}
></conduit-combo-box>
```

### Using DonutChart
```html
<conduit-donut-chart
  percentageNum="75"
  linecolor="#007bff"
  textmiddle="75%"
  strokeends="rounded"
  bgstroke="#e9ecef"
  ?ariadisabled=${false}
></conduit-donut-chart>
```

### Using Footer
```html
<conduit-footer
  .links=${[
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Privacy', href: '/privacy' }
  ]}
  .socialLinks=${[
    { text: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { text: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' }
  ]}
></conduit-footer>
```

### Using Grid
```html
<conduit-grid gap="md">
  <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
    Column 1
  </div>
  <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
    Column 2
  </div>
  <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
    Column 3
  </div>
</conduit-grid>
```

### Using Icon
```html
<conduit-icon
  name="search"
  size="24px"
  color="#007bff"
></conduit-icon>
```

### Using Identifier
```html
<conduit-identifier
  identity="user123"
  domain="example.com"
  text="John Doe"
  type="primary"
  size="medium"
  ?removable=${true}
  prefix="@"
  @remove=${(e) => console.log('Identifier removed')}
></conduit-identifier>
```

### Using InPageNavigation
```html
<conduit-in-page-navigation
  .items=${[
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' }
  ]}
  activeId="section1"
  offset="60"
></conduit-in-page-navigation>
```

### Using LanguageSelector
```html
<conduit-language-selector
  .languages=${[
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' }
  ]}
  selected="en"
  ?showFlags=${true}
  ?showNative=${true}
  ?disabled=${false}
></conduit-language-selector>
```

### Using LineChart
```html
<conduit-line-chart
  .data=${[
    { value: 10 },
    { value: 25 },
    { value: 15 },
    { value: 30 }
  ]}
  width="600"
  height="400"
  color="#007bff"
></conduit-line-chart>
```

### Using MemorableDate
```html
<conduit-memorable-date
  value="1990-01-01"
  label="Date of Birth"
  ?required=${true}
  ?disabled=${false}
  errorMessage=""
></conduit-memorable-date>
```

### Using Modal
```html
<conduit-modal
  ?open=${false}
  heading="Confirm Action"
  size="default"
  ?forcedAction=${false}
  buttontitle="Open Modal"
  modaltitle="Are you sure?"
  modaldescription="This action cannot be undone."
  modalactionbutton="Confirm"
  modalcancelbutton="Cancel"
  @modal-confirm=${(e) => console.log('Modal confirmed')}
  @modal-cancel=${(e) => console.log('Modal cancelled')}
></conduit-modal>
```

### Using Pagination
```html
<conduit-pagination
  currentPage="1"
  totalPages="10"
  boundaryCount="1"
  siblingCount="1"
  ?disabled=${false}
  @page-change=${(e) => console.log('Page changed:', e.detail.page)}
></conduit-pagination>
```

### Using PieChart
```html
<conduit-pie-chart
  .data=${[
    { value: 30, color: '#007bff', label: 'Category 1' },
    { value: 45, color: '#28a745', label: 'Category 2' },
    { value: 25, color: '#dc3545', label: 'Category 3' }
  ]}
  width="400"
  height="400"
></conduit-pie-chart>
```

## Event Handling Examples

### Button Click Event
```html
<conduit-button
  @click=${(e) => console.log('Button clicked', e)}
  buttonformat="primary"
>
  Click me
</conduit-button>
```

### Input Change Event
```html
<conduit-input-prefix
  @input=${(e) => console.log('Value changed:', e.detail.value)}
  @change=${(e) => console.log('Value committed:', e.detail.value)}
  label="Username"
></conduit-input-prefix>
```

### Select Change Event
```html
<conduit-select
  @change=${(e) => console.log('Selected:', e.detail.value)}
  .options=${[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  label="Select option"
></conduit-select>
```

### File Input Events
```html
<conduit-file-input
  @change=${(e) => console.log('Files selected:', e.detail.files)}
  @dragover=${(e) => console.log('Files being dragged over')}
  @drop=${(e) => console.log('Files dropped:', e.detail.files)}
  label="Upload files"
></conduit-file-input>
```

## Styling Examples

Components can be styled using CSS custom properties:

```css
conduit-button {
  --button-background-color: #007bff;
  --button-text-color: white;
  --button-hover-background-color: #0056b3;
  --button-active-background-color: #004085;
}

conduit-input-prefix {
  --input-border-color: #ced4da;
  --input-focus-border-color: #80bdff;
  --input-error-border-color: #dc3545;
}

conduit-validation-message {
  --validation-error-color: #dc3545;
  --validation-warning-color: #ffc107;
  --validation-success-color: #28a745;
}
```
# Conduit Components Library

## Banner
A government banner component that can be expanded/collapsed.
- `bannertype`: string (default: 'gov') - Type of banner
- `expanded`: boolean (default: false) - Whether the banner is expanded

## Breadcrumb
Navigation component showing the current page location within a navigational hierarchy.
- `items`: Array<{ text: string, href: string }> - Array of breadcrumb links with text and URL

## Card
A versatile container for grouping related content.
- Props not visible in current code sample

## Collection
A list of items with titles and descriptions.
- `items`: Array<{ title: string, description: string }> - Array of collection items with titles and descriptions
- `columns`: number (default: 3) - Number of columns to display

## DonutChart
A circular chart with a hole in the middle showing percentage.
- `percentageNum`: number (default: 50) - Number to display
- `linecolor`: string (default: 'black') - Color of the chart line
- `textmiddle`: string (default: percentageNum + '%') - Text to display in middle
- `strokeends`: string ('rounded' | '') - Style of stroke ends
- `bgstroke`: string - Background stroke color
- `ariadisabled`: boolean (default: false) - Whether ARIA is disabled

## Icon
A component for displaying SVG icons.
- `name`: string - Name of the icon to display
- `size`: string (default: '1em') - Size of the icon
- `color`: string (default: 'currentColor') - Color of the icon

## Identifier
A component for displaying identifiers with optional remove functionality.
- `identity`: string - Identifier value
- `domain`: string - Domain value
- `text`: string - Text to display
- `type`: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' (default: 'primary') - Visual style
- `size`: 'small' | 'medium' | 'large' (default: 'medium') - Size of the identifier
- `removable`: boolean (default: false) - Whether the identifier can be removed
- `prefix`: string - Prefix text

## InPageNavigation
Navigation component for jumping to sections within a page.
- `items`: Array<{ id: string, label: string }> - Array of navigation items with IDs and labels
- `activeId`: string - Currently active section ID
- `offset`: number (default: 0) - Scroll offset when jumping to sections

## InputPrefix
An input field with optional prefix and suffix.
- `prefix`: string - Text to show before input
- `suffix`: string - Text to show after input
- `value`: string - Input value
- `placeholder`: string - Input placeholder
- `type`: string (default: 'text') - Input type
- `disabled`: boolean (default: false) - Whether input is disabled
- `required`: boolean (default: false) - Whether input is required
- `label`: string - Label text
- `errorMessage`: string - Error message to display

## LanguageSelector
A dropdown for selecting languages.
- `languages`: Array<{ code: string, name: string, native?: string, flag?: string }> - Array of language options
- `selected`: string (default: 'en') - Currently selected language code
- `disabled`: boolean (default: false) - Whether selector is disabled
- `showFlags`: boolean (default: true) - Whether to show language flags
- `showNative`: boolean (default: true) - Whether to show native language names
- `label`: string (default: 'Select language') - Accessibility label
- `buttonLabel`: string (default: 'Language') - Text for selector button

## LineChart
A chart for displaying data as a line graph.
- `data`: Array<{ value: number }> - Array of data points to plot

## MemorableDate
A date input split into day, month, and year fields.
- Props not visible in current code sample

## Pagination
Navigation for moving between pages of content.
- `currentPage`: number (default: 1) - Current page number
- `totalPages`: number (default: 1) - Total number of pages
- `boundaryCount`: number (default: 1) - Number of boundary pages to show
- `siblingCount`: number (default: 1) - Number of sibling pages to show
- `disabled`: boolean (default: false) - Whether pagination is disabled

## PieChart
A circular statistical chart divided into slices.
- `data`: Array<{ value: number, color: string }> - Array of data for chart slices
- `width`: number (default: 400) - Chart width
- `height`: number (default: 400) - Chart height
- `colors`: string[] - Array of colors for slices
- `dataurl`: string - URL to fetch chart data from

## Tag
A label component with optional remove functionality.
- `text`: string - Text to display
- `variant`: 'default' | 'info' | 'success' | 'warning' | 'error' (default: 'default') - Visual style
- `size`: 'small' | 'medium' | 'large' (default: 'medium') - Size of the tag
- `removable`: boolean (default: false) - Whether the tag can be removed

## Table
A component for displaying tabular data.
- `data`: Array<TableData> - Array of table data
- `columns`: Array<TableColumn> - Array of column definitions
- `sortable`: boolean (default: false) - Whether table is sortable
- `bordered`: boolean (default: false) - Whether to show borders
- `striped`: boolean (default: false) - Whether to show striped rows
- `caption`: string - Table caption
- `scrollable`: boolean (default: false) - Whether table is scrollable
- `compact`: boolean (default: false) - Whether to use compact styling
- `stacked`: boolean (default: false) - Whether to stack on mobile
- `dataurl`: string - URL to fetch table data from

## ValidationMessage
A component for displaying validation messages.
- `message`: string - Message to display
- `type`: 'error' | 'warning' | 'success' (default: 'error') - Message type
- `visible`: boolean (default: true) - Whether the message is visible
