function registerHeroes(array) {
  let heroes = [];
  array.forEach((line) => {
    let [name, level, ...items] = line.split(" / ");
    heroes.push({ name: name, level: Number(level), items: items });
  });
  let sorted = heroes.sort((a, b) => a.level - b.level);

  sorted.forEach((hero) => {
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`);
  });
}

registerHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
