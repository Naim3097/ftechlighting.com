# Comprehensive Web Brand Kit & Design System Guide

This guide outlines the structure for a fully comprehensive Brand Kit for web development. It expands upon basic style guides to create a robust Design System that ensures consistency, scalability, and efficiency.

## 1. Core Identity (The Foundation)

These are the immutable elements of the brand.

### 1.1. Color Palette
Define semantic names rather than just color names to allow for theming (e.g., Dark Mode).

*   **Primary Colors**: The main brand colors (e.g., `var(--primary-burgundy)`).
*   **Secondary/Accent Colors**: Used for highlights, buttons, and calls to action.
*   **Neutral Colors**: Backgrounds, surfaces, borders (e.g., `var(--beige-light)`, `var(--text-dark)`).
*   **Semantic Colors**:
    *   **Success**: Green variants.
    *   **Warning**: Yellow/Orange variants.
    *   **Error**: Red variants.
    *   **Info**: Blue variants.
*   **Gradients**: Pre-defined linear or radial gradients for backgrounds or text overlays.

### 1.2. Typography System
A complete type scale ensures hierarchy.

*   **Font Families**:
    *   **Headings**: Display font (e.g., Impact, Serif).
    *   **Body**: Readable sans-serif (e.g., Helvetica Neue, Inter).
    *   **Monospace**: For code or technical data.
*   **Type Scale** (Responsive):
    *   `Display`: Massive text for hero sections (100px+).
    *   `H1` - `H6`: Standard headings.
    *   `Body Large`, `Body Regular`, `Body Small`: Paragraph text.
    *   `Caption` / `Label`: Tiny text for metadata or forms.
*   **Properties**:
    *   Line Heights (Leading).
    *   Letter Spacing (Tracking) - *Crucial for the "Outlined" look*.
    *   Text Transforms (Uppercase, Capitalize).
    *   Text Decorations (Underlines, Strikethroughs).

### 1.3. Iconography
*   **Icon Set**: Selection of a library (e.g., Phosphor, Remix, FontAwesome) or custom SVGs.
*   **Styles**: Outlined, Filled, or Duotone.
*   **Sizes**: 16px, 24px, 32px, 48px.

### 1.4. Logo Usage
*   **Variations**: Full Logo, Logomark (Icon only), Wordmark.
*   **Contexts**: Light on Dark, Dark on Light, Monochrome.
*   **Clear Space**: Minimum padding around the logo.

---

## 2. Global Design Tokens (The Physics)

These rules define how elements interact and sit within the page.

### 2.1. Spacing System
Avoid magic numbers. Use a scale (e.g., 4px baseline).

*   `--space-xs` (4px)
*   `--space-sm` (8px)
*   `--space-md` (16px)
*   `--space-lg` (32px)
*   `--space-xl` (64px)
*   `--space-2xl` (128px)

### 2.2. Layout & Grid
*   **Container Max-Widths**: Small, Medium, Large, Full-width.
*   **Grid System**: 12-column grid with defined gutters.
*   **Breakpoints**:
    *   Mobile (< 480px)
    *   Tablet Portrait (< 768px)
    *   Tablet Landscape (< 1024px)
    *   Desktop (< 1440px)
    *   Wide (> 1440px)

### 2.3. Motion & Animation
*   **Durations**: Fast (200ms), Normal (400ms), Slow (800ms).
*   **Easings**:
    *   `--ease-out-quart`: Smooth entrance.
    *   `--ease-in-out`: Standard transition.
    *   `--ease-elastic`: Bouncy effects.
*   **Micro-interactions**: Hover lifts, button clicks, toggle switches.

### 2.4. Depth & Elevation
*   **Shadows**: Levels 1-5 (Subtle to Deep).
*   **Blur**: Backdrop filters (Glassmorphism).
*   **Layers**: Z-index management strategy.

### 2.5. Border Radius
*   **Sharp**: 0px.
*   **Soft**: 4px - 8px.
*   **Round**: 16px - 24px.
*   **Pill**: 9999px.

