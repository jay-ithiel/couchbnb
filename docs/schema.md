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
spot_id        | integer   | not null, foreign key (references spots), indexed
guest_id       | integer   | not null, foreign key (references users), indexed
check-in-date  | date      | not null
check-out-date | date      | not null
price          | string    | not null
location       | string    | not null

## Spots
column name     | data-type | details
----------------|-----------|------
id              | integer   | not null, primary key
host_id         | integer   | not null, foreign key (references users), indexed
host_name       | string    |
title           | string    |
country         | string    | not null, indexed
state-region    | string    | not null, indexed
post-code       | string    | not null, indexed
street-address  | string    | not null
price-per-night | string    | not null, indexed
room-type       | string    | not null, indexed
bed-count       | integer   | not null, indexed

## Reviews
column name  | data-type | details
-------------|-----------|-------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
spot_id      | integer   | not null, foreign key (references spots), indexed
title        | string    | not null
body         | string    | nut null
star-rating  | integer   | not null, indexed

## Messages
column name   | data-type | details
--------------|-----------|-------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users), indexed
recipient_id  | integer   | not null, foreign key (references users), indexed
subject       | string    | not null
body          | string    | not null
