<!-- 首页 -->
<template>
    <div>
        <div class="block" style="background-color: rgb(27, 29, 31);">
            <el-carousel height="150px">
            <el-carousel-item>
                <div style="background-image: url('https://bpic.588ku.com/back_origin_min_pic/21/03/15/be101131d29e3ddeea56cc7f64f688f8.jpg');"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="background-image: url('http://img.51miz.com/Element/00/98/47/21/76fdef18_E984721_6b12b2df.jpg');"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="background-image: url('https://pic1.zhimg.com/v2-85dbb706ccbb2565e36f9af6c783ae86_r.jpg?source=1940ef5c');"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="background-image: url('https://img.tukuppt.com/ad_preview/00/28/24/5f966f42a39f3.jpg!/fw/980');"></div>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div style="width: 100%;">
            <el-calendar v-model="value"></el-calendar>
        </div>

    </div>
</template>


<script>
export default {
    name: 'HomeView',
    data() {
      return {
        value: new Date()
      }
    }
}
</script>

<style scoped>
    .block div {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
</style>