# Lists and Types in HTML

Lists are fundamental HTML elements used to organize content in a sequential or grouped manner. HTML offers three main types of lists, each serving different purposes for content organization.

## 📋 List Types Overview

### 1. Ordered Lists (`<ol>`)
- **Purpose**: Sequential items where order matters
- **Rendering**: Numbers (1, 2, 3...) by default
- **Elements**: `<ol>`, `<li>`
- **File**: `1. Ordered Lists.html`

### 2. Unordered Lists (`<ul>`)
- **Purpose**: Collection of items where order doesn't matter
- **Rendering**: Bullets (•) by default
- **Elements**: `<ul>`, `<li>`
- **File**: `2. Unordered Lists.html`

### 3. Definition Lists (`<dl>`)
- **Purpose**: Term-definition pairs
- **Elements**: `<dl>`, `<dt>`, `<dd>`
- **File**: `3. Definition Lists.html`

## 🔢 Ordered Lists (`<ol>`, `<li>`)

### Basic Structure
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Purpose
- Step-by-step instructions
- Rankings or ordered data
- Sequential information

## 📌 Unordered Lists (`<ul>`, `<li>`)

### Basic Structure
```html
<ul>
  <li>Milk</li>
  <li>Cheese</li>
  <li>Bread</li>
</ul>
```

### Nesting Support
```html
<ul>
  <li>Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

### Purpose
- Feature lists
- Ingredient lists
- General collections

## 📚 Definition Lists (`<dl>`, `<dt>`, `<dd>`)

### Basic Structure
```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition for term 1</dd>
  <dt>Term 2</dt>
  <dd>Definition for term 2</dd>
</dl>
```

### Elements
- **`<dt>`** - Definition Term
- **`<dd>`** - Definition Description
- **`<dl>`** - Definition List container

### Purpose
- Glossaries and dictionaries
- Specifications and technical terms
- FAQs and Q&A sections

## 📁 File Organization

This documentation covers:
- **`1. Ordered Lists.html`** - Basic ordered list structure and examples
- **`2. Unordered Lists.html`** - Unordered lists with nesting examples
- **`3. Definition Lists.html`** - Term-definition pair structures

## 📊 Quick Comparison

| Feature | `<ol>` | `<ul>` | `<dl>` |
|---------|--------|--------|--------|
| **Elements** | `<ol>`, `<li>` | `<ul>`, `<li>` | `<dl>`, `<dt>`, `<dd>` |
| **Order** | Sequential | Unordered | Term-definition pairs |
| **Default Style** | Numbers | Bullets | No markers |
| **Nesting** | Supported | Supported | Supported |
| **Common Uses** | Instructions, rankings | Features, ingredients | Glossaries, specs |

---

**Remember**: Use lists based on semantic meaning, not visual appearance. `<ol>` for ordered content, `<ul>` for collections, `<dl>` for term definitions.