# HTML Table Elements

HTML tables provide a way to structure and display tabular data in rows and columns. This section covers all essential table elements for creating accessible, well-structured data tables.

## 📋 Core Table Elements

### `<table>` - Table Container
- **Purpose**: Container for all table elements
- **Usage**: Main wrapper for tabular data structure
- **Files**: `0. HTML table basics.html`, `1. table.html`

### Table Structure Elements

#### `<caption>` - Table Title
- **Purpose**: Provides title/caption for the table
- **Usage**: Accessibility and table identification
- **Files**: `1.1. caption.html`, `1.10. caption & summary.html`

#### `<thead>` - Table Header
- **Purpose**: Groups header content in a table
- **Usage**: Column headers, semantic structure
- **File**: `1.2. thead.html`

#### `<tbody>` - Table Body
- **Purpose**: Groups body content in a table
- **Usage**: Main data rows, separates from header/footer
- **File**: `1.6. tbody.html`

#### `<tfoot>` - Table Footer
- **Purpose**: Groups footer content in a table
- **Usage**: Summary rows, totals, metadata
- **File**: `1.9. tfoot.html`

### Row and Cell Elements

#### `<tr>` - Table Row
- **Purpose**: Defines a row in a table
- **Usage**: Container for cells (th/td)
- **File**: `1.7. tr.html`

#### `<th>` - Header Cell
- **Purpose**: Header cell in a table
- **Usage**: Column/row headers with semantic meaning
- **Attributes**: `scope` (col/row), `id`
- **File**: `1.5. th.html`

#### `<td>` - Data Cell
- **Purpose**: Data cell in a table
- **Usage**: Regular data cells
- **Attributes**: `headers`, `colspan`, `rowspan`
- **File**: `1.8. td.html`

### Column Organization

#### `<colgroup>` - Column Group
- **Purpose**: Groups columns for styling
- **Usage**: Apply styles to multiple columns
- **File**: `1.3. colgroup.html`

#### `<col>` - Column
- **Purpose**: Defines column properties
- **Usage**: Individual column styling
- **File**: `1.4. col.html`

## 🎯 Advanced Table Features

### Spanning Cells
- **`colspan`**: Spans multiple columns
- **`rowspan`**: Spans multiple rows
- **Files**: `1.12. Table with two headers.html`, `1.13. Table with irregular headers.html`

### Multi-level Headers
- Complex header structures
- Hierarchical data organization
- **File**: `1.14. Table with multi-level headers.html`

### Accessibility Features
- **`scope` attribute**: Defines header scope
- **`id` and `headers` association**: Complex header relationships
- **File**: `1.15. Using id and headers attributes.html`

### Table Accessibility
- Semantic structure for screen readers
- Proper header associations
- **File**: `1.11. HTML table accesibility.html`

## 📊 Basic Table Structure

```html
<table>
    <caption>Table Title</caption>
    <thead>
        <tr>
            <th scope="col">Header 1</th>
            <th scope="col">Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Footer content</td>
        </tr>
    </tfoot>
</table>
```

## 📁 File Organization

### Basic Structure (0.x)
- **`0. HTML table basics.html`** - Table introduction and basic examples

### Core Elements (1.x)
- **`1. table.html`** - Main table element
- **`1.1. caption.html`** - Table captions
- **`1.2. thead.html`** - Table headers
- **`1.3. colgroup.html`** - Column groups
- **`1.4. col.html`** - Column definitions
- **`1.5. th.html`** - Header cells
- **`1.6. tbody.html`** - Table body
- **`1.7. tr.html`** - Table rows
- **`1.8. td.html`** - Data cells
- **`1.9. tfoot.html`** - Table footer

### Advanced Features (1.10-1.15)
- **`1.10. caption & summary.html`** - Captions with summaries
- **`1.11. HTML table accesibility.html`** - Accessibility best practices
- **`1.12. Table with two headers.html`** - Basic spanning
- **`1.13. Table with irregular headers.html`** - Complex spanning
- **`1.14. Table with multi-level headers.html`** - Hierarchical headers
- **`1.15. Using id and headers attributes.html`** - Complex accessibility

---

**Remember**: Use tables for tabular data only. For page layout, use CSS Grid or Flexbox instead.