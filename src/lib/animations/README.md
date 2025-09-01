# Animations Library

This directory contains all animation variants and configurations used throughout the application.

## Structure

### Core Animation Files
- `animations.ts` - Common animation variants used across multiple components
- `heroAnimations.ts` - Specific animations for the Hero Section component
- `missionAnimations.ts` - Specific animations for the Our Mission component
- `index.ts` - Central export file for all animations

## Usage

### Importing Animations

```typescript
// Import specific animations
import { heroSectionVariants, heroTitleVariants } from '@/lib/animations';

// Import common animations
import { sectionVariants, titleVariants } from '@/lib/animations';
```

### Animation Categories

#### Common Animations (`animations.ts`)
- `sectionVariants` - Standard section fade-in with stagger
- `titleVariants` - Title slide-up animation
- `cardVariants` - Card hover and entrance effects
- `slideUpVariants` - Slide up from bottom
- `scaleVariants` - Scale entrance animation
- `imageHoverVariants` - Image hover effects
- `transitions` - Common transition configurations
- `viewport` - Standard viewport settings

#### Hero Section Animations (`heroAnimations.ts`)
- `heroSectionVariants` - Main hero container animation
- `heroOverlayVariants` - Background overlay fade-in
- `heroTitleVariants` - Hero title with stagger children
- `heroTitleSpanVariants` - Individual title span animations
- `heroContentVariants` - Content area slide-up

#### Mission Section Animations (`missionAnimations.ts`)
- `missionSectionVariants` - Mission section container
- `missionContentVariants` - Content area animations
- `missionTitleVariants` - Mission title animations
- `missionButtonVariants` - Button hover effects
- `missionOverlayVariants` - Background overlay
- `missionDescriptionVariants` - Description text animation
- `missionHighlightVariants` - Highlighted text effects

## Best Practices

1. **Reusability**: Use common animations from `animations.ts` when possible
2. **Consistency**: Maintain consistent easing curves and durations
3. **Performance**: Use `viewport={{ once: true }}` for scroll-triggered animations
4. **Organization**: Create separate files for component-specific animations
5. **Naming**: Use descriptive names that indicate the component and animation type

## Animation Principles

- **Cubic Bezier Easing**: `[0.25, 0.1, 0.25, 1]` for natural motion
- **Staggered Children**: 0.1-0.3s delays for sequential animations
- **Viewport Optimization**: `once: true` to prevent re-triggering
- **Hover Effects**: Subtle scale and movement changes
- **Duration Standards**: 0.3-0.8s for most animations