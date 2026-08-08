# JOURNAL 投稿の書き方

人・自然・デザインについての言葉と写真を、ここに Markdown で追加します。

## 手順

1. 写真がある場合は `public/journal/` に置く  
   例: `public/journal/kanazawa-morning.jpg`
2. このフォルダに `.md` ファイルを新規作成する  
   例: `2026-08-08-beginning.md`
3. 下の形式で書く

```md
---
title: タイトル
date: 2026-08-08
excerpt: 一覧に表示される短い導入文
cover: /journal/kanazawa-morning.jpg
---

本文をここに書きます。

![写真の説明](/journal/kanazawa-morning.jpg)
```

`cover` と本文中の画像パスは任意です。写真なしの言葉だけの投稿も可能です。
