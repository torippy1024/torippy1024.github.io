# 概要
Vite + React + TypeScript の自分用テンプレート

# 使い方
* vite.config.tsのbaseを変更
```typescript:vite.config.ts
base: '/repository-name/'
```
```typescript:src/App.tsx
<BrowserRouter basename='repository-name'>
```
* 

# 環境構築手順
```bash
# react-tsのviteプロジェクトを作成
npm create vite@latest .  -- --template react-ts
```
* GitHub Actionsのワークフローを.github/workflowsに記述
* src下を編集する