
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
