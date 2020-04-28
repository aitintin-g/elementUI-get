import Vue from 'vue';
import Box from './Box';

export var box=(function(){

    

    var Mybox=Vue.extend(Box);

    return function(opts){  //配置参数
        
        var optsDf={
            textList:['中文','English','Español','Français'],
            pos:[80,50],
            name:'contentbox'
        }

        if(opts){
            for(var key in opts){
                optsDf[key]=opts[key];
            }
        }


        var vm=new Mybox({
            el:document.createElement('div'),
            data:function(){
                return {
                    optsDf
                }
            },
            mounted(){
                // document.addEventListener('click',()=>{
                //     console.log(123);
                // },false);    
            }
        });

        vm.$el.id=optsDf.name;
        document.body.appendChild(vm.$el);
        vm.$el.style.top=optsDf.pos[0]+'px';
        vm.$el.style.right=optsDf.pos[1]+'px';

    };

})();