import {Button,Loading,List, Grid,Toast, 
    Panel,Icon,Tab, Tabs,Dialog,
    GridItem,CellGroup,Field,DatetimePicker,NumberKeyboard,
    Picker,Radio,Switch,Uploader,Popup,Image,
    Cell,Circle,DropdownMenu,Area,Tabbar, TabbarItem,
    DropdownItem,Search,Steps,Step} from 'vant'
import Vue from 'vue'


Vue.prototype.$toast=Toast

Vue.use(Button).use(Loading).use(Tab).use(Tabs)
.use(List).use(Grid).use(Steps).use(Step).use(Dialog)
.use(GridItem).use(Cell).use(Field).use(DatetimePicker).use(NumberKeyboard).use(Picker).use(Radio)
.use(CellGroup).use(Toast).use(Switch).use(Uploader)
.use(Circle).use(DropdownItem).use(Popup)
.use(DropdownMenu).use(Search).use(Tabbar).use(TabbarItem)
.use(Panel).use(Icon).use(Area).use(Image)