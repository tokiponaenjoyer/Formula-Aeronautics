# Contributing to Formula Aeronautics

Thank you for considering contributing to the Formula Aeronautics modpack!

## How Can I Contribute?

### Reporting Bugs
- Check the existing [Issues](https://github.com/tokiponaenjoyer/Formula-Aeronautics/issues) to see if your bug has already been reported.
- Use the **Bug Report** issue template when creating a new issue.
- Include as much detail as possible:
  - Modpack version
  - Crash logs or latest.log (upload to [mclo.gs](https://mclo.gs))
  - Steps to reproduce the bug
  - Screenshots or videos if applicable

### Suggesting Enhancements
- Make suggestions on the discord. We want to keep the issues section exclusive to bugs only to make it easier to maintain

### Pull Requests
We welcome pull requests! Here's how to get started:

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your changes:
```
git checkout -b feature/your-feature-name
```
3. **Make your changes** (add/remove mods, edit configs, update KubeJS scripts, etc.).
4. **Test your changes** thoroughly (see [Testing Guidelines](#testing-guidelines) below).
5. **Push your branch** and open a pull request.
6. **Fill out the Pull Request template** completely. This helps us review your changes faster.

## Testing Guidelines

Before submitting a pull request, you must test your changes:

- [ ] **Singleplayer** - Does the game launch without crashing? Do your changes work as expected?
- [ ] **Local Server** - Does the modpack start a server without errors?
- [ ] **Public Server Compatibility** - Does the modpack still connect to the official Formula Aeronautics server? (if applicable)
- [ ] **No Unfair Advantages** - Ensure any added mods do not give players an unfair advantage in racing events. When in doubt, check the [rulebook](https://docs.google.com/document/d/1-SgZGQlAJFNJFNfTXrDb12_umoB8wlV0He7ZSHU2VDo/edit?usp=drivesdk).

## KubeJS Scripts

If you are modifying or adding KubeJS scripts:

- Keep scripts organized in the appropriate folders (`server_scripts/`, `client_scripts/`, `startup_scripts/`).
- Add comments to explain what your script does, especially for custom tools (like the tape measure, alignment checker, etc.).
- Test that your scripts do not cause conflicts with existing functionality.

## Config Changes

If you are modifying config files:

- Clearly state which mod's config you changed and why.
- Ensure the changes do not break multiplayer compatibility (e.g., mismatched configs between client and server).
- If you change server-side settings (like permissions or world generation), mention it clearly in your PR description.

## Style Guidelines

- **Mods** - Only add mods from Modrinth unless they are not available, then which you may be permitted to get them from CurseForge. Provide a link to each added mod's mod-page in your PR.
    - **NOTE:** - We don't plan on accepting new mods unless they are extremely useful in some way. Mods that are typically in a modpack won't be added if they can't significantly contribute. This is to keep the modpack as small as possible while still having reasonable content and polish.
- **Formatting** - Keep config files readable. Use consistent indentation (tabs, not spaces, where possible).

## Getting Help

If you have questions about contributing, need help testing, or want to discuss a potential change:

- Join our [Discord](https://discord.gg/SpMG9EwUgx)
- Or open a discussion on GitHub

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, constructive, and kind to other contributors.

Thank you for helping make Formula Aeronautics better for everyone!