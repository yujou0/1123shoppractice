(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{b789:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cart"}},[n("b-table",{attrs:{items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return t.del(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)]}}])})],1)},i=[],r={name:"Cart",data:function(){return{fields:[{key:"name",label:"商品名稱"},{key:"price",label:"商品價錢"},{key:"action",label:"操作"}]}},computed:{items:function(){return this.$store.getters.items}},methods:{del:function(t){this.$store.commit("delCart",t)}}},s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=cart.2d6af199.js.map