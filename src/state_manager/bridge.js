
(function (root, factory) {
   root.bridge = factory(root.bridge || {});
}(this, function(_){
   var _this = this;
   var worker;
   var listeners = {};
   var counter = 0;
   _.workers = {};

   _id = (new Date()).getTime();

   _.init = function(path, module){
      _[module] = {};
      var worker = new Worker(path+"?"+(new Date().getTime()));
      worker.onmessage = function(e){
        var idx = e.data.indexOf("@@@");
        var event = e.data.substring(0,idx); //$$$console.log("client receive: " + event + " - " + e.data.substring(idx+3))
        if(listeners[event]){
          var content = e.data.substring(idx+3);
          var data = content ? JSON.parse(content) : null;
          Object.keys(listeners[event]).forEach(function(k){
              setTimeout(function(){listeners[event][k] ? listeners[event][k](data) : null;},0);
          })
        }
      };

      _[module].emit = function(event, data){ //$$$console.log("client send: " + event)
         worker.postMessage(event+"@@@"+(data != null && data != undefined ? JSON.stringify(data) : ''))
      }

      _[module].on = function(event, listener){
         counter++;
         if(!listeners[event])
           listeners[event]={};
         listeners[event][counter] = listener;
         if(Object.keys(listeners[event]).length == 1)
           _[module].emit("_on", { event : event, event_id : event+_id });
         return counter;
      }

      _[module].once = function(event, listener){
         counter++;
         if(!listeners[event])
           listeners[event]={};
         var wrap = function(d){
           delete listeners[event][counter];
           if(!Object.keys(listeners[event]).length){
             _[module].emit("_remove", { event : event, event_id : event+_id });
           }
           listener(d);
         };
         listeners[event][counter] = wrap;
         if(Object.keys(listeners[event]).length == 1)
           _[module].emit("_on", { event : event, event_id : event+_id });
         return counter;
      }

      _[module].remove = function(event, event_id){
         delete listeners[event][event_id];
         if(!Object.keys(listeners[event]).length){
           _[module].emit("_remove", { event : event, event_id : event+_id });
         }
      }

     //ready
      _[module].emit("bridge@ready", true);

      //storage wrapper
      _[module].on("bridge@get_from_storage", function(key){
        _[module].emit("bridge@get_from_storage:success", (JSON.parse(_this.localStorage.getItem(key))||{}).value);
        _[module].emit("bridge@get_from_storage:"+key+":success", (JSON.parse(_this.localStorage.getItem(key))||{}).value);
      })
      _[module].on("bridge@put_in_storage", function(data){
        //$$$console.log("putting on storage: ", data )
        _this.localStorage.setItem(data.key, JSON.stringify({value : data.value}));
        _[module].emit("bridge@put_in_storage:success", true);
      })

   };

   return _;
}))