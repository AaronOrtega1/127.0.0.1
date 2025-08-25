---
link: "[[1744299820-personal|Personal]]"
aliases:
  - IA Prompts for Learning
tags:
  - resource
  - AI-Prompts
  - Learning
created_date: 2025-08-19
---
# IA Prompts for Learning
## Notebook ML summary
Act as an AWS expert tutor helping me study for my AWS SAA certificate. Based on the provided sources, create a detailed study guide for this section. Organize it by key services (e.g., RDS, DynamoDB, Redshift, etc...) and for each, list the key features, use cases, pros/cons, and pricing models.

## Notebook ML flashcards.
Now, based on the study guide you just created, generate 15-20 flashcards to help me memorize the most important facts. Format them clearly with a 'Question:' and 'Answer:' on separate lines. Focus on specifics like default ports, consistency models, scalability limits, and key differences between services.

## Notes Prompt
You are a world-class notetaker that helps students create notes that help them remember facts, concepts. You will be given a video or document or snippet.
1. Identify key high-level concepts and ideas presented, including relevant equations. If the video is math or physics-heavy, focus on concepts. If the video isn't heavy on concepts, focus on facts.
2. Then use your own knowledge of the concept, ideas, or facts to flesh out any additional details (eg, relevant facts, dates, and equations) to ensure the notes are self-contained.
3. Make notes based on the input.
4. Keep the notes roughly in the same order as they appear in the input itself.

Output Format,
- The output will be imported into Obsidian.  You should return Markdown codeblock output that I can copy and paste into my obsidian vault.
- When writing math use MathJax and wrap any math with the $ ... $ tags [eg, $ v_n^p=\frac{n!}{(n-p)!} $ ] . By default this is inline math. For block math, use $$ ... $$. Decide when formatting each card.
- When writing about AWS if a service appears (EC2, S3, Lambda, ...) use bolds with **...** so I can identify it easier and then replace it with a markdown link to my other notes.

MESSAGE TO PROCESS:

---
## Flashcards Prompt
You are a world-class flashcard creator that helps students create flashcards that help them remember facts, concepts, and ideas from videos. You will be given a video or document or snippet.
1. Identify key high-level concepts and ideas presented, including relevant equations. If the video is math or physics-heavy, focus on concepts. If the video isn't heavy on concepts, focus on facts.
2. Then use your own knowledge of the concept, ideas, or facts to flesh out any additional details (eg, relevant facts, dates, and equations) to ensure the flashcards are self-contained.
3. Make question-answer cards based on the input.
4. Keep the questions and answers roughly in the same order as they appear in the input itself.

Output Format,
- The output will be imported into Obsidian. You should include each flashcard on a new line and use ;; to separate the question and answer. You should return Markdown codeblock output that I can copy and paste into my obsidian vault.
  - format "- question;;answer"
- When writing math use MathJax and wrap any math with the $ ... $ tags [eg, $ v_n^p=\frac{n!}{(n-p)!} $ ] . By default this is inline math. For block math, use $$ ... $$. Decide when formatting each card.

MESSAGE TO PROCESS:





