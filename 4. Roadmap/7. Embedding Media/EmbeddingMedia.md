# Embedding Media in HTML

Embedding media in HTML allows you to include images, audio, video, and external content in your webpages. This section covers all the essential elements and techniques for embedding different types of media.

## 📋 Core Media Elements

### Images
- **`<img>`** - Image embedding element
- **Purpose**: Display images on webpages
- **Key Attributes**: `src`, `alt`, `width`, `height`, `srcset`
- **File**: `1. img.html`, `2. HTML images.html`

### Audio
- **`<audio>`** - Audio playback element
- **Purpose**: Embed sound content
- **Attributes**: `controls`, `autoplay`, `loop`, `muted`, `src`
- **File**: `3. audio.html`

### Video
- **`<video>`** - Video playback element
- **Purpose**: Embed video content
- **Attributes**: `controls`, `autoplay`, `loop`, `muted`, `poster`, `width`, `height`
- **File**: `4. video.html`

### Embedded Content
- **`<iframe>`** - Inline frame element
- **Purpose**: Embed external webpages
- **Attributes**: `src`, `width`, `height`, `allow`, `allowfullscreen`
- **File**: `5. Iframe.html`

### Figure Elements
- **`<figure>`** - Figure container
- **`<figcaption>`** - Figure caption
- **Purpose**: Associate images with captions
- **File**: `7. figure and figcaption.html`

## 🎯 Media Attributes

### Image Attributes
- **`src`** - Image source URL
- **`alt`** - Alternative text for accessibility
- **`width` / `height`** - Display dimensions
- **`srcset`** - Multiple image sources for responsive design
- **`loading`** - Lazy loading control (`lazy`, `eager`)

### Video/Audio Attributes
- **`controls`** - Display playback controls
- **`autoplay`** - Start playback automatically
- **`loop`** - Repeat content continuously
- **`muted`** - Start muted
- **`poster`** - Preview image for video

### Iframe Attributes
- **`src`** - Embedded page URL
- **`width` / `height`** - Frame dimensions
- **`allowfullscreen`** - Enable fullscreen mode
- **`allow`** - Permission for features (camera, microphone)

## 🔧 Advanced Features

### Priority Hints
- **`fetchpriority`** - Hints resource loading priority
- **Values**: `high`, `low`, `auto`
- **File**: `8. Priority Hints.html`

### Content Security Policy
- **CSP** - Security headers for embedded content
- **Purpose**: Control what resources can be loaded
- **File**: `6. CSP.html`

## 📱 Responsive Media

### Image Responsive Techniques
- **`srcset`** - Multiple image sizes
- **`sizes`** - Image display sizes
- **`picture`** - Art direction with multiple sources

### Video Responsive
- CSS-based width control
- Aspect ratio preservation

## ♿ Accessibility Considerations

### Image Accessibility
- Always provide `alt` text
- Describe image content or purpose
- Use empty alt for decorative images

### Video/Audio Accessibility
- Provide captions when possible
- Include transcripts for audio content
- Ensure keyboard accessibility for controls

## 💡 Pro Tips

1. **Always add alt text**: Describe images for screen readers
2. **Use lazy loading**: Add `loading="lazy"` for off-screen images
3. **Provide multiple formats**: For video/audio, include different codecs
4. **Set dimensions**: Always specify width/height to prevent layout shifts
5. **Be careful with iframes**: They can impact performance and security

## 📊 Quick Comparison

| Element | Purpose | Key Attributes | Use Case |
|---------|---------|---------------|----------|
| `<img>` | Display images | `src`, `alt`, `srcset` | Photos, icons |
| `<audio>` | Play sound | `controls`, `autoplay` | Music, podcasts |
| `<video>` | Play video | `controls`, `poster` | Video content |
| `<iframe>` | Embed external | `src`, `allowfullscreen` | External content |
| `<figure>` | Media container | - | Image + caption |
| `<figcaption>` | Caption text | - | Image descriptions |

## 📁 File Organization

This documentation covers:
- **`0. Adding media.html`** - Introduction to media embedding
- **`1. img.html`** - Basic image element
- **`2. HTML images.html`** - Advanced image techniques
- **`3. audio.html`** - Audio element and attributes
- **`4. video.html`** - Video element and attributes
- **`5. Iframe.html`** - Iframe embedding
- **`6. CSP.html`** - Content Security Policy
- **`7. figure and figcaption.html`** - Figure elements
- **`8. Priority Hints.html`** - Priority hints for loading

---

**Remember**: Always consider accessibility and performance when embedding media. Use appropriate formats and provide alternatives for better user experience.
