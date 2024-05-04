function babySharkLyrics(){
    names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
    return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
  }