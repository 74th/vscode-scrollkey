# additional scroll keys for Visual Studio Code

* https://marketplace.visualstudio.com/items?itemName=74th.scrollkey
* https://github.com/74th/vscode-scrollkey

Visual Studio Code don't have half page scrolling. This plugin supports scrolling with lines of preference.

## how to use

### 1. add settings 

`⌘,` or key`F1` -> `Open User Settings`

```json
{
    "scrollkey.line1": 1,
    "scrollkey.line2": 30,
    "scrollkey.line3": 60
}
```

### 2. add Keyboard Shortcuts

key`F1` -> `Open Keyboard Shortcuts`

Please use your favorite keys.

```json
[
    {
        "key": "ctrl+y",
        "command": "scrollkey.up1",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+u",
        "command": "scrollkey.up2",
        "when": "editorTextFocus"
    },
    {
        "key": "PageUp",
        "command": "scrollkey.up3",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+e",
        "command": "scrollkey.down1",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+d",
        "command": "scrollkey.down2",
        "when": "editorTextFocus"
    },
    {
        "key": "PageDown",
        "command": "scrollkey.down3",
        "when": "editorTextFocus"
    }
]
```

### 3. restart VSCode

## License

MIT
