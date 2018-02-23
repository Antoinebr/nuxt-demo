<template>
  <section class="container">
    <div>
      <app-logo/>

       <div class="links">

        <nuxt-link to="/" class="button--green" >Back to Home</nuxt-link>
      </div>

      <h1 class="title">
        About
      </h1>
      <h2 class="subtitle">
       {{title}}
      </h2>

      <article>

        Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. 
        Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. 
        Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. 

      </article>

     
     
     
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {


  asyncData () {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
     
    .then( (response) => response.json() )
    .then( (res) => {

        return { title: res.title }

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
</style>
