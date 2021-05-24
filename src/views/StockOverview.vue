<template>
    <el-container>
        <el-header>
            <span style="text-align: center; display: inline-block; margin-right: 500px; font-size: 30px " >库存总览</span>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <el-main>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">

                <el-table-column
                        prop="name"
                        label="商品大类"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="date"
                        label="进货日期"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="specification"
                        label="商品规格">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="商品编码">
                </el-table-column>
                <el-table-column
                        prop="entry_count"
                        label="进货数量">
                </el-table-column>
                <el-table-column
                        prop="storekeeper"
                        label="进货人">
                </el-table-column>
                <el-table-column
                        prop="supplier"
                        label="供货商">
                </el-table-column>
                <el-table-column
                        prop="mark"
                        label="备注">
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="20"
                    :total="100"
                    @current-change="page">
            </el-pagination>
        </el-main>
        <el-footer>
            <p>Copyright © 2020 - 2021
                第11小组
                Powered by
                <el-link href="https://cn.vuejs.org/" target="_blank">Vue |</el-link>
                <el-link href="https://element.eleme.cn/#/zh-CN" target="_blank">Element UI</el-link>
            </p>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "stockoverview",
        methods:{
            page(currentPage){
                alert(currentPage);
            }
        },
        data() {
            return {

                commodity:[
                    {
                        id:'140021',
                        date: '2016-05-02',
                        name: '显卡',
                        specification: 'RTX3060',
                        entry_count:'120',
                        storekeeper:'张三',
                        supplier:'影驰京东专卖店',
                        mark:'备注为空'
                    }
                ],

                tableData: [{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                }, {
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                }, {
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                }, {
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },{
                    date: '2016-05-02',
                    name: '显卡',
                    specification: 'RTX3060',
                    id:'140021',
                    entry_count:'120',
                    storekeeper:'张三',
                    supplier:'影驰京东专卖店',
                    mark:'备注为空'
                },

                ]
            }
        }
    }
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        text-align: right;
        font-size: 12px;
        line-height: 60px;
        color: #333;
    }

    .el-main{
        background-color: #e9eef3;
        height: 645px;
    }
    .el-footer{
        text-align: center;
    }
    .el-pagination{
        margin-top: 10px;
        text-align: center;
    }
</style>