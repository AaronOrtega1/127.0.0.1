---
link: "[[1744299820-personal|Personal]]"
aliases:
  - How To Create A Temp Macro In Vim
tags:
  - Knowledge
  - vim
  - macro
created_date: 2025/04/10
---
# How To Create A Temp Macro In Vim
## Key Ideas
- To create a temporal macro in vim we need to be in `NORMAL` mode.
- Press the letter `q` followed by the key in which we want to register the macro.
- And once we see the following `recording q<key_we_pressed>` we can do the action that we want.
### Example
- Start in a line go 8 down and in the beginning of the line insert a `#`.
	- `q+m` -> q and the key where we want to record the macro.
	- `8j` -> Go down 8 lines
	- `0` -> Go to the beginning of the line
	- `i#` -> Enter `INSERT` mode and put a `#`
	- `<Esc>` -> To exit `INSERT` mode
	- `q` -> To stop the recording.
	- `@m` -> To execute it.

>[!important] You can execute the macro multiple time with #@m ex. 5@m
## Related Links
- [[ ]]
