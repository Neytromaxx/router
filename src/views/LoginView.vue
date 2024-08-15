<template>
  <form @submit.prevent="submit">
    <div class="container">
        <div class="inputs">
            <input 
                type="text" 
                v-model="user" 
                @blur="userBlur"
                placeholder="Username"
            >
            <br>
            <small v-if="userError" class="invalid">{{userError}}</small>
            <input 
                type="text" 
                v-model="password" 
                @blur="passwordBlur"
                placeholder="Parol"
            >
            <br>
            <small v-if="passwordError" class="invalid">{{passwordError}}</small>
        </div>
        <button type="submit" :disabled="isSubmitting || urinish">Kirish</button>
    </div>
  </form>
</template>

<script>
  import {useLoginForm} from '@/use/login-form'

  export default {
    setup(){
        return{
            ...useLoginForm()
        }
    }
  }
//     const {
//         user,
//         userError,
//         userBlur,
//         password,
//         passwordError,
//         passwordBlur,
//         submit,
//         urinish,
//         isSubmitting,
//     } = useLoginForm()

</script>

<style scoped>
    .container{
        margin: 0 auto;
        width: 370px;
        height: 320px;
        background-color: #f6f8f9;
        border: 1px solid #f6f8f9;
        border-radius: 1rem;
        margin-top: 150px;
    }
    .inputs{
        margin-top: 50px;
    }
    input{
        width: 280px;
        height: 35px;
        margin-top: 25px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 0.5rem;
        font-size: 20px;
    }
    button{
        width: 300px;
        height: 45px;
        margin-top: 35px;
        padding: 5px;
        border: 1px solid black;
        border-radius: .4rem;
        background-color: #11056c;
        color: #f6f8f9;
        cursor: pointer;
    }
    .invalid{
        color: red;
    }
</style>