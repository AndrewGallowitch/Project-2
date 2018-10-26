CREATE DATABASE resorts_db;

USE resorts_db;

CREATE TABLE skiresort (
Resort_name varchar(150),
Continent varchar(150),
Country varchar(150),
State varchar(150),
URL varchar(150),
Altitude integer,
Easy decimal(5,2),
Intermediate  decimal(5,2),
Difficult decimal(5,2),
Adult decimal(7,2),
Youth decimal(7,2),
Child decimal(7,2),
Resort_size  decimal(5,2),
Slope_offering  decimal(5,2),
Lifts decimal(5,2)
)
