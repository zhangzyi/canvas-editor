# 自定义快捷键

## 使用方式

```javascript
import Editor from "@hufe921/canvas-editor"

const instance = new Editor(container, <IElement[]>data, options)
instance.register.shortcutList([
    {
      key: KeyMap;
      ctrl?: boolean;
      shift?: boolean;
      alt?: boolean;
      isGlobal?: boolean;
      callback: (command: Command) => any;
    }
  ])
```