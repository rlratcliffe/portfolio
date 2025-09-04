# Decision Record

Note: This is the current model to follow, but it is always subject to change.

## Development
- Use imperative commit messages.

## Architecture
- **Modular components**: Separate files for major sections
  - Why: Single Responsibility Principle, "God" object prevention, improves maintainability
- **CSS components**: Semantic classes through the use of Tailwind @layers
  - Why: Readability and maintainability of classes. Reduces how many classes are included in `className=""` from 10+ to 1
- **Clean separation**: Structure, styling, and behavior separated as much as possible
  - Why: Maintainability