# Standard HTML Attributes

HTML attributes provide additional information about HTML elements. They are always specified in the start tag and come in name/value pairs like `name="value"`. Understanding standard attributes is fundamental for creating functional, accessible, and well-structured web pages.

## 📋 Global Attributes

These attributes can be used on any HTML element:

### Core Identifiers
- **`id`** - Unique identifier for an element
  - **Purpose**: Must be unique within the document
  - **Usage**: CSS selectors, JavaScript references, anchor links
  - **Example**: `<div id="main-content">`

- **`class`** - One or more class names
  - **Purpose**: Styling hooks, element grouping
  - **Usage**: CSS selectors, JavaScript DOM queries
  - **Example**: `<p class="highlight important">`

### Styling and Presentation
- **`style`** - Inline CSS styles
  - **Purpose**: Direct styling (use sparingly)
  - **Usage**: Override external styles, quick testing
  - **Example**: `<span style="color: red;">`

- **`hidden`** - Hides element from view
  - **Purpose**: Programmatic visibility control
  - **Usage**: Boolean attribute, no value needed
  - **Example**: `<div hidden>Hidden content</div>`

### Text and Content
- **`title`** - Tooltip text
  - **Purpose**: Additional information on hover
  - **Usage**: Accessibility, supplementary info
  - **Example**: `<abbr title="World Wide Web">WWW</abbr>`

- **`lang`** - Language code
  - **Purpose**: Specify content language
  - **Usage**: Accessibility, translation, search engines
  - **Example**: `<p lang="es">Hola mundo</p>`

- **`dir`** - Text direction
  - **Values**: `ltr` (left-to-right), `rtl` (right-to-left), `auto`
  - **Purpose**: Text rendering direction
  - **Example**: `<p dir="rtl">עברית</p>`

### Data Storage
- **`data-*`** - Custom data attributes
  - **Purpose**: Store custom data for JavaScript
  - **Usage**: Application-specific data
  - **Example**: `<div data-user-id="123" data-role="admin">`

## 🎯 Event Handling Attributes

These attributes respond to user interactions:

### Mouse Events
- **`onclick`** - Click event
- **`ondblclick`** - Double click event
- **`onmousedown`** - Mouse button pressed
- **`onmouseup`** - Mouse button released
- **`onmouseover`** - Mouse enters element
- **`onmouseout`** - Mouse leaves element
- **`onmousemove`** - Mouse moves over element

### Keyboard Events
- **`onkeydown`** - Key pressed down
- **`onkeyup`** - Key released
- **`onkeypress`** - Key pressed and released

### Form and Window Events
- **`onchange`** - Element value changed
- **`onsubmit`** - Form submitted
- **`onreset`** - Form reset
- **`onfocus`** - Element gains focus
- **`onblur`** - Element loses focus
- **`onload`** - Element finished loading
- **`onunload`** - Element/page unloaded

## 📊 Input-Specific Attributes

### Form Control Attributes
- **`name`** - Form field name
  - **Purpose**: Server-side identification
  - **Usage**: Form submission, JavaScript access
  - **Example**: `<input name="username">`

- **`value`** - Default value
  - **Purpose**: Initial content/selection
  - **Usage**: Pre-filled forms, default options
  - **Example**: `<input value="John Doe">`

- **`placeholder`** - Hint text
  - **Purpose**: User guidance
  - **Usage**: Empty field hints
  - **Example**: `<input placeholder="Enter your name">`

- **`required`** - Mandatory field
  - **Purpose**: Form validation
  - **Usage**: Boolean attribute
  - **Example**: `<input required>`

- **`disabled`** - Inactive control
  - **Purpose**: Prevent interaction
  - **Usage**: Boolean attribute
  - **Example**: `<button disabled>Submit</button>`

- **`readonly`** - Non-editable but visible
  - **Purpose**: Display-only content
  - **Usage**: Boolean attribute
  - **Example**: `<input readonly value="ID-12345">`

### Input Type Attributes
- **`type`** - Input type
  - **Values**: `text`, `password`, `email`, `number`, `date`, etc.
  - **Purpose**: Define input behavior
  - **Example**: `<input type="email">`

- **`min`** / **`max`** - Value range
  - **Purpose**: Numeric/date constraints
  - **Example**: `<input type="number" min="1" max="100">`

- **`step`** - Increment value
  - **Purpose**: Numeric stepping
  - **Example**: `<input type="number" step="0.5">`

- **`maxlength`** - Maximum characters
  - **Purpose**: Text length limit
  - **Example**: `<input maxlength="50">`

- **`pattern`** - Regex pattern
  - **Purpose**: Custom validation
  - **Example**: `<input pattern="[A-Z]{3}">`

## 🎨 Media and Link Attributes

### Image Attributes
- **`src`** - Image source URL
- **`alt`** - Alternative text (accessibility)
- **`width`** - Image width
- **`height`** - Image height
- **`loading`** - Lazy loading behavior
- **`decoding`** - Image decoding hint

