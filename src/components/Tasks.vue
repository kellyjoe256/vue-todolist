<template>
    <div>
        <div class="data-controls">
            <select v-model="limit" @change="changeLimit()">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
            <input
                type="text"
                class="input"
                v-model="search"
                @keyup="performSearch()"
                placeholder="Search..."
            />
        </div>
        <p v-if="tasks.length === 0">No tasks available</p>
        <div v-else>
            <table class="table is-striped is-fullwidth is-narrow">
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
                        :class="{
                            'is-selected': task.completed
                        }"
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
                            >{{ `Mark as ${taskStatus(task)}` }}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- prettier-ignore -->
            <paginate
                v-if="meta.total_pages > 1"
                :meta="meta"
            ></paginate>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { eventBus } from '../main';
import Paginate from './Paginate.vue';

export default {
    name: 'tasks',
    components: {
        Paginate,
    },
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
    data() {
        return {
            limit: 5,
            search: '',
        };
    },
    methods: {
        taskStatus(task) {
            return !task.completed ? 'complete' : 'incomplete';
        },

        changeLimit() {
            eventBus.$emit('changeLimit', this.limit);
        },

        performSearch() {
            eventBus.$emit('search', this.search.trim());
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
.data-controls {
    margin-bottom: 20px;
}

.data-controls select {
    padding: 5px;
    margin-right: 5px;
}

.data-controls .input {
    width: 80%;
}

tr.is-selected td {
    text-decoration: line-through;
}

button {
    margin-right: 0.5em;
}

button.is-small {
    font-size: 0.9rem;
}
</style>
