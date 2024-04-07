function solution(bandage, health, attacks) {
  const attackMap = new Map(attacks);
  const [castingTime, recoveryAmount, extraRecovery] = bandage;
  const lastAttackSec = attacks[attacks.length - 1][0];
  const maxHealth = health;
  let serialRecovery = -1

  for (let sec = 0; sec <= lastAttackSec; sec++) {
    const isAttacked = attackMap.has(sec);
    if (isAttacked) {
      const damage = attackMap.get(sec);
      health = health - damage;
      serialRecovery = 0;
      if(health <= 0){
        return -1
      }
    } else {
      serialRecovery++;
      health += recoveryAmount;
      if (serialRecovery === castingTime) {
        health += extraRecovery 
        serialRecovery = 0;
      }
    }
     if (health >= maxHealth) {
        health = maxHealth;
      }
    console.log(health, serialRecovery);
  }
  return health <= 0 ? -1 : health
}