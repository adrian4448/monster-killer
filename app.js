new Vue({
    el: '#app',
    data: {
        start: false,
        player: {
            life: 100,
            attack: 0.75,
            specialAttack: 1.15
        },
        monster: {
            life: 100,
            attack: 1.15,
            specialAttack: 1
        },
        logs: []    
    },
    methods: {
        strike(attackType) {
            const baseAttack = Math.floor(Math.random() * (10 - 5)) + 5;
            const playerAttack = Math.floor((baseAttack * this.player[attackType]));
            const monsterAttack = Math.floor((baseAttack * this.monster[attackType]));
            this.player.life = this.player.life - monsterAttack;
            this.monster.life = this.monster.life - playerAttack;
            this.logs.push(`Jogador atingiu monstro com ${playerAttack}`);
            this.logs.push(`Monstro atingiu o jogador com ${monsterAttack}`);
        },
        heal() {
            const baseAttack = Math.floor(Math.random() * (10 - 5)) + 5;
            const heal = Math.floor(Math.random() * (15 - 6)) + 6;
            const monsterAttack = Math.floor((baseAttack * this.player.attack));
            this.player.life = this.player.life + heal;
            this.player.life = this.player.life - monsterAttack;
            this.logs.push(`Jogador se curou com ${heal}`);
            this.logs.push(`Monstro atingiu o jogador com ${monsterAttack}`);
        },
        newGame() {
            this.start = !this.start;
            this.player.life = 100;
            this.monster.life = 100;
            this.logs = [];
        }
    },
    computed: {
        winner() {
            if(this.monster.life <= 0) {
                this.monster.life = 0;
                return true;
            }
            return false;
        },
        loser() {
            if(this.player.life <= 0) {
                this.player.life = 0;
                return true;
            }
            return false;
        }
    }    
})