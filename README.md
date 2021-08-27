# How to start
```
npm i
```
## Then create file in root ".env" and insert data:
<ul>
    <li>SERVER_PORT=3000</li>
    <li>SERVER_BASEURL=http://localhost:3000</li>
    <li>DB_USER</li>
    <li>DB_HOST</li>
    <li>DB_NAME</li>
    <li>DB_PASS</li>
    <li>DB_PORT</li>
</ul>

## Then migrate tables to your local PostgreSQL database:

```
./migrations/up/1.Url.sql
```

## Finally:

```
npm run serve
```