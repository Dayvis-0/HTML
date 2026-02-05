# Textual Tags in HTML

Textual tags in HTML are used to structure and format text content on a webpage. They define how text should appear, whether it's a paragraph, heading, emphasized word, or a referenced section. These tags provide semantic meaning to the text, helping browsers and search engines understand the content's organization and purpose.

## 📋 Core Textual Tags

### Headings
- **`<h1>` to `<h6>`** - Hierarchical heading levels
- **Purpose**: Structure content with importance levels
- **Usage**: `<h1>` for main title, `<h2>`-`<h6>` for subheadings
- **Best Practice**: Use hierarchically, don't skip levels
- **Files**: `1. headings.html`, `1.1. Headings WAI.html`, `1.2. title.html`

### Paragraphs
- **`<p>`** - Paragraph container
- **Purpose**: Group related sentences
- **Features**: Automatic margins, block-level element
- **Usage**: Standard text content blocks
- **File**: `2. p.html`

### Text Formatting
- **`<strong>`** - Important text (semantic bold)
- **`<b>`** - Bold text (visual only)
- **`<em>`** - Emphasized text (semantic italic)
- **`<i>`** - Italic text (visual only)
- **`<mark>`** - Highlighted/marked text
- **Files**: `5. b and strong.html`, `7. i and em.html`, `8. mark.html`

### Structural Text
- **`<br>`** - Line break (self-closing)
- **`<hr>`** - Horizontal rule/thematic break
- **`<pre>`** - Preformatted text (preserves whitespace)
- **Files**: `3. hr.html`, `4. br.html`, `6. pre.html`

### Special Text
- **`<sub>`** - Subscript text (below baseline)
- **`<sup>`** - Superscript text (above baseline)
- **Files**: `9. sub.html`, `10. sup.html`

### Links and References
- **`<a>`** - Anchor/hyperlink
- **File**: `11. Links.html`

## 🎯 Semantic vs Presentational

### Semantic Tags (Recommended)
- **`<strong>`** - Indicates importance
- **`<em>`** - Indicates emphasis
- **`<mark>`** - Highlights relevant content
- **`<h1>` to `<h6>`** - Heading hierarchy
- **`<p>`** - Paragraph structure

### Presentational Tags (Use Sparingly)
- **`<b>`** - Bold without semantic meaning
- **`<i>`** - Italic without semantic meaning

## 📊 Text Tag Categories

### Block-Level Elements
Create new lines and take full width:
- `<h1>` to `<h6>`
- `<p>`
- `<pre>`
- `<hr>`

### Inline Elements
Flow within text without breaking:
- `<strong>`, `<b>`
- `<em>`, `<i>`
- `<mark>`
- `<sub>`, `<sup>`
- `<a>`

### Self-Closing Elements
- `<br>` (line break)
- `<hr>` (horizontal rule)

## 🔧 Common Attributes

### Global Attributes
- **`id`** - Unique identifier
- **`class`** - Styling hooks
- **`style`** - Inline CSS
- **`title`** - Tooltip text

### Link-Specific Attributes
- **`href`** - URL destination
- **`target`** - Browser context
- **`rel`** - Relationship type
- **`download`** - Download trigger

### Link-Specific Attributes
- **`href`** - URL destination
- **`target`** - Browser context (`_blank`, `_self`, `_parent`, `_top`, `_unfencedTop`)
- **`rel`** - Relationship type (`noopener`, `noreferrer`, `nofollow`)
- **`download`** - Download trigger
- **`hreflang`** - Language of destination
- **`type`** - MIME type of destination
- **`media`** - Target media
- **`referrerpolicy`** - Referrer policy
- **`ping`** - URLs to notify on click
- **`title`** - Tooltip text

## 🚀 Target Attribute Values

### Navigation Contexts
- **`_self`** - Same window/frame
- **`_blank`** - New tab/window
- **`_parent`** - Parent frame
- **`_top`** - Top window (breaks all frames)
- **`_unfencedTop`** - Breaks fenced frames (security isolation)

### Target Usage
- `_self`: Default behavior
- `_blank`: Best for external links (use with `noopener noreferrer`)
- `_parent`/`_top`: Frame navigation contexts
- `_unfencedTop`: Modern security contexts

## 💡 Pro Tips

1. **Choose semantic over presentational** - Use `<strong>` instead of `<b>` when text is important
2. **Maintain heading hierarchy** - Don't skip heading levels for SEO
3. **Use appropriate line breaks** - `<br>` for addresses, not for spacing
4. **Preformat when needed** - Use `<pre>` for code, ASCII art, or text that needs exact spacing
5. **Highlight meaningfully** - Use `<mark>` for search results or key terms
6. **Link securely** - Use `target="_blank"` with `rel="noopener noreferrer"` for external links

## 📚 Quick Reference

| Tag | Purpose | Type | Semantic? | File |
|-----|---------|------|-----------|------|
| `<h1>-<h6>` | Headings | Block | ✅ | `1. headings.html` |
| `<p>` | Paragraph | Block | ✅ | `2. p.html` |
| `<strong>` | Important | Inline | ✅ | `5. b and strong.html` |
| `<b>` | Bold | Inline | ❌ | `5. b and strong.html` |
| `<em>` | Emphasis | Inline | ✅ | `7. i and em.html` |
| `<i>` | Italic | Inline | ❌ | `7. i and em.html` |
| `<mark>` | Highlight | Inline | ✅ | `8. mark.html` |
| `<a>` | Hyperlink | Inline | ✅ | `11. Links.html` |
| `<br>` | Line break | Self-closing | ❌ | `4. br.html` |
| `<hr>` | Thematic break | Self-closing | ✅ | `3. hr.html` |
| `<pre>` | Preformatted | Block | ✅ | `6. pre.html` |
| `<sub>` | Subscript | Inline | ✅ | `9. sub.html` |
| `<sup>` | Superscript | Inline | ✅ | `10. sup.html` |

## 📁 File Organization

This documentation covers the following HTML files:
- `1. headings.html` - Heading hierarchy and usage
- `1.1. Headings WAI.html` - Accessibility guidelines for headings
- `1.2. title.html` - Document title tag
- `2. p.html` - Paragraph elements with pilcrow example
- `3. hr.html` - Horizontal rules
- `4. br.html` - Line breaks
- `5. b and strong.html` - Bold text (semantic vs presentational)
- `6. pre.html` - Preformatted text examples
- `7. i and em.html` - Italic text (semantic vs presentational)
- `8. mark.html` - Highlighted text
- `9. sub.html` - Subscript text
- `10. sup.html` - Superscript text
- `11. Links.html` - Anchor tags and attributes

---

**Remember**: Good textual structure improves readability, accessibility, and SEO. Choose tags based on meaning, not just appearance.