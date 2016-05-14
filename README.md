# mykeyscroll for Visual Studio Code

https://marketplace.visualstudio.com/items?itemName=74th.vimStyle

Visual Studio Code don't have half page scrolling. This plugin supports scrolling with lines of preference.

## how to use

### 1. add settings 

`⌘,` or key`F1` -> `Open User Settings`

```json
{
    "mykeyscroll.line1": 1,
    "mykeyscroll.line2": 30,
    "mykeyscroll.line3": 60
}
```

### 2. add Keyboard Shortcuts

key`F1` -> `Open Keyboard Shortcuts`

Please use your favorite keys.

```json
[
    {
        "key": "ctrl+y",
        "command": "mykeyscroll.up1",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+u",
        "command": "mykeyscroll.up2",
        "when": "editorTextFocus"
    },
    {
        "key": "PageUp",
        "command": "mykeyscroll.up3",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+e",
        "command": "mykeyscroll.down1",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+d",
        "command": "mykeyscroll.down2",
        "when": "editorTextFocus"
    },
    {
        "key": "PageDown",
        "command": "mykeyscroll.down3",
        "when": "editorTextFocus"
    }
]
```

### 3. restart VSCode

## License

MIT
