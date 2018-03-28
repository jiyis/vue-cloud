<template>
  <div class="swiper">  
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem v-for="item in banners" :key="item.id">
          <div class="demo-carousel"><img :src="item.titlepic"></div>
        </CarouselItem>
    </Carousel>
  </div>  
</template>
<script>
import config from '../config/config.json';

const banner1 = require('../assets/images/banner0.jpg');

export default {
  data() {
    return {
      banners: [
        {
          titlepic: banner1,
        },
      ],
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: 'inside',
        radiusDot: true,
        trigger: 'click',
        arrow: 'hover',
      },
    };
  },
  created() {
    this.$axios.get(`${config.apiDomain}/banners`).then((response) => {
      this.banners = response.data;
    }, (error) => {
      this.$Message.error(error.toString());
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .swiper {
    height: 500px;
    width: 100%;
  }
  .ivu-carousel-dots li button.radius {
    background: #ffffff !important;
    opacity: 1;
    width: 15px;
    height: 15px;
  }
  .ivu-carousel-dots li {
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
  .ivu-carousel-dots li.ivu-carousel-active>button.radius {
    width: 15px;
  }
  .ivu-carousel-dots .ivu-carousel-active button.radius {
    opacity: 0.8;
    width: 15px;
    height: 15px;
    background: #000000 !important; 
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background: url('../assets/images/swiper.png');
  }
  .swiper-button-prev, .swiper-button-next{
    height: 80px;
    width: 40px;
  }
  .swiper-button-next {
    background-position:37px 233px; 
  }
  .ivu-carousel-dots-inside {
    bottom:20px;
  }
  .demo-carousel {
    img {
      height: 500px;
      width: auto;
    }
  }
</style>