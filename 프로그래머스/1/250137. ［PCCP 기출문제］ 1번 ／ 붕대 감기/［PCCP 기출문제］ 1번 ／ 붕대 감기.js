function solution(bandage, health, attacks) {
  const manager = new HealthManager(bandage, health, attacks);

  for (let sec = 0; sec <= manager.lastAttackSec; sec++) {
    if (manager.attackMap.has(sec)) {
      manager.takeDamage(manager.attackMap.get(sec));
      if (manager.isDead()) return -1;
    } else {
      manager.recover();
    }
    manager.capHealth();
  }
  return manager.health;
};

class HealthManager {
  constructor(bandage, maxHealth, attacks) {
    [this.castingTime, this.recoveryAmount, this.extraRecovery] = bandage;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.attackMap = new Map(attacks);
    this.lastAttackSec = attacks[attacks.length - 1][0];
    this.serialRecovery = 0;
  }

  takeDamage(damage) {
    this.health -= damage;
    this.serialRecovery = 0;
  }

  recover() {
    this.health += this.recoveryAmount;
    this.serialRecovery++;
    if (this.serialRecovery === this.castingTime) {
      this.health += this.extraRecovery;
      this.serialRecovery = 0;
    }
  }

  isDead() {
    return this.health <= 0;
  }

  capHealth() {
    this.health = Math.min(this.health, this.maxHealth);
  }
}



