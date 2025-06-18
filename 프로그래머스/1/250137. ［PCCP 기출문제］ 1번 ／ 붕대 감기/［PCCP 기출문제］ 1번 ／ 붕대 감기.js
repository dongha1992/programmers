
function solution(bandage, health, attacks) {
  const n = attacks[attacks.length - 1][0];
  const attackMap = new Map(attacks);

  const [coolTime, hp, addtionalHeal] = bandage;
  let serialTime = 0;
  const maxHealth = health;

  for (let sec = 1; sec <= n; sec++) {
    if (attackMap.has(sec)) {
      health -= attackMap.get(sec);
      if (health <= 0) return -1;
      serialTime = 0;
    } else {
      health = Math.min(health + hp, maxHealth);
      serialTime++;
        
      if (serialTime === coolTime) {
        health = Math.min(health + addtionalHeal, maxHealth);
        serialTime = 0;
      }
    }
  }
  return health;
}

