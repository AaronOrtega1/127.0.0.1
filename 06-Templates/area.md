---
aliases: 
  - {{cap_title}}
tags:
  - area
created_date:
  "{{date}}"
---
# {{cap_title}}

## Purpose

## Active Projects
```dataview
list
from [[]] and !"5 - Templates"
where contains(tags, "projects") and contains(tags, "active")
sort file.name
```

## Archived Projects
```dataview
list
from [[]] and !"5 - Templates"
where contains(tags, "projects") and contains(tags, "archive")
sort file.name
```
