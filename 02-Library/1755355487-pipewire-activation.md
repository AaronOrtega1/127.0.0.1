---
link: "[[1744299820-personal|Personal]]"
aliases:
  - Pipewire Activation
tags:
  - Knowledge
  - archLinux
created_date: 2025-08-16
---
# Pipewire Activation
- `systemctl --user enable --now pipewire pipewire-pulse wireplumber
- Verificar que este instalado correctamente
	- `pactl info
		- Look for:
			- `Server Name: PulseAudio (on PipeWire 1.0.x)

