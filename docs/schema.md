# Schema

## Users
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
first-name      | string    | not null, indexed
last-name       | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
