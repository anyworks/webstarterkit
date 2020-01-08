# Quick Start to develop HTML/JavaScript/CSS

## 目的

まずは簡単に、HTMLの画面を作って触れてみたい。  
という人向け（自分含む）に、主要なライブラリのみを含んだ形での開発環境を提供する
決して、冗長なものを含まず、しかし、必要最低限の利便性を含んだ上で開発が可能となる事

## できること

- pugファイルに、HTMLを簡単に記述可能（Pugの機能により、素のHTMLとしても記述可）
- tsxファイルに、ReactFormを記述可能
- scssファイルに、cssをscssとして記述可能
- tsファイルに、scriptをES6として記述可能(出力はES5)
- 各ファイルは、変更されたタイミングで即、コンパイル／トランスパイルされる(distフォルダ配下）

## 使い方

Clone or Donwload後

1. npm install
2. npm run dev

を実行すれば、src配下のファイルが自動コンパイルされ、
dist配下に、結果が出力されるので、出力ディレクトリのファイルに対して
Live Server(Visual Studio Codeのプラグイン）などで監視させておけば、
編集後、即結果反映可能な環境が出来上がります

## こだわり

- Task runner, WebPackなど、ある意味冗長なライブラリに悩まされない
- モジュールのグローバルインストールは極力しない
- ネイティブな言語で記述する事も可能なので、付加価値的な機能(PUG等)の知識が必須ではない

### 背景

HTMLでUIを作成する際、Gulpなどのタスクランナー、WebPackなどのパッケージャ  
これらをインストール、設定し、開発を行う形が一般的だが  
これらには、冗長な情報に触れる機会が多くなりがちで、入門用としては不向きと思われる為  
もっとシンプルな構成に出来ないものか、と思ってチャレンジしてみたのがきかっけ

## 使用しているコンパイラ／トランスパイラ

| 作成されるもの | 利用ライブラリ | 対象ファイル    | 出力ファイル        |
| -------------- | -------------- | --------------- | ------------------- |
| Script         | typescript     | src/*.ts        | dist/src/*.js       |
| React script   | typescript     | src/react/*.tsx | dist/src/react/*.js |
| HTML           | pug            | src/*.pug       | dist/src/*.html     |
| CSS            | node-sass      | src/scss/*.scss | dist/css/*.css      |

- 現バージョンのtypescriptがReactのコンパイルにも対応しているようなので、トランスパイ
ル可能

## NPM tasks

| 役割（対象ファイル変更の都度） | タスク名 |
| ------------------------------ | -------- |
| HTML作成                       | html     |
| CSS作成                        | css      |
| Script/React作成               | script   |
| HTML,CSS,Scriptすべてを作成    | dev      |

    CSSに関しては、DEVタスクの初回起動時は、作成が行われないので注意

実際のpackage.jsonのTASKは以下の通り  
とりあえず、HTML,CSS,Scriptを別々に起動する事もないと思うので
```npm run dev```を実行してすべてトランスコンパイルするようにwatchさせておけば良いはず

``` javascript
"scripts": {
    "script": "node_modules/.bin/tsc --watch",
    "html": "node_modules/.bin/pug ./src --watch --out ./dist/ --pretty",
    "css": "node_modules/.bin/node-sass src/scss -w -o ./dist/src/css -r",
    "dev": "concurrently \"npm run script-tsxform\" \"npm run html\" \"npm run css\""
  }
```

