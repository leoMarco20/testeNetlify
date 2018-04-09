if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common'.");
}
var common = function (_, Kotlin) {
  'use strict';
  var Throwable = Error;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var Exception = Kotlin.kotlin.Exception;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var linkedSetOf = Kotlin.kotlin.collections.linkedSetOf_i5x0yv$;
  GetActions.prototype = Object.create(Action.prototype);
  GetActions.prototype.constructor = GetActions;
  GetStores.prototype = Object.create(Action.prototype);
  GetStores.prototype.constructor = GetStores;
  ModelList.prototype = Object.create(Model.prototype);
  ModelList.prototype.constructor = ModelList;
  ModelMap.prototype = Object.create(Model.prototype);
  ModelMap.prototype.constructor = ModelMap;
  Store.prototype = Object.create(Model.prototype);
  Store.prototype.constructor = Store;
  Schema.prototype = Object.create(Model.prototype);
  Schema.prototype.constructor = Schema;
  SchemaProperty.prototype = Object.create(Model.prototype);
  SchemaProperty.prototype.constructor = SchemaProperty;
  function start$lambda(closure$onReady) {
    return function (it) {
      GetStores_getInstance();
      GetActions_getInstance();
      closure$onReady();
    };
  }
  function start(onReady) {
    on('bridge@ready', start$lambda(onReady));
  }
  function GetActions() {
    GetActions_instance = this;
    Action.call(this, 'common', GetActions_init$lambda);
  }
  function GetActions_init$lambda(data, done, fail) {
    done(Action$Companion_getInstance().actions);
  }
  GetActions.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetActions',
    interfaces: [Action]
  };
  var GetActions_instance = null;
  function GetActions_getInstance() {
    if (GetActions_instance === null) {
      new GetActions();
    }
    return GetActions_instance;
  }
  function GetStores() {
    GetStores_instance = this;
    Action.call(this, 'common', GetStores_init$lambda);
  }
  function GetStores_init$lambda(data, done, fail) {
    done(Store$Companion_getInstance().stores);
  }
  GetStores.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetStores',
    interfaces: [Action]
  };
  var GetStores_instance = null;
  function GetStores_getInstance() {
    if (GetStores_instance === null) {
      new GetStores();
    }
    return GetStores_instance;
  }
  function Routes() {
    this.PROD_PORT = 443;
    this.STAGE_PORT = 80;
    this.DEV_PORT = 8080;
    this.PROD_PROTOCOL = 'https';
    this.STAGE_PROTOCOL = 'http';
    this.DEV_PROTOCOL = 'http';
    this.PROD_HOST = 'https://api.nogord.io:443/api';
    this.STAGE_HOST = 'http://stage.api.nogord.io:80/api';
    this.DEV_HOST = 'http://localhost:8080/api';
    this.API_VERSION = 'v1';
    var tmp$, tmp$_0;
    tmp$ = global()._ENV;
    if (Kotlin.equals(tmp$, 'production'))
      tmp$_0 = 'https://engine.nogord.io/api/v1/le/execute';
    else if (Kotlin.equals(tmp$, 'stage'))
      tmp$_0 = this.STAGE_HOST + '/v1/le/execute';
    else
      tmp$_0 = this.DEV_HOST + '/v1/le/execute';
    this.ENGINE_HOST = tmp$_0;
    this.S3_PROD_HOST = 'https://s3-sa-east-1.amazonaws.com/nogordio-files-sa-east-prod-public/';
    this.S3_STAGE_HOST = 'https://s3.amazonaws.com/nogordio-files-us-east-stage-public/';
    this.S3_QA_HOST = 'https://s3.amazonaws.com/nogordio-files-us-east-dev-public/';
    this.S3_DEV_HOST = 'https://s3.amazonaws.com/nogordio-files-us-east-dev-public/';
  }
  Routes.prototype.currentEnvironment = function () {
    var tmp$;
    tmp$ = global()._ENV;
    if (Kotlin.equals(tmp$, 'production'))
      return this.PROD_HOST;
    else if (Kotlin.equals(tmp$, 'stage'))
      return this.STAGE_HOST;
    else
      return this.DEV_HOST;
  };
  Routes.prototype.rootEndpoint_61zpoe$ = function (api) {
    if (api === void 0)
      api = this.API_VERSION;
    return this.currentEnvironment() + '/' + api;
  };
  Routes.prototype.currentS3Host = function () {
    var tmp$;
    tmp$ = global()._ENV;
    if (Kotlin.equals(tmp$, 'production'))
      return this.S3_PROD_HOST;
    else if (Kotlin.equals(tmp$, 'stage'))
      return this.S3_STAGE_HOST;
    else if (Kotlin.equals(tmp$, 'qa'))
      return this.S3_QA_HOST;
    else
      return this.S3_DEV_HOST;
  };
  Routes.prototype.uploadFile = function () {
    return this.rootEndpoint_61zpoe$() + '/files/';
  };
  Routes.prototype.downloadFile_61zpoe$ = function (fileKey) {
    return this.rootEndpoint_61zpoe$() + '/files/' + fileKey;
  };
  Routes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Routes',
    interfaces: []
  };
  function API() {
    API_instance = this;
    this.authorization = null;
    this.ready = false;
    this.queue = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
  }
  API.prototype.unleashQueue = function () {
    var tmp$;
    tmp$ = this.queue.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value();
    }
    this.queue = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
  };
  function API$get$lambda(closure$headers, this$API, closure$url, closure$query, closure$success, closure$error) {
    return function () {
      var $receiver = closure$headers;
      var value = 'application/json';
      $receiver.put_xwzc9p$('Accept', value);
      this$API.checkAuthHeader_0(closure$headers);
      Http_getInstance().get_kkad8o$(closure$url, closure$query, closure$headers, this$API.parseSuccess_0(closure$success), this$API.parseError_0(closure$url, closure$error));
    };
  }
  API.prototype.get_yaxyun$ = function (url, query, headers, success, error) {
    if (query === void 0) {
      query = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    var f = API$get$lambda(headers, this, url, query, success, error);
    if (this.ready) {
      f();
    }
     else {
      this.queue.put_xwzc9p$(url, f);
    }
  };
  API.prototype.delete_yaxyun$ = function (url, query, headers, success, error) {
    if (query === void 0) {
      query = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    var value = 'application/json';
    headers.put_xwzc9p$('Accept', value);
    this.checkAuthHeader_0(headers);
    Http_getInstance().delete_kkad8o$(url, query, headers, this.parseSuccess_0(success), this.parseError_0(url, error));
  };
  API.prototype.post_gyijfi$ = function (url, data, headers, success, error) {
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    this.post_t5flxe$.call(this, url, data, headers, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), success, error);
  };
  API.prototype.post_t5flxe$ = function (url, data, query, headers, success, error) {
    if (query === void 0) {
      query = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    var key = 'Content-Type';
    var value = 'application/json';
    headers.put_xwzc9p$(key, value);
    var value_0 = 'application/json';
    headers.put_xwzc9p$('Accept', value_0);
    this.checkAuthHeader_0(headers);
    Http_getInstance().post_jna2ah$(url, JSON.stringify(data), query, headers, this.parseSuccess_0(success), this.parseError_0(url, error));
  };
  API.prototype.put_gyijfi$ = function (url, data, headers, success, error) {
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    this.put_t5flxe$.call(this, url, data, headers, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), success, error);
  };
  API.prototype.put_t5flxe$ = function (url, data, query, headers, success, error) {
    if (query === void 0) {
      query = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    var key = 'Content-Type';
    var value = 'application/json';
    headers.put_xwzc9p$(key, value);
    var value_0 = 'application/json';
    headers.put_xwzc9p$('Accept', value_0);
    this.checkAuthHeader_0(headers);
    Http_getInstance().put_jna2ah$(url, JSON.stringify(data), query, headers, this.parseSuccess_0(success), this.parseError_0(url, error));
  };
  API.prototype.upload_3q80fv$ = function (url, file, headers, success, error) {
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    var value = 'application/json';
    headers.put_xwzc9p$('Accept', value);
    this.checkAuthHeader_0(headers);
    Http_getInstance().upload_4idgfw$(url, file, headers, this.parseSuccess_0(success), this.parseError_0(url, error));
  };
  API.prototype.download_yaxyun$ = function (url, query, headers, success, error) {
    if (query === void 0) {
      query = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    if (headers === void 0) {
      headers = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    }
    this.checkAuthHeader_0(headers);
    Http_getInstance().download_kkad8o$(url, query, headers, this.parseSuccess_0(success), this.parseError_0(url, error));
  };
  API.prototype.checkAuthHeader_0 = function (headers) {
    var tmp$, tmp$_0;
    if (this.authorization != null && !headers.containsKey_11rb$('Authorization')) {
      tmp$_0 = (tmp$ = this.authorization) != null ? tmp$ : Kotlin.throwNPE();
      var key = 'Authorization';
      var value = 'Bearer ' + tmp$_0;
      headers.put_xwzc9p$(key, value);
    }
  };
  function API$parseSuccess$lambda(closure$success) {
    return function (it) {
      if (it == null || Kotlin.kotlin.text.isBlank_gw00vp$(it)) {
        closure$success(it);
      }
       else {
        try {
          closure$success(JSON.parse(it != null ? it : Kotlin.throwNPE()));
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            closure$success(it);
          }
           else
            throw e;
        }
      }
    };
  }
  API.prototype.parseSuccess_0 = function (success) {
    return API$parseSuccess$lambda(success);
  };
  function API$parseError$lambda$ObjectLiteral(closure$err, closure$code, closure$url) {
    this.error = closure$err.v;
    this.code = closure$code;
    this.url = closure$url;
  }
  API$parseError$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function API$parseError$lambda(closure$error, closure$url) {
    return function (body, code) {
      var tmp$;
      var err = {v: null};
      try {
        err.v = !(body == null || Kotlin.kotlin.text.isBlank_gw00vp$(body)) ? JSON.parse(body != null ? body : Kotlin.throwNPE()) : 'connection_error';
        err.v = (tmp$ = err.v.error) != null ? tmp$ : err.v;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          err.v = body;
        }
         else
          throw e;
      }
      closure$error(err.v, code);
      emit('common@api:error', new API$parseError$lambda$ObjectLiteral(err, code, closure$url));
    };
  }
  API.prototype.parseError_0 = function (url, error) {
    return API$parseError$lambda(error, url);
  };
  API.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'API',
    interfaces: []
  };
  var API_instance = null;
  function API_getInstance() {
    if (API_instance === null) {
      new API();
    }
    return API_instance;
  }
  function Action(moduleName, _process) {
    Action$Companion_getInstance();
    if (_process === void 0)
      _process = Action_init$lambda;
    this.moduleName_qrcr60$_0 = moduleName;
    this._process_qrcr60$_0 = _process;
    Action$Companion_getInstance().actions.plus_11rb$(this.actionName());
    on(this.actionName(), Action_init$lambda_0(this));
  }
  function Action$Companion() {
    Action$Companion_instance = this;
    this.actions = modelListOf([]);
  }
  Action$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Action$Companion_instance = null;
  function Action$Companion_getInstance() {
    if (Action$Companion_instance === null) {
      new Action$Companion();
    }
    return Action$Companion_instance;
  }
  Action.prototype.actionName = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.moduleName_qrcr60$_0 + '@';
    var $receiver = (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : Kotlin.throwNPE();
    var a = tmp$_0 + Regex('(?!^)([A-Z])').replace_x2uqeu$($receiver, '_$1').toLowerCase();
    return a;
  };
  function Action$process$lambda(this$Action) {
    return function (it) {
      this$Action.done_s8jyv4$(it);
    };
  }
  function Action$process$lambda_0(this$Action) {
    return function (it) {
      this$Action.fail_pdl1vj$(it);
    };
  }
  Action.prototype.process_za3rmp$ = function (data) {
    this._process_qrcr60$_0(data, Action$process$lambda(this), Action$process$lambda_0(this));
  };
  Action.prototype.done_s8jyv4$ = function (data) {
    if (data === void 0)
      data = null;
    emit(this.actionName() + ':success', data);
  };
  Action.prototype.fail_pdl1vj$ = function (error) {
    if (error === void 0)
      error = null;
    console.error(error);
    emit(this.actionName() + ':error', error);
  };
  function Action_init$lambda(data, done, fail) {
  }
  function Action_init$lambda_0(this$Action) {
    return function (data) {
      try {
        this$Action.process_za3rmp$(data);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          console.error(e.message);
          this$Action.fail_pdl1vj$(e.message);
        }
         else
          throw e;
      }
    };
  }
  Action.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function EventEmitter() {
    EventEmitter_instance = this;
    this.map = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    this.counter = 0;
    this.idClientMap = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    this.debug = global()._ENV != 'production';
    EventEmitter_getInstance().buildWorkerBridge_nfsrun$(global());
  }
  EventEmitter.prototype.empty_0 = function () {
    return Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
  };
  EventEmitter.prototype.on_dhjwdb$ = function (event, handler) {
    var tmp$;
    var id = (tmp$ = this.counter, this.counter = tmp$ + 1 | 0, tmp$);
    var $receiver = this.map;
    var tmp$_0;
    var value = $receiver.get_11rb$(event);
    if (value == null) {
      var answer = this.empty_0();
      $receiver.put_xwzc9p$(event, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    tmp$_0.put_xwzc9p$(id, handler);
    return id;
  };
  function EventEmitter$once$lambda(this$EventEmitter, closure$event, closure$id, closure$handler) {
    return function (data) {
      var tmp$;
      (tmp$ = this$EventEmitter.map.get_11rb$(closure$event)) != null ? tmp$.remove_11rb$(closure$id) : null;
      closure$handler(data);
    };
  }
  EventEmitter.prototype.once_dhjwdb$ = function (event, handler) {
    var tmp$;
    var id = (tmp$ = this.counter, this.counter = tmp$ + 1 | 0, tmp$);
    var $receiver = this.map;
    var tmp$_0;
    var value = $receiver.get_11rb$(event);
    if (value == null) {
      var answer = this.empty_0();
      $receiver.put_xwzc9p$(event, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    tmp$_0.put_xwzc9p$(id, EventEmitter$once$lambda(this, event, id, handler));
    return id;
  };
  EventEmitter.prototype.remove_bm4lxs$ = function (event, eventId) {
    var tmp$;
    (tmp$ = this.map.get_11rb$(event)) != null ? tmp$.remove_11rb$(eventId) : null;
  };
  function EventEmitter$emit$lambda(closure$data) {
    return function () {
      return closure$data;
    };
  }
  EventEmitter.prototype.emit_4w9ihe$ = function (event, data) {
    this.emit_afmhsq$(event, EventEmitter$emit$lambda(data));
  };
  EventEmitter.prototype.emit_afmhsq$ = function (event, data) {
    var tmp$;
    var d = data();
    if ((tmp$ = this.map.get_11rb$(event)) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element.value(d);
      }
    }
  };
  function EventEmitter$buildWorkerBridge$lambda$lambda(closure$data) {
    return function () {
      return !isBlank(closure$data) ? JSON.parse(closure$data) : null;
    };
  }
  function EventEmitter$buildWorkerBridge$lambda(this$EventEmitter) {
    return function (e) {
      var message = e.data;
      var idx = indexOf(message, '@@@');
      var event = message.substring(0, idx);
      var startIndex = idx + 3 | 0;
      var data = message.substring(startIndex);
      this$EventEmitter.emit_afmhsq$(event, EventEmitter$buildWorkerBridge$lambda$lambda(data));
    };
  }
  function EventEmitter$buildWorkerBridge$lambda$lambda_0(closure$context, closure$data) {
    return function (d) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = closure$data.event + '@@@' + ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = d, Model) ? tmp$ : null) != null ? tmp$_0.json() : null) != null ? tmp$_1 : d != null && d != undefined ? JSON.stringify(d) : '');
      closure$context.postMessage(tmp$_2);
    };
  }
  function EventEmitter$buildWorkerBridge$lambda_0(closure$context, this$EventEmitter) {
    return function (data) {
      var id = this$EventEmitter.on_dhjwdb$(data.event, EventEmitter$buildWorkerBridge$lambda$lambda_0(closure$context, data));
      this$EventEmitter.idClientMap.put_xwzc9p$(data.event_id.toString(), id);
    };
  }
  function EventEmitter$buildWorkerBridge$lambda_1(this$EventEmitter) {
    return function (data) {
      var eventId = this$EventEmitter.idClientMap.get_11rb$(data.event_id.toString());
      if (eventId != null)
        this$EventEmitter.remove_bm4lxs$(data.event, eventId);
    };
  }
  EventEmitter.prototype.buildWorkerBridge_nfsrun$ = function (context) {
    context.onmessage = EventEmitter$buildWorkerBridge$lambda(this);
    this.on_dhjwdb$('_on', EventEmitter$buildWorkerBridge$lambda_0(context, this));
    this.on_dhjwdb$('_remove', EventEmitter$buildWorkerBridge$lambda_1(this));
  };
  EventEmitter.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'EventEmitter',
    interfaces: []
  };
  var EventEmitter_instance = null;
  function EventEmitter_getInstance() {
    if (EventEmitter_instance === null) {
      new EventEmitter();
    }
    return EventEmitter_instance;
  }
  function FileUtil() {
    FileUtil_instance = this;
  }
  function FileUtil$dataURItoBlob$ObjectLiteral(closure$mimeString) {
    this.type = closure$mimeString.v;
  }
  FileUtil$dataURItoBlob$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  FileUtil.prototype.dataURItoBlob_61zpoe$ = function (dataURI) {
    var tmp$;
    var byteString;
    if (indexOf(split(dataURI, [44]).get_za3lpa$(0), 'base64') >= 0)
      byteString = global().atob(split(dataURI, [44]).get_za3lpa$(1));
    else
      byteString = split(dataURI, [44]).get_za3lpa$(1);
    var mimeString = {v: split(split(split(dataURI, [44]).get_za3lpa$(0), [58]).get_za3lpa$(1), [59]).get_za3lpa$(0)};
    var ia = new Uint8Array(byteString.length);
    tmp$ = byteString.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      ia[i] = Kotlin.toByte(Kotlin.unboxChar(byteString.charCodeAt(i)) | 0);
    }
    return new Blob([ia], new FileUtil$dataURItoBlob$ObjectLiteral(mimeString));
  };
  function FileUtil$blobToDataURI$lambda(closure$callback, closure$reader) {
    return function (it) {
      var tmp$;
      console.warn('Read');
      closure$callback(typeof (tmp$ = closure$reader.v.result) === 'string' ? tmp$ : Kotlin.throwCCE());
    };
  }
  FileUtil.prototype.blobToDataURI_6qn1oa$ = function (blob, callback) {
    console.warn('Reading file...');
    var reader = {v: new FileReader()};
    reader.v.onload = FileUtil$blobToDataURI$lambda(callback, reader);
    reader.v.readAsDataURL(blob);
  };
  function FileUtil$writeTempFile$ObjectLiteral() {
    this.create = true;
  }
  FileUtil$writeTempFile$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  FileUtil.prototype.writeTempFile_6qn1oa$ = function (blob, callback) {
    var tmp$;
    var global_0 = global();
    var requestFileSystemSync = (tmp$ = global_0.webkitRequestFileSystemSync) != null ? tmp$ : global_0.requestFileSystemSync;
    var fs = requestFileSystemSync(0, blob.size);
    var fileEntry = fs.root.getFile((new Date()).getTime().toString(), new FileUtil$writeTempFile$ObjectLiteral());
    fileEntry.createWriter().write(blob);
    callback(fileEntry.toURL());
  };
  FileUtil.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'FileUtil',
    interfaces: []
  };
  var FileUtil_instance = null;
  function FileUtil_getInstance() {
    if (FileUtil_instance === null) {
      new FileUtil();
    }
    return FileUtil_instance;
  }
  function Http() {
    Http_instance = this;
  }
  Http.prototype.get_kkad8o$ = function (url, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('GET', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.onreadystatechange = this.callback_0(request, success, error);
    request.onerror = this.errorCallback_0(request, error);
    request.send();
  };
  Http.prototype.delete_kkad8o$ = function (url, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('DELETE', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.onreadystatechange = this.callback_0(request, success, error);
    request.onerror = this.errorCallback_0(request, error);
    request.send();
  };
  Http.prototype.post_s4ydtl$ = function (url, data, headers, success, error) {
    this.post_jna2ah$.call(this, url, data, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), headers, success, error);
  };
  Http.prototype.post_jna2ah$ = function (url, data, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('POST', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.onreadystatechange = this.callback_0(request, success, error);
    request.onerror = this.errorCallback_0(request, error);
    request.send(data);
  };
  Http.prototype.put_s4ydtl$ = function (url, data, headers, success, error) {
    this.put_jna2ah$.call(this, url, data, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), headers, success, error);
  };
  Http.prototype.put_jna2ah$ = function (url, data, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('PUT', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.onreadystatechange = this.callback_0(request, success, error);
    request.onerror = this.errorCallback_0(request, error);
    request.send(data);
  };
  function Http$download$lambda$lambda(closure$success) {
    return function (it) {
      closure$success(it);
    };
  }
  function Http$download$lambda(closure$success) {
    return function (it) {
      var tmp$;
      FileUtil_getInstance().writeTempFile_6qn1oa$(Kotlin.isType(tmp$ = it, Blob) ? tmp$ : Kotlin.throwCCE(), Http$download$lambda$lambda(closure$success));
    };
  }
  Http.prototype.download_kkad8o$ = function (url, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('GET', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.responseType = 'blob';
    request.onreadystatechange = this.callbackBlob_0(request, Http$download$lambda(success), error);
    request.onerror = this.errorCallback_0(request, error);
    request.send();
  };
  Http.prototype.upload_4idgfw$ = function (url, data, headers, success, error) {
    this.upload_32db1y$.call(this, url, data, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), headers, success, error);
  };
  Http.prototype.upload_32db1y$ = function (url, data, query, headers, success, error) {
    var request = new XMLHttpRequest();
    var urlQuery = this.buildQuery_0(query);
    request.open('POST', url + urlQuery);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.value);
    }
    request.onreadystatechange = this.callback_0(request, success, error);
    request.onerror = this.errorCallback_0(request, error);
    var formData = new FormData();
    formData.append('uploads[]', FileUtil_getInstance().dataURItoBlob_61zpoe$(data));
    request.send(formData);
  };
  function Http$callback$lambda(closure$request, closure$success, closure$error) {
    return function (it) {
      if (closure$request.readyState === XMLHttpRequest.DONE) {
        if (closure$request.status >= Kotlin.toShort(200) && closure$request.status < Kotlin.toShort(300)) {
          closure$success(closure$request.responseText);
        }
         else {
          closure$error(closure$request.responseText, closure$request.status);
        }
        closure$request.onreadystatechange = null;
        closure$request.onerror = null;
      }
    };
  }
  Http.prototype.callback_0 = function (request, success, error) {
    return Http$callback$lambda(request, success, error);
  };
  function Http$callbackBlob$lambda(closure$request, closure$success, closure$error) {
    return function (it) {
      var tmp$;
      if (closure$request.readyState === XMLHttpRequest.DONE) {
        if (closure$request.status >= Kotlin.toShort(200) && closure$request.status < Kotlin.toShort(300)) {
          closure$success((tmp$ = closure$request.response) != null ? tmp$ : Kotlin.throwNPE());
        }
         else {
          closure$error(closure$request.responseText, closure$request.status);
        }
        closure$request.onreadystatechange = null;
        closure$request.onerror = null;
      }
    };
  }
  Http.prototype.callbackBlob_0 = function (request, success, error) {
    return Http$callbackBlob$lambda(request, success, error);
  };
  function Http$errorCallback$lambda(closure$error, closure$request) {
    return function (err) {
      closure$error('connection_error', closure$request.status);
      closure$request.onreadystatechange = null;
      closure$request.onerror = null;
    };
  }
  Http.prototype.errorCallback_0 = function (request, error) {
    return Http$errorCallback$lambda(error, request);
  };
  Http.prototype.buildQuery_0 = function (query) {
    var urlQuery = {v: ''};
    if (!query.isEmpty()) {
      urlQuery.v = '?';
      var tmp$;
      tmp$ = query.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        urlQuery.v += element.key + '=' + element.value + '&';
      }
    }
    return urlQuery.v;
  };
  Http.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Http',
    interfaces: []
  };
  var Http_instance = null;
  function Http_getInstance() {
    if (Http_instance === null) {
      new Http();
    }
    return Http_instance;
  }
  function Model(_d) {
    if (_d === void 0)
      _d = new Model_init$ObjectLiteral();
    this._d_8be2vx$ = _d;
    this._data_osk6wz$_0 = new Model$_data$ObjectLiteral();
    this._error_8be2vx$ = new Model$_error$ObjectLiteral();
    this._props = [];
    this._populators = [];
    this._validators = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    this._parent = Model$_parent$lambda;
    this._name = Model$_name$lambda;
  }
  Object.defineProperty(Model.prototype, '_data', {
    get: function () {
      return this._data_osk6wz$_0;
    },
    set: function (_data) {
      this._data_osk6wz$_0 = _data;
    }
  });
  Model.prototype.observable_m38zes$ = function (propName, validators, def) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$Observable(this, propName, def, validators);
  };
  function Model$observable$lambda() {
    return null;
  }
  Model.prototype.observable_vzdcz6$ = function (propName, validators) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$Observable(this, propName, Model$observable$lambda, validators);
  };
  Model.prototype.modelObservable_x5h7f$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$ModelObservable(this, propName, validators, transformer);
  };
  function Model$modelObservable$lambda(closure$transformer) {
    return function (it) {
      return closure$transformer.parse_za3rmp$(it);
    };
  }
  Model.prototype.modelObservable_m255i1$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$ModelObservable(this, propName, validators, Model$modelObservable$lambda(transformer));
  };
  Model.prototype.listObservable_enb3ep$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$ListObservable(this, propName, validators, transformer);
  };
  function Model$listObservable$lambda(closure$transformer) {
    return function (it) {
      return closure$transformer.parse_za3rmp$(it);
    };
  }
  Model.prototype.listObservable_7zlsi5$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$ListObservable(this, propName, validators, Model$listObservable$lambda(transformer));
  };
  Model.prototype.mapObservable_enb3ep$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$MapObservable(this, propName, validators, transformer);
  };
  function Model$mapObservable$lambda(closure$transformer) {
    return function (it) {
      return closure$transformer.parse_za3rmp$(it);
    };
  }
  Model.prototype.mapObservable_7zlsi5$ = function (propName, validators, transformer) {
    if (validators === void 0) {
      validators = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$();
    }
    return new Model$MapObservable(this, propName, validators, Model$mapObservable$lambda(transformer));
  };
  Model.prototype.json = function () {
    return JSON.stringify(this._data);
  };
  Model.prototype.data = function () {
    return this._data;
  };
  Model.prototype.clone = function () {
    return clone(this._data);
  };
  Model.prototype.data_za3rmp$ = function (d) {
    var tmp$, tmp$_0;
    tmp$ = this._populators;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var p = tmp$[tmp$_0];
      p(d);
    }
    this.propagateChange();
    this.propagateErrorChange();
  };
  Model.prototype.error = function () {
    return this._error_8be2vx$;
  };
  Model.prototype.cleanError = function () {
    var $receiver = this._props;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (this._error_8be2vx$[element] != null)
        this.cleanError_61zpoe$(element);
    }
  };
  function Model$cleanError$ObjectLiteral() {
    this.has_error = false;
  }
  Model$cleanError$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Model.prototype.cleanError_61zpoe$ = function (propName) {
    this._error_8be2vx$[propName] = new Model$cleanError$ObjectLiteral();
    this.propagateErrorChange_3wf3g5$(propName, this._error_8be2vx$[propName]);
  };
  Model.prototype.propagatePropChange_3wf3g5$$default = function (propName, value, propagateMe) {
    var tmp$;
    (tmp$ = this._parent()) != null ? tmp$.propagatePropChange_3wf3g5$(this.pathOf_61zpoe$(propName), value, false) : null;
    if (propagateMe) {
      this.propagateChange();
    }
  };
  Model.prototype.propagatePropChange_3wf3g5$ = function (propName, value, propagateMe, callback$default) {
    if (propagateMe === void 0)
      propagateMe = true;
    callback$default ? callback$default(propName, value, propagateMe) : this.propagatePropChange_3wf3g5$$default(propName, value, propagateMe);
  };
  Model.prototype.propagateChange = function () {
    var tmp$;
    (tmp$ = this._parent()) != null ? tmp$.propagatePropChange_3wf3g5$(this._name(), this._data) : null;
  };
  Model.prototype.propagateErrorChange_3wf3g5$$default = function (propName, error, propagateMe) {
    var tmp$;
    (tmp$ = this._parent()) != null ? tmp$.propagateErrorChange_3wf3g5$(this.pathOf_61zpoe$(propName), error, false) : null;
    if (propagateMe) {
      this.propagateErrorChange();
    }
     else {
      this.checkHasError_osk6wz$_0();
    }
  };
  Model.prototype.propagateErrorChange_3wf3g5$ = function (propName, error, propagateMe, callback$default) {
    if (propagateMe === void 0)
      propagateMe = true;
    callback$default ? callback$default(propName, error, propagateMe) : this.propagateErrorChange_3wf3g5$$default(propName, error, propagateMe);
  };
  Model.prototype.propagateErrorChange = function () {
    var tmp$;
    this.checkHasError_osk6wz$_0();
    (tmp$ = this._parent()) != null ? tmp$.propagateErrorChange_3wf3g5$(this._name(), this._error_8be2vx$) : null;
  };
  Model.prototype.checkHasError_osk6wz$_0 = function () {
    delete(this._error_8be2vx$.has_error);
    this._error_8be2vx$.has_error = contains(JSON.stringify(this._error_8be2vx$), 'true');
  };
  function Model$bindParent$lambda(closure$parent) {
    return function () {
      return closure$parent;
    };
  }
  function Model$bindParent$lambda_0(closure$propName) {
    return function () {
      return closure$propName;
    };
  }
  Model.prototype.bindParent_1ji9ox$ = function (propName, parent) {
    this._parent = Model$bindParent$lambda(parent);
    this._name = Model$bindParent$lambda_0(propName);
  };
  Model.prototype.setValue_i4ucop$ = function (propName, value, silent) {
    if (silent === void 0)
      silent = false;
    if (Kotlin.isType(value, Model)) {
      value.bindParent_1ji9ox$(propName, this);
    }
    this._data[propName] = this.toDataValue_mh5how$(value);
    this.validate_hrz116$_0(propName, value);
    if (!silent)
      this.propagatePropChange_3wf3g5$(propName, this._data[propName]);
  };
  function Model$validate$ObjectLiteral() {
  }
  Model$validate$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Model.prototype.validate_hrz116$_0 = function (propName, value, err) {
    if (err === void 0)
      err = new Model$validate$ObjectLiteral();
    var tmp$, tmp$_0;
    if ((tmp$ = this._validators.get_11rb$(propName)) != null) {
      var tmp$_1;
      tmp$_1 = tmp$.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element(err, value, this);
      }
    }
    err.has_error = contains(JSON.stringify(err), 'true');
    this._error_8be2vx$[propName] = err;
    (tmp$_0 = this._parent()) != null ? tmp$_0.validate_hrz116$_0(this._name(), this, this._error_8be2vx$) : null;
    this.propagateErrorChange_3wf3g5$(propName, this._error_8be2vx$[propName]);
  };
  Model.prototype.toDataValue_mh5how$ = function (value) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = value, Model) ? tmp$ : null) != null ? tmp$_0.data() : null) != null ? tmp$_1 : value;
  };
  Model.prototype.pathOf_61zpoe$ = function (propName) {
    return !(this._name().length === 0) ? this._name() + '.' + propName : propName;
  };
  function Model$Observable(model, propName, def, validators) {
    this.propName = propName;
    this.validators = validators;
    this.value_0 = null;
    var $receiver = model._props;
    var element = this.propName;
    model._props = $receiver.concat([element]);
    var $receiver_0 = model._validators;
    var key = this.propName;
    var value = this.validators;
    $receiver_0.put_xwzc9p$(key, value);
    this.value_0 = def();
    var populator = Model$Model$Observable_init$lambda(this, model, def);
    model._populators = model._populators.concat([populator]);
    populator(model._d_8be2vx$);
  }
  Model$Observable.prototype.getValue_lrcp0p$ = function (model, property) {
    return this.value_0;
  };
  Model$Observable.prototype.setValue_9rddgb$ = function (model, property, value) {
    this.value_0 = value;
    model.setValue_i4ucop$(this.propName, value);
  };
  function Model$Model$Observable_init$lambda(this$Observable, closure$model, closure$def) {
    return function (it) {
      var tmp$;
      if (it[this$Observable.propName] != null) {
        this$Observable.value_0 = (tmp$ = it[this$Observable.propName]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
        closure$model.setValue_i4ucop$(this$Observable.propName, this$Observable.value_0, true);
      }
       else {
        this$Observable.value_0 = closure$def();
        closure$model.setValue_i4ucop$(this$Observable.propName, this$Observable.value_0, true);
      }
    };
  }
  Model$Observable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Observable',
    interfaces: [ReadWriteProperty]
  };
  function Model$ModelObservable(model, propName, validators, transformer) {
    if (transformer === void 0)
      transformer = Model$Model$ModelObservable_init$lambda;
    this.propName = propName;
    this.validators = validators;
    this.value_0 = null;
    var $receiver = model._props;
    var element = this.propName;
    model._props = $receiver.concat([element]);
    var $receiver_0 = model._validators;
    var key = this.propName;
    var value = this.validators;
    $receiver_0.put_xwzc9p$(key, value);
    this.value_0 = transformer(new Model$Model$ModelObservable_init$ObjectLiteral());
    var populator = Model$Model$ModelObservable_init$lambda_0(transformer, this, model);
    model._populators = model._populators.concat([populator]);
    populator(model._d_8be2vx$);
  }
  Model$ModelObservable.prototype.getValue_lrcp0p$ = function (model, property) {
    return this.value_0;
  };
  Model$ModelObservable.prototype.setValue_9rddgb$ = function (model, property, value) {
    this.value_0 = value;
    model.setValue_i4ucop$(this.propName, value);
  };
  function Model$Model$ModelObservable_init$lambda(it) {
    return it;
  }
  function Model$Model$ModelObservable_init$ObjectLiteral() {
  }
  Model$Model$ModelObservable_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$Model$ModelObservable_init$lambda$ObjectLiteral() {
  }
  Model$Model$ModelObservable_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$Model$ModelObservable_init$lambda_0(closure$transformer, this$ModelObservable, closure$model) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = it[this$ModelObservable.propName]) != null ? tmp$ : new Model$Model$ModelObservable_init$lambda$ObjectLiteral();
      this$ModelObservable.value_0 = closure$transformer(tmp$_0);
      closure$model.setValue_i4ucop$(this$ModelObservable.propName, this$ModelObservable.value_0, true);
    };
  }
  Model$ModelObservable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ModelObservable',
    interfaces: [ReadWriteProperty]
  };
  function Model$ListObservable(model, propName, validators, transformer) {
    if (transformer === void 0)
      transformer = Model$Model$ListObservable_init$lambda;
    this.propName = propName;
    this.validators = validators;
    this.transformer = transformer;
    this.value_0 = null;
    var tmp$;
    var $receiver = model._props;
    var element = this.propName;
    model._props = $receiver.concat([element]);
    var $receiver_0 = model._validators;
    var key = this.propName;
    var value = this.validators;
    $receiver_0.put_xwzc9p$(key, value);
    this.value_0 = (tmp$ = ModelList$Companion_getInstance().fromDynamic_xaus8m$([], this.transformer)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
    var populator = Model$Model$ListObservable_init$lambda_0(this, model);
    model._populators = model._populators.concat([populator]);
    populator(model._d_8be2vx$);
  }
  Model$ListObservable.prototype.getValue_lrcp0p$ = function (model, property) {
    return this.value_0;
  };
  Model$ListObservable.prototype.setValue_9rddgb$ = function (model, property, value) {
    this.value_0 = value;
    model.setValue_i4ucop$(this.propName, value);
  };
  function Model$Model$ListObservable_init$lambda(it) {
    return it;
  }
  function Model$Model$ListObservable_init$lambda_0(this$ListObservable, closure$model) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_2 = ModelList$Companion_getInstance();
      tmp$_0 = (tmp$ = it[this$ListObservable.propName]) != null ? tmp$ : [];
      tmp$_1 = this$ListObservable.transformer;
      this$ListObservable.value_0 = (tmp$_3 = tmp$_2.fromDynamic_xaus8m$(tmp$_0, tmp$_1)) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : Kotlin.throwCCE();
      closure$model.setValue_i4ucop$(this$ListObservable.propName, this$ListObservable.value_0, true);
    };
  }
  Model$ListObservable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ListObservable',
    interfaces: [ReadWriteProperty]
  };
  function Model$MapObservable(model, propName, validators, transformer) {
    if (transformer === void 0)
      transformer = Model$Model$MapObservable_init$lambda;
    this.propName = propName;
    this.validators = validators;
    this.transformer = transformer;
    this.value_0 = null;
    var tmp$;
    var $receiver = model._props;
    var element = this.propName;
    model._props = $receiver.concat([element]);
    var $receiver_0 = model._validators;
    var key = this.propName;
    var value = this.validators;
    $receiver_0.put_xwzc9p$(key, value);
    this.value_0 = (tmp$ = ModelMap$Companion_getInstance().fromDynamic_xaus8m$(new Model$Model$MapObservable_init$ObjectLiteral(), this.transformer)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
    var populator = Model$Model$MapObservable_init$lambda_0(this, model);
    model._populators = model._populators.concat([populator]);
    populator(model._d_8be2vx$);
  }
  Model$MapObservable.prototype.getValue_lrcp0p$ = function (model, property) {
    return this.value_0;
  };
  Model$MapObservable.prototype.setValue_9rddgb$ = function (model, property, value) {
    this.value_0 = value;
    model.setValue_i4ucop$(this.propName, value);
  };
  function Model$Model$MapObservable_init$lambda(it) {
    return it;
  }
  function Model$Model$MapObservable_init$ObjectLiteral() {
  }
  Model$Model$MapObservable_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$Model$MapObservable_init$lambda$ObjectLiteral() {
  }
  Model$Model$MapObservable_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$Model$MapObservable_init$lambda_0(this$MapObservable, closure$model) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_2 = ModelMap$Companion_getInstance();
      tmp$_0 = (tmp$ = it[this$MapObservable.propName]) != null ? tmp$ : new Model$Model$MapObservable_init$lambda$ObjectLiteral();
      tmp$_1 = this$MapObservable.transformer;
      this$MapObservable.value_0 = (tmp$_3 = tmp$_2.fromDynamic_xaus8m$(tmp$_0, tmp$_1)) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : Kotlin.throwCCE();
      closure$model.setValue_i4ucop$(this$MapObservable.propName, this$MapObservable.value_0, true);
    };
  }
  Model$MapObservable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MapObservable',
    interfaces: [ReadWriteProperty]
  };
  function Model_init$ObjectLiteral() {
  }
  Model_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$_data$ObjectLiteral() {
  }
  Model$_data$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$_error$ObjectLiteral() {
  }
  Model$_error$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Model$_parent$lambda() {
    return null;
  }
  function Model$_name$lambda() {
    return '';
  }
  Model.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function ModelList() {
    ModelList$Companion_getInstance();
    Model.call(this);
    this._data_io2nb5$_0 = [];
    this.list = [];
  }
  Object.defineProperty(ModelList.prototype, '_data', {
    get: function () {
      return this._data_io2nb5$_0;
    },
    set: function (_data) {
      this._data_io2nb5$_0 = _data;
    }
  });
  function ModelList$Companion() {
    ModelList$Companion_instance = this;
  }
  function ModelList$Companion$fromDynamic$lambda(it) {
    return it;
  }
  ModelList$Companion.prototype.fromDynamic_xaus8m$ = function (data, transformer) {
    if (transformer === void 0)
      transformer = ModelList$Companion$fromDynamic$lambda;
    var tmp$;
    var arr = modelListOf([]);
    if (data != null) {
      tmp$ = iterator(data);
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        arr.plus_11rb$(transformer(k));
      }
    }
    return arr;
  };
  ModelList$Companion.prototype.fromDynamic_pziq82$ = function (data, transformer) {
    var tmp$;
    var arr = modelListOf([]);
    if (data != null) {
      tmp$ = iterator(data);
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        arr.plus_11rb$(transformer.parse_za3rmp$(k));
      }
    }
    return arr;
  };
  ModelList$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModelList$Companion_instance = null;
  function ModelList$Companion_getInstance() {
    if (ModelList$Companion_instance === null) {
      new ModelList$Companion();
    }
    return ModelList$Companion_instance;
  }
  function ModelList$refreshAllDataValues$ObjectLiteral() {
  }
  ModelList$refreshAllDataValues$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  ModelList.prototype.refreshAllDataValues = function () {
    var tmp$;
    this._data = [];
    this._error_8be2vx$ = new ModelList$refreshAllDataValues$ObjectLiteral();
    var i = {v: 0};
    var $receiver = this.list;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      this.setDataValue_5x52oa$(i.v, element, true);
      i.v = i.v + 1 | 0;
    }
    (tmp$ = this._parent()) != null ? tmp$.setValue_i4ucop$(this._name(), this) : null;
    this.propagateChange();
  };
  function ModelList$setDataValue$ObjectLiteral() {
  }
  ModelList$setDataValue$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  ModelList.prototype.setDataValue_5x52oa$ = function (i, value, silent) {
    if (silent === void 0)
      silent = false;
    this._error_8be2vx$[i.toString()] = new ModelList$setDataValue$ObjectLiteral();
    this.setValue_i4ucop$(i.toString(), value, silent);
  };
  ModelList.prototype.plus_11rb$ = function (e) {
    this.list = this.list.concat([e]);
    this.setDataValue_5x52oa$(this.list.length - 1 | 0, e);
  };
  ModelList.prototype.add_11rb$ = function (e) {
    this.list = this.list.concat([e]);
    this.setDataValue_5x52oa$(this.list.length - 1 | 0, e);
  };
  ModelList.prototype.addAll_brywnq$ = function (e) {
    var tmp$;
    tmp$ = e.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.list = this.list.concat([element]);
    }
    this.refreshAllDataValues();
  };
  function ModelList$addAll$lambda(this$ModelList) {
    return function (it) {
      this$ModelList.list = this$ModelList.list.concat([it]);
    };
  }
  ModelList.prototype.addAll_vljjlk$ = function (e) {
    e.forEach_qlkmfe$(ModelList$addAll$lambda(this));
    this.refreshAllDataValues();
  };
  ModelList.prototype.filter_ucl7l2$ = function (predicate) {
    var arr = modelListOf([]);
    var $receiver = this.list;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (predicate(element))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      arr.plus_11rb$(element_0);
    }
    return arr;
  };
  ModelList.prototype.isNotEmpty = function () {
    return !(this.list.length === 0);
  };
  ModelList.prototype.isEmpty = function () {
    return this.list.length === 0;
  };
  ModelList.prototype.get_za3lpa$ = function (i) {
    return this.list[i];
  };
  ModelList.prototype.firstOrNull_ucl7l2$ = function (predicate) {
    var $receiver = this.list;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (predicate(element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Object.defineProperty(ModelList.prototype, 'size', {
    get: function () {
      return this.list.length;
    }
  });
  ModelList.prototype.removeAt_za3lpa$ = function (idx) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var arr = [];
    tmp$ = get_indices(this.list);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      if (i !== idx) {
        var $receiver = arr;
        var element = this.list[i];
        arr = $receiver.concat([element]);
      }
    }
    this.list = arr;
    this.refreshAllDataValues();
  };
  ModelList.prototype.indexOfFirst_ucl7l2$ = function (predicate) {
    var $receiver = this.list;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = Kotlin.kotlin.collections.get_indices_m7z4lg$($receiver);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
        if (predicate($receiver[index])) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
      }
      indexOfFirst$result = -1;
    }
     while (false);
    return indexOfFirst$result;
  };
  ModelList.prototype.forEach_qlkmfe$ = function (predicate) {
    var $receiver = this.list;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      predicate(element);
    }
  };
  ModelList.prototype.forEachIndexed_m6r102$ = function (action) {
    var $receiver = this.list;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      action((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item);
    }
  };
  ModelList.prototype.any_ucl7l2$ = function (predicate) {
    var $receiver = this.list;
    var any$result;
    any$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (predicate(element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  ModelList.prototype.sort_32au1s$ = function (comparison) {
    this.list.sort(comparison);
    this.refreshAllDataValues();
  };
  ModelList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ModelList',
    interfaces: [Model]
  };
  function ModelMap() {
    ModelMap$Companion_getInstance();
    Model.call(this);
    this.map = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
  }
  function ModelMap$Companion() {
    ModelMap$Companion_instance = this;
  }
  function ModelMap$Companion$fromDynamic$lambda(it) {
    return it;
  }
  function ModelMap$Companion$fromDynamic$lambda_0(closure$m, closure$transformer) {
    return function (k, v) {
      closure$m.put_yuqcw7$(k, closure$transformer(v));
    };
  }
  ModelMap$Companion.prototype.fromDynamic_xaus8m$ = function (data, transformer) {
    if (transformer === void 0)
      transformer = ModelMap$Companion$fromDynamic$lambda;
    var m = modelMapOf([]);
    if (data != null)
      forIn(data, ModelMap$Companion$fromDynamic$lambda_0(m, transformer));
    return m;
  };
  function ModelMap$Companion$fromDynamic$lambda_1(closure$m, closure$transformer) {
    return function (k, v) {
      closure$m.put_yuqcw7$(k, closure$transformer.parse_za3rmp$(v));
    };
  }
  ModelMap$Companion.prototype.fromDynamic_pziq82$ = function (data, transformer) {
    var m = modelMapOf([]);
    if (data != null)
      forIn(data, ModelMap$Companion$fromDynamic$lambda_1(m, transformer));
    return m;
  };
  ModelMap$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModelMap$Companion_instance = null;
  function ModelMap$Companion_getInstance() {
    if (ModelMap$Companion_instance === null) {
      new ModelMap$Companion();
    }
    return ModelMap$Companion_instance;
  }
  function ModelMap$refreshAllDataValues$ObjectLiteral() {
  }
  ModelMap$refreshAllDataValues$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function ModelMap$refreshAllDataValues$ObjectLiteral_0() {
  }
  ModelMap$refreshAllDataValues$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  ModelMap.prototype.refreshAllDataValues = function () {
    var tmp$;
    this._data = new ModelMap$refreshAllDataValues$ObjectLiteral();
    this._error_8be2vx$ = new ModelMap$refreshAllDataValues$ObjectLiteral_0();
    var i = {v: 0};
    var tmp$_0;
    tmp$_0 = this.map.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.setDataValue_t5zf1q$(element.key, element.value, true);
      i.v = i.v + 1 | 0;
    }
    (tmp$ = this._parent()) != null ? tmp$.setValue_i4ucop$(this._name(), this) : null;
    this.propagateChange();
  };
  function ModelMap$setDataValue$ObjectLiteral() {
  }
  ModelMap$setDataValue$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  ModelMap.prototype.setDataValue_t5zf1q$ = function (key, value, silent) {
    if (silent === void 0)
      silent = false;
    this._error_8be2vx$[key] = new ModelMap$setDataValue$ObjectLiteral();
    this.setValue_i4ucop$(key, value, silent);
  };
  ModelMap.prototype.get_61zpoe$ = function (key) {
    return this.map.get_11rb$(key);
  };
  ModelMap.prototype.put_yuqcw7$ = function (key, value) {
    var b = this.map.put_xwzc9p$(key, value);
    this.setDataValue_t5zf1q$(key, value);
    return b;
  };
  ModelMap.prototype.putAll_yvpmsv$ = function (from) {
    var b = this.map.putAll_a2k3zr$(from);
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setDataValue_t5zf1q$(element.key, element.value, true);
    }
    this.propagateChange();
    return b;
  };
  ModelMap.prototype.remove_61zpoe$ = function (key) {
    var b = this.map.remove_11rb$(key);
    this.refreshAllDataValues();
    return b;
  };
  ModelMap.prototype.remove_yuqcw7$ = function (key, value) {
    var b = this.map.remove_xwzc9p$(key, value);
    this.refreshAllDataValues();
    return b;
  };
  ModelMap.prototype.size = function () {
    return this.map.size;
  };
  ModelMap.prototype.filter_u4398q$ = function (predicate) {
    var $receiver = this.map;
    var destination = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (predicate(element)) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination;
  };
  ModelMap.prototype.any_u4398q$ = function (predicate) {
    var $receiver = this.map;
    var any$result;
    any$break: do {
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (predicate(element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  ModelMap.prototype.forEach_8om4t6$ = function (action) {
    var tmp$;
    tmp$ = this.map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  ModelMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ModelMap',
    interfaces: [Model]
  };
  function Store(moduleName, data) {
    Store$Companion_getInstance();
    var tmp$;
    if (data === void 0) {
      data = tmp$;
    }
    Model.call(this, data);
    this.moduleName_lvc797$_0 = moduleName;
    Store$Companion_getInstance().stores.put_yuqcw7$(this.storeName(), this);
    this._name = Store_init$lambda(this);
  }
  function Store$Companion() {
    Store$Companion_instance = this;
    this.stores = modelMapOf([]);
  }
  Store$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Store$Companion_instance = null;
  function Store$Companion_getInstance() {
    if (Store$Companion_instance === null) {
      new Store$Companion();
    }
    return Store$Companion_instance;
  }
  Store.prototype.storeName = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.moduleName_lvc797$_0 + '@';
    var $receiver = (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : Kotlin.throwNPE();
    return tmp$_0 + Regex('([a-z])([A-Z])').replace_x2uqeu$($receiver, '$1_$2').toLowerCase();
  };
  Store.prototype.propagatePropChange_3wf3g5$$default = function (propName, value, propagateMe) {
    emit(this.storeName() + ':' + propName + ':changed', value);
    if (propagateMe)
      this.propagateChange();
  };
  Store.prototype.propagateErrorChange_3wf3g5$$default = function (propName, error, propagateMe) {
    emit(this.storeName() + ':' + propName + ':error', error);
    if (propagateMe)
      this.propagateErrorChange();
  };
  Store.prototype.propagateChange = function () {
    emit(this.storeName() + ':changed', this._data);
  };
  Store.prototype.propagateErrorChange = function () {
    Model.prototype.propagateErrorChange.call(this);
    emit(this.storeName() + ':error', this._error_8be2vx$);
  };
  function Store_init$lambda(this$Store) {
    return function () {
      return this$Store.storeName();
    };
  }
  Store.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Store',
    interfaces: [Model]
  };
  function Transformer(_parser) {
    this._parser_17xm2b$_0 = _parser;
  }
  Transformer.prototype.parse_za3rmp$ = function (data) {
    return this._parser_17xm2b$_0(data);
  };
  Transformer.prototype.parseList_za3rmp$ = function (list) {
    return ModelList$Companion_getInstance().fromDynamic_pziq82$(list, this);
  };
  Transformer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Transformer',
    interfaces: []
  };
  function global() {
    return eval('(function(){ return new Function("return this"); })()()');
  }
  function clone(src) {
    return JSON.parse(JSON.stringify(src));
  }
  function cloneModelList(src, transformer) {
    return ModelList$Companion_getInstance().fromDynamic_xaus8m$(JSON.parse(JSON.stringify(src.data())), transformer);
  }
  function forIn(o, f) {
    var tmp$;
    var keys = Object.keys;
    var $receiver = Array.isArray(tmp$ = keys(o)) ? tmp$ : Kotlin.throwCCE();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      f(element, o[element]);
    }
  }
  function on(event, handler) {
    return EventEmitter_getInstance().on_dhjwdb$(event, handler);
  }
  function once(event, handler) {
    return EventEmitter_getInstance().once_dhjwdb$(event, handler);
  }
  function remove(event, eventId) {
    EventEmitter_getInstance().remove_bm4lxs$(event, eventId);
  }
  function emit(event, data) {
    EventEmitter_getInstance().emit_4w9ihe$(event, data);
  }
  function emit_0(event, data, success) {
    once(event + ':success', success);
    emit(event, data);
  }
  function emit_1(event, data, success, error) {
    once(event + ':success', success);
    once(event + ':error', error);
    emit(event, data);
  }
  function modelListOf(elements) {
    var l = new ModelList();
    if (!(elements.length === 0)) {
      l.addAll_brywnq$(arrayListOf(elements.slice()));
    }
    return l;
  }
  function modelMapOf(elements) {
    var l = new ModelMap();
    if (!(elements.length === 0)) {
      var tmp$;
      for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
        var element = elements[tmp$];
        l.put_yuqcw7$(element.first, element.second);
      }
    }
    return l;
  }
  function validators(validators) {
    return linkedSetOf(validators.slice());
  }
  function required(error, value, model) {
    error.required = value == null || (typeof value === 'string' && isBlank(value));
  }
  function isEmail(error, value, model) {
    var tmp$;
    var emailMask = Regex("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    error.email = value != null ? !emailMask.matches_6bul2c$(typeof (tmp$ = value) === 'string' ? tmp$ : Kotlin.throwCCE()) : false;
  }
  function isNotEmptyList(error, value, model) {
    error.not_empty = value == null || (Kotlin.isType(value, ModelList) && value.isEmpty());
  }
  function guid$lambda() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  }
  function guid() {
    var s4 = guid$lambda;
    return s4() + s4() + Kotlin.toBoxedChar(45) + s4() + Kotlin.toBoxedChar(45) + s4() + Kotlin.toBoxedChar(45) + s4() + Kotlin.toBoxedChar(45) + s4() + s4() + s4();
  }
  function timer(time, handler) {
    var tmp$;
    return (Kotlin.isType(tmp$ = global(), WorkerGlobalScope) ? tmp$ : Kotlin.throwCCE()).setTimeout(handler, time);
  }
  function cleanTimer(time) {
    var tmp$;
    (Kotlin.isType(tmp$ = global(), WorkerGlobalScope) ? tmp$ : Kotlin.throwCCE()).clearTimeout(time);
  }
  function debounce(id, time, handler) {
    if (id !== 0) {
      cleanTimer(id);
    }
    return timer(time, handler);
  }
  function Schema(data) {
    if (data === void 0)
      data = new Schema_init$ObjectLiteral();
    Model.call(this, data);
    this.properties$delegate = this.mapObservable_enb3ep$('properties', validators([Kotlin.getCallableRef('equalNames', function ($receiver, error, value, model) {
      return $receiver.equalNames_0(error, value, model);
    }.bind(null, this))]), Schema$properties$lambda);
  }
  Object.defineProperty(Schema.prototype, 'properties', {
    get: function () {
      return this.properties$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('properties'));
    },
    set: function (properties) {
      this.properties$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('properties'), properties);
    }
  });
  function Schema$equalNames$lambda$lambda(closure$a, closure$error) {
    return function (b) {
      var found = Kotlin.equals(closure$a.value.name.toLowerCase(), b.value.name.toLowerCase()) && !Kotlin.equals(closure$a.key, b.key);
      if (found) {
        closure$error.equal_name = closure$a.value.name.toLowerCase();
        closure$error.equal_names = true;
      }
    };
  }
  function Schema$equalNames$lambda(closure$value, closure$error) {
    return function (a) {
      var tmp$, tmp$_0;
      (tmp$_0 = Kotlin.isType(tmp$ = closure$value, ModelMap) ? tmp$ : null) != null ? tmp$_0.forEach_8om4t6$(Schema$equalNames$lambda$lambda(a, closure$error)) : null;
    };
  }
  Schema.prototype.equalNames_0 = function (error, value, model) {
    var tmp$, tmp$_0;
    error.equal_names = false;
    error.equal_name = null;
    (tmp$_0 = Kotlin.isType(tmp$ = value, ModelMap) ? tmp$ : null) != null ? tmp$_0.forEach_8om4t6$(Schema$equalNames$lambda(value, error)) : null;
  };
  Schema.prototype.empty_0 = function (error, value, model) {
    var tmp$, tmp$_0, tmp$_1;
    error.empty = value == null || ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = value, ModelMap) ? tmp$ : null) != null ? tmp$_0.size() : null) != null ? tmp$_1 : 0) <= 0;
  };
  function Schema_init$ObjectLiteral() {
  }
  Schema_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Schema$properties$lambda(it) {
    return new SchemaProperty(it);
  }
  Schema.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Schema',
    interfaces: [Model]
  };
  function SchemaProperty(data) {
    if (data === void 0)
      data = new SchemaProperty_init$ObjectLiteral();
    Model.call(this, data);
    this.id$delegate = this.observable_vzdcz6$('id');
    this.name$delegate = this.observable_m38zes$('name', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('maxLength', function ($receiver, error, value, model) {
      return $receiver.maxLength_0(error, value, model);
    }.bind(null, this))]), SchemaProperty$name$lambda);
    this.type$delegate = this.observable_m38zes$('type', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), SchemaProperty$type$lambda);
    this.order$delegate = this.observable_m38zes$('order', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), SchemaProperty$order$lambda);
    this.required$delegate = this.observable_m38zes$('required', void 0, SchemaProperty$required$lambda);
    this.alias$delegate = this.listObservable_enb3ep$('alias', validators([Kotlin.getCallableRef('maxLengthOfList', function ($receiver, error, value, model) {
      return $receiver.maxLengthOfList_0(error, value, model);
    }.bind(null, this))]), SchemaProperty$alias$lambda);
  }
  Object.defineProperty(SchemaProperty.prototype, 'id', {
    get: function () {
      return this.id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('id'));
    },
    set: function (id) {
      this.id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('id'), id);
    }
  });
  Object.defineProperty(SchemaProperty.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  Object.defineProperty(SchemaProperty.prototype, 'type', {
    get: function () {
      return this.type$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('type'));
    },
    set: function (type) {
      this.type$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('type'), type);
    }
  });
  Object.defineProperty(SchemaProperty.prototype, 'order', {
    get: function () {
      return this.order$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('order'));
    },
    set: function (order) {
      this.order$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('order'), order);
    }
  });
  Object.defineProperty(SchemaProperty.prototype, 'required', {
    get: function () {
      return this.required$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('required'));
    },
    set: function (required) {
      this.required$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('required'), required);
    }
  });
  Object.defineProperty(SchemaProperty.prototype, 'alias', {
    get: function () {
      return this.alias$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('alias'));
    },
    set: function (alias) {
      this.alias$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('alias'), alias);
    }
  });
  SchemaProperty.prototype.maxLength_0 = function (error, value, model) {
    error.max_length = (value != null && (typeof value === 'string' && value.length > 40));
  };
  function SchemaProperty$maxLengthOfList$lambda(it) {
    return it.length > 40;
  }
  SchemaProperty.prototype.maxLengthOfList_0 = function (error, value, model) {
    var tmp$, tmp$_0;
    error.max_length = (tmp$_0 = Kotlin.isType(tmp$ = value, ModelList) ? tmp$ : null) != null ? tmp$_0.any_ucl7l2$(SchemaProperty$maxLengthOfList$lambda) : null;
  };
  function SchemaProperty_init$ObjectLiteral() {
  }
  SchemaProperty_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function SchemaProperty$name$lambda() {
    return '';
  }
  function SchemaProperty$type$lambda() {
    return 'string';
  }
  function SchemaProperty$order$lambda() {
    return 0;
  }
  function SchemaProperty$required$lambda() {
    return false;
  }
  function SchemaProperty$alias$lambda(it) {
    return it;
  }
  SchemaProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SchemaProperty',
    interfaces: [Model]
  };
  var package$common = _.common || (_.common = {});
  package$common.start_o14v8n$ = start;
  var package$login = package$common.login || (package$common.login = {});
  var package$action = package$login.action || (package$login.action = {});
  Object.defineProperty(package$action, 'GetActions', {
    get: GetActions_getInstance
  });
  Object.defineProperty(package$action, 'GetStores', {
    get: GetStores_getInstance
  });
  var package$config = package$common.config || (package$common.config = {});
  package$config.Routes = Routes;
  var package$core = package$common.core || (package$common.core = {});
  Object.defineProperty(package$core, 'API', {
    get: API_getInstance
  });
  Object.defineProperty(Action, 'Companion', {
    get: Action$Companion_getInstance
  });
  package$core.Action = Action;
  Object.defineProperty(package$core, 'EventEmitter', {
    get: EventEmitter_getInstance
  });
  Object.defineProperty(package$core, 'FileUtil', {
    get: FileUtil_getInstance
  });
  Object.defineProperty(package$core, 'Http', {
    get: Http_getInstance
  });
  Model.Observable = Model$Observable;
  Model.ModelObservable = Model$ModelObservable;
  Model.ListObservable = Model$ListObservable;
  Model.MapObservable = Model$MapObservable;
  package$core.Model = Model;
  Object.defineProperty(ModelList, 'Companion', {
    get: ModelList$Companion_getInstance
  });
  package$core.ModelList = ModelList;
  Object.defineProperty(ModelMap, 'Companion', {
    get: ModelMap$Companion_getInstance
  });
  package$core.ModelMap = ModelMap;
  Object.defineProperty(Store, 'Companion', {
    get: Store$Companion_getInstance
  });
  package$core.Store = Store;
  package$core.Transformer = Transformer;
  package$core.global = global;
  package$core.clone_za3rmp$ = clone;
  package$core.cloneModelList_f7tdzk$ = cloneModelList;
  package$core.forIn_5e4ts1$ = forIn;
  package$core.on_dhjwdb$ = on;
  package$core.once_dhjwdb$ = once;
  package$core.remove_bm4lxs$ = remove;
  package$core.emit_4w9ihe$ = emit;
  package$core.emit_p0rgxh$ = emit_0;
  package$core.emit_3exzs$ = emit_1;
  package$core.modelListOf_i5x0yv$ = modelListOf;
  package$core.modelMapOf_gkrhic$ = modelMapOf;
  package$core.validators_ql9yjm$ = validators;
  package$core.required_nym0p8$ = required;
  package$core.isEmail_nym0p8$ = isEmail;
  package$core.isNotEmptyList_nym0p8$ = isNotEmptyList;
  package$core.guid = guid;
  package$core.timer_n53o35$ = timer;
  package$core.cleanTimer_za3lpa$ = cleanTimer;
  package$core.debounce_sxjeop$ = debounce;
  var package$model = package$common.model || (package$common.model = {});
  package$model.Schema = Schema;
  package$model.SchemaProperty = SchemaProperty;
  Kotlin.defineModule('common', _);
  return _;
}(typeof common === 'undefined' ? {} : common, kotlin);
