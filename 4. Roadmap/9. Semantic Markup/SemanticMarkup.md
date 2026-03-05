# Semantic Markup in HTML

Semantic HTML uses elements that clearly describe their meaning to both the browser and developer. This section covers semantic elements for structure, text emphasis, and content organization.

## 📋 Core Semantic Elements

### Document Structure
- **`<header>`** - Introductory content or navigation
- **`<nav>`** - Navigation links
- **`<main>`** - Main content area
- **`<section>`** - Thematic content grouping
- **`<article>`** - Self-contained content
- **`<aside>`** - Sidebar content
- **`<footer>`** - Footer information

### Highlighting Changes
- **`<del>`** - Deleted text
- **`<ins>`** - Inserted text
- **`<s>`** - Strikethrough text

### Quotations and Citations
- **`<abbr>`** - Abbreviation
- **`<blockquote>`** - Long quotation
- **`<q>`** - Short quotation
- **`<cite>`** - Citation reference
- **`<dfn>`** - Definition term
- **`<address>`** - Contact information

## 🏗️ Layout Semantic Elements

### `<header>`
- **Purpose**: Introductory content or navigation
- **Usage**: Site headers, article headers
- **File**: `3. Layout tags/1. header.html`

### `<nav>`
- **Purpose**: Navigation section
- **Usage**: Menu links, breadcrumbs
- **File**: `3. Layout tags/2. nav.html`

### `<main>`
- **Purpose**: Main content of the document
- **Usage**: Primary content area
- **File**: `3. Layout tags/3. main.html`

### `<section>`
- **Purpose**: Thematic grouping of content
- **Usage**: Chapters, tabs, sections
- **File**: `3. Layout tags/4. section.html`

### `<article>`
- **Purpose**: Self-contained composition
- **Usage**: Blog posts, news articles
- **File**: `3. Layout tags/5. article.html`

### `<aside>`
- **Purpose**: Content tangentially related
- **Usage**: Sidebars, pull quotes
- **File**: `3. Layout tags/6. aside.html`

### `<footer>`
- **Purpose**: Footer information
- **Usage**: Copyright, author info
- **File**: `3. Layout tags/7. footer.html`

## ✏️ Text Semantic Elements

### `<del>` - Deleted Text
- **Purpose**: Text that has been removed
- **Semantic**: Indicates deletion
- **File**: `1. Highlighting Changes/1. del.html`

### `<ins>` - Inserted Text
- **Purpose**: Text that has been added
- **Semantic**: Indicates addition
- **File**: `1. Highlighting Changes/3. ins.html`

### `<s>` - Strikethrough
- **Purpose**: Text no longer accurate
- **Semantic**: Indicates inaccurate content
- **File**: `1. Highlighting Changes/2. s.html`

## 📚 Quotation and Citation Elements

### `<abbr>` - Abbreviation
- **Purpose**: Abbreviated text
- **Attribute**: `title` for full expansion
- **File**: `2. Qutation Citation/1. abbr.html`

### `<blockquote>` - Block Quote
- **Purpose**: Long quotation from another source
- **Attribute**: `cite` for source URL
- **File**: `2. Qutation Citation/5. blockquote.html`

### `<q>` - Inline Quote
- **Purpose**: Short inline quotation
- **Attribute**: `cite` for source URL
- **File**: `2. Qutation Citation/6. q.html`

### `<cite>` - Citation
- **Purpose**: Reference to a creative work
- **Usage**: Book titles, movie names, artwork
- **File**: `2. Qutation Citation/2. cite.html`

### `<dfn>` - Definition
- **Purpose**: Defining instance of a term
- **Usage**: First use of technical terms
- **File**: `2. Qutation Citation/3. dfn.html`

### `<address>` - Contact Information
- **Purpose**: Contact information for author
- **Usage**: Email, phone, physical address
- **File**: `2. Qutation Citation/4. address.html`

## 🎯 Semantic vs Non-Semantic

### Non-Semantic Elements
- `<div>` - Generic container (no meaning)
- `<span>` - Generic inline container (no meaning)

### Semantic Elements
- Provide meaning to content structure
- Help search engines understand content
- Improve accessibility for screen readers
- Enable better CSS targeting

## ♿ Accessibility Benefits

### Why Use Semantic Elements
- Screen readers can navigate by landmarks
- Search engines understand document structure
- Developers can target elements precisely
- Better accessibility for assistive technologies

## 💡 Pro Tips

1. **Use layout elements once**: Only one `<main>`, `<header>`, `<footer>` per page
2. **Choose `<article>` wisely**: Content should make sense alone
3. **Use `<section>` with headings**: Every section should have a heading
4. **Use `<abbr>` with title**: Always provide full expansion
5. **Avoid `<div>` when semantic exists**: Use `<nav>`, `<article>`, `<aside>`, etc.

## 📊 Quick Comparison

| Element | Category | Usage | Screen Reader |
|---------|----------|-------|---------------|
| `<header>` | Layout | Intro content | Landmark |
| `<nav>` | Layout | Navigation | Landmark |
| `<main>` | Layout | Primary content | Landmark |
| `<section>` | Layout | Thematic group | - |
| `<article>` | Layout | Self-contained | - |
| `<aside>` | Layout | Sidebar content | Landmark |
| `<footer>` | Layout | Footer info | Landmark |
| `<del>` | Text | Removed text | - |
| `<ins>` | Text | Added text | - |
| `<abbr>` | Text | Abbreviation | Expands on focus |

## 📁 File Organization

This documentation covers:

### Introduction
- **`0. Semantics.html`** - Introduction to semantic HTML

### Highlighting Changes
- **`1. Highlighting Changes/1. del.html`** - Deleted text
- **`1. Highlighting Changes/2. s.html`** - Strikethrough text
- **`1. Highlighting Changes/3. ins.html`** - Inserted text

### Quotations and Citations
- **`2. Qutation Citation/1. abbr.html`** - Abbreviations
- **`2. Qutation Citation/2. cite.html`** - Citations
- **`2. Qutation Citation/3. dfn.html`** - Definitions
- **`2. Qutation Citation/4. address.html`** - Contact info
- **`2. Qutation Citation/5. blockquote.html`** - Block quotes
- **`2. Qutation Citation/6. q.html`** - Inline quotes

### Layout Elements
- **`3. Layout tags/1. header.html`** - Header element
- **`3. Layout tags/2. nav.html`** - Navigation element
- **`3. Layout tags/3. main.html`** - Main element
- **`3. Layout tags/4. section.html`** - Section element
- **`3. Layout tags/5. article.html`** - Article element
- **`3. Layout tags/6. aside.html`** - Aside element
- **`3. Layout tags/7. footer.html`** - Footer element

---

**Remember**: Use semantic HTML to provide meaning to your content. Choose elements based on their purpose, not their default appearance.
