#Azure-CLI Install Notes
## <https://github.com/atomantic/dotfiles/issues/21#issuecomment-296679272>

:tldr @atomantic is a generous genius.
:whole story:
I guess we are getting to the heart of it. I didnt source azure-cli/az.completion in .zshrc. Im not clear on the steps for adding a new package to this set up. So from the sounds of it, the steps  generally to 1. Run the install 2. Add a script sourcing the new  executable to your .rc file. In this case, its .zshrc because we are using the .zsh shell. 3. Reset terminal (exec  $SHELL or open new  terminal).

In this specific case it looks like this. This worked successfully.
1. $ `curl -L https://aka.ms/InstallAzureCli | bash`.
//output of #1
```bash
azure-cli directory: '/Users/devworx/lib/azure-cli'
===> In what directory would you like to place the 'az' executable? (leave blank to use '/Users/devworx/bin'): //left blank

===> Enter a path to an rc file to update (leave blank to use '/Users/devworx/.bash_profile'):
//entered path to .zshrc
 /Users/devworx/.zshrc
//output
-- Backed up '/Users/devworx/.dotfiles/homedir/.zshrc' to '/Users/devworx/.dotfiles/homedir/.zshrc.backup'
-- Tab completion set up complete.
-- If tab completion is not activated, verify that '/Users/devworx/.dotfiles/homedir/.zshrc' is sourced by your shell.
--
-- ** Run `exec -l $SHELL` to restart your shell. **
--
-- Installation successful.
-- Run the CLI with /Users/devworx/bin/az --help
```

This is the newly generated  `.zshrc`
```
 ~  cat ~/.zshrc                                         ✓  1095  10:04:56
# Path to your oh-my-zsh configuration.
export ZSH=$HOME/.dotfiles/oh-my-zsh
# if you want to use this, change your non-ascii font to Droid Sans Mono for Awesome
# POWERLEVEL9K_MODE='awesome-patched'
export ZSH_THEME="powerlevel9k/powerlevel9k"
POWERLEVEL9K_SHORTEN_DIR_LENGTH=2
# https://github.com/bhilburn/powerlevel9k#customizing-prompt-segments
# https://github.com/bhilburn/powerlevel9k/wiki/Stylizing-Your-Prompt
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(dir nvm vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status history time)
# colorcode test
# for code ({000..255}) print -P -- "$code: %F{$code}This is how your text would look like%f"
POWERLEVEL9K_NVM_FOREGROUND='000'
POWERLEVEL9K_NVM_BACKGROUND='072'
POWERLEVEL9K_SHOW_CHANGESET=true
#export ZSH_THEME="random"

# Set to this to use case-sensitive completion
export CASE_SENSITIVE="true"

# disable weekly auto-update checks
# export DISABLE_AUTO_UPDATE="true"

# disable colors in ls
# export DISABLE_LS_COLORS="true"

# disable autosetting terminal title.
export DISABLE_AUTO_TITLE="true"

# Which plugins would you like to load? (plugins can be found in ~/.dotfiles/oh-my-zsh/plugins/*)
# Example format: plugins=(rails git textmate ruby lighthouse)
plugins=(colorize compleat dirpersist autojump git gulp history cp)

source $ZSH/oh-my-zsh.sh

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

source /usr/local/opt/nvm/nvm.sh

autoload -U add-zsh-hook
load-nvmrc() {
  if [[ -f .nvmrc && -r .nvmrc ]]; then
    nvm use &> /dev/null
  elif [[ $(nvm version) != $(nvm version default)  ]]; then
    nvm use default &> /dev/null
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

# Customize to your needs...
unsetopt correct

# run fortune on new terminal :)
fortune

export PATH=$PATH:/Users/devworx/bin

source '/Users/devworx/lib/azure-cli/az.completion'
```
Running `exec -l $SHELL` gets the command not found error.
```bsh
Use the Force, Luke.
/Users/devworx/lib/azure-cli/az.completion:10: command not found: complete
```

Then followed your instruction adding 'autoload bashcompinit && bashcompinit '(even though i have no idea what that is, will research)

```bash
 ~  nvim ~/.zshrc                                    127 ↵  1096  10:06:18
...
autoload bashcompinit && bashcompinit
source '/Users/devworx/lib/azure-cli/az.completion'
....
 ~  exec -l $SHELL
```

Then  run `az`:
```bash
az                                                   ✓  1099  10:08:29

     /\
    /  \    _____   _ _ __ ___
   / /\ \  |_  / | | | \'__/ _ \
  / ____ \  / /| |_| | | |  __/
 /_/    \_\/___|\__,_|_|  \___|


Welcome to the cool new Azure CLI!

Here are the base commands:

    account   : Manage subscriptions.
....
```

