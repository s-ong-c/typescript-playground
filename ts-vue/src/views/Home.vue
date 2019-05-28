<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="blank"></div>
    <div class="button-register">Register</div>
    <div class="button-login">Sign in</div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
private result = '';

public sayHi(hello: string) {
   console.log(this.result);
   }
     // computed
  get computedMsg() {
    return 'computed ' + this.result;
  }

}
</script>
<style scoped>
  .blank{
    height: 7rem;
  }
.button-register{
     border-radius: 4px;
     flex:1;
     height: 3rem;
     margin: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color:white;
    transition: background 0.15s ease-in;
     background: #ffd493;
    border-left: #ffd499;
    cursor: pointer;
    user-select: none;
            /* @include hover(){
                background:  $oc-teal-6;
            }
            &:active{
                background: $oc-teal-8;
            } */
        }
    .button-login{
        border-radius: 4px;
     flex:1;
     height: 3rem;
     margin: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color:white;
    transition: background 0.15s ease-in;
     background: #fa7e5c;
    border-left:#fa7e5c;
    cursor: pointer;
    user-select: none;
            /* @include hover(){
                background:  $oc-teal-6;
            }
            &:active{
                background: $oc-teal-8;
            } */
    }
</style>

