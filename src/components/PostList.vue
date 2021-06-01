<template>
  <div>
    <ul>
        <PostItem
            v-for="post of posts"
            v-bind:key="post"
            v-bind:post="post"
            v-bind:comments="getPostCommnets(post)"
        />
    </ul>
  </div>
</template>


<script>
import PostItem from '@/components/PostItem'
export default {
    props: ['posts', 'comments'],
    components: {
        PostItem
    },
    methods: {
        getPostCommnets (post) {
            return this.comments.filter(function(value){ 
                console.log(value)
                return value.post_id == post.id;
            });
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>