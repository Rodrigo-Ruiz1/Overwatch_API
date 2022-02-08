CREATE TABLE roles (
    id serial PRIMARY KEY,
    role text,
    role_description text
);

CREATE TABLE heroes (
    id serial PRIMARY KEY,
    hero_name text,
    role_id int REFERENCES roles(id),
    hero_bio text,
    hero_image text
);

CREATE TABLE affiliations (
    id serial PRIMARY KEY,
    affiliation text,
    affiliation_description text
);

CREATE TABLE heroes_affiliations (
    hero_id int REFERENCES heroes(id),
    affiliation_id int REFERENCES affiliations(id)
);

CREATE TABLE weapons (
    id serial PRIMARY KEY,
    weapon_name text,
    weapon_description text,
    weapon_type text,
    damage text
);

CREATE TABLE heroes_weapons (
    hero_id int REFERENCES heroes(id),
    weapon_id int REFERENCEs weapons(id)
);

CREATE TABLE abilities (
    id serial PRIMARY KEY,
    ability_name text,
    ability_type text,
    ability_description text,
    cooldown text,
    duration text,
    effect text,
    damage text
);

CREATE TABLE heroes_abilities (
    hero_id int REFERENCES heroes(id),
    ability_id int REFERENCES abilities(id)
);