---
link: "[[1744299820-personal|Personal]]"
aliases:
  - Japanese Language
tags:
  - resource
  - archLinux
created_date: 2025-08-16
---
# Japanese Language
## Install necessary packages
- `sudo pacman -S fcitx5-im fcitx5-mozc fcitx5-configtool noto-fonts-cjk
## Configure env variable for wayland
- `nvim ~/.pam_environment
```text
GTK_IM_MODULE DEFAULT=fcitx
QT_IM_MODULE DEFAULT=fcitx
XMODIFIERS DEFAULT=@im=fcitx
INPUT_METHOD DEFAULT=fcitx
SDL_IM_MODULE DEFAULT=fcitx
GLFW_IM_MODULE DEFAULT=ibus
```
## Add automatic start of fcitx5 in hyprland
- `nvim .config/hypr/hyprland.conf
	- Add to the end `exec-once = fcitx5 -d

## Configure fcitx5
- open Fcitx configuration
	- on Global Options that "Trigger Input Method" : Ctrk+Space
	- on Input Method click + and search Mozc (Japanese)
	- Apply and reboot
	- 

