INSERT INTO roles
    (id, role, description, characters)
VALUES
    (1, 'Tank', 'Tanks are the core of any team composition. They are the frontline of your team, willing to soak up the damage with their large health pools and shields in order to keep their alies in the fight.', '{"D.VA", "Orisa", "Reinhardt", "Roadhog", "Sigma", "Winston", "Wrecking Ball", "Zarya"}'),
    (2, 'Damage', 'Heroes in the Damage role, commonly referred to as "DPS", are the heavy hitters of your team. They specialize in securing kills with their high damage weapons and abilities.', '{"Ashe", "Bastion", "Cassidy", "Doomfist", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Soldier 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"}'),
    (3, 'Support', 'Supports', 'Support is the bread-and-butter role of any team. They specialize in keeping their team healthy through healing them, but also offer utility through their abilities.', '{"Ana", "Baptiste", "Brigitte", "Mercy", "Moira", "Zenyatta"}');

INSERT INTO heroes
    (id, name, role_id)
VALUES
    (1, 'D.VA', 1),
    (2, 'Orisa', 1),
    (3, 'Reinhardt', 1),
    (4, 'Roadhog', 1),
    (5, 'Sigma', 1),
    (6, 'Winston', 1),
    (7, 'Wrecking Ball', 1),
    (8, 'Zarya', 1),
    (9, 'Ashe', 2),
    (10, 'Bastion', 2),
    (11, 'Cassidy', 2),
    (12, 'Doomfist', 2),
    (13, 'Echo', 2),
    (14, 'Genji', 2),
    (15, 'Hanzo', 2),
    (16, 'Junkrat', 2),
    (17, 'Mei', 2),
    (18, 'Pharah', 2),
    (19, 'Reaper', 2),
    (20, 'Soldier 76', 2),
    (21, 'Sombra', 2),
    (22, 'Symmetra', 2),
    (23, 'Torbjorn', 2),
    (24, 'Tracer', 2),
    (25, 'Widowmaker', 2),
    (26, 'Ana', 3),
    (27, 'Baptiste', 3),
    (28, 'Brigitte', 3),
    (29, 'Mercy', 3),
    (30, 'Moira', 3),
    (31, 'Zenyatta', 3);

INSERT INTO affiliations
    (id, affiliation, description)
VALUES
    (1, 'Overwatch', 'Overwatch was an international peacekeeping force originally formed during the Omnic Crsis. Critisim of Overwatch grew after allegations of negligence and rumors of black-ops missions emerged, resulting in the disbandonment of the force thirty years after its founding. However, five years after the fall of Overwatch, the world remains a dark place, leading some former members to consider bringing the team back together.')
    (2, 'The Mobile Exo-Force of the Korean Army (MEKA) is a unit that exists within the South Korean Army. Beginning as an armoed drone unit, it eventually had to switch to a different approach, but placing pilots within the mechs. In order to find suitable candidates for the job, the govnerment turned to professional gamers who possessed the necesssary reflexes and insticts.'),
    (3, 'Numbani', 'Numbani is known as the "City of Harmony", as it is one of the few places in the world where omnics and humans live as equals. Located in the African savanna, it is a world leader in scientific discovery and exploration.'),
    (4, 'Junkers', 'After the Outback turned into an irradiated wasteland, survivors formed the group known as the Junkers, living in their own lawless, cutthroat society. They enjoy blowing off steam in the Scrapyard, a gladiatorial arena.'),
    (5, 'Talon', 'Talon, comprised of a variety of individuals, is an organization that believes humanity is made stronger through conflict. Talon seeks to sow turmoil in order to strengthen the human race. They have operated since the Omnic Crisis, and only grew in power since Overwatch disbanded.')
    (6, 'Lucheng Interstellar', 'Lucheng Interstellar is a Chinese company specializing in the space industry. Among its projects were the Horizon Lunar Colony and Interstellar Journey Space Station.'),
    (7, 'Russian Defense Forces', 'The Russian Defense Forces (RDF) are the armed forces of Russia. The RDF fought in the Omnic Crsis, and unlike the rest of the world, was able to defeat the threat without hte aid of Overwatch.'),
    (8, 'Deadlocke Rebels', 'A notorious crime group, the Deadlock Rebels was formed with the help of Elizabeth Ashe and Cole Cassidy. They operated in the American southwest, trafficking illicit weapons and military hardware.'),
    (9, 'Shimada Clan', 'A clan of ninjas based in Hanamura. Founded centuries ago, the criminal organization profited from trades in arms, illegal substances, and assassination. The eldest son of the familys head is expected to become to the leader of the clan.'),
    (10, 'Helix Security International', 'Private security firm funded by the United Nations. Helix Security International acts as a global security force.'),
    (11, 'Vishkar Coporation', 'Vishkar Corporation is a multinational corporate entity and megacorporation. Based in Southern India, it maintains the Architech Academy, where it trains individuals in the manipulation of light-bending. It is considered one of the most powerful corporations in the world.'),
    (12, 'Shambali', 'Formed after the Omnic Crsis, the Shambali is a religious order, believing that omnics possess souls in the same manner as humans. They seek to spread peace and empathy to those they pass.');

INSERT INTO heroes_affiliations
    (id, hero_id, affiliation_id)
VALUES
    (1, 1, 1),
    (2, 2, 3),
    (3, 3, 1),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 1),
    (7, 7, 6),
    (8, 8, 7),
    (9, 9, 8),
    (10, 10, 1),
    (11, 11, 1),
    (12, 12, 5),
    (13, 13, 1),
    (14, 14, 1),
    (15, 15, 9),
    (16, 16, 4),
    (17, 17, 1),
    (18, 18, 10),
    (19, 19, 5),
    (20, 20, 1),
    (21, 21, 5),
    (22, 22, 11),
    (23, 23, 1),
    (24, 24, 1),
    (25, 25, 5),
    (26, 26, 1),
    (27, 27, 5),
    (28, 28, 1),
    (29, 29, 1),
    (30, 30, 5),
    (31, 31, 12);