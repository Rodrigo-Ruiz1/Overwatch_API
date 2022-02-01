<h1 align='center'> OW API </h1>

<p>The OW API is a consumption only RESTful API for the video game Overwatch. It offers multiple endpoints that users can access to retrieve information about the characters, their abilities, game lore, and more!</p>

---

<h3> Base URL - <a href="api-ow.herokuapp.com">api-ow.herokuapp.com/</a></h3>

<h3>Possible endpoints</h3>
<ul>
<li>/heroes</li>
<li>/roles</li>
<li>/weapons</li>
<li>/abilities</li>
<li>/affiliations</li>
</ul>

---

<h3>Example API response</h3>
`/api/v1/heroes/winston`
```yaml
{
"id": 6,
"hero_name": "winston",
"hero_bio": "Winston is a super-intelligent, genetically engineered gorilla. Winston grew up in the Horizon Lunar Colony, raised by Dr. Harold Winston. After an uprising at the lunar colony, Winston built a makeshift rocket in order to flee, landing at Watchpoint: Gibraltar. He later found a new home with Overwatch.",
"role": "tank",
"affiliations": [
{
"affiliation": {
"name": "lucheng interstellar",
"description": "Lucheng Interstellar is a Chinese company specializing in the space industry. Among its projects were the Horizon Lunar Colony and Interstellar Journey Space Station."
}
},
{
"affiliation": {
"name": "overwatch",
"description": "Overwatch was an international peacekeeping force originally formed during the Omnic Crsis. Critisim of Overwatch grew after allegations of negligence and rumors of black-ops missions emerged, resulting in the disbandonment of the force thirty years after its founding. However, five years after the fall of Overwatch, the world remains a dark place, leading some former members to consider bringing the team back together."
}
}
],
"weapons": [
{
"weapon": {
"name": "tesla cannon",
"description": "Winstons Tesla Cannon has a short range, but can hit multiple targets at once with little need for aim."
}
}
],
"abilities": [
{
"ability": {
"name": "barrier projector",
"type": "Cooldown",
"damage": null,
"effect": "700hp barrier",
"cooldown": "13 seconds",
"duration": "9 seconds",
"description": "Winston deploys his Barrier Projector, creating a barrier in a dome shape. The barrier has a health bar, and will be destroyed when the health bar reaches 0hp."
}
},
{
"ability": {
"name": "jump pack",
"type": "Cooldown",
"damage": "1-50",
"effect": "Movement Speed Boost",
"cooldown": "6 seconds",
"duration": null,
"description": "With the help of his energy pack, Winston leaps through the air, damaging targets in his impact radius."
}
},
{
"ability": {
"name": "primal rage",
"type": "Ultimate",
"damage": "40 (per swing)",
"effect": "Movement Speed Boost 30%, Maximum Health Boost",
"cooldown": "1540 Ultimate Points",
"duration": "10 seconds",
"description": "Winston becomes enraged, swatting at any target in his path. Hitting an enemy will cause a knockback effect. Winston receives a large boost to his max hp while active."
}
}
]
}
```

---

### Heroes
<ul>
<li>/api/v1/heroes - Returns list of all heroes</li>
<br>
<li>/api/v1/heroes/{name} - Return data by specific hero name</li>
<br>
<li>/api/v1/heroes/id/{id} - Return data by specific hero id</li>
<br>
<li>/api/v1/heroes/role/{role} - Return all heroes by specific role </li>
</ul>

---

<h3> Roles </h3>
<ul>
<li>/api/v1/roles - Returns list of all roles</li>
<br>
<li>/api/v1/roles/{role} - Return data by specific role</li>
<br>
<li>/api/v1/roles/id/{id} - Return data by specific role id</li>
</ul>

---

<h3> Weapons </h3>
<ul>
<li>/api/v1/weapons - Returns list of all weapons</li>
<br>
<li>/api/v1/weapons/{weapon} - Return data by specific weapon name</li>
<br>
<li>/api/v1/weapons/id/{id} - Return data by specific weapon id</li>
</ul>

---

<h3> Abilities </h3>
<ul>
<li>/api/v1/abilities - Returns list of all abilities</li>
<br>
<li>/api/v1/abilities/{ability} - Return data by specific ability name</li>
<br>
<li>/api/v1/abilities/id/{id} - Return data by specific ability id</li>
</ul>

---
<h3> Affiliations </h3>
<ul>
<li>/api/v1/affiliations - Returns list of all lore affiliations</li>
<br>
<li>/api/v1/affiliations/{affiliation} - Return data by specific affiliation name</li>
<br>
<li>/api/v1/affiliations/{id} - Return data by specific affiliation id
</ul>
