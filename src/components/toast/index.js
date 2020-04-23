import toastComponent from  './toast'
const Toast = {
    install: function(Vue) {
        const ToastConstructor = Vue.extend(toastComponent)
        const instance = new ToastConstructor()
        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)
        let timer = null
        let timer1 = null
        Vue.prototype.$toast = (msg,duration = 3000) => {
            instance.message = msg
            instance.styShow = true
            instance.visible = true
            if(timer1){
                clearTimeout(timer1)
                clearTimeout(timer)
                timer1 = null
                timer = null
            }
            if(!timer){
                timer = setTimeout(()=>{
                    instance.styShow = false
                },parseInt(duration) - 900)
            }
            timer1 = setTimeout(() => {
                instance.visible = false
                clearTimeout(timer1)
                timer1 = null
                timer = null
            }, duration)
        }
    }
}
export default Toast