<template>
  <div id="app" class="app">
    <div class="links">
    <a href="/about" class="link">About</a>
    <div class="buttons">
        <a href="/login" class="buttons__log-in">Log in</a>
        <a href="/register" class="buttons__start">Sign in</a>
    </div>
    </div>
    <h1>Blog Application</h1><hr>
    <PostList 
      v-bind:posts="posts"
      v-bind:comments="comments"
    />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: "app",
  data() {
    return {
      posts: [
        {id: 1, user_id: 1, title: 'First Post', author: 'somebody', content: 'Post Body1.....', publish: new Date('2020-12-17T12:24:00')},
        {id: 2, user_id: 1, title: 'Second Post', author: 'oncetold', content: 'Post Body2.....', publish: new Date('2020-12-17T11:24:00')},
      ],
      comments: [
        {id: 1, user_id: 1, author: 'somebody', content: 'Comment1', publish: new Date('2020-12-17T13:24:00'), post_id: 2 },
        {id: 2, user_id: 3, author: 'fatboy', content: 'Comment2', publish: new Date('2021-05-26T13:24:00'), post_id: 2 },
        {id: 3, user_id: 3, author: 'fatboy', content: 'Comment3', publish: new Date('2021-05-26T13:24:00'), post_id: 1 }
      ]
    } 
  },
  components: {
    PostList
  }
}
</script>


<style>
  .app {
    background: aquamarine;
  }
h1 {
  text-align: center;
}

a {
  text-decoration: none;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: black;
}

.buttons {
  display: flex;
  align-items: center;
}

.buttons__log-in {
  color: green;
  margin-right: 20px;
}

</style>
