<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['0','1']" default-active="[0,1]">
        <!--                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">-->
        <!--                    <template slot="title" >{{item.name}}</template>-->
        <!--                    <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"-->
        <!--                    :class="$route.path == item2.path? 'is-active':''">{{item2.name}}</el-menu-item>-->
        <!--                </el-submenu>-->
        <el-submenu index="1" >
          <template slot="title"><i class="el-icon-message"></i>仓库管理</template>
          <el-menu-item-group>
            <el-menu-item index="/stockoverview">库存总览</el-menu-item>
            <el-menu-item index="/singalview">单仓管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/stockput">
          <template slot="title"><i class="el-icon-edit-outline"></i>入库</template>
        </el-menu-item>
        <el-menu-item index="/stockout">
          <span slot="title"><i class="el-icon-truck"></i>出库</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
