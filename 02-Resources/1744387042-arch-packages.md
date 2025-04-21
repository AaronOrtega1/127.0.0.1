---
link: "[[1744299820-personal|Personal]]"
aliases:
  - Arch Packages
tags:
  - resource
  - archLinux
created_date: 2025/04/11
---
# Arch Packages
## Official repo packages

- [ ] zsh
- [ ] neovim
- [ ] firefox-developer-edition
- [ ] rofi
- [ ] starship
- [ ] obsidian
- [ ] waybar
- [ ] neofetch
- [ ] kitty
- [ ] git
- [ ] grim
- [ ] slurp
- [ ] fzf
- [ ] fd
- [ ] grep
- [ ] bat
- [ ] htop
- [ ] swaybg
- [ ] hyprlock
- [ ] thunar
- [ ] tmux
- [ ] Libre office
- [ ] GIMP
- [ ] yazi
- [ ] wl-clipboard
- [ ] xclip
- [ ] pipewire pipewire-pulse pipewire-alsa wireplumber
- [[Pipewire Activation]]
- [ ] pavucontrol
- [ ] bluez bluez-utils blueman
- [[Bluetooth Activation]]
- [ ] jq
- [ ] tree
- [ ] zenity
- [ ] exa
- [ ] vlc
- [ ] jdk-openjdk
- [ ] clang
- [ ] fastfetch
- [ ] ntfs-3g
- [ ] exfatprogs
- [ ] linux-headers
- [ ] tldr
- [ ] tlp
  - [ ] tlp-rdw
- [ ] [[Install Nerd Fonts]]
- [ ] noto-fonts-emoji
- [ ] ethool
- [ ] [[Japanese Language]]
- [ ] dunst
- [ ] brightnessctl
- [ ] dbus
- [ ] less
- [ ] [[keyd]]

## Install yay

- `sudo pacman -Syu
- `sudo pacman -S --needed base-devel git
- `git clone https://aur.archlinux.org/yay.git
- `cd yay
- `makepkg -si
- remove yay folder

- [ ] visual-studio-code-bin
- [ ] wlogout
- [ ] anaconda
- [ ] pnpm

## Install snapd

```
git clone https://aur.archlinux.org/snapd.git
cd snapd
makepkg -si
```

```
sudo systemctl enable --now snapd.socket
```

```
sudo systemctl enable --now snapd.apparmor.service
```

```
sudo ln -s /var/lib/snapd/snap /snap
```

- [ ] phpstorm

```
sudo snap install phpstorm --classic
```

---
## References
[Install and Use Yay on Arch Linux](https://itsfoss.com/install-yay-arch-linux/)
[Install phpstorm](https://snapcraft.io/install/phpstorm/arch)
