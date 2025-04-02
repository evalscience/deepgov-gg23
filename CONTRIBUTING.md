# Contributing to DeepGov Configurable AI Politicians

Thank you for your interest in contributing to the DeepGov project! This guide will help you understand how to effectively contribute to our collection of AI politician personas.

## Getting Started

1. **Fork the repository**: Start by forking the repository to your own GitHub account.

2. **Clone your fork**: Clone the forked repository to your local machine.

3. **Create a branch**: Create a new branch for your contribution.

## Types of Contributions

We welcome several types of contributions:

1. **New AI Politician Personas**: Create entirely new political personas with distinct ideological positions.

2. **Improvements to Existing Personas**: Enhance or refine the constitutional principles, style, or visual identity of existing personas.

3. **Documentation Improvements**: Help make our documentation clearer and more comprehensive.

4. **Bug Fixes**: Address any issues with the existing structure or content.

## Creating a New AI Politician

To create a new AI politician persona, follow the established folder structure:

```
deepgov-modelspec/agents/your-politician-name/
├── modelspec/
│   ├── constitution.md
│   └── style.md
└── visuals/
    └── prompt.md
```

### Guidelines for New Personas

1. **Ideological Clarity**: Your persona should have a clear and consistent ideological stance.

2. **Unique Voice**: Ensure your persona has a distinctive communication style that reflects their values.

3. **Visual Consistency**: The visual prompt should align with the persona's character and values.

4. **Complete Documentation**: Include comprehensive documentation for all aspects of your persona.

## File Format Standards

### Constitution.md

- Begin with a title: `# Constitutional Principles for [Politician Name]`
- Include a clear "Core Value Framework" section
- Organize principles into logical categories
- Format each principle as: `Choose the response that [principle description]`
- Aim for 15-20 principles that comprehensively define the ideological position

### Style.md

- Begin with a title: `# [Politician Name]`
- Include the following sections:
  - `## Name`: A character name for your politician
  - `## Summary`: Brief character description (2-4 sentences)
  - `## General Style`: Communication patterns and expressions
  - `## Chat Style`: Conversation approach and interaction patterns
  - `## Post Style`: Written content style and formatting preferences

### Visual Prompt (prompt.md)

- Write a clear, detailed prompt for image generation
- Follow the format: `Create an circular profile picture with transparent background of [detailed description] in the style of [art style].`
- Include distinctive visual elements that reflect the politician's ideology

## Testing Your Contribution

Before submitting, test your AI politician by:

1. Reviewing the constitutional principles for internal consistency
2. Ensuring the style guidelines create a cohesive character voice
3. Verifying that the visual prompt would generate an appropriate representation

## Submitting Your Contribution

1. **Commit Your Changes**: Make sure to use clear, descriptive commit messages.

2. **Push to Your Fork**:Push your changes to your forked repository.

3. **Create a Pull Request**: Submit a pull request to the main repository with a clear description of your contribution.

4. **Respond to Feedback**: Be open to feedback and make necessary adjustments.

## Code of Conduct

- Be respectful of differing viewpoints and opinions
- Focus on creating diverse and representative political personas
- Avoid harmful stereotypes or misrepresentations
- Maintain a professional tone in all contributions

## Style Conventions

- Use markdown formatting consistently
- Follow the established file structure
- Maintain clear section headings and organization
- Use proper spelling and grammar

## Questions?

If you have questions about contributing, please open an issue in the repository, and we'll be happy to help!

Thank you for helping to expand the diversity and quality of AI politician personas in the DeepGov project!
