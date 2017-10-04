admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "root",
    pwd: "rootP@ssw0rd",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("gamification").createUser(
  {
    "user" : "mongo",
    "pwd" : "P@ssw0rd",
    roles: [    { "role" : "readWrite", "db" : "gamification" },
                { "role" : "dbAdmin", "db" : "gamification" },
           ]
  }
)

db.getSiblingDB("keepers").createUser(
    {
      "user" : "mongo",
      "pwd" : "P@ssw0rd",
      roles: [    { "role" : "readWrite", "db" : "keepers" },
                  { "role" : "dbAdmin", "db" : "keepers" },
             ]
    }
  )

  db.getSiblingDB("teams").createUser(
    {
      "user" : "mongo",
      "pwd" : "P@ssw0rd",
      roles: [    { "role" : "readWrite", "db" : "teams" },
                  { "role" : "dbAdmin", "db" : "teams" },
             ]
    }
  )

  db.getSiblingDB("gamification").achievements.insert(
    [
      {"_id": ObjectId("59d3a8442af19b0007c2341c"),"_class":"juja.microservices.gamification.entity.Achievement","from":"00000000-0000-0001-0000-000000000002","to":"00000000-0000-0001-0000-000000000002","sendDate": new Date("2017-10-03T15:09:56.519Z"),"point":1,"description":"first daily","type":"DAILY"},      
      {"_id": ObjectId("59d3a84c2af19b0007c2341d"),"_class":"juja.microservices.gamification.entity.Achievement","from":"00000000-0000-0001-0000-000000000003","to":"00000000-0000-0001-0000-000000000003","sendDate": new Date("2017-10-03T15:10:04.938Z"),"point":1,"description":"first daily","type":"DAILY"},
      {"_id": ObjectId("59d3a8572af19b0007c2341e"),"_class":"juja.microservices.gamification.entity.Achievement","from":"00000000-0000-0001-0000-000000000004","to":"00000000-0000-0001-0000-000000000004","sendDate": new Date("2017-10-03T15:10:15.142Z"),"point":1,"description":"first daily","type":"DAILY"}
    ]
  )

  db.getSiblingDB("keepers").keepers.insert(
    [
      {"_id": new ObjectId(), "_class":"juja.microservices.keepers.entity.Keeper", "from":"00000000-0000-0001-0000-000000000004","uuid":"00000000-0000-0001-0000-000000000004","startDate": new Date("2017-10-02T15:10:15.142Z"), "direction":"First keeper","isActive":true},
      {"_id": new ObjectId(), "_class":"juja.microservices.keepers.entity.Keeper", "from":"00000000-0000-0001-0000-000000000004","uuid":"00000000-0000-0001-0000-000000000002","startDate": new Date("2017-10-03T15:00:15.142Z"), "direction":"teams","isActive":true}
    ]
  )

  db.getSiblingDB("teams").teams.insert(
    {"_id": new ObjectId(),"_class":"ua.com.juja.microservices.teams.entity.Team","members":["00000000-0000-0001-0000-000000000005","00000000-0000-0001-0000-000000000003","00000000-0000-0001-0000-000000000004","00000000-0000-0001-0000-000000000002"],"activateDate": new Date ("2017-10-03T21:00:00.000Z"),"deactivateDate": new Date("2017-11-03T21:59:59.999Z")}
  )
  