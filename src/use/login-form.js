import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm(){
    const store = useStore()
    console.log(store)
    const router = useRouter()
    
    const {handleSubmit , isSubmitting, submitCount} = useForm()
    const {value:user, errorMessage:userError, handeBlur:userBlur} = useField('user',
        yup
            .string()
            .trim()
            .required()
    )
    const {value:password, errorMessage:passwordError, handeBlur:passwordBlur} = useField('password',
        yup
            .string()
            .trim()
            .required()
            .min(4)
    )

    const submit = handleSubmit(async values => {
       await store.dispatch('auth/login', values)
       await router.push('/home')
    })

    const urinish = computed( ()=> submitCount.value>1 )
    watch(urinish, value => {
        if(value){
            setTimeout(()=>{
                submitCount.value=0
            },5000)
        }
    })
    return{
        user,
        userError,
        userBlur,
        password,
        passwordError,
        passwordBlur,
        submit,
        isSubmitting,
        submitCount,
        urinish,
    }
}