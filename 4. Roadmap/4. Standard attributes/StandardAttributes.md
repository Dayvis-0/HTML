# Standard HTML Attributes

HTML attributes provide additional information about HTML elements. This folder covers the most commonly used global attributes: id, class, data attributes, and style.

## 📋 Core Attributes Covered

### `id` - Unique Identifier
- **Purpose**: Unique identifier within the document
- **Usage**: CSS selectors, JavaScript references, anchor links
- **Example**: `<p id="exciting">Unique paragraph</p>`
- **Rule**: Must be unique per document

### `class` - Styling Classes
- **Purpose**: One or more class names for styling
- **Usage**: CSS selectors, element grouping, multiple classes
- **Example**: `<p class="note editorial">Styled paragraph</p>`
- **Syntax**: Space-separated class names

### `data-*` - Custom Data Attributes
- **Purpose**: Store custom data for JavaScript
- **Usage**: Application-specific information
- **Examples**: 
  - `data-columns="3"`
  - `data-index-number="12314"`
  - `data-parent="cars"`
- **Syntax**: Starts with `data-`

### `style` - Inline CSS
- **Purpose**: Direct styling on elements
- **Usage**: Quick testing, overrides, specific styling
- **Example**: `<div style="background: red; color: white;">`
- **Recommendation**: Use sparingly, prefer external CSS

## 📁 File Organization

This documentation covers:
- **`1. id.html`** - Unique identifier examples and usage
- **`2. class.html`** - Class attribute with multiple classes
- **`3. Data attributes.html`** - Custom data storage examples
- **`4. style.html`** - Inline styling demonstrations

---

**Remember**: Use `id` for unique elements, `class` for reusable styling, `data-*` for JavaScript data, and `style` for specific inline styling needs.