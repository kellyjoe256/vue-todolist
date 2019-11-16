<template>
    <p v-if="tasks.length === 0">No tasks available</p>
    <table v-else class="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Created</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <!-- prettier-ignore -->
            <tr
                v-for="task in tasks"
                :key="task._id"
            >
                <td>{{ task.title }}</td>
                <td>{{ task.priority | ucfirst }}</td>
                <td>{{ task.start_date | formatDate }}</td>
                <td>{{ task.due_date | formatDate }}</td>
                <td>{{ task.created_at | fromNow }}</td>
                <td>
                    <button
                        class="button is-small is-info is-light"
                        @click="$emit('edit:task', task)"
                    >Edit</button>
                    <button
                        class="button is-small is-danger is-light"
                        @click="$emit('delete:task', task)"
                    >Delete</button>
                    <button
                        class="button is-small is-light"
                        :class="{
                            'is-success': !task.completed,
                        }"
                        @click="$emit('complete:task', task)"
                    >{{ !task.completed ? 'Mark as complete' : 'Mark as incomplete' }}</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import moment from 'moment';

export default {
    name: 'tasks',
    props: {
        meta: {
            type: Object,
            required: true,
        },
        tasks: {
            type: Array,
            required: true,
        },
    },
    filters: {
        ucfirst(value) {
            const v = String(value);

            return v[0].toUpperCase() + v.slice(1).toLowerCase();
        },

        fromNow(value) {
            return moment(value).fromNow();
        },

        formatDate(value) {
            return moment(value).format('Do MMM YYYY');
        },
    },
};
</script>

<style scoped>
button {
    margin-right: 0.5em;
}

button.is-small {
    font-size: 0.9rem;
}
</style>
