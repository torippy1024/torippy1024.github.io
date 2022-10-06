# 概要
Vite + React + TypeScript の自分用テンプレート

# 使い方
* vite.config.tsのbaseを変更
```typescript
// vite.config.ts
base: '/repository-name/'

// src/App.tsx
<BrowserRouter basename='repository-name'>
```
* push毎にtestが走るようになっているので該当箇所を削除
```typescript
// test.yml
push:
  branches:
    - '**'
```
* title変更
```html
<!-- index.html -->
<title>Vite + React + TS</title>
```

# 環境構築手順
```bash
# react-tsのviteプロジェクトを作成
npm create vite@latest .  -- --template react-ts
```
* GitHub Actionsのワークフローを.github/workflowsに記述
* src下を編集する