<template>
  <section class="container">
    <div>

        <article>

            <h1 class="subtitle">{{post.title}}</h1>
        
            <p> {{post.body}} </p>


            <div class="links">

                <nuxt-link to="/posts/" class="button--green" >Back to articles</nuxt-link>

            </div>

        </article>
        
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import fetch from 'node-fetch'


export default {


  asyncData ({ params } ) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
     
    .then( (response) => response.json() )
    .then( (res) => {

        return { post : res}

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

</style>
