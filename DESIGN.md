---
name: Scale-Up Navigator
description: A practical navigation system for founders turning growth into repeatable execution.
colors:
  ink: "#091321"
  ink-soft: "#101D2F"
  paper: "#F2F4EF"
  paper-deep: "#E4E9E2"
  lime: "#D9F36A"
  blue: "#4E6DFF"
  coral: "#FF896E"
  muted: "#718096"
  muted-light: "#B8C2CF"
typography:
  display:
    fontFamily: "Sora, Segoe UI, sans-serif"
    fontSize: "clamp(3.5rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.06em"
  body:
    fontFamily: "DM Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, Segoe UI, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    lineHeight: 1.4
rounded:
  none: "0"
  hairline: "2px"
  frame: "16px"
  circle: "50%"
spacing:
  xs: "0.55rem"
  sm: "0.85rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.2rem"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.2rem"
---

# Design System: Scale-Up Navigator

## Overview

**Creative North Star: "The operating route map"**

Scale-Up Navigator treats growth like a route that has to work in real conditions, not a destination shown on a poster. The visual system combines a midnight navigation-room ground with chart lines, signal markers, field-note labels, and clean paper sections. It is confident and exact without feeling corporate or over-produced.

The page moves from a dark, high-contrast introduction into a light working surface, then back into the dark for the operating approach before returning to a lighter founder profile. Cobalt identifies structure, lime identifies action and movement, and coral marks the moments that need attention.

**Key Characteristics:**

- Midnight ink, paper, cobalt, lime, and coral.
- Geometric display type paired with practical body copy.
- Route lines, dividers, and open lists instead of card grids.
- Michael's portrait and original Scale-Up Navigator diagrams treated as evidence, not decoration.
- Flat surfaces with depth created by contrast, crop, and linework.

## Colors

The palette uses a dark navigation ground, a cool paper working surface, and two signal colors for movement and emphasis.

### Primary

- **Route Lime** (#D9F36A): Primary action, route line, active state, and positive movement.
- **Navigation Cobalt** (#4E6DFF): Structural emphasis, section accents, and service focus.
- **Signal Coral** (#FF896E): Small attention markers and list bullets.

### Neutral

- **Midnight Ink** (#091321): Main dark surface and primary dark text.
- **Soft Ink** (#101D2F): Dark tonal layer behind navigation content.
- **Working Paper** (#F2F4EF): Light content surface and light text on dark ground.
- **Paper Deep** (#E4E9E2): Image and supporting light surface.
- **Muted Slate** (#718096): Secondary text on light surfaces.
- **Muted Light** (#B8C2CF): Secondary text on dark surfaces.

### Named Rules

**The Route Signal Rule.** Lime is reserved for movement, action, and active states; cobalt is reserved for structure and orientation.

## Typography

**Display Font:** Sora (with Segoe UI, sans-serif fallback)

**Body Font:** DM Sans (with Segoe UI, sans-serif fallback)

**Character:** Sora gives the page the geometric certainty of signage and navigation notation. DM Sans keeps long explanations calm and readable.

### Hierarchy

- **Display** (600, `clamp(3.5rem, 7.2vw, 6rem)`, 0.96): The hero statement and largest section theses.
- **Headline** (600, `clamp(2.3rem, 5vw, 4.8rem)`, 1.02): Section-level ideas and the contact close.
- **Title** (500-600, `clamp(1.8rem, 3.4vw, 3.2rem)`, 1.1): Service rows and secondary headings.
- **Body** (400, 1rem-1.28rem, 1.55-1.6): Explanations, service detail, and supporting copy; keep measures near 65-75ch where the layout allows.
- **Label** (700, 0.7rem, 0.08em, uppercase): Navigation metadata, route notes, and small system annotations.

### Named Rules

**The Headline Carries the Weight Rule.** Do not add an eyebrow above a page or section heading; let the statement establish the hierarchy.

## Layout

The page uses a centered max-width of 1180px with fluid side padding between 1.25rem and 3.25rem. The hero breaks into a copy column and a larger motion column, while working sections use open two-column grids and full-width bordered lists. The service list is a native disclosure pattern rather than a set of cards. At 760px and below, grids become a single reading column, navigation becomes a full-height menu, and signal items stack vertically.

Spacing is generous around section theses and tighter inside service rows. Dividers carry the route-map rhythm across both dark and light surfaces.

## Elevation & Depth

The system is flat by default. Depth comes from dark/light tonal changes, video cropping, thin borders, and layered route graphics rather than card shadows. The lime status dot uses a restrained local ring to communicate live state; it is not a general elevation treatment.

### Named Rules

**The Flat Working Surface Rule.** Do not introduce floating card stacks or decorative shadows; use contrast, linework, and image crop to establish depth.

## Shapes

Primary buttons and content rows use square corners to feel like field equipment and printed navigation material. Image and video frames use a restrained 16px radius with a 2px hairline edge, giving supplied photography and diagrams a finished boundary without turning the page into rounded cards. Route nodes and the service toggle are circles, reserved for points, states, and controls.

## Components

### Buttons

- **Shape:** Square corners (`0`).
- **Primary:** Route Lime background with Midnight Ink text and `0.85rem 1.2rem` padding.
- **Hover / Focus:** Lift 2px on hover; use the lime focus ring with a 4px offset.
- **Dark:** Midnight Ink background with Working Paper text for the light CTA band.

### Cards / Containers

- **Corner Style:** No rounded container language; hairline clipping is `2px`.
- **Background:** Dark navigation surfaces or Working Paper content surfaces.
- **Shadow Strategy:** No general shadows; use tonal layering and borders.
- **Border:** 1px dividers in dark or light line colors.
- **Internal Padding:** Follow the spacing scale, usually `1.25rem` for compact metadata and `4rem+` around section theses.

### Navigation

The desktop navigation is a restrained inline list with a lime action link. Links reveal a short lime underline on hover and focus. On small screens, the same links move into a full-height dark menu with large readable targets and a visible menu state.

### Founder Profile & Expertise Diagrams

Michael's portrait is a primary credibility asset and should sit beside first-person biographical copy, with a clear name and role caption. The existing `AboutSection.png` and `TripleScaleUp.png` diagrams carry Michael's original language into the rewrite. Keep them inside dark, open frames so their bright labels and colored routes remain legible. Use the diagrams beside first-person copy and specific experience statements; never use them as anonymous decorative stock art.

### Service Disclosure

Service rows are large, open horizontal lines with native `details` semantics. One row remains open at a time when JavaScript is available; all rows remain independently usable without it. The circular toggle is a state marker, not decoration.

## Do's and Don'ts

### Do:

- **Do** keep the first viewport clear about the offer, audience, proof, and consultation action.
- **Do** use route lines, dividers, and signal markers to organize information.
- **Do** keep service copy practical, specific, and tied to operations, sales, or scale-up strategy.
- **Do** preserve keyboard focus, reduced-motion behavior, and native disclosure semantics.

### Don't:

- **Don't** turn the page into a grid of identical icon cards.
- **Don't** use gradient text, decorative glass, or generic consulting stock imagery.
- **Don't** use lime for ordinary body text or unimportant decoration.
- **Don't** replace the temporary contact destination with an invented booking or testimonial claim.
