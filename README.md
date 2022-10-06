# 概要
Vite + React + TypeScript の自分用テンプレート

# 使い方
* vite.config.tsのbaseを変更
```ts
  plugins: [react()],
  base: '/repository-name/'
```


# 手順
```bash
# react-tsのviteプロジェクトを作成
npm create vite@latest .  -- --template react-ts
```