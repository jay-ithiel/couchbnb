# Schema

## Users
column name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
first-name      | string    | not null, indexed
last-name       | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Bookings
column name    | data-type | details
---------------|-----------|----------------------------
id             | integer   | not null, primary key
host_id        | integer   | not null, foreign key (refs users), indexed
guest_id       | integer   | not null, foreign key (refs users), indexed
check-in-date  | date      | not null
check-out-date | date      | not null
price          | string    | not null
location       | string    | not null

## Spots
column name     | data-type | details
----------------|-----------|------
id              | integer   | not null, primary key
host_id         | integer   | not null, foreign key (refs users), indexed
country         | string    | not null, indexed
state-region    | string    | not null, indexed
post-code       | string    | not null, indexed
street-address  | string    | not null
price-per-night | string    | not null, indexed
room-type       | string    | not null, indexed
max-guests      | integer   | not null, indexed
bed-count       | integer   | not null, indexed
bathroom-count  | integer   | not null, indexed
kitchen         | boolean   | indexed
pet-friendly    | boolean   | indexed
air-con         | boolean   | indexed
heating         | boolean   | indexed
parking         | boolean   | indexed
