<template>
  <div class="followerecorditem">
    <div class="header">
      <div><span>{{followrecord.empName}}</span>&nbsp;
      <span>{{followrecord.contactMethod}}</span></div>
      <div class="time">{{followrecord.followTime}}</div>
    </div>
    <div>

    </div>
    <div>
      <p>{{followrecord.content}}</p>
    </div>
    <!-- <div class="footer">
      <div><van-icon name="comment-o"/>评价({{followrecord.comments}})</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'followrecorditem',
  props: {
    followrecord: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang='stylus' scoped>
.followerecorditem {
  text-align: left;
  color black
  background-color rgb(241,241,241)
  padding 10px
  border-radius 5px
}

.footer {
  display: grid;
  grid-template-columns: 1fr;
  text-align: right;
  padding-right: 10px;
}

.header {
  display: grid;
  grid-template-columns: 120px auto ;
}
.time
    text-align right
    padding-right 10px
i
  font-size 1rem
  position relative
  right 5px
  top 3px

</style>
