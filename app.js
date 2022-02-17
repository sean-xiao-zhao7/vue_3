const app = Vue.createApp({
    data() {
        return { goals: [], enteredGoalValue: "" };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
        deleteGoal(id) {
            this.goals.splice(id, 1);
        },
    },
});

app.mount("#user-goals");
