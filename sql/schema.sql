CREATE TABLE roles {
    id serial PRIMARY KEY,
    role text,
    description text,
    characters text
};

CREATE TABLE heroes {
    id serial PRIMARY KEY,
    name text,
    role_id int REFERENCES roles(id)
    -- affiliation int REFERENCES affiliations(id),
    -- weapon_id int REFERENCES weapons(id),
    -- abilities int REFERENCES abilities(id)
};

CREATE TABLE affilations {
    id serial PRIMARY KEY,
    affiliation text,
    description text
};

CREATE TABLE heroes_affiliations {
    id serial PRIMARY KEY,
    hero_id int REFERENCES heroes(id),
    affilition_id int REFERENCES affiliations(id)
};

CREATE TABLE weapons {
    id serial PRIMARY KEY,
    weapon_name text,
    description text,
    weapon_type text,
    damage text
};

CREATE TABLE heroes_weapons {
    id serial PRIMARY KEY,
    hero_id int REFERENCES heroes(id),
    weapon_id int REFERENCEs weapons(id)
};

CREATE TABLE abilities {
    id serial PRIMARY KEY,
    ability_name text,
    ability_type text,
    description text,
    cooldown text,
    damage int
};

CREATE TABLE heroes_abilities {
    id serial PRIMARY KEY,
    hero_id int REFERENCES heroes(id),
    abilitiy_id int REFERENCES abilities(id)
};