<template>
  <div class="container">
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
            <h2>User Profile</h2>
                <div class="form-group">
                    <p>Username: {{ getUserData($route.params.id).username }}</p>
                </div>
                <div class="form-group">
                    <p>Name: {{ getUserData($route.params.id).name }}</p>
                </div>
                <div class="form-group">
                    <p>Surname: {{ getUserData($route.params.id).surname }} </p>
                </div>
                <div class="form-group">
                    <p> Email: {{ getUserData($route.params.id).email }} </p>
                </div>
  </div>
</template>

<script>

export default ({
    methods: {
        getUserData(id) {
            let users = [
                {id : 1, username: "somebody", name: "Vasia", surname: "Pupkin", email: "vasia@mail.ua" },
                {id : 2, username: "oncetold", name: "Petro", surname: "Mostavchuk", email: "motivator@mail.ua" },
                {id : 3, username: "fatbody", name: "Jhon", surname: "Weak", email: "vulnarible@mail.ua" },
            ]
            return users.find(elt => elt.id == id)
        }
    }
})
</script>
