<template>
    <li>
        <h1>{{ post.title }} </h1>
        <span>by: <a v-bind:href="'/profile/'+ post.user_id" class="author">{{ post.author }}</a></span>
        <span>{{ post.publish.toLocaleString("en-US") }}</span>
        <br>
        <div>{{ post.content }}</div>
        <div class="comments">
            <ul v-if="comments.length > 0">
                <CommentItem
                    v-for="comment of comments"
                    v-bind:key="comment"
                    v-bind:comment="comment"
                    v-bind:post_date="post.publish"
                />
            </ul>
        </div>
        <a href="#" class="New comment">Add comment</a>
    </li>
</template>

<script>
import CommentItem from '@/components/CommentItem'

export default {
    props: {
        post: {
            type: Object,
            requier: true
        },
        comments: {
            type: Array,
            require: false
        }
    },
    components: {
        CommentItem
    },
}
</script>

<style scoped>

    li {
        border: 1px solid #ccc;
        background: rgb(68, 170, 170);
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
        flex-direction: column;
    }

    .author {
        color:chocolate;
        font-size: 1.5em;
    }
</style>