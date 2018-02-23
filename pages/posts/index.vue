<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">The articles </h1>
        <nuxt-link to="/" class="button--green" >Back to Home</nuxt-link>

        <article v-for="post in posts" :key="post.id">

            <h3>{{post.title}}</h3>

            <p>{{post.body}} </p>

            
            <nuxt-link :to="'/posts/'+post.id" class="right-link">Read More</nuxt-link>

        </article>
     
      <div class="links">

        <nuxt-link to="/" class="button--green" >Home</nuxt-link>


      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import fetch from 'node-fetch'


export default {


  asyncData ({ params } ) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/`)
     
    .then( (response) => response.json() )
    .then( (res) => {

        return { posts: res }

     }).catch( (err) => console.log(res) );

  },

  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


article{
    max-width: 100%;
    width: 600px;

    display: block;
    margin: auto;

    padding-top: 20px;
    margin-bottom: 20px;

}

.right-link{
    text-align: right;
    margin-top: 10px;

    font-style: italic;
    color: black;
    display: block;

}

</style>