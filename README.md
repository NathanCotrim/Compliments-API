<p align="center">
  <a href="" rel="noopener">
 <img src="https://blogimage.vantagecircle.com/vcblogimages/2020/07/compliments-for-coworkers.png" alt="Project logo"></a>
</p>

<h1 align="center">Compliments API <3</h1>

## Description <a name = "about"></a>

It is an compliments API developed in Rocketseat - NLW Together with Typescript, nodeJs, Sqlite and Typeorm!
<br>
<br>

## Installing

After clone it, just run:

```
yarn install
```

or

```
npm install
```
<br>

## Usage <a name = "usage"></a>
<br>

To run all migrations and create the tables, just run:

```
yarn typeorm migration:run
```

or

```
npm run typeorm migration:run
```
<br>

Undo it with:

```
yarn typeorm migration:revert 
```

or

```
npm run typeorm migration:revert
```

<br>
<hr>
<br>

To run API use:

```
yarn dev
```

or

```
npm run dev
```

<br>
<hr>
<br>

## Features and Requirements

+ You can register an user;
+ You can authenticate the user;
+ You can list users;
+ The user need to be authenticate to give or receive a compliment (JWT);
+ User admin permission role;
+ You can create Tags;
+ You can list tags;
+ You can create a compliment for another user;
+ You can get all compliments a user received;
+ You can get all compliments a user sended;

<br>

## Covered Concepts

+ Orm - Typeorm;
+ Migrations;
+ Jwt Authentication;
+ 1:1 associations;
+ 1:n associations;
+ SQLite


<br>


