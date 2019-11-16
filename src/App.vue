<template>
    <div class="container is-fluid">
        <!-- prettier-ignore -->
        <div class="columns">
            <div class="column is-one-third">
                <h1>Create / Update Task</h1>
                <task-form
                    :task="task"
                    :errors="errors"
                    @save:task="saveTask"
                ></task-form>
            </div>
            <div class="column">
                <h1>Tasks</h1>
                <tasks
                    :tasks="tasks"
                    :meta="meta"
                    @edit:task="editTask"
                    @delete:task="deleteTask"
                ></tasks>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import pick from 'lodash.pick';
import Tasks from './components/Tasks.vue';
import TaskForm from './components/TaskForm.vue';

/* eslint-disable no-underscore-dangle */

export default {
    name: 'app',
    components: {
        Tasks,
        TaskForm,
    },
    data() {
        return {
            meta: {},
            task: {
                title: '',
                priority: '',
                start_date: '',
                due_date: '',
            },
            tasks: [],
            errors: [],
        };
    },
    created() {
        this.getTasks();
    },
    methods: {
        clearForm() {
            this.task = {
                title: '',
                priority: '',
                start_date: '',
                due_date: '',
            };
        },

        async getTasks() {
            try {
                const { data } = await axios.get('tasks');

                this.meta = data.meta;
                this.tasks = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        async saveTask(task) {
            const url = task._id ? `tasks/${task._id}` : 'tasks';
            const method = task._id ? 'PUT' : 'POST';

            try {
                await axios({
                    url,
                    method,
                    // prettier-ignore
                    data: pick(
                        task,
                        /* eslint-disable-next-line comma-dangle */
                        ['title', 'priority', 'start_date', 'due_date']
                    ),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                this.clearForm();
                this.getTasks();
            } catch ({ response }) {
                if (response.status === 400) {
                    this.errors = response.data;
                } else {
                    console.log(response);
                }
            }
        },

        editTask(task) {
            this.task = { ...task };
            this.task.due_date = moment(task.due_date).format('YYYY-MM-DD');
            this.task.start_date = moment(task.start_date).format('YYYY-MM-DD');
        },

        async deleteTask(task) {
            /* eslint-disable-next-line */
            if (!confirm('Are you sure?')) {
                return;
            }

            try {
                await axios.delete(`tasks/${task._id}`);

                this.clearForm();
                this.getTasks();
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
