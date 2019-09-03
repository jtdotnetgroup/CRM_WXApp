import Vue from 'vue'

declare module 'vue/types/vue'{
    interface Vue{
        $moment:any
    }
}

declare module 'vue-calendar-component'{
    interface Calendar{

    }
}