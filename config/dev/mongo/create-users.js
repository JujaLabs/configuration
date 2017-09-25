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