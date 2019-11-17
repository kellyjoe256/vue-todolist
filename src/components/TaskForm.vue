<template>
    <!-- prettier-ignore -->
    <form @submit.prevent="saveTask" autocomplete="off">
        <div class="field">
            <label class="label" for="title">Task / Title</label>
            <div class="control">
                <input
                    v-model.trim.lazy="task.title"
                    class="input"
                    :class="{ 'is-danger': hasError('title') }"
                    type="text"
                    id="title"
                    placeholder="Task"
                />
                <p
                    v-if="hasError('title')"
                    class="help is-danger"
                >{{ getErrorMessage('title') }}</p>
            </div>
        </div>
        <div class="field">
            <label class="label" for="priority">Priority</label>
            <div class="control">
                <div
                    class="select is-fullwidth"
                    :class="{ 'is-danger': hasError('priority') }"
                >
                    <select id="priority" v-model.lazy="task.priority">
                        <option
                            v-for="(priority, key) in priorityOptions"
                            :key="key"
                            :value="key"
                        >{{ priority }}</option>
                    </select>
                </div>
                <p
                    v-if="hasError('priority')"
                    class="help is-danger"
                >{{ getErrorMessage('priority') }}</p>
            </div>
        </div>
        <div class="field">
            <label class="label" for="start_date">Start Date</label>
            <div class="control">
                <input
                    v-model.trim.lazy="task.start_date"
                    class="input"
                    :class="{ 'is-danger': hasError('start_date') }"
                    type="text"
                    id="start_date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                />
                <p
                    v-if="hasError('start_date')"
                    class="help is-danger"
                >{{ getErrorMessage('start_date') }}</p>
            </div>
        </div>
        <div class="field">
            <label class="label" for="due_date">Due Date</label>
            <div class="control">
                <input
                    v-model.trim.lazy="task.due_date"
                    class="input"
                    :class="{ 'is-danger': hasError('due_date') }"
                    type="text"
                    id="due_date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                />
                <p
                    v-if="hasError('due_date')"
                    class="help is-danger"
                >{{ getErrorMessage('due_date') }}</p>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button
                    type="submit"
                    class="button is-link"
                >Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'task-form',
    props: {
        task: {
            type: Object,
            required: true,
        },
        errors: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            priorityOptions: {
                '': 'Select Priority',
                low: 'Low',
                medium: 'Medium',
                high: 'High',
            },
        };
    },
    methods: {
        saveTask() {
            this.$emit('save:task', this.task);
        },

        hasError(field) {
            const { errors } = this;

            for (let i = 0; i < errors.length; i += 1) {
                if (errors[i][field]) {
                    return true;
                }
            }

            return false;
        },

        getErrorMessage(field) {
            const { errors } = this;

            for (let i = 0; i < errors.length; i += 1) {
                if (errors[i][field]) {
                    return errors[i][field];
                }
            }

            return '';
        },
    },
};
</script>