---

## 3. UI Component Library (The Atoms)

Reusable, interactive elements.

### 3.1. Buttons & Links
*   **Primary**: Solid fill, high contrast.
*   **Secondary**: Outlined (Ghost).
*   **Tertiary**: Text only (Underlined).
*   **Icon Button**: For toolbars or close actions.
*   **States**: Default, Hover, Active (Pressed), Focus, Disabled, Loading (Spinner).

### 3.2. Form Elements
*   **Inputs**: Text, Email, Password, Number.
*   **Textarea**: Multi-line text.
*   **Select/Dropdown**: Custom styled options.
*   **Checkboxes & Radios**: Custom SVGs.
*   **Toggles/Switches**: On/Off states.
*   **Validation**: Error messages, Success checks, Helper text.

### 3.3. Cards & Surfaces
*   **Content Card**: Image + Title + Text + Link.
*   **Feature Card**: Icon + Title + Description.
*   **Image Card**: Full background image with text overlay.
*   **Hover Effects**: Lift up, Scale image, Reveal content.

### 3.4. Navigation Elements
*   **Navbar**: Logo, Links, CTA, Mobile Hamburger.
*   **Footer**: Links, Socials, Copyright, Newsletter signup.
*   **Breadcrumbs**: Path navigation.
*   **Pagination**: Page numbers or "Load More".
*   **Tabs**: Switching between content views.

### 3.5. Feedback & Overlays
*   **Modals/Dialogs**: Popups for critical actions.
*   **Toasts/Snackbars**: Temporary success/error messages.
*   **Loaders**: Spinners, Progress Bars, Skeleton Screens.
*   **Tooltips**: Hover text helpers.

### 3.6. Separators
*   **Dividers**: Horizontal lines (Solid, Dashed, Gradient).
*   **Spacers**: Vertical whitespace blocks.

---

## 4. Section Patterns (The Organisms)

Pre-built layouts combining atoms and molecules.

### 4.1. Hero Sections
*   **Center Aligned**: Headline + Subhead + Buttons.
*   **Split Screen**: Text Left / Image Right.
*   **Background Video/Image**: Full viewport height.

### 4.2. Content Sections
*   **Zig-Zag**: Alternating Text/Image rows.
*   **Grid**: 3-column or 4-column layouts (Services, Team).
*   **Masonry**: Uneven grid for galleries.

### 4.3. Social Proof
*   **Testimonials**: Carousel or Grid.
*   **Logo Strip**: "Trusted by" section.
*   **Stats**: Animated numbers/counters.

### 4.4. Call to Action (CTA)
*   **Strip**: Full width colored background.
*   **Card**: Boxed CTA within a container.

### 4.5. Utility Sections
*   **FAQ**: Accordion style.
*   **Contact**: Form + Map + Info.
*   **404 Page**: Error state.

---

## 5. Implementation Guidelines

### 5.1. CSS Variables (Custom Properties)
Define everything in `:root`.

```css
:root {
    /* Colors */
    --color-primary: #820000;
    --color-bg: #FBF1E5;
    
    /* Typography */
    --font-display: 'Impact', sans-serif;
    --font-body: 'Helvetica Neue', sans-serif;
    
    /* Spacing */
    --space-4: 1rem;
    
    /* Animation */
    --transition-base: 0.3s ease;
}
```

### 5.2. Accessibility (a11y)
*   **Contrast**: Ensure text meets WCAG AA standards.
*   **Focus States**: Visible outlines for keyboard navigation.
*   **Reduced Motion**: Respect user preferences (`@media (prefers-reduced-motion)`).

### 5.3. File Structure (Suggested)
```
/assets
  /css
    variables.css    # Design tokens
    reset.css        # Browser normalization
    typography.css   # Font styles
    components/      # Individual component styles
      buttons.css
      forms.css
      cards.css
    sections/        # Layout patterns
    utilities.css    # Helper classes
```
