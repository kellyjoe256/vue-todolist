<template>
    <!-- prettier-ignore -->
    <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
    >
        <a
            v-if="meta.has_previous"
            class="pagination-previous"
            @click.prevent="changeToPage(meta.previous_page)"
        >Previous</a>
        <a
            v-if="meta.has_next"
            class="pagination-next"
            @click.prevent="changeToPage(meta.next_page)"
        >Next page</a>
    </nav>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: 'paginate',
    props: {
        meta: {
            type: Object,
            required: true,
        },
    },
    methods: {
        changeToPage(page) {
            eventBus.$emit('changeToPage', page);
        },
    },
};
</script>