### Link Attributes
- **`href`** - Destination URL
- **`target`** - Browser context
  - **Values**: `_self`, `_blank`, `_parent`, `_top`
- **`rel`** - Relationship type
  - **Values**: `nofollow`, `noopener`, `noreferrer`, etc.
- **`download`** - Download trigger
- **`hreflang`** - Link language
- **`type`** - MIME type

### Script Attributes
- **`src`** - Script source URL
- **`async`** - Asynchronous loading
- **`defer`** - Deferred execution
- **`type`** - Script type
- **`charset`** - Character encoding
- **`crossorigin`** - CORS settings

## 🔧 Accessibility Attributes (ARIA)

### Role and Structure
- **`role`** - Element purpose
  - **Values**: `navigation`, `main`, `banner`, `contentinfo`, etc.
  - **Purpose**: Screen reader context
  - **Example**: `<nav role="navigation">`

### State and Properties
- **`aria-label`** - Accessible name
- **`aria-describedby`** - Description reference
- **`aria-expanded`** - Expand/collapse state
- **`aria-hidden`** - Visibility for screen readers
- **`aria-disabled`** - Disabled state
- **`aria-required`** - Required field indicator
- **`aria-invalid`** - Validation error state

### Live Regions
- **`aria-live`** - Dynamic content announcement
- **`aria-atomic`** - Content update granularity
- **`aria-relevant`** - Relevant changes

## 📱 Meta Attributes

### Document Metadata
- **`charset`** - Character encoding
- **`name`** - Metadata name
- **`content`** - Metadata value
- **`http-equiv`** - HTTP header equivalent
- **`scheme`** - Metadata scheme

### Common Meta Names
- **`description`** - Page description
- **`keywords`** - Search keywords
- **`author`** - Content author
- **`viewport`** - Mobile viewport settings
- **`robots`** - Search engine directives

## 🎯 Table Attributes

### Table Structure
- **`colspan`** - Column span
- **`rowspan`** - Row span
- **`scope`** - Header scope
- **`headers`** - Header cell association

### Table Presentation
- **`border`** - Table border
- **`cellpadding`** - Cell padding
- **`cellspacing`** - Cell spacing
- **`width`** - Table width

## 🚀 Modern HTML5 Attributes

### Semantic Attributes
- **`draggable`** - Drag and drop capability
- **`dropzone`** - Drop zone behavior
- **`spellcheck`** - Spell checking
- **`translate`** - Translation behavior
- **`contenteditable`** - Editable content

### Performance Attributes
- **`loading`** - Lazy loading (`lazy`, `eager`)
- **`decoding`** - Image decoding (`sync`, `async`, `auto`)
- **`importance`** - Resource priority (`high`, `low`, `auto`)
- **`crossorigin`** - Cross-origin resource sharing

### Security Attributes
- **`integrity`** - Subresource integrity
- **`referrerpolicy`** - Referrer policy
- **`sandbox`** - iframe security restrictions

## 💡 Best Practices

### Attribute Usage Guidelines
1. **Use semantic attributes** - Choose meaningful attributes over presentational ones
2. **Maintain accessibility** - Always include alt text, ARIA labels, and proper roles
3. **Validate forms** - Use appropriate validation attributes for user input
4. **Optimize performance** - Implement lazy loading and resource priorities
5. **Ensure security** - Use integrity checks and proper CORS settings

### Common Pitfalls to Avoid
- **Duplicate IDs** - Each id must be unique
- **Missing alt text** - Always provide descriptive alternatives
- **Inline styles overuse** - Prefer external CSS
- **Improper ARIA usage** - Don't override native semantics unnecessarily
- **Invalid attribute combinations** - Check attribute compatibility

## 📚 Quick Reference

| Attribute | Purpose | Elements | Example |
|-----------|---------|----------|---------|
| `id` | Unique identifier | All | `<div id="main">` |
| `class` | Styling hook | All | `<p class="highlight">` |
| `style` | Inline CSS | All | `<span style="color: red;">` |
| `title` | Tooltip | All | `<abbr title="etc.">` |
| `data-*` | Custom data | All | `<div data-id="123">` |
| `src` | Source URL | img, script, audio, video | `<img src="image.jpg">` |
| `href` | Link destination | a, link | `<a href="#top">` |
| `alt` | Alternative text | img | `<img alt="Description">` |
| `name` | Form field name | input, select, textarea | `<input name="email">` |
| `value` | Default value | input, option, button | `<input value="Default">` |
| `required` | Mandatory field | input, select, textarea | `<input required>` |
| `disabled` | Inactive control | input, button, select | `<button disabled>` |
| `placeholder` | Input hint | input, textarea | `<input placeholder="Hint">` |
| `role` | ARIA purpose | All | `<nav role="navigation">` |
| `aria-label` | Accessible name | All | `<button aria-label="Close">` |

---

**Remember**: Attributes provide essential functionality, accessibility, and semantic meaning to HTML elements. Use them thoughtfully to create robust, user-friendly web experiences.