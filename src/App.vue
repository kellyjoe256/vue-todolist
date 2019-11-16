<template>
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-two-fifths">
                <h1>Create / Update Task</h1>
            </div>
            <div class="column">
                <h1>Tasks</h1>
                <tasks :tasks="tasks" :meta="meta"></tasks>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Tasks from './components/Tasks.vue';

export default {
    name: 'app',
    components: {
        Tasks,
    },
    data() {
        return {
            meta: {},
            tasks: [],
        };
    },
    created() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            try {
                const { data } = await axios.get('tasks');

                this.meta = data.meta;
                this.tasks = data.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style>
@import url('~bulma/css/bulma.min.css');

h1 {
    font-size: 2.25em;
    margin: 1em 0;
}

p {
    font-size: 1.2em;
}
</style>
