---
aliases: 
  - {{cap_title}}
tags:
  - Domain
founded:
  "{{date}}"
---
# Domain of {{cap_title}}
## Purpose

## Active Quests
```dataview
table date(deadline) - date(today) as remaining-days
from [[]] and !"06-Scrolls"
where contains(tags, "Quests") and contains(tags, "active")
sort file.name
```
## Archived Quests
```dataview
list
from [[]] and !"06-Scrolls"
where contains(tags, "Quests") and contains(tags, "archive")
sort file.name
```
## Completed Quests
```dataview
list
from [[]] and !"06-Scrolls"
where contains(tags, "Quests") and contains(tags, "completed")
sort file.name
```
