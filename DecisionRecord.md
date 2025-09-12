# Decision Record

Note: This is the current model to follow, but it is always subject to change.

## Development
- Use imperative commit messages.
- Use [semantic prefixes](https://docs.excalidraw.com/docs/introduction/contributing#pull-request-guidelines) in commit messages where possible
  - Why: Once reason: because it immediately communicates intent

## Architecture
- **Modular components**: Separate files for major sections
  - Why: Single Responsibility Principle, "God" object prevention, improves maintainability
- **CSS components**: Semantic classes through the use of Tailwind @layers
  - Why: Readability and maintainability of classes. Reduces how many classes are included in `className=""` from 10+ to 1
- **Clean separation**: Structure, styling, and behavior separated as much as possible
  - Why: Maintainability
- **Domain Models**: Separate classes for SoftwareEngineer and Projects
  - Why: Separation of concerns
- **Images in /public**: Images in /public
  - Why: Easier to generate dynamically
- **Posthog**
  - Why: Continue learning about product analytics tools, add events, tracking, and surveys
    - Currently using without cookies for simplicity, will evaluate later