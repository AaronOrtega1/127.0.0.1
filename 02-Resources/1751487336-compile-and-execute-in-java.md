---
link: "[[1743802452-programming|Programming]]"
aliases: 
  - Compile And Execute in Java
tags:
  - resource
  - Java
created_date:
  2025-07-02
---
# Compile And Execute in Java
- Compile and save the .class to the bin/ directory
```bash
javac -d bin src/Main.java
```

- Execute from bin/
```bash
java -cp bin Main
```

- Compile and save multiple .class including src/Main.java to the bin/ directory
```bash
javac -d bin src/Main.java src/<DIR>/*.java
```


