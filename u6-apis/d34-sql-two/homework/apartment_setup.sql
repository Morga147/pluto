DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS doormen;
DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings (
        id serial primary key not null,
        name varchar not null,
        address varchar not null,
        num_floors int not null
);

CREATE TABLE doormen (
        id serial primary key not null,
        name varchar not null,
        experience int not null,
        shift varchar not null,
        building_id serial references buildings
);
CREATE TABLE apartments (
        id serial primary key not null,
        floor int not null,
        name varchar not null,
        price int not null,
        sqft int not null,
        bedrooms int not null,
        bathrooms int not null,
        building_id serial references buildings
);

CREATE TABLE tenants (
        id serial primary key not null,
        name varchar not null,
        age int not null,
        gender varchar not null,
        apartment_id serial references apartments
);
