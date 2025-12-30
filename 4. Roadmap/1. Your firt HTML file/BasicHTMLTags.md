# Basic HTML Tags

HTML documents are structured using fundamental tags that define the document's content and structure.

## Core Structure Tags

### `<!DOCTYPE html>`
Defines the document type and HTML version. Must be the first line in any HTML document.

### `<html>`
Root element that wraps all content on the page.
- **Attributes**: `lang` (language), `dir` (text direction)

### `<head>`
Container for metadata (not displayed on the page).
- Contains: `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`

### `<body>`
Contains all visible content of the document.

## Content Tags

### Headings
- `<h1>` to `<h6>` - Heading levels (1 is most important)
- Use hierarchically for proper document structure

### Text Formatting
- `<p>` - Paragraph
- `<span>` - Inline container
- `<strong>` - Important text (bold)
- `<em>` - Emphasized text (italic)
- `<br>` - Line break
- `<hr>` - Horizontal rule

### Lists
- `<ul>` - Unordered list (bullets)
- `<ol>` - Ordered list (numbers)
- `<li>` - List item
- `<dl>` - Definition list
- `<dt>` - Definition term
- `<dd>` - Definition description

### Links and Media
- `<a>` - Anchor/hyperlink
- `<img>` - Image
- `<video>` - Video content
- `<audio>` - Audio content

### Semantic HTML5 Tags
- `<header>` - Header section
- `<nav>` - Navigation
- `<main>` - Main content
- `<section>` - Thematic grouping
- `<article>` - Self-contained content
- `<aside>` - Sidebar content
- `<footer>` - Footer section

## Table Tags
- `<table>` - Table container
- `<thead>` - Table header
- `<tbody>` - Table body
- `<tr>` - Table row
- `<th>` - Table header cell
- `<td>` - Table data cell

## Form Tags
- `<form>` - Form container
- `<input>` - Input field
- `<textarea>` - Multi-line text input
- `<select>` - Dropdown list
- `<option>` - Dropdown option
- `<button>` - Clickable button
- `<label>` - Form label

## Best Practices

1. **Use semantic tags** - Choose tags based on meaning, not appearance
2. **Proper nesting** - Close tags in reverse order of opening
3. **Alt text for images** - Always provide descriptive alt text
4. **Validate HTML** - Use W3C validator to check for errors
5. **Accessibility** - Use ARIA attributes when needed

## Common Attributes

- `id` - Unique identifier
- `class` - One or more class names
- `style` - Inline CSS styles
- `title` - Tooltip text
- `data-*` - Custom data attributes
- `aria-*` - Accessibility attributes