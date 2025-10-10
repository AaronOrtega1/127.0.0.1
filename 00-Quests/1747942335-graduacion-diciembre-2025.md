---
link: "[[1744299820-personal|Personal]]"
aliases:
  - Graduación Diciembre 2025
tags:
  - Quests
  - active
start_date: 2025-05-22
end_date: 2025-12-05
XP:
---
## 0303 2090 0039 192496
## Jose Luis Romero

1. Madre
2. Padre
3. Nancy
4. Diego
	1. Arena (+1 de Diego)
5. Abuelita
6. *Esme*
	1. Ale (+1 de Esme)
7. *Pato*
8. *Gibbie*
9. *Frida*
10. *Gabo*
11. *Rafa*
12. *Alan*
13. *Paquebrio*
14. *Henry*
15. *Ian*
16. *Pedrito*
17. *Lorenza*
18. *Ale*
19. *Joss*
20. *Mafer*
21. *Nats*
22. Yo **(GRADUADO)**

## mesas
### mesa 1
1. Madre
2. Padre
3. Nancy
4. Diego
	1. Arena (+1 de Diego)
5. Abuelita
6. Esme
	1. Ale (+1 de Esme)
7. Pato
8. Gibbie
9. Frida
10. Yo **(GRADUADO)**
### mesa 2
1. Gabo
2. Rafa
3. Alan
4. Paquebrio
5. Henry
6. Ian
7. Pedrito
8. Lorenza
9. Ale
10. Joss
11. Mafer
12. Nats

### Meses pagados
- [x] 1
- [x] 2
- [x] 3
- [x] 4
- [x] 5
- [x] 6
- [ ] 7
- [ ] 8
- [ ] 9
- [ ] 10
- [ ] 11

```dataviewjs
const ticket_cost = 1350
const total = ticket_cost*24
const paid = 19700
const contribution = 7000
let missingWithContribution = total - paid - contribution
let missingReal = total - paid
let html = `
<div class="character-sheet">
	<div class="character-header">
		<div class="character-info">
			<p><strong>Total: $</strong>${total}</p>
			<p><strong>Paid: $</strong>${paid}</p>
			<p><strong>Paid Guest: #</strong>${paid/ticket_cost}</p>
			<p><strong>Contribution: $</strong>${contribution}</p>
			<p><strong>Missing With Contribution: $</strong>${missingWithContribution}</p>
			<p><strong>Missing: $</strong>${missingReal}</p>
			<p><strong>Missing Guest: #</strong>${missingReal/ticket_cost}</p>
		</div>
	</div>
</div>
`;
dv.container.innerHTML = html;
```
