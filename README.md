# Codempire Caffe

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="80" alt="TypeScript icon" />
<img src="https://docs.nestjs.com/assets/logo-small.svg" width="85" alt="Nestjs icon"/>
<img src="https://en.wikipedia.org/wiki/PostgreSQL#/media/File:Postgresql_elephant.svg" width="100" alt="Postgres icon"/>
<img src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4" width="80" alt="TypeORM icon"/>
</p>

- [com.hearst.auto_paginate](#comhearstauto_paginate)
  - [Api parts](#api-parts)
  - [todo](#todo)
  - [error](#errors)
    - [keepConectionAlive](#keepconectionalive)

## Api parts

Відтепер у проекті є аутентифікація, котра генерить jwt токен і віддає його кліенту, котрий повинен надсилати його використовуючи BearerToken header

## todo

- Зробити різні сторінки документіції о проекті

## Errors

### keepConectionALive

В сетінгу бази данних е опція `keepConnectionAlive`, якщо вимкнути, то міграції можуть викидувати помилку, щодо підключення під назвою default, а саме що не можу створити, воно вже існує
