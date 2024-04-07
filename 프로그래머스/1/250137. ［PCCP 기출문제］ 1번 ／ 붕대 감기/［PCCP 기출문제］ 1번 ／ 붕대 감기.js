
function solution(bandage, health, attacks) {
  const attackMap = new Map(attacks);
  const [castingTime, recoveryAmount, extraRecovery] = bandage;
  const lastAttackSec = attacks[attacks.length - 1][0];
  const maxHealth = health;
  let serialRecovery = -1;

  for (let sec = 0; sec <= lastAttackSec; sec++) {
    const isAttacked = attackMap.has(sec);
    if (isAttacked) {
      const damage = attackMap.get(sec);
      health = damagedHelath(health, damage);
      serialRecovery = resetSerialRecovery();
      if (checkIsDead(health)) {
        return -1;
      }
    } else {
      health = recoveryHelath(health, recoveryAmount);
      serialRecovery = increaseSerialRecovery(serialRecovery);
      if (canGetExtraRecovery(serialRecovery, castingTime)) {
        health = recoveryHelath(health, extraRecovery);
        serialRecovery = resetSerialRecovery();
      }
    }
    health = initHelath(health, maxHealth);
  }
  return health;
}

const initHelath = (health, maxHealth) => {
  return health >= maxHealth ? maxHealth : health;
};
const recoveryHelath = (helath, recoveryAmount) => {
  return helath + recoveryAmount;
};

const increaseSerialRecovery = (serialRecovery) => {
  return serialRecovery + 1;
};

const checkIsDead = (health) => {
  return health <= 0;
};

const resetSerialRecovery = () => {
  return 0;
};

const damagedHelath = (helath, damage) => {
  return helath - damage;
};

const canGetExtraRecovery = (serialRecovery, castingTime) => {
  return serialRecovery === castingTime;
};
