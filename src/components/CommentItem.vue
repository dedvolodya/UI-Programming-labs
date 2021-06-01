<template>
    <li class="inner">
        <span>by: <a v-bind:href="'/profile/'+ comment.user_id" >{{ comment.author }}</a></span>
        <span>{{ timeSince(comment.publish) }}</span>
        <br>
        <div>{{ comment.content }}</div>
        
    </li>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            requier: false
        },
        post_date: {
            type: Date
        }
    },
    methods: {
        timeSince(date) {

            let seconds = Math.floor(new Date((Date.now() - date)) / 1000);

            let period = seconds / 31536000;

            if (period > 1) {
                return Math.floor(period) + " years ago";
            }
             period = seconds / 2592000;
            if (period > 1) {
                return Math.floor(period) + " months ago";
            }
            period = seconds / 86400;
            if (period > 1) {
                return Math.floor(period) + " days ago";
            }
            period = seconds / 3600;
            if (period > 1) {
                return Math.floor(period) + " hours ago";
            }
            period = seconds / 60;
            if (period > 1) {
                return Math.floor(period) + " minutes ago";
            }
            return Math.floor(seconds) + " seconds ago";
        }
    }
}
</script>

<style scoped>
    .inner {
        border: 1px solid rgb(19, 84, 100);
        background: rgb(133, 253, 253);
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
        flex-direction: column;
    }

</style>