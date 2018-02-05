# Heros
 
* POST - https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes
* GET - https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes
* GET - https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/{uuid}
* PUT - https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/{uuid}
* DELETE - https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/{uuid}
 
### Sample JSON
 
```javascript
{
        uuid: "ironman2",
        signedAccords: "Yes",
        abilities: {
          fightingSkills: 6,
          strength: 6,
          durability: 6,
          energyProjection: 6,
          speed: 6,
          intelligence: 6
        },
        powers : "None",
        realName: "Tony Stark",
        heroName: "Iron Man",
        s3ImageUrl: "None",
        groups: [],
      }
```
 
# Hero Groups 
  
* POST - https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups
* GET - https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups
* GET - https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups/{uuid}
* PUT - https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups
* DELETE - https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups/{uuid}
 
### Sample JSON
 
```javascript
{
        uuid : "avengers",
        name : "AAvengers",
        location : "New York, NY",
        description: "They are Earth's mightiest heroes, formed to fight the foes no single hero could withstand.",
        s3ImageUrl: "None"
      }
```
 
# Hero Skills
 
* POST - https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills
* GET - https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills
* GET - https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills/{uuid}
* PUT - https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills
* DELETE - https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills/{uuid}
 
### Sample JSON
 
```javascript
{
        uuid:"handToHandCombat",
        name:"Hand 2 Hand Combat",
        value:5,
        parent : "fightingSkills",
        description:"Fighting ability without weapons.",
        hero : "wolverine"
      }
```

### Character Page
http://marvel.com/comics/characters


https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg


[
    {
        "uuid": "avengers",
        "location": "New York, NY",
        "description": "They are Earth's mightiest heroes, formed to fight the foes no single hero could withstand.",
        "name": "Avengers",
        "s3ImageUrl": "https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg"
    }
]


{
        uuid:"handToHandCombat",
        name:"Hand 2 Hand Combat",
        value:5,
        parent : "fightingSkills",
        description:"Fighting ability without weapons.",
        hero : "wolverine"
      }