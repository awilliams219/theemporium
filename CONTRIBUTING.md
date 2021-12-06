# Contributing

First up, thanks for your interest in contributing. We really do appreciate it. People like you make open source work!

We accept new features, bug fixes, and documentation updates. If you see something you'd like to change, feel free to submit it according 
to these guidelines and the code of conduct below.

# Code of Conduct

This is an open-source project. As such, people of all walks of life may see the things you write. 

1. Remember the human.
2. We are ALL volunteers here. None of us are making money from this. Be respectful.
3. Do not use explicit language in any code or GitHub post submitted to this project. This includes, but is not limited to commit messages, issue comments, code comments, etc.
4. Absolutely NO slurs, discrimiation, or discriminatory language will be tolerated at all. This includes, but is not limited to race, creed, national origin, gender identity, sexual preference and disability. In general, if you wouldn't say it about the 6'8" MMA fighter standing in front of you, don't say it here. Violating this rule will result in an instant ban with no warning.

# Submitting Changes

Fork the project on GitHub, make your changes to your branch, the submit a pull request back to this project.

## Commit Messages

Commit messages should be clean, concise, specific, and descriptive of the changes you've made. Use proper grammar and capitalization. Do not 
include opinions. Commit often. If you are addressing an item from the GitHub issues, please prepend your commit message with the issue number 
followed by a colon. Multiple sequential commits for the same change should be squashed. 

Examples:

**Good:**
> Fix bug where inventories would randomly get wiped

> Add langauge variant options to inventory items

> 23: Fix glitch allowing item duplication when the item name ends with an 'e'


**Bad:**
> various bugfixes

> fix that annoying duplication bug

> update docs

> (( no message at all ))


## Code Style and Guidelines

This project includes a comprehensive .editorconfig file. Please ensure that your IDE is configured to enforce it. If youre IDE does not support .editorconfig
files, please review the file yourself and adhere to the coding styles described therein.

Keep your code [Clean](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/B08X8ZXT15) practices. 
Keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
Keep your code [SOLID](https://en.wikipedia.org/wiki/SOLID).

Code should be self-documenting. Comments should not be used except to explain WHY a function is written a certain way. Do not explain HOW a function works.
Function and variable names should be descriptive of what they do / contain.

Use ES6 classes instead of plain objects whenever possible. 
Use Async/Await when possible. 
Wrap code than can fail in try/catch.

Console.log should ONLY be used for console messaging. Do not use it for debugging messaging unless the user has specified debug mode on the command line.
Console.error and Console.warn should be used for console error messages and warnings respectively.
Every operation should return a response to the user that triggered it, even if the response is an error message. No operation should EVER go unanswered.
Failed operations should be logged to the console using Console.error.

Do not require manual input from the console. This project will normally run headless, so there will be no user to enter the data. Any input required should be either provided on the command line or via a discord command.

Good:
```
  function processUserInventoryTrade(owningUser, receivingUser, itemToTrade) {
    try {
      this.removeItemFromInventory(owningUser, itemToTrade);
      this.addItemToInventory(receivingUser, itemToTrade);
      discord.reply(`${itemToTrade.name} transferred to ${receivingUser.name} successfully.`);
    } catch (error) {
      console.error(`An error occurred while processing trade: ${error}`);
      discord.reply('Could not process trade. Please contact your administrator for details.');
    }
  }
```


## New Features / Modifications to Existing Features

Whenever possible, backwards compatibility should be maintained. Modifications to functionality should be on an "additive" basis.
That is, whenever you change how something works, please ensure that any new options or syntax are optional, and that existing syntax 
will still be functional.

Example:

Adding a new parameter to a function
```
function (question, possibleResponses, newParameter = "default value") {}
```

## Bug Fixes

Again, please maintain backwards compatibility if possible. If it is simply impossible to fix a bug without breaking compatibility, 
please note the compatibility break in the PR or commit message.

Example:
> 12: Fix security bug allowing users to modify other users' inventories (breaking change)

## Documentation Updates

You are welcome to document this project as you see fit. Minor grammatical, capitalization, spelling, and formatting changes are accepted, but be sure to adhere to the 
commit message guidelines above.

Good Commit Message Examples:
> Fix vague phrasing regarding currency management


> 15: Update server standup documentation to reflect new workflow

> Fix several spelling errors in inventory documentation

> Add missing comma in store management documentation

> Fix markdown formatting in currency management documentation



Bad:
> spelling fixes

> reformat docs

> missing comma

> (( no message at all ))


