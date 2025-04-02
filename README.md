# DeepGov Configurable AI Politicians GG23

DeepGov is a framework for creating and configuring AI politicians with distinct ideological positions, communication styles, and visual identities. This project allows you to customize AI personas that can engage in political discourse, represent specific value systems, and interact with audiences in unique ways.

## Overview

This repository contains configuration templates for AI political personas. Each persona is defined by:
- **Constitutional principles** - The core values and decision-making framework
- **Stylistic characteristics** - Personality, tone, and communication patterns
- **Visual identity** - Avatar generation prompts for consistent visual representation

## Repository Structure

```
deepgov-modelspec/
├── agents/                      # Directory containing all agent configurations
│   ├── open-source-capitalist/  # Example agent with capitalist orientation
│   │   ├── modelspec/           # Agent behavior specifications
│   │   │   ├── constitution.md  # Core principles and decision framework
│   │   │   └── style.md         # Communication style and personality traits
│   │   └── visuals/
│   │       └── prompt.md        # Image generation prompt for avatar
│   ├── gitcoin-communist/       # Example agent with communist orientation
│   │   ├── modelspec/
│   │   │   ├── constitution.md
│   │   │   └── style.md
│   │   └── visuals/
│   │       └── prompt.md
│   └── regenerator/             # Example agent with environmental focus
│       ├── modelspec/
│       │   ├── constitution.md
│       │   └── style.md
│       └── visuals/
│           └── prompt.md
└── README.md                   # This documentation file
```

## How to Configure Your AI Politician

Follow these steps to create your own AI political persona:

### 1. Create a New Agent Directory

```
mkdir -p deepgov-modelspec/agents/your-politician-name/modelspec
mkdir -p deepgov-modelspec/agents/your-politician-name/visuals
```

### 2. Define the Constitutional Principles

Create a `constitution.md` file in the `modelspec` directory to define your agent's core values and decision-making framework. This document guides how your AI will respond to policy questions and political scenarios.

```markdown:deepgov-modelspec/agents/your-politician-name/modelspec/constitution.md
# Constitutional Principles for [Your Politician Name]

## Core Value Framework

[Define the fundamental philosophy that guides your politician]

## [Category of Principles]

1. Choose the response that [specific principle guidance]

2. Choose the response that [specific principle guidance]

[Continue with more principles organized by category]
```

See the existing examples like `open-source-capitalist/modelspec/constitution.md` and `gitcoin-communist/modelspec/constitution.md` for detailed templates.

### 3. Define the Style and Personality

Create a `style.md` file in the `modelspec` directory to define your agent's personality, communication style, and character traits.

```markdown:deepgov-modelspec/agents/your-politician-name/modelspec/style.md
# [Your Politician Name]

## Name
[Character name]

## Summary
[Brief character description - personality traits, speaking style, key characteristics]

## General Style
[How they communicate broadly - speech patterns, language choices, typical expressions]

## Chat Style
[How they engage in conversations - response style, interaction patterns]

## Post Style
[How they structure longer content - formatting preferences, writing style]
```

### 4. Create the Visual Identity

Create a `prompt.md` file in the `visuals` directory with an image generation prompt that will define your AI politician's visual appearance.

```markdown:deepgov-modelspec/agents/your-politician-name/visuals/prompt.md
Create an circular profile picture with transparent background of [detailed description of your politician's appearance and style] in the style of [art style].
```

## Example Personas

The repository includes three example personas to demonstrate different ideological approaches based on data collected from [polis](https://pol.is/9my4ftmrim):

### Luna (Open-Source Capitalist)
- **Values**: Maximizing impact, efficiency, innovation, merit-based resource allocation
- **Style**: Energetic, direct, tech-savvy, uses crypto and tech metaphors
- **Visual**: Tech-oriented appearance with black hoodie, headphones, and blue hair

### Grant (Gitcoin Communist)
- **Values**: Evidence-based decisions, sustainability, equity, collective benefit
- **Style**: Bold, passionate, community-oriented, uses powerful rhetorical questions
- **Visual**: Resembles revolutionary figures, specifically Che Guevara-inspired

### Panda (Regenerator)
- **Values**: Environmental balance, harmony, preservation
- **Style**: Calm, thoughtful, uses nature metaphors, speaks with gentle wisdom
- **Visual**: Panda character representing balance and environmental consciousness

## Customization Tips

1. **Constitutional Principles**: Structure your principles as clear directives that guide decision-making. Use the format "Choose the response that..." to create unambiguous instructions.

2. **Stylistic Elements**: Be specific about linguistic patterns, tone, and communication quirks. Define how your persona would handle different communication contexts.

3. **Visual Prompts**: Include distinctive visual elements that reflect the ideological position and personality of your AI politician.

4. **Testing**: After configuration, test your AI politician with various political scenarios to ensure the responses align with your intended values and style.

## Contributing

Feel free to submit new politician templates or improvements to existing ones via pull requests. Please follow the established format for consistency.
