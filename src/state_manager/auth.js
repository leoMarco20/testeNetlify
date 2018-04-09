if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'auth'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'auth'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'auth'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'auth'.");
}
var auth = function (_, Kotlin, $module$common) {
  'use strict';
  var Routes = $module$common.common.config.Routes;
  var global = $module$common.common.core.global;
  var emit = $module$common.common.core.emit_4w9ihe$;
  var core = $module$common.common.core;
  var once = $module$common.common.core.once_dhjwdb$;
  var Action = $module$common.common.core.Action;
  var emit_0 = $module$common.common.core.emit_3exzs$;
  var ModelList = $module$common.common.core.ModelList;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var emit_1 = $module$common.common.core.emit_p0rgxh$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var on = $module$common.common.core.on_dhjwdb$;
  var Model = $module$common.common.core.Model;
  var validators = $module$common.common.core.validators_ql9yjm$;
  var Store = $module$common.common.core.Store;
  var required = $module$common.common.core.required_nym0p8$;
  var clone = $module$common.common.core.clone_za3rmp$;
  var isEmail = $module$common.common.core.isEmail_nym0p8$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  AuthRoutes.prototype = Object.create(Routes.prototype);
  AuthRoutes.prototype.constructor = AuthRoutes;
  CheckIfIsLogged.prototype = Object.create(Action.prototype);
  CheckIfIsLogged.prototype.constructor = CheckIfIsLogged;
  GetLang.prototype = Object.create(Action.prototype);
  GetLang.prototype.constructor = GetLang;
  GetLoggedUser.prototype = Object.create(Action.prototype);
  GetLoggedUser.prototype.constructor = GetLoggedUser;
  GetMyPermissions.prototype = Object.create(Action.prototype);
  GetMyPermissions.prototype.constructor = GetMyPermissions;
  ListMyPermissions.prototype = Object.create(Action.prototype);
  ListMyPermissions.prototype.constructor = ListMyPermissions;
  PutLegacyStorage.prototype = Object.create(Action.prototype);
  PutLegacyStorage.prototype.constructor = PutLegacyStorage;
  RefreshFirstToken.prototype = Object.create(Action.prototype);
  RefreshFirstToken.prototype.constructor = RefreshFirstToken;
  RefreshToken.prototype = Object.create(Action.prototype);
  RefreshToken.prototype.constructor = RefreshToken;
  LoggedUser.prototype = Object.create(Model.prototype);
  LoggedUser.prototype.constructor = LoggedUser;
  LoggedUserStore.prototype = Object.create(Store.prototype);
  LoggedUserStore.prototype.constructor = LoggedUserStore;
  ForgotMyPassword.prototype = Object.create(Action.prototype);
  ForgotMyPassword.prototype.constructor = ForgotMyPassword;
  GetLoginStore.prototype = Object.create(Action.prototype);
  GetLoginStore.prototype.constructor = GetLoginStore;
  GetUserByEmail.prototype = Object.create(Action.prototype);
  GetUserByEmail.prototype.constructor = GetUserByEmail;
  Login.prototype = Object.create(Action.prototype);
  Login.prototype.constructor = Login;
  SetLoginEmail.prototype = Object.create(Action.prototype);
  SetLoginEmail.prototype.constructor = SetLoginEmail;
  SetLoginPassword.prototype = Object.create(Action.prototype);
  SetLoginPassword.prototype.constructor = SetLoginPassword;
  SetRecoveryPassword.prototype = Object.create(Action.prototype);
  SetRecoveryPassword.prototype.constructor = SetRecoveryPassword;
  SetRecoveryRepeatPassword.prototype = Object.create(Action.prototype);
  SetRecoveryRepeatPassword.prototype.constructor = SetRecoveryRepeatPassword;
  SetRecoveryToken.prototype = Object.create(Action.prototype);
  SetRecoveryToken.prototype.constructor = SetRecoveryToken;
  UpdateNewPassword.prototype = Object.create(Action.prototype);
  UpdateNewPassword.prototype.constructor = UpdateNewPassword;
  Credentials.prototype = Object.create(Model.prototype);
  Credentials.prototype.constructor = Credentials;
  User.prototype = Object.create(Model.prototype);
  User.prototype.constructor = User;
  LoginStore.prototype = Object.create(Store.prototype);
  LoginStore.prototype.constructor = LoginStore;
  RecoveryStore.prototype = Object.create(Store.prototype);
  RecoveryStore.prototype.constructor = RecoveryStore;
  CancelProfileChanges.prototype = Object.create(Action.prototype);
  CancelProfileChanges.prototype.constructor = CancelProfileChanges;
  CleanPassword.prototype = Object.create(Action.prototype);
  CleanPassword.prototype.constructor = CleanPassword;
  GetConfirmPwd.prototype = Object.create(Action.prototype);
  GetConfirmPwd.prototype.constructor = GetConfirmPwd;
  GetNewPassword.prototype = Object.create(Action.prototype);
  GetNewPassword.prototype.constructor = GetNewPassword;
  GetOldPassword.prototype = Object.create(Action.prototype);
  GetOldPassword.prototype.constructor = GetOldPassword;
  GetProfileEmail.prototype = Object.create(Action.prototype);
  GetProfileEmail.prototype.constructor = GetProfileEmail;
  GetProfileName.prototype = Object.create(Action.prototype);
  GetProfileName.prototype.constructor = GetProfileName;
  LoadPicture.prototype = Object.create(Action.prototype);
  LoadPicture.prototype.constructor = LoadPicture;
  LoadProfile.prototype = Object.create(Action.prototype);
  LoadProfile.prototype.constructor = LoadProfile;
  NewPassword.prototype = Object.create(Action.prototype);
  NewPassword.prototype.constructor = NewPassword;
  SavePassword.prototype = Object.create(Action.prototype);
  SavePassword.prototype.constructor = SavePassword;
  SavePicture.prototype = Object.create(Action.prototype);
  SavePicture.prototype.constructor = SavePicture;
  SaveProfile.prototype = Object.create(Action.prototype);
  SaveProfile.prototype.constructor = SaveProfile;
  SetConfirmPwd.prototype = Object.create(Action.prototype);
  SetConfirmPwd.prototype.constructor = SetConfirmPwd;
  SetNewPassword.prototype = Object.create(Action.prototype);
  SetNewPassword.prototype.constructor = SetNewPassword;
  SetOldPassword.prototype = Object.create(Action.prototype);
  SetOldPassword.prototype.constructor = SetOldPassword;
  SetPictureFile.prototype = Object.create(Action.prototype);
  SetPictureFile.prototype.constructor = SetPictureFile;
  SetProfileEmail.prototype = Object.create(Action.prototype);
  SetProfileEmail.prototype.constructor = SetProfileEmail;
  SetProfileName.prototype = Object.create(Action.prototype);
  SetProfileName.prototype.constructor = SetProfileName;
  UploadPictureFile.prototype = Object.create(Action.prototype);
  UploadPictureFile.prototype.constructor = UploadPictureFile;
  UserPassword.prototype = Object.create(Model.prototype);
  UserPassword.prototype.constructor = UserPassword;
  UserPicture.prototype = Object.create(Model.prototype);
  UserPicture.prototype.constructor = UserPicture;
  UserProfile.prototype = Object.create(Model.prototype);
  UserProfile.prototype.constructor = UserProfile;
  ProfileStore.prototype = Object.create(Store.prototype);
  ProfileStore.prototype.constructor = ProfileStore;
  ListRoles.prototype = Object.create(Action.prototype);
  ListRoles.prototype.constructor = ListRoles;
  ListUserEnabledRoles.prototype = Object.create(Action.prototype);
  ListUserEnabledRoles.prototype.constructor = ListUserEnabledRoles;
  Permission.prototype = Object.create(Model.prototype);
  Permission.prototype.constructor = Permission;
  Role.prototype = Object.create(Model.prototype);
  Role.prototype.constructor = Role;
  ListUserRefs.prototype = Object.create(Action.prototype);
  ListUserRefs.prototype.constructor = ListUserRefs;
  UserRef.prototype = Object.create(Model.prototype);
  UserRef.prototype.constructor = UserRef;
  function AuthRoutes() {
    AuthRoutes_instance = this;
    Routes.call(this);
  }
  AuthRoutes.prototype.login = function () {
    return this.rootEndpoint_61zpoe$() + '/login/';
  };
  AuthRoutes.prototype.refreshToken = function () {
    return this.rootEndpoint_61zpoe$() + '/refresh-token/';
  };
  AuthRoutes.prototype.forgotMyPwd = function () {
    return this.rootEndpoint_61zpoe$() + '/auth/recover/';
  };
  AuthRoutes.prototype.updateNewRecoveryPwd = function () {
    return this.rootEndpoint_61zpoe$() + '/auth/password/';
  };
  AuthRoutes.prototype.getUserByEmail_61zpoe$ = function (email) {
    return this.rootEndpoint_61zpoe$() + '/user/email/' + email;
  };
  AuthRoutes.prototype.getMyPermissions = function () {
    return this.rootEndpoint_61zpoe$() + '/auth/permissions/my/';
  };
  AuthRoutes.prototype.listUserRefs = function () {
    return this.rootEndpoint_61zpoe$() + '/auth/user/ref/';
  };
  AuthRoutes.prototype.listUserEnabledRoles_61zpoe$ = function (userId) {
    return this.rootEndpoint_61zpoe$() + '/auth/user/' + userId + '/sharing/roles/';
  };
  AuthRoutes.prototype.saveProfile = function () {
    return this.rootEndpoint_61zpoe$() + '/user/my/';
  };
  AuthRoutes.prototype.savePicture = function () {
    return this.rootEndpoint_61zpoe$() + '/user/my/picture/';
  };
  AuthRoutes.prototype.savePassword = function () {
    return this.rootEndpoint_61zpoe$() + '/user/my/password/';
  };
  AuthRoutes.prototype.listRoles = function () {
    return this.rootEndpoint_61zpoe$() + '/auth/roles/';
  };
  AuthRoutes.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AuthRoutes',
    interfaces: [Routes]
  };
  var AuthRoutes_instance = null;
  function AuthRoutes_getInstance() {
    if (AuthRoutes_instance === null) {
      new AuthRoutes();
    }
    return AuthRoutes_instance;
  }
  function Constants() {
    Constants_instance = this;
    this.TOKEN_TIMESTAMP = (4 * 60 | 0) * 1000 | 0;
  }
  Constants.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }
    return Constants_instance;
  }
  function start$lambda() {
    emit('auth@check_if_is_logged', null);
  }
  function start() {
    Login_getInstance();
    SetLoginEmail_getInstance();
    GetLoginStore_getInstance();
    GetUserByEmail_getInstance();
    GetMyPermissions_getInstance();
    ListMyPermissions_getInstance();
    RefreshToken_getInstance();
    RefreshFirstToken_getInstance();
    LoadProfile_getInstance();
    CancelProfileChanges_getInstance();
    SaveProfile_getInstance();
    GetProfileName_getInstance();
    GetProfileEmail_getInstance();
    SetProfileName_getInstance();
    SetProfileEmail_getInstance();
    GetLoggedUser_getInstance();
    GetLang_getInstance();
    SetPictureFile_getInstance();
    UploadPictureFile_getInstance();
    SavePicture_getInstance();
    LoadPicture_getInstance();
    SetLoginPassword_getInstance();
    ForgotMyPassword_getInstance();
    CleanPassword_getInstance();
    NewPassword_getInstance();
    GetNewPassword_getInstance();
    GetOldPassword_getInstance();
    GetConfirmPwd_getInstance();
    SavePassword_getInstance();
    SetConfirmPwd_getInstance();
    SetNewPassword_getInstance();
    SetOldPassword_getInstance();
    SetRecoveryPassword_getInstance();
    SetRecoveryRepeatPassword_getInstance();
    SetRecoveryToken_getInstance();
    UpdateNewPassword_getInstance();
    CheckIfIsLogged_getInstance();
    ListUserRefs_getInstance();
    ListUserEnabledRoles_getInstance();
    ListRoles_getInstance();
    PutLegacyStorage_getInstance();
    LoginStore_getInstance();
    LoggedUserStore_getInstance();
    ProfileStore_getInstance();
    RecoveryStore_getInstance();
    global().setTimeout(start$lambda, 10);
  }
  function CheckIfIsLogged() {
    CheckIfIsLogged_instance = this;
    Action.call(this, 'auth');
  }
  function CheckIfIsLogged$process$lambda$ObjectLiteral() {
  }
  CheckIfIsLogged$process$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function CheckIfIsLogged$process$lambda() {
    emit('auth@check_if_is_logged', new CheckIfIsLogged$process$lambda$ObjectLiteral());
  }
  function CheckIfIsLogged$process$lambda_0(closure$timeout, this$CheckIfIsLogged) {
    return function (it) {
      var tmp$;
      global().clearTimeout(closure$timeout);
      if (it != null) {
        core.API.authorization = typeof (tmp$ = it) === 'string' ? tmp$ : Kotlin.throwCCE();
      }
      core.API.ready = true;
      if (it != null) {
        this$CheckIfIsLogged.checkRefreshToken_0();
      }
       else {
        emit('auth@unlogged', null);
        LoggedUserStore_getInstance().loggedUser = null;
      }
      core.API.unleashQueue();
    };
  }
  CheckIfIsLogged.prototype.process_za3rmp$ = function (data) {
    core.API.ready = false;
    var timeout = global().setTimeout(CheckIfIsLogged$process$lambda, 100);
    once('bridge@get_from_storage:token:success', CheckIfIsLogged$process$lambda_0(timeout, this));
    emit('bridge@get_from_storage', 'token');
  };
  CheckIfIsLogged.prototype.checkRefreshToken_0 = function () {
    emit('auth@refresh_first_token', null);
  };
  CheckIfIsLogged.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CheckIfIsLogged',
    interfaces: [Action]
  };
  var CheckIfIsLogged_instance = null;
  function CheckIfIsLogged_getInstance() {
    if (CheckIfIsLogged_instance === null) {
      new CheckIfIsLogged();
    }
    return CheckIfIsLogged_instance;
  }
  function GetLang() {
    GetLang_instance = this;
    Action.call(this, 'auth', GetLang_init$lambda);
  }
  function GetLang_init$lambda$lambda(closure$done) {
    return function (lang) {
      closure$done(lang);
    };
  }
  function GetLang_init$lambda(data, done, fail) {
    once('bridge@get_from_storage:lang:success', GetLang_init$lambda$lambda(done));
    emit('bridge@get_from_storage', 'lang');
  }
  GetLang.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetLang',
    interfaces: [Action]
  };
  var GetLang_instance = null;
  function GetLang_getInstance() {
    if (GetLang_instance === null) {
      new GetLang();
    }
    return GetLang_instance;
  }
  function GetLoggedUser() {
    GetLoggedUser_instance = this;
    Action.call(this, 'auth', GetLoggedUser_init$lambda);
  }
  function GetLoggedUser_init$lambda(data, done, fail) {
    done(LoggedUserStore_getInstance().loggedUser);
  }
  GetLoggedUser.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetLoggedUser',
    interfaces: [Action]
  };
  var GetLoggedUser_instance = null;
  function GetLoggedUser_getInstance() {
    if (GetLoggedUser_instance === null) {
      new GetLoggedUser();
    }
    return GetLoggedUser_instance;
  }
  function GetMyPermissions() {
    GetMyPermissions_instance = this;
    Action.call(this, 'auth');
    this.loading = false;
  }
  function GetMyPermissions$process$lambda(this$GetMyPermissions) {
    return function (it) {
      this$GetMyPermissions.loading = false;
      this$GetMyPermissions.done_s8jyv4$(it);
    };
  }
  function GetMyPermissions$process$lambda_0(this$GetMyPermissions) {
    return function (it) {
      this$GetMyPermissions.loading = false;
      this$GetMyPermissions.fail_pdl1vj$(Kotlin.toString(it));
    };
  }
  GetMyPermissions.prototype.process_za3rmp$ = function (data) {
    if (LoggedUserStore_getInstance().permissionsWasListed) {
      this.done_s8jyv4$(LoggedUserStore_getInstance().permissions);
    }
     else {
      if (!this.loading) {
        this.loading = true;
        emit_0('auth@list_my_permissions', null, GetMyPermissions$process$lambda(this), GetMyPermissions$process$lambda_0(this));
      }
    }
  };
  GetMyPermissions.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetMyPermissions',
    interfaces: [Action]
  };
  var GetMyPermissions_instance = null;
  function GetMyPermissions_getInstance() {
    if (GetMyPermissions_instance === null) {
      new GetMyPermissions();
    }
    return GetMyPermissions_instance;
  }
  function ListMyPermissions() {
    ListMyPermissions_instance = this;
    Action.call(this, 'auth', ListMyPermissions_init$lambda);
  }
  function ListMyPermissions_init$lambda$lambda(closure$done) {
    return function (data) {
      var tmp$;
      var perms = new ModelList();
      tmp$ = iterator(data);
      while (tmp$.hasNext()) {
        var p = tmp$.next();
        perms.add_11rb$(p);
      }
      LoggedUserStore_getInstance().permissions = perms;
      LoggedUserStore_getInstance().permissionsWasListed = true;
      closure$done(LoggedUserStore_getInstance().permissions);
    };
  }
  function ListMyPermissions_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function ListMyPermissions_init$lambda(data, done, fail) {
    core.API.get_yaxyun$(AuthRoutes_getInstance().getMyPermissions(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), ListMyPermissions_init$lambda$lambda(done), ListMyPermissions_init$lambda$lambda_0(fail));
  }
  ListMyPermissions.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ListMyPermissions',
    interfaces: [Action]
  };
  var ListMyPermissions_instance = null;
  function ListMyPermissions_getInstance() {
    if (ListMyPermissions_instance === null) {
      new ListMyPermissions();
    }
    return ListMyPermissions_instance;
  }
  function PutLegacyStorage() {
    PutLegacyStorage_instance = this;
    Action.call(this, 'auth', PutLegacyStorage_init$lambda);
  }
  function PutLegacyStorage_init$lambda$ObjectLiteral() {
    this.key = 'loginKnot';
    this.value = new PutLegacyStorage_init$lambda$ObjectLiteral$value$ObjectLiteral();
  }
  function PutLegacyStorage_init$lambda$ObjectLiteral$value$ObjectLiteral() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    this._id = ((tmp$ = LoggedUserStore_getInstance().loggedUser) != null ? tmp$ : Kotlin.throwNPE())._id;
    this.account_id = ((tmp$_0 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_0 : Kotlin.throwNPE()).account_id;
    this.account_name = ((tmp$_1 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_1 : Kotlin.throwNPE()).account_name;
    this.name = ((tmp$_2 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_2 : Kotlin.throwNPE()).name;
    this.email = ((tmp$_3 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_3 : Kotlin.throwNPE()).email;
    this.picture = ((tmp$_4 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_4 : Kotlin.throwNPE()).picture;
    this.activated = ((tmp$_5 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_5 : Kotlin.throwNPE()).activated;
    this.deleted = ((tmp$_6 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_6 : Kotlin.throwNPE()).deleted;
    this.blocked = ((tmp$_7 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_7 : Kotlin.throwNPE()).blocked;
    this.status = ((tmp$_8 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_8 : Kotlin.throwNPE()).status;
  }
  PutLegacyStorage_init$lambda$ObjectLiteral$value$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  PutLegacyStorage_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function PutLegacyStorage_init$lambda(data, done, fail) {
    if (LoggedUserStore_getInstance().loggedUser != null)
      emit('bridge@put_in_storage', new PutLegacyStorage_init$lambda$ObjectLiteral());
    done(true);
  }
  PutLegacyStorage.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PutLegacyStorage',
    interfaces: [Action]
  };
  var PutLegacyStorage_instance = null;
  function PutLegacyStorage_getInstance() {
    if (PutLegacyStorage_instance === null) {
      new PutLegacyStorage();
    }
    return PutLegacyStorage_instance;
  }
  function RefreshFirstToken() {
    RefreshFirstToken_instance = this;
    Action.call(this, 'auth');
    this.refreshed = false;
  }
  function RefreshFirstToken$process$lambda(it) {
    emit('auth@logged', it);
  }
  RefreshFirstToken.prototype.process_za3rmp$ = function (data) {
    if (!this.refreshed) {
      emit_1('auth@refresh_token', null, RefreshFirstToken$process$lambda);
      this.refreshed = true;
    }
  };
  RefreshFirstToken.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RefreshFirstToken',
    interfaces: [Action]
  };
  var RefreshFirstToken_instance = null;
  function RefreshFirstToken_getInstance() {
    if (RefreshFirstToken_instance === null) {
      new RefreshFirstToken();
    }
    return RefreshFirstToken_instance;
  }
  function RefreshToken() {
    RefreshToken_instance = this;
    Action.call(this, 'auth');
    this.refreshing = false;
    this.tryAgain = 4;
    this.timeId = null;
    on('common@api:error', RefreshToken_init$lambda);
  }
  function RefreshToken$process$lambda$lambda$ObjectLiteral(closure$refreshToken) {
    this.auth = 'account';
    this.token = closure$refreshToken;
  }
  RefreshToken$process$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function RefreshToken$process$lambda$lambda$lambda$ObjectLiteral(closure$data) {
    this.key = 'token';
    this.value = closure$data.token;
  }
  RefreshToken$process$lambda$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function RefreshToken$process$lambda$lambda$lambda$ObjectLiteral_0(closure$data) {
    this.key = 'refreshToken';
    this.value = closure$data.refreshToken;
  }
  RefreshToken$process$lambda$lambda$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function RefreshToken$process$lambda$lambda$lambda$lambda(closure$data, this$RefreshToken) {
    return function (it) {
      this$RefreshToken.done_s8jyv4$(closure$data);
    };
  }
  function RefreshToken$process$lambda$lambda$lambda$lambda_0(this$RefreshToken) {
    return function () {
      this$RefreshToken.timeId = null;
      emit('auth@refresh_token', null);
    };
  }
  function RefreshToken$process$lambda$lambda$lambda(this$RefreshToken) {
    return function (data) {
      var tmp$;
      emit('bridge@put_in_storage', new RefreshToken$process$lambda$lambda$lambda$ObjectLiteral(data));
      emit('bridge@put_in_storage', new RefreshToken$process$lambda$lambda$lambda$ObjectLiteral_0(data));
      this$RefreshToken.tryAgain = 4;
      core.API.authorization = data.token;
      core.API.ready = true;
      this$RefreshToken.refreshing = false;
      LoggedUserStore_getInstance().loggedUser = new LoggedUser(data);
      emit('auth@put_legacy_storage', null);
      emit_1('auth@list_my_permissions', null, RefreshToken$process$lambda$lambda$lambda$lambda(data, this$RefreshToken));
      emit('auth@connected', null);
      if (this$RefreshToken.timeId != null) {
        global().clearTimeout((tmp$ = this$RefreshToken.timeId) != null ? tmp$ : Kotlin.throwNPE());
      }
      this$RefreshToken.timeId = global().setTimeout(RefreshToken$process$lambda$lambda$lambda$lambda_0(this$RefreshToken), Constants_getInstance().TOKEN_TIMESTAMP);
    };
  }
  function RefreshToken$process$lambda$lambda$lambda_0(this$RefreshToken) {
    return function (error, status) {
      var tmp$, tmp$_0;
      this$RefreshToken.refreshing = false;
      if ((tmp$ = this$RefreshToken.tryAgain, this$RefreshToken.tryAgain = tmp$ - 1 | 0, tmp$) > 0) {
        emit('auth@refresh_token', null);
      }
       else {
        this$RefreshToken.tryAgain = 4;
        if (this$RefreshToken.timeId != null) {
          global().clearTimeout((tmp$_0 = this$RefreshToken.timeId) != null ? tmp$_0 : Kotlin.throwNPE());
        }
        emit('auth@unconnected', null);
        this$RefreshToken.fail_pdl1vj$(status.toString() + ' - ' + JSON.stringify(error));
      }
    };
  }
  function RefreshToken$process$lambda$lambda(closure$refreshToken, this$RefreshToken) {
    return function (token) {
      var tmp$;
      core.API.authorization = typeof (tmp$ = token) === 'string' ? tmp$ : Kotlin.throwCCE();
      var body = new RefreshToken$process$lambda$lambda$ObjectLiteral(closure$refreshToken);
      this$RefreshToken.refreshing = true;
      core.API.post_gyijfi$(AuthRoutes_getInstance().refreshToken(), body, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), RefreshToken$process$lambda$lambda$lambda(this$RefreshToken), RefreshToken$process$lambda$lambda$lambda_0(this$RefreshToken));
    };
  }
  function RefreshToken$process$lambda(this$RefreshToken) {
    return function (refreshToken) {
      if (refreshToken == null) {
        println('refresh token is null');
        return;
      }
      once('bridge@get_from_storage:token:success', RefreshToken$process$lambda$lambda(refreshToken, this$RefreshToken));
      emit('bridge@get_from_storage', 'token');
    };
  }
  RefreshToken.prototype.process_za3rmp$ = function (data) {
    if (this.refreshing)
      return;
    println('trying to refresh token...');
    once('bridge@get_from_storage:refreshToken:success', RefreshToken$process$lambda(this));
    emit('bridge@get_from_storage', 'refreshToken');
  };
  function RefreshToken_init$lambda(data) {
    var code = data.code;
    var url = data.url;
    if (url != AuthRoutes_getInstance().refreshToken() && contains([0, 401, 403], code)) {
      emit('auth@refresh_token', null);
    }
  }
  RefreshToken.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RefreshToken',
    interfaces: [Action]
  };
  var RefreshToken_instance = null;
  function RefreshToken_getInstance() {
    if (RefreshToken_instance === null) {
      new RefreshToken();
    }
    return RefreshToken_instance;
  }
  function LoggedUser(data) {
    if (data === void 0)
      data = new LoggedUser_init$ObjectLiteral();
    Model.call(this, data);
    this._id$delegate = this.observable_vzdcz6$('_id');
    this.account_id$delegate = this.observable_vzdcz6$('account_id');
    this.account_name$delegate = this.observable_vzdcz6$('account_name');
    this.name$delegate = this.observable_vzdcz6$('name');
    this.email$delegate = this.observable_vzdcz6$('email');
    this.picture$delegate = this.observable_m38zes$('picture', void 0, LoggedUser$picture$lambda);
    this.activated$delegate = this.observable_m38zes$('activated', void 0, LoggedUser$activated$lambda);
    this.deleted$delegate = this.observable_m38zes$('deleted', void 0, LoggedUser$deleted$lambda);
    this.blocked$delegate = this.observable_m38zes$('blocked', void 0, LoggedUser$blocked$lambda);
    this.status$delegate = this.observable_m38zes$('status', validators([Kotlin.getCallableRef('checkStatus', function ($receiver, error, value, model) {
      return $receiver.checkStatus_bsubq6$(error, value, model);
    }.bind(null, this))]), LoggedUser$status$lambda);
    this.created$delegate = this.observable_vzdcz6$('created');
    this.password$delegate = this.observable_vzdcz6$('password');
    this.url$delegate = this.observable_m38zes$('url', void 0, LoggedUser$url$lambda);
  }
  Object.defineProperty(LoggedUser.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'account_id', {
    get: function () {
      return this.account_id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('account_id'));
    },
    set: function (account_id) {
      this.account_id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('account_id'), account_id);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'account_name', {
    get: function () {
      return this.account_name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('account_name'));
    },
    set: function (account_name) {
      this.account_name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('account_name'), account_name);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'email', {
    get: function () {
      return this.email$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('email'));
    },
    set: function (email) {
      this.email$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('email'), email);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'picture', {
    get: function () {
      return this.picture$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('picture'));
    },
    set: function (picture) {
      this.picture$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('picture'), picture);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'activated', {
    get: function () {
      return this.activated$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('activated'));
    },
    set: function (activated) {
      this.activated$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('activated'), activated);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'deleted', {
    get: function () {
      return this.deleted$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('deleted'));
    },
    set: function (deleted) {
      this.deleted$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('deleted'), deleted);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'blocked', {
    get: function () {
      return this.blocked$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('blocked'));
    },
    set: function (blocked) {
      this.blocked$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('blocked'), blocked);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'status', {
    get: function () {
      return this.status$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('status'));
    },
    set: function (status) {
      this.status$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('status'), status);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'created', {
    get: function () {
      return this.created$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('created'));
    },
    set: function (created) {
      this.created$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('created'), created);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'password', {
    get: function () {
      return this.password$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('password'));
    },
    set: function (password) {
      this.password$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('password'), password);
    }
  });
  Object.defineProperty(LoggedUser.prototype, 'url', {
    get: function () {
      return this.url$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('url'));
    },
    set: function (url) {
      this.url$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('url'), url);
    }
  });
  LoggedUser.prototype.checkStatus_bsubq6$ = function (error, value, model) {
    if (Kotlin.isType(model, LoggedUser)) {
      model.activated = Kotlin.equals(value, 'ACTIVE');
      model.deleted = Kotlin.equals(value, 'DELETED');
      model.blocked = Kotlin.equals(value, 'BLOCKED');
    }
  };
  function LoggedUser_init$ObjectLiteral() {
  }
  LoggedUser_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function LoggedUser$picture$lambda() {
    return '';
  }
  function LoggedUser$activated$lambda() {
    return false;
  }
  function LoggedUser$deleted$lambda() {
    return false;
  }
  function LoggedUser$blocked$lambda() {
    return false;
  }
  function LoggedUser$status$lambda() {
    return '';
  }
  function LoggedUser$url$lambda() {
    return AuthRoutes_getInstance().currentS3Host();
  }
  LoggedUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LoggedUser',
    interfaces: [Model]
  };
  function LoggedUserStore() {
    LoggedUserStore_instance = this;
    Store.call(this, 'auth');
    this.loggedUser$delegate = this.modelObservable_x5h7f$('logged_user', void 0, LoggedUserStore$loggedUser$lambda);
    this.permissionsWasListed$delegate = this.observable_m38zes$('permissions_was_listed', void 0, LoggedUserStore$permissionsWasListed$lambda);
    this.permissions$delegate = this.listObservable_enb3ep$('permissions', void 0, LoggedUserStore$permissions$lambda);
  }
  Object.defineProperty(LoggedUserStore.prototype, 'loggedUser', {
    get: function () {
      return this.loggedUser$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('loggedUser'));
    },
    set: function (loggedUser) {
      this.loggedUser$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('loggedUser'), loggedUser);
    }
  });
  Object.defineProperty(LoggedUserStore.prototype, 'permissionsWasListed', {
    get: function () {
      return this.permissionsWasListed$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('permissionsWasListed'));
    },
    set: function (permissionsWasListed) {
      this.permissionsWasListed$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('permissionsWasListed'), permissionsWasListed);
    }
  });
  Object.defineProperty(LoggedUserStore.prototype, 'permissions', {
    get: function () {
      return this.permissions$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('permissions'));
    },
    set: function (permissions) {
      this.permissions$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('permissions'), permissions);
    }
  });
  function LoggedUserStore$loggedUser$lambda(it) {
    return new LoggedUser(it);
  }
  function LoggedUserStore$permissionsWasListed$lambda() {
    return false;
  }
  function LoggedUserStore$permissions$lambda(it) {
    return it;
  }
  LoggedUserStore.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LoggedUserStore',
    interfaces: [Store]
  };
  var LoggedUserStore_instance = null;
  function LoggedUserStore_getInstance() {
    if (LoggedUserStore_instance === null) {
      new LoggedUserStore();
    }
    return LoggedUserStore_instance;
  }
  function ForgotMyPassword() {
    ForgotMyPassword_instance = this;
    Action.call(this, 'auth', ForgotMyPassword_init$lambda);
  }
  function ForgotMyPassword_init$lambda$ObjectLiteral() {
    this.email = LoginStore_getInstance().credentials.email;
  }
  ForgotMyPassword_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function ForgotMyPassword_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(data);
    };
  }
  function ForgotMyPassword_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function ForgotMyPassword_init$lambda(data, done, fail) {
    var body = new ForgotMyPassword_init$lambda$ObjectLiteral();
    core.API.post_gyijfi$(AuthRoutes_getInstance().forgotMyPwd(), body, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), ForgotMyPassword_init$lambda$lambda(done), ForgotMyPassword_init$lambda$lambda_0(fail));
  }
  ForgotMyPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ForgotMyPassword',
    interfaces: [Action]
  };
  var ForgotMyPassword_instance = null;
  function ForgotMyPassword_getInstance() {
    if (ForgotMyPassword_instance === null) {
      new ForgotMyPassword();
    }
    return ForgotMyPassword_instance;
  }
  function GetLoginStore() {
    GetLoginStore_instance = this;
    Action.call(this, 'auth', GetLoginStore_init$lambda);
  }
  function GetLoginStore_init$lambda(data, done, fail) {
    done(LoginStore_getInstance());
  }
  GetLoginStore.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetLoginStore',
    interfaces: [Action]
  };
  var GetLoginStore_instance = null;
  function GetLoginStore_getInstance() {
    if (GetLoginStore_instance === null) {
      new GetLoginStore();
    }
    return GetLoginStore_instance;
  }
  function GetUserByEmail() {
    GetUserByEmail_instance = this;
    Action.call(this, 'auth', GetUserByEmail_init$lambda);
  }
  function GetUserByEmail_init$lambda$lambda$ObjectLiteral() {
    this.key = 'loginKnot';
    this.value = LoginStore_getInstance().user.data();
  }
  GetUserByEmail_init$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function GetUserByEmail_init$lambda$lambda(closure$done) {
    return function (data) {
      LoginStore_getInstance().user = new User(data);
      emit('bridge@put_in_storage', new GetUserByEmail_init$lambda$lambda$ObjectLiteral());
      closure$done(LoginStore_getInstance().user);
    };
  }
  function GetUserByEmail_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function GetUserByEmail_init$lambda(data, done, fail) {
    core.API.get_yaxyun$(AuthRoutes_getInstance().getUserByEmail_61zpoe$(LoginStore_getInstance().credentials.email), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), GetUserByEmail_init$lambda$lambda(done), GetUserByEmail_init$lambda$lambda_0(fail));
  }
  GetUserByEmail.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetUserByEmail',
    interfaces: [Action]
  };
  var GetUserByEmail_instance = null;
  function GetUserByEmail_getInstance() {
    if (GetUserByEmail_instance === null) {
      new GetUserByEmail();
    }
    return GetUserByEmail_instance;
  }
  function Login() {
    Login_instance = this;
    Action.call(this, 'auth', Login_init$lambda);
  }
  function Login_init$lambda$ObjectLiteral() {
    this.auth = 'account';
    this.email = LoginStore_getInstance().credentials.email;
    this.password = LoginStore_getInstance().credentials.password;
  }
  Login_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Login_init$lambda$lambda$ObjectLiteral(closure$data) {
    this.key = 'token';
    this.value = closure$data.token;
  }
  Login_init$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Login_init$lambda$lambda$ObjectLiteral_0(closure$data) {
    this.key = 'refreshToken';
    this.value = closure$data.refreshToken;
  }
  Login_init$lambda$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Login_init$lambda$lambda$lambda() {
    emit('auth@refresh_token', null);
  }
  function Login_init$lambda$lambda$lambda_0(closure$done, closure$data) {
    return function (it) {
      closure$done(closure$data);
    };
  }
  function Login_init$lambda$lambda(closure$done) {
    return function (data) {
      var tmp$;
      core.API.authorization = typeof (tmp$ = data.token) === 'string' ? tmp$ : Kotlin.throwCCE();
      emit('bridge@put_in_storage', new Login_init$lambda$lambda$ObjectLiteral(data));
      emit('bridge@put_in_storage', new Login_init$lambda$lambda$ObjectLiteral_0(data));
      core.API.authorization = data.token;
      global().setTimeout(Login_init$lambda$lambda$lambda, Constants_getInstance().TOKEN_TIMESTAMP);
      LoggedUserStore_getInstance().loggedUser = new LoggedUser(data);
      emit('auth@put_legacy_storage', null);
      emit_1('auth@list_my_permissions', null, Login_init$lambda$lambda$lambda_0(closure$done, data));
    };
  }
  function Login_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function Login_init$lambda(data, done, fail) {
    var body = new Login_init$lambda$ObjectLiteral();
    core.API.post_gyijfi$(AuthRoutes_getInstance().login(), body, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), Login_init$lambda$lambda(done), Login_init$lambda$lambda_0(fail));
  }
  Login.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Login',
    interfaces: [Action]
  };
  var Login_instance = null;
  function Login_getInstance() {
    if (Login_instance === null) {
      new Login();
    }
    return Login_instance;
  }
  function SetLoginEmail() {
    SetLoginEmail_instance = this;
    Action.call(this, 'auth', SetLoginEmail_init$lambda);
  }
  function SetLoginEmail_init$lambda(data, done, fail) {
    var tmp$, tmp$_0;
    LoginStore_getInstance().credentials.email = (tmp$_0 = typeof (tmp$ = data) === 'string' ? tmp$ : null) != null ? tmp$_0 : '';
    done(LoginStore_getInstance().credentials.email);
  }
  SetLoginEmail.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetLoginEmail',
    interfaces: [Action]
  };
  var SetLoginEmail_instance = null;
  function SetLoginEmail_getInstance() {
    if (SetLoginEmail_instance === null) {
      new SetLoginEmail();
    }
    return SetLoginEmail_instance;
  }
  function SetLoginPassword() {
    SetLoginPassword_instance = this;
    Action.call(this, 'auth', SetLoginPassword_init$lambda);
  }
  function SetLoginPassword_init$lambda(data, done, fail) {
    var tmp$, tmp$_0;
    LoginStore_getInstance().credentials.password = (tmp$_0 = typeof (tmp$ = data) === 'string' ? tmp$ : null) != null ? tmp$_0 : '';
    done(LoginStore_getInstance().credentials.password);
  }
  SetLoginPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetLoginPassword',
    interfaces: [Action]
  };
  var SetLoginPassword_instance = null;
  function SetLoginPassword_getInstance() {
    if (SetLoginPassword_instance === null) {
      new SetLoginPassword();
    }
    return SetLoginPassword_instance;
  }
  function SetRecoveryPassword() {
    SetRecoveryPassword_instance = this;
    Action.call(this, 'auth', SetRecoveryPassword_init$lambda);
  }
  function SetRecoveryPassword_init$lambda(data, done, fail) {
    var tmp$, tmp$_0;
    RecoveryStore_getInstance().password = (tmp$_0 = typeof (tmp$ = data) === 'string' ? tmp$ : null) != null ? tmp$_0 : '';
    RecoveryStore_getInstance().confirmPassword = RecoveryStore_getInstance().confirmPassword;
    done(RecoveryStore_getInstance().password);
  }
  SetRecoveryPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetRecoveryPassword',
    interfaces: [Action]
  };
  var SetRecoveryPassword_instance = null;
  function SetRecoveryPassword_getInstance() {
    if (SetRecoveryPassword_instance === null) {
      new SetRecoveryPassword();
    }
    return SetRecoveryPassword_instance;
  }
  function SetRecoveryRepeatPassword() {
    SetRecoveryRepeatPassword_instance = this;
    Action.call(this, 'auth', SetRecoveryRepeatPassword_init$lambda);
  }
  function SetRecoveryRepeatPassword_init$lambda(data, done, fail) {
    var tmp$, tmp$_0;
    RecoveryStore_getInstance().confirmPassword = (tmp$_0 = typeof (tmp$ = data) === 'string' ? tmp$ : null) != null ? tmp$_0 : '';
    done(RecoveryStore_getInstance().confirmPassword);
  }
  SetRecoveryRepeatPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetRecoveryRepeatPassword',
    interfaces: [Action]
  };
  var SetRecoveryRepeatPassword_instance = null;
  function SetRecoveryRepeatPassword_getInstance() {
    if (SetRecoveryRepeatPassword_instance === null) {
      new SetRecoveryRepeatPassword();
    }
    return SetRecoveryRepeatPassword_instance;
  }
  function SetRecoveryToken() {
    SetRecoveryToken_instance = this;
    Action.call(this, 'auth', SetRecoveryToken_init$lambda);
  }
  function SetRecoveryToken_init$lambda(data, done, fail) {
    var tmp$, tmp$_0;
    RecoveryStore_getInstance().token = (tmp$_0 = typeof (tmp$ = data) === 'string' ? tmp$ : null) != null ? tmp$_0 : '';
    done(RecoveryStore_getInstance().token);
  }
  SetRecoveryToken.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetRecoveryToken',
    interfaces: [Action]
  };
  var SetRecoveryToken_instance = null;
  function SetRecoveryToken_getInstance() {
    if (SetRecoveryToken_instance === null) {
      new SetRecoveryToken();
    }
    return SetRecoveryToken_instance;
  }
  function UpdateNewPassword() {
    UpdateNewPassword_instance = this;
    Action.call(this, 'auth', UpdateNewPassword_init$lambda);
  }
  function UpdateNewPassword_init$lambda$ObjectLiteral() {
    this.token = RecoveryStore_getInstance().token;
    this.password = RecoveryStore_getInstance().password;
  }
  UpdateNewPassword_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UpdateNewPassword_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(data);
    };
  }
  function UpdateNewPassword_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function UpdateNewPassword_init$lambda(data, done, fail) {
    if (!RecoveryStore_getInstance().error().has_error) {
      var body = new UpdateNewPassword_init$lambda$ObjectLiteral();
      core.API.put_gyijfi$(AuthRoutes_getInstance().updateNewRecoveryPwd(), body, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), UpdateNewPassword_init$lambda$lambda(done), UpdateNewPassword_init$lambda$lambda_0(fail));
    }
     else {
      fail('Invalid Password');
    }
  }
  UpdateNewPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'UpdateNewPassword',
    interfaces: [Action]
  };
  var UpdateNewPassword_instance = null;
  function UpdateNewPassword_getInstance() {
    if (UpdateNewPassword_instance === null) {
      new UpdateNewPassword();
    }
    return UpdateNewPassword_instance;
  }
  function Credentials() {
    Model.call(this);
    this.email$delegate = this.observable_m38zes$('email', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Credentials$email$lambda);
    this.password$delegate = this.observable_m38zes$('password', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Credentials$password$lambda);
  }
  Object.defineProperty(Credentials.prototype, 'email', {
    get: function () {
      return this.email$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('email'));
    },
    set: function (email) {
      this.email$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('email'), email);
    }
  });
  Object.defineProperty(Credentials.prototype, 'password', {
    get: function () {
      return this.password$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('password'));
    },
    set: function (password) {
      this.password$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('password'), password);
    }
  });
  function Credentials$email$lambda() {
    return '';
  }
  function Credentials$password$lambda() {
    return '';
  }
  Credentials.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Credentials',
    interfaces: [Model]
  };
  function User(data) {
    if (data === void 0)
      data = new User_init$ObjectLiteral();
    Model.call(this, data);
    this._id$delegate = this.observable_vzdcz6$('_id');
    this.account_id$delegate = this.observable_vzdcz6$('account_id');
    this.account_name$delegate = this.observable_vzdcz6$('account_name');
    this.name$delegate = this.observable_vzdcz6$('name');
    this.email$delegate = this.observable_vzdcz6$('email');
    this.picture$delegate = this.observable_vzdcz6$('picture');
    this.activated$delegate = this.observable_m38zes$('activated', void 0, User$activated$lambda);
    this.deleted$delegate = this.observable_m38zes$('deleted', void 0, User$deleted$lambda);
    this.blocked$delegate = this.observable_m38zes$('blocked', void 0, User$blocked$lambda);
    this.status$delegate = this.observable_m38zes$('status', validators([Kotlin.getCallableRef('checkStatus', function ($receiver, error, value, model) {
      return $receiver.checkStatus_bsubq6$(error, value, model);
    }.bind(null, this))]), User$status$lambda);
    this.created$delegate = this.observable_vzdcz6$('created');
    this.password$delegate = this.observable_vzdcz6$('password');
  }
  Object.defineProperty(User.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(User.prototype, 'account_id', {
    get: function () {
      return this.account_id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('account_id'));
    },
    set: function (account_id) {
      this.account_id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('account_id'), account_id);
    }
  });
  Object.defineProperty(User.prototype, 'account_name', {
    get: function () {
      return this.account_name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('account_name'));
    },
    set: function (account_name) {
      this.account_name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('account_name'), account_name);
    }
  });
  Object.defineProperty(User.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  Object.defineProperty(User.prototype, 'email', {
    get: function () {
      return this.email$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('email'));
    },
    set: function (email) {
      this.email$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('email'), email);
    }
  });
  Object.defineProperty(User.prototype, 'picture', {
    get: function () {
      return this.picture$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('picture'));
    },
    set: function (picture) {
      this.picture$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('picture'), picture);
    }
  });
  Object.defineProperty(User.prototype, 'activated', {
    get: function () {
      return this.activated$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('activated'));
    },
    set: function (activated) {
      this.activated$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('activated'), activated);
    }
  });
  Object.defineProperty(User.prototype, 'deleted', {
    get: function () {
      return this.deleted$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('deleted'));
    },
    set: function (deleted) {
      this.deleted$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('deleted'), deleted);
    }
  });
  Object.defineProperty(User.prototype, 'blocked', {
    get: function () {
      return this.blocked$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('blocked'));
    },
    set: function (blocked) {
      this.blocked$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('blocked'), blocked);
    }
  });
  Object.defineProperty(User.prototype, 'status', {
    get: function () {
      return this.status$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('status'));
    },
    set: function (status) {
      this.status$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('status'), status);
    }
  });
  Object.defineProperty(User.prototype, 'created', {
    get: function () {
      return this.created$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('created'));
    },
    set: function (created) {
      this.created$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('created'), created);
    }
  });
  Object.defineProperty(User.prototype, 'password', {
    get: function () {
      return this.password$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('password'));
    },
    set: function (password) {
      this.password$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('password'), password);
    }
  });
  User.prototype.checkStatus_bsubq6$ = function (error, value, model) {
    if (Kotlin.isType(model, User)) {
      model.activated = Kotlin.equals(value, 'ACTIVE');
      model.deleted = Kotlin.equals(value, 'DELETED');
      model.blocked = Kotlin.equals(value, 'BLOCKED');
    }
  };
  function User_init$ObjectLiteral() {
  }
  User_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function User$activated$lambda() {
    return false;
  }
  function User$deleted$lambda() {
    return false;
  }
  function User$blocked$lambda() {
    return false;
  }
  function User$status$lambda() {
    return '';
  }
  User.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'User',
    interfaces: [Model]
  };
  function LoginStore() {
    LoginStore_instance = this;
    Store.call(this, 'auth');
    this.credentials$delegate = this.observable_m38zes$('credentials', void 0, LoginStore$credentials$lambda);
    this.user$delegate = this.observable_m38zes$('user', void 0, LoginStore$user$lambda);
  }
  Object.defineProperty(LoginStore.prototype, 'credentials', {
    get: function () {
      return this.credentials$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('credentials'));
    }
  });
  Object.defineProperty(LoginStore.prototype, 'user', {
    get: function () {
      return this.user$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('user'));
    },
    set: function (user) {
      this.user$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('user'), user);
    }
  });
  function LoginStore$credentials$lambda() {
    return new Credentials();
  }
  function LoginStore$user$lambda() {
    return new User();
  }
  LoginStore.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LoginStore',
    interfaces: [Store]
  };
  var LoginStore_instance = null;
  function LoginStore_getInstance() {
    if (LoginStore_instance === null) {
      new LoginStore();
    }
    return LoginStore_instance;
  }
  function RecoveryStore() {
    RecoveryStore_instance = this;
    Store.call(this, 'auth');
    this.token$delegate = this.observable_m38zes$('token', void 0, RecoveryStore$token$lambda);
    this.password$delegate = this.observable_m38zes$('password', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('passwordMin', function ($receiver, error, value, model) {
      return $receiver.passwordMin_nym0p8$(error, value, model);
    }.bind(null, this))]), RecoveryStore$password$lambda);
    this.confirmPassword$delegate = this.observable_m38zes$('confirm_password', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('passwordConfirm', function ($receiver, error, value, model) {
      return $receiver.passwordConfirm_nym0p8$(error, value, model);
    }.bind(null, this)), Kotlin.getCallableRef('passwordMin', function ($receiver, error, value, model) {
      return $receiver.passwordMin_nym0p8$(error, value, model);
    }.bind(null, this))]), RecoveryStore$confirmPassword$lambda);
  }
  Object.defineProperty(RecoveryStore.prototype, 'token', {
    get: function () {
      return this.token$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('token'));
    },
    set: function (token) {
      this.token$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('token'), token);
    }
  });
  Object.defineProperty(RecoveryStore.prototype, 'password', {
    get: function () {
      return this.password$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('password'));
    },
    set: function (password) {
      this.password$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('password'), password);
    }
  });
  Object.defineProperty(RecoveryStore.prototype, 'confirmPassword', {
    get: function () {
      return this.confirmPassword$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('confirmPassword'));
    },
    set: function (confirmPassword) {
      this.confirmPassword$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('confirmPassword'), confirmPassword);
    }
  });
  RecoveryStore.prototype.passwordConfirm_nym0p8$ = function (error, value, model) {
    if (Kotlin.isType(model, RecoveryStore)) {
      error.confirm = model.password !== value;
    }
  };
  RecoveryStore.prototype.passwordMin_nym0p8$ = function (error, value, model) {
    if (Kotlin.isType(model, RecoveryStore)) {
      error.min_length = (value != null && (typeof value === 'string' && value.length < 6));
    }
  };
  function RecoveryStore$token$lambda() {
    return '';
  }
  function RecoveryStore$password$lambda() {
    return '';
  }
  function RecoveryStore$confirmPassword$lambda() {
    return '';
  }
  RecoveryStore.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RecoveryStore',
    interfaces: [Store]
  };
  var RecoveryStore_instance = null;
  function RecoveryStore_getInstance() {
    if (RecoveryStore_instance === null) {
      new RecoveryStore();
    }
    return RecoveryStore_instance;
  }
  function CancelProfileChanges() {
    CancelProfileChanges_instance = this;
    Action.call(this, 'auth', CancelProfileChanges_init$lambda);
  }
  function CancelProfileChanges_init$lambda(data, done, fail) {
    ProfileStore_getInstance().temporaryProfile = new UserProfile(clone(ProfileStore_getInstance().profile.data()));
    done(ProfileStore_getInstance().profile);
  }
  CancelProfileChanges.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CancelProfileChanges',
    interfaces: [Action]
  };
  var CancelProfileChanges_instance = null;
  function CancelProfileChanges_getInstance() {
    if (CancelProfileChanges_instance === null) {
      new CancelProfileChanges();
    }
    return CancelProfileChanges_instance;
  }
  function CleanPassword() {
    CleanPassword_instance = this;
    Action.call(this, 'auth', CleanPassword_init$lambda);
  }
  function CleanPassword_init$lambda(data, done, fail) {
    ProfileStore_getInstance().password = new UserPassword();
    done(ProfileStore_getInstance().password);
  }
  CleanPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CleanPassword',
    interfaces: [Action]
  };
  var CleanPassword_instance = null;
  function CleanPassword_getInstance() {
    if (CleanPassword_instance === null) {
      new CleanPassword();
    }
    return CleanPassword_instance;
  }
  function GetConfirmPwd() {
    GetConfirmPwd_instance = this;
    Action.call(this, 'auth', GetConfirmPwd_init$lambda);
  }
  function GetConfirmPwd_init$lambda(data, done, fail) {
    done(ProfileStore_getInstance().password.newPassword);
  }
  GetConfirmPwd.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetConfirmPwd',
    interfaces: [Action]
  };
  var GetConfirmPwd_instance = null;
  function GetConfirmPwd_getInstance() {
    if (GetConfirmPwd_instance === null) {
      new GetConfirmPwd();
    }
    return GetConfirmPwd_instance;
  }
  function GetNewPassword() {
    GetNewPassword_instance = this;
    Action.call(this, 'auth', GetNewPassword_init$lambda);
  }
  function GetNewPassword_init$lambda(data, done, fail) {
    done(ProfileStore_getInstance().password.newPassword);
  }
  GetNewPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetNewPassword',
    interfaces: [Action]
  };
  var GetNewPassword_instance = null;
  function GetNewPassword_getInstance() {
    if (GetNewPassword_instance === null) {
      new GetNewPassword();
    }
    return GetNewPassword_instance;
  }
  function GetOldPassword() {
    GetOldPassword_instance = this;
    Action.call(this, 'auth', GetOldPassword_init$lambda);
  }
  function GetOldPassword_init$lambda(data, done, fail) {
    done(ProfileStore_getInstance().password.oldPassword);
  }
  GetOldPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetOldPassword',
    interfaces: [Action]
  };
  var GetOldPassword_instance = null;
  function GetOldPassword_getInstance() {
    if (GetOldPassword_instance === null) {
      new GetOldPassword();
    }
    return GetOldPassword_instance;
  }
  function GetProfileEmail() {
    GetProfileEmail_instance = this;
    Action.call(this, 'auth', GetProfileEmail_init$lambda);
  }
  function GetProfileEmail_init$lambda(data, done, fail) {
    done(ProfileStore_getInstance().temporaryProfile.email);
  }
  GetProfileEmail.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetProfileEmail',
    interfaces: [Action]
  };
  var GetProfileEmail_instance = null;
  function GetProfileEmail_getInstance() {
    if (GetProfileEmail_instance === null) {
      new GetProfileEmail();
    }
    return GetProfileEmail_instance;
  }
  function GetProfileName() {
    GetProfileName_instance = this;
    Action.call(this, 'auth', GetProfileName_init$lambda);
  }
  function GetProfileName_init$lambda(data, done, fail) {
    done(ProfileStore_getInstance().temporaryProfile.name);
  }
  GetProfileName.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GetProfileName',
    interfaces: [Action]
  };
  var GetProfileName_instance = null;
  function GetProfileName_getInstance() {
    if (GetProfileName_instance === null) {
      new GetProfileName();
    }
    return GetProfileName_instance;
  }
  function LoadPicture() {
    LoadPicture_instance = this;
    Action.call(this, 'auth', LoadPicture_init$lambda);
  }
  function LoadPicture_init$lambda(id, done, fail) {
    var tmp$, tmp$_0;
    ProfileStore_getInstance().picture = new UserPicture();
    ProfileStore_getInstance().picture._id = (tmp$ = LoggedUserStore_getInstance().loggedUser) != null ? tmp$.picture : null;
    ProfileStore_getInstance().temporaryPicture = new UserPicture();
    ProfileStore_getInstance().temporaryPicture._id = (tmp$_0 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_0.picture : null;
    done(ProfileStore_getInstance().temporaryPicture);
  }
  LoadPicture.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LoadPicture',
    interfaces: [Action]
  };
  var LoadPicture_instance = null;
  function LoadPicture_getInstance() {
    if (LoadPicture_instance === null) {
      new LoadPicture();
    }
    return LoadPicture_instance;
  }
  function LoadProfile() {
    LoadProfile_instance = this;
    Action.call(this, 'auth', LoadProfile_init$lambda);
  }
  function LoadProfile_init$lambda(id, done, fail) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    ProfileStore_getInstance().profile = new UserProfile();
    ProfileStore_getInstance().profile.name = (tmp$ = LoggedUserStore_getInstance().loggedUser) != null ? tmp$.name : null;
    ProfileStore_getInstance().profile.email = (tmp$_0 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_0.email : null;
    ProfileStore_getInstance().temporaryProfile = new UserProfile();
    ProfileStore_getInstance().temporaryProfile.name = (tmp$_1 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_1.name : null;
    ProfileStore_getInstance().temporaryProfile.email = (tmp$_2 = LoggedUserStore_getInstance().loggedUser) != null ? tmp$_2.email : null;
    done(ProfileStore_getInstance().temporaryProfile);
  }
  LoadProfile.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LoadProfile',
    interfaces: [Action]
  };
  var LoadProfile_instance = null;
  function LoadProfile_getInstance() {
    if (LoadProfile_instance === null) {
      new LoadProfile();
    }
    return LoadProfile_instance;
  }
  function NewPassword() {
    NewPassword_instance = this;
    Action.call(this, 'auth', NewPassword_init$lambda);
  }
  function NewPassword_init$lambda(data, done, fail) {
    ProfileStore_getInstance().password = new UserPassword();
    done(ProfileStore_getInstance().password);
  }
  NewPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NewPassword',
    interfaces: [Action]
  };
  var NewPassword_instance = null;
  function NewPassword_getInstance() {
    if (NewPassword_instance === null) {
      new NewPassword();
    }
    return NewPassword_instance;
  }
  function SavePassword() {
    SavePassword_instance = this;
    Action.call(this, 'auth', SavePassword_init$lambda);
  }
  function SavePassword_init$lambda$ObjectLiteral() {
    this.oldPassword = ProfileStore_getInstance().password.oldPassword;
    this.password = ProfileStore_getInstance().password.newPassword;
  }
  SavePassword_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function SavePassword_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(true);
      emit('auth@clean_password', null);
    };
  }
  function SavePassword_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(error);
    };
  }
  function SavePassword_init$lambda(data, done, fail) {
    core.API.put_gyijfi$(AuthRoutes_getInstance().savePassword(), new SavePassword_init$lambda$ObjectLiteral(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), SavePassword_init$lambda$lambda(done), SavePassword_init$lambda$lambda_0(fail));
  }
  SavePassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SavePassword',
    interfaces: [Action]
  };
  var SavePassword_instance = null;
  function SavePassword_getInstance() {
    if (SavePassword_instance === null) {
      new SavePassword();
    }
    return SavePassword_instance;
  }
  function SavePicture() {
    SavePicture_instance = this;
    Action.call(this, 'auth', SavePicture_init$lambda);
  }
  function SavePicture_init$lambda$ObjectLiteral() {
    this.picture = ProfileStore_getInstance().temporaryPicture._id;
  }
  SavePicture_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function SavePicture_init$lambda$lambda(closure$done) {
    return function (data) {
      var tmp$;
      ProfileStore_getInstance().temporaryPicture = new UserPicture();
      ProfileStore_getInstance().temporaryPicture._id = data.picture;
      ProfileStore_getInstance().picture = new UserPicture();
      ProfileStore_getInstance().picture._id = data.picture;
      closure$done(ProfileStore_getInstance().picture);
      (tmp$ = LoggedUserStore_getInstance().loggedUser) != null ? (tmp$.picture = data.picture) : null;
      emit('auth@put_legacy_storage', null);
    };
  }
  function SavePicture_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(error);
    };
  }
  function SavePicture_init$lambda(data, done, fail) {
    core.API.put_gyijfi$(AuthRoutes_getInstance().savePicture(), new SavePicture_init$lambda$ObjectLiteral(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), SavePicture_init$lambda$lambda(done), SavePicture_init$lambda$lambda_0(fail));
  }
  SavePicture.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SavePicture',
    interfaces: [Action]
  };
  var SavePicture_instance = null;
  function SavePicture_getInstance() {
    if (SavePicture_instance === null) {
      new SavePicture();
    }
    return SavePicture_instance;
  }
  function SaveProfile() {
    SaveProfile_instance = this;
    Action.call(this, 'auth', SaveProfile_init$lambda);
  }
  function SaveProfile_init$lambda$lambda(closure$done) {
    return function (data) {
      var tmp$, tmp$_0;
      ProfileStore_getInstance().profile = new UserProfile(data);
      ProfileStore_getInstance().temporaryProfile = new UserProfile(clone(data));
      closure$done(ProfileStore_getInstance().profile);
      (tmp$ = LoggedUserStore_getInstance().loggedUser) != null ? (tmp$.name = ProfileStore_getInstance().profile.name) : null;
      (tmp$_0 = LoggedUserStore_getInstance().loggedUser) != null ? (tmp$_0.email = ProfileStore_getInstance().profile.email) : null;
      emit('auth@put_legacy_storage', null);
    };
  }
  function SaveProfile_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(error);
    };
  }
  function SaveProfile_init$lambda(data, done, fail) {
    core.API.put_gyijfi$(AuthRoutes_getInstance().saveProfile(), ProfileStore_getInstance().temporaryProfile.data(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), SaveProfile_init$lambda$lambda(done), SaveProfile_init$lambda$lambda_0(fail));
  }
  SaveProfile.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SaveProfile',
    interfaces: [Action]
  };
  var SaveProfile_instance = null;
  function SaveProfile_getInstance() {
    if (SaveProfile_instance === null) {
      new SaveProfile();
    }
    return SaveProfile_instance;
  }
  function SetConfirmPwd() {
    SetConfirmPwd_instance = this;
    Action.call(this, 'auth', SetConfirmPwd_init$lambda);
  }
  function SetConfirmPwd_init$lambda(data, done, fail) {
    ProfileStore_getInstance().password.confirmPwd = data;
    done(ProfileStore_getInstance().password.confirmPwd);
  }
  SetConfirmPwd.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetConfirmPwd',
    interfaces: [Action]
  };
  var SetConfirmPwd_instance = null;
  function SetConfirmPwd_getInstance() {
    if (SetConfirmPwd_instance === null) {
      new SetConfirmPwd();
    }
    return SetConfirmPwd_instance;
  }
  function SetNewPassword() {
    SetNewPassword_instance = this;
    Action.call(this, 'auth', SetNewPassword_init$lambda);
  }
  function SetNewPassword_init$lambda(data, done, fail) {
    ProfileStore_getInstance().password.newPassword = data;
    done(ProfileStore_getInstance().password.newPassword);
  }
  SetNewPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetNewPassword',
    interfaces: [Action]
  };
  var SetNewPassword_instance = null;
  function SetNewPassword_getInstance() {
    if (SetNewPassword_instance === null) {
      new SetNewPassword();
    }
    return SetNewPassword_instance;
  }
  function SetOldPassword() {
    SetOldPassword_instance = this;
    Action.call(this, 'auth', SetOldPassword_init$lambda);
  }
  function SetOldPassword_init$lambda(data, done, fail) {
    ProfileStore_getInstance().password.oldPassword = data;
    done(ProfileStore_getInstance().password.oldPassword);
  }
  SetOldPassword.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetOldPassword',
    interfaces: [Action]
  };
  var SetOldPassword_instance = null;
  function SetOldPassword_getInstance() {
    if (SetOldPassword_instance === null) {
      new SetOldPassword();
    }
    return SetOldPassword_instance;
  }
  function SetPictureFile() {
    SetPictureFile_instance = this;
    Action.call(this, 'auth', SetPictureFile_init$lambda);
  }
  function SetPictureFile_init$lambda(data, done, fail) {
    ProfileStore_getInstance().picture.file = data;
    done(ProfileStore_getInstance().picture.file);
    emit('auth@upload_picture_file', null);
  }
  SetPictureFile.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetPictureFile',
    interfaces: [Action]
  };
  var SetPictureFile_instance = null;
  function SetPictureFile_getInstance() {
    if (SetPictureFile_instance === null) {
      new SetPictureFile();
    }
    return SetPictureFile_instance;
  }
  function SetProfileEmail() {
    SetProfileEmail_instance = this;
    Action.call(this, 'auth', SetProfileEmail_init$lambda);
  }
  function SetProfileEmail_init$lambda(data, done, fail) {
    ProfileStore_getInstance().temporaryProfile.email = data;
    done(ProfileStore_getInstance().temporaryProfile.email);
  }
  SetProfileEmail.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetProfileEmail',
    interfaces: [Action]
  };
  var SetProfileEmail_instance = null;
  function SetProfileEmail_getInstance() {
    if (SetProfileEmail_instance === null) {
      new SetProfileEmail();
    }
    return SetProfileEmail_instance;
  }
  function SetProfileName() {
    SetProfileName_instance = this;
    Action.call(this, 'auth', SetProfileName_init$lambda);
  }
  function SetProfileName_init$lambda(data, done, fail) {
    ProfileStore_getInstance().temporaryProfile.name = data;
    done(ProfileStore_getInstance().temporaryProfile.name);
  }
  SetProfileName.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SetProfileName',
    interfaces: [Action]
  };
  var SetProfileName_instance = null;
  function SetProfileName_getInstance() {
    if (SetProfileName_instance === null) {
      new SetProfileName();
    }
    return SetProfileName_instance;
  }
  function UploadPictureFile() {
    UploadPictureFile_instance = this;
    Action.call(this, 'auth', UploadPictureFile_init$lambda);
  }
  function UploadPictureFile_init$lambda$lambda(closure$done) {
    return function (data) {
      ProfileStore_getInstance().temporaryPicture._id = data.key;
      closure$done(true);
    };
  }
  function UploadPictureFile_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(error);
    };
  }
  function UploadPictureFile_init$lambda(data, done, fail) {
    core.API.upload_3q80fv$(AuthRoutes_getInstance().uploadFile(), ProfileStore_getInstance().picture.file, Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), UploadPictureFile_init$lambda$lambda(done), UploadPictureFile_init$lambda$lambda_0(fail));
  }
  UploadPictureFile.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'UploadPictureFile',
    interfaces: [Action]
  };
  var UploadPictureFile_instance = null;
  function UploadPictureFile_getInstance() {
    if (UploadPictureFile_instance === null) {
      new UploadPictureFile();
    }
    return UploadPictureFile_instance;
  }
  function UserPassword(data) {
    if (data === void 0)
      data = new UserPassword_init$ObjectLiteral();
    Model.call(this, data);
    this.oldPassword$delegate = this.observable_m38zes$('old_password', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('passwordMin', function ($receiver, error, value, model) {
      return $receiver.passwordMin_nym0p8$(error, value, model);
    }.bind(null, this))]), UserPassword$oldPassword$lambda);
    this.newPassword$delegate = this.observable_m38zes$('new_password', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('passwordMin', function ($receiver, error, value, model) {
      return $receiver.passwordMin_nym0p8$(error, value, model);
    }.bind(null, this))]), UserPassword$newPassword$lambda);
    this.confirmPwd$delegate = this.observable_m38zes$('confirm_pwd', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('passwordMin', function ($receiver, error, value, model) {
      return $receiver.passwordMin_nym0p8$(error, value, model);
    }.bind(null, this)), Kotlin.getCallableRef('passwordConfirm', function ($receiver, error, value, model) {
      return $receiver.passwordConfirm_nym0p8$(error, value, model);
    }.bind(null, this))]), UserPassword$confirmPwd$lambda);
  }
  Object.defineProperty(UserPassword.prototype, 'oldPassword', {
    get: function () {
      return this.oldPassword$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('oldPassword'));
    },
    set: function (oldPassword) {
      this.oldPassword$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('oldPassword'), oldPassword);
    }
  });
  Object.defineProperty(UserPassword.prototype, 'newPassword', {
    get: function () {
      return this.newPassword$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('newPassword'));
    },
    set: function (newPassword) {
      this.newPassword$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('newPassword'), newPassword);
    }
  });
  Object.defineProperty(UserPassword.prototype, 'confirmPwd', {
    get: function () {
      return this.confirmPwd$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('confirmPwd'));
    },
    set: function (confirmPwd) {
      this.confirmPwd$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('confirmPwd'), confirmPwd);
    }
  });
  UserPassword.prototype.passwordMin_nym0p8$ = function (error, value, model) {
    if (Kotlin.isType(model, UserPassword)) {
      error.min_length = (value != null && (typeof value === 'string' && value.length < 6));
    }
  };
  UserPassword.prototype.passwordConfirm_nym0p8$ = function (error, value, model) {
    if (Kotlin.isType(model, UserPassword)) {
      error.confirm = !Kotlin.equals(model.newPassword, value);
    }
  };
  function UserPassword_init$ObjectLiteral() {
  }
  UserPassword_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserPassword$oldPassword$lambda() {
    return '';
  }
  function UserPassword$newPassword$lambda() {
    return '';
  }
  function UserPassword$confirmPwd$lambda() {
    return '';
  }
  UserPassword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UserPassword',
    interfaces: [Model]
  };
  function UserPicture(data) {
    if (data === void 0)
      data = new UserPicture_init$ObjectLiteral();
    Model.call(this, data);
    this._id$delegate = this.observable_vzdcz6$('_id');
    this.file$delegate = this.observable_m38zes$('file', void 0, UserPicture$file$lambda);
    this.url$delegate = this.observable_m38zes$('url', void 0, UserPicture$url$lambda);
  }
  Object.defineProperty(UserPicture.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(UserPicture.prototype, 'file', {
    get: function () {
      return this.file$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('file'));
    },
    set: function (file) {
      this.file$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('file'), file);
    }
  });
  Object.defineProperty(UserPicture.prototype, 'url', {
    get: function () {
      return this.url$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('url'));
    },
    set: function (url) {
      this.url$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('url'), url);
    }
  });
  function UserPicture_init$ObjectLiteral() {
  }
  UserPicture_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserPicture$file$lambda() {
    return '';
  }
  function UserPicture$url$lambda() {
    return AuthRoutes_getInstance().currentS3Host();
  }
  UserPicture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UserPicture',
    interfaces: [Model]
  };
  function UserProfile(data) {
    if (data === void 0)
      data = new UserProfile_init$ObjectLiteral();
    Model.call(this, data);
    this.name$delegate = this.observable_m38zes$('name', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), UserProfile$name$lambda);
    this.email$delegate = this.observable_m38zes$('email', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    }), Kotlin.getCallableRef('isEmail', function (error, value, model) {
      return isEmail(error, value, model);
    })]), UserProfile$email$lambda);
  }
  Object.defineProperty(UserProfile.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  Object.defineProperty(UserProfile.prototype, 'email', {
    get: function () {
      return this.email$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('email'));
    },
    set: function (email) {
      this.email$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('email'), email);
    }
  });
  function UserProfile_init$ObjectLiteral() {
  }
  UserProfile_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function UserProfile$name$lambda() {
    return '';
  }
  function UserProfile$email$lambda() {
    return '';
  }
  UserProfile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UserProfile',
    interfaces: [Model]
  };
  function ProfileStore() {
    ProfileStore_instance = this;
    Store.call(this, 'auth');
    this.profile$delegate = this.modelObservable_x5h7f$('profile', void 0, ProfileStore$profile$lambda);
    this.temporaryProfile$delegate = this.modelObservable_x5h7f$('temporary_profile', void 0, ProfileStore$temporaryProfile$lambda);
    this.password$delegate = this.modelObservable_x5h7f$('password', void 0, ProfileStore$password$lambda);
    this.picture$delegate = this.modelObservable_x5h7f$('picture', void 0, ProfileStore$picture$lambda);
    this.temporaryPicture$delegate = this.modelObservable_x5h7f$('temporary_picture', void 0, ProfileStore$temporaryPicture$lambda);
  }
  Object.defineProperty(ProfileStore.prototype, 'profile', {
    get: function () {
      return this.profile$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('profile'));
    },
    set: function (profile) {
      this.profile$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('profile'), profile);
    }
  });
  Object.defineProperty(ProfileStore.prototype, 'temporaryProfile', {
    get: function () {
      return this.temporaryProfile$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('temporaryProfile'));
    },
    set: function (temporaryProfile) {
      this.temporaryProfile$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('temporaryProfile'), temporaryProfile);
    }
  });
  Object.defineProperty(ProfileStore.prototype, 'password', {
    get: function () {
      return this.password$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('password'));
    },
    set: function (password) {
      this.password$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('password'), password);
    }
  });
  Object.defineProperty(ProfileStore.prototype, 'picture', {
    get: function () {
      return this.picture$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('picture'));
    },
    set: function (picture) {
      this.picture$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('picture'), picture);
    }
  });
  Object.defineProperty(ProfileStore.prototype, 'temporaryPicture', {
    get: function () {
      return this.temporaryPicture$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('temporaryPicture'));
    },
    set: function (temporaryPicture) {
      this.temporaryPicture$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('temporaryPicture'), temporaryPicture);
    }
  });
  function ProfileStore$profile$lambda(it) {
    return new UserProfile(it);
  }
  function ProfileStore$temporaryProfile$lambda(it) {
    return new UserProfile(it);
  }
  function ProfileStore$password$lambda(it) {
    return new UserPassword(it);
  }
  function ProfileStore$picture$lambda(it) {
    return new UserPicture(it);
  }
  function ProfileStore$temporaryPicture$lambda(it) {
    return new UserPicture(it);
  }
  ProfileStore.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ProfileStore',
    interfaces: [Store]
  };
  var ProfileStore_instance = null;
  function ProfileStore_getInstance() {
    if (ProfileStore_instance === null) {
      new ProfileStore();
    }
    return ProfileStore_instance;
  }
  function ListRoles() {
    ListRoles_instance = this;
    Action.call(this, 'auth', ListRoles_init$lambda);
  }
  function ListRoles_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(ModelList.Companion.fromDynamic_xaus8m$(data));
    };
  }
  function ListRoles_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function ListRoles_init$lambda(data, done, fail) {
    core.API.get_yaxyun$(AuthRoutes_getInstance().listRoles(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), ListRoles_init$lambda$lambda(done), ListRoles_init$lambda$lambda_0(fail));
  }
  ListRoles.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ListRoles',
    interfaces: [Action]
  };
  var ListRoles_instance = null;
  function ListRoles_getInstance() {
    if (ListRoles_instance === null) {
      new ListRoles();
    }
    return ListRoles_instance;
  }
  function ListUserEnabledRoles() {
    ListUserEnabledRoles_instance = this;
    Action.call(this, 'auth', ListUserEnabledRoles_init$lambda);
  }
  function ListUserEnabledRoles_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(ModelList.Companion.fromDynamic_xaus8m$(data));
    };
  }
  function ListUserEnabledRoles_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function ListUserEnabledRoles_init$lambda(data, done, fail) {
    core.API.get_yaxyun$(AuthRoutes_getInstance().listUserEnabledRoles_61zpoe$(data), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), ListUserEnabledRoles_init$lambda$lambda(done), ListUserEnabledRoles_init$lambda$lambda_0(fail));
  }
  ListUserEnabledRoles.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ListUserEnabledRoles',
    interfaces: [Action]
  };
  var ListUserEnabledRoles_instance = null;
  function ListUserEnabledRoles_getInstance() {
    if (ListUserEnabledRoles_instance === null) {
      new ListUserEnabledRoles();
    }
    return ListUserEnabledRoles_instance;
  }
  function Permission(data) {
    if (data === void 0)
      data = new Permission_init$ObjectLiteral();
    Model.call(this, data);
    this._id$delegate = this.observable_m38zes$('_id', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Permission$_id$lambda);
    this.name$delegate = this.observable_m38zes$('name', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Permission$name$lambda);
  }
  Object.defineProperty(Permission.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(Permission.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  function Permission_init$ObjectLiteral() {
  }
  Permission_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Permission$_id$lambda() {
    return '';
  }
  function Permission$name$lambda() {
    return '';
  }
  Permission.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Permission',
    interfaces: [Model]
  };
  function Role(data) {
    if (data === void 0)
      data = new Role_init$ObjectLiteral();
    Model.call(this, data);
    this._id$delegate = this.observable_m38zes$('_id', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Role$_id$lambda);
    this.name$delegate = this.observable_m38zes$('name', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), Role$name$lambda);
    this.roles$delegate = this.listObservable_enb3ep$('roles', void 0, Role$roles$lambda);
    this.permissions$delegate = this.listObservable_enb3ep$('permissions', void 0, Role$permissions$lambda);
  }
  Object.defineProperty(Role.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(Role.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  Object.defineProperty(Role.prototype, 'roles', {
    get: function () {
      return this.roles$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('roles'));
    },
    set: function (roles) {
      this.roles$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('roles'), roles);
    }
  });
  Object.defineProperty(Role.prototype, 'permissions', {
    get: function () {
      return this.permissions$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('permissions'));
    },
    set: function (permissions) {
      this.permissions$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('permissions'), permissions);
    }
  });
  function Role_init$ObjectLiteral() {
  }
  Role_init$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function Role$_id$lambda() {
    return '';
  }
  function Role$name$lambda() {
    return '';
  }
  function Role$roles$lambda(it) {
    return new Role(it);
  }
  function Role$permissions$lambda(it) {
    return new Permission(it);
  }
  Role.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Role',
    interfaces: [Model]
  };
  function ListUserRefs() {
    ListUserRefs_instance = this;
    Action.call(this, 'auth', ListUserRefs_init$lambda);
  }
  function ListUserRefs_init$lambda$lambda$lambda(it) {
    return new UserRef(it);
  }
  function ListUserRefs_init$lambda$lambda(closure$done) {
    return function (data) {
      closure$done(ModelList.Companion.fromDynamic_xaus8m$(data, ListUserRefs_init$lambda$lambda$lambda));
    };
  }
  function ListUserRefs_init$lambda$lambda_0(closure$fail) {
    return function (error, status) {
      println(status.toString() + ' - ' + error);
      closure$fail(status.toString() + ' - ' + JSON.stringify(error));
    };
  }
  function ListUserRefs_init$lambda(data, done, fail) {
    core.API.get_yaxyun$(AuthRoutes_getInstance().listUserRefs(), hashMapOf([to('name', data)]), Kotlin.kotlin.collections.HashMap_init_q3lmfv$(), ListUserRefs_init$lambda$lambda(done), ListUserRefs_init$lambda$lambda_0(fail));
  }
  ListUserRefs.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ListUserRefs',
    interfaces: [Action]
  };
  var ListUserRefs_instance = null;
  function ListUserRefs_getInstance() {
    if (ListUserRefs_instance === null) {
      new ListUserRefs();
    }
    return ListUserRefs_instance;
  }
  function UserRef(d) {
    Model.call(this, d);
    this._id$delegate = this.observable_m38zes$('_id', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), UserRef$_id$lambda);
    this.name$delegate = this.observable_m38zes$('name', validators([Kotlin.getCallableRef('required', function (error, value, model) {
      return required(error, value, model);
    })]), UserRef$name$lambda);
  }
  Object.defineProperty(UserRef.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(UserRef.prototype, 'name', {
    get: function () {
      return this.name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('name'));
    },
    set: function (name) {
      this.name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('name'), name);
    }
  });
  function UserRef$_id$lambda() {
    return '';
  }
  function UserRef$name$lambda() {
    return '';
  }
  UserRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UserRef',
    interfaces: [Model]
  };
  var package$auth = _.auth || (_.auth = {});
  Object.defineProperty(package$auth, 'AuthRoutes', {
    get: AuthRoutes_getInstance
  });
  Object.defineProperty(package$auth, 'Constants', {
    get: Constants_getInstance
  });
  package$auth.start = start;
  var package$logged = package$auth.logged || (package$auth.logged = {});
  var package$action = package$logged.action || (package$logged.action = {});
  Object.defineProperty(package$action, 'CheckIfIsLogged', {
    get: CheckIfIsLogged_getInstance
  });
  Object.defineProperty(package$action, 'GetLang', {
    get: GetLang_getInstance
  });
  Object.defineProperty(package$action, 'GetLoggedUser', {
    get: GetLoggedUser_getInstance
  });
  Object.defineProperty(package$action, 'GetMyPermissions', {
    get: GetMyPermissions_getInstance
  });
  Object.defineProperty(package$action, 'ListMyPermissions', {
    get: ListMyPermissions_getInstance
  });
  Object.defineProperty(package$action, 'PutLegacyStorage', {
    get: PutLegacyStorage_getInstance
  });
  Object.defineProperty(package$action, 'RefreshFirstToken', {
    get: RefreshFirstToken_getInstance
  });
  Object.defineProperty(package$action, 'RefreshToken', {
    get: RefreshToken_getInstance
  });
  var package$model = package$logged.model || (package$logged.model = {});
  package$model.LoggedUser = LoggedUser;
  var package$store = package$logged.store || (package$logged.store = {});
  Object.defineProperty(package$store, 'LoggedUserStore', {
    get: LoggedUserStore_getInstance
  });
  var package$login = package$auth.login || (package$auth.login = {});
  var package$action_0 = package$login.action || (package$login.action = {});
  Object.defineProperty(package$action_0, 'ForgotMyPassword', {
    get: ForgotMyPassword_getInstance
  });
  Object.defineProperty(package$action_0, 'GetLoginStore', {
    get: GetLoginStore_getInstance
  });
  Object.defineProperty(package$action_0, 'GetUserByEmail', {
    get: GetUserByEmail_getInstance
  });
  Object.defineProperty(package$action_0, 'Login', {
    get: Login_getInstance
  });
  Object.defineProperty(package$action_0, 'SetLoginEmail', {
    get: SetLoginEmail_getInstance
  });
  Object.defineProperty(package$action_0, 'SetLoginPassword', {
    get: SetLoginPassword_getInstance
  });
  Object.defineProperty(package$action_0, 'SetRecoveryPassword', {
    get: SetRecoveryPassword_getInstance
  });
  Object.defineProperty(package$action_0, 'SetRecoveryRepeatPassword', {
    get: SetRecoveryRepeatPassword_getInstance
  });
  Object.defineProperty(package$action_0, 'SetRecoveryToken', {
    get: SetRecoveryToken_getInstance
  });
  Object.defineProperty(package$action_0, 'UpdateNewPassword', {
    get: UpdateNewPassword_getInstance
  });
  var package$model_0 = package$login.model || (package$login.model = {});
  package$model_0.Credentials = Credentials;
  package$model_0.User = User;
  var package$store_0 = package$login.store || (package$login.store = {});
  Object.defineProperty(package$store_0, 'LoginStore', {
    get: LoginStore_getInstance
  });
  Object.defineProperty(package$store_0, 'RecoveryStore', {
    get: RecoveryStore_getInstance
  });
  var package$profile = package$auth.profile || (package$auth.profile = {});
  var package$action_1 = package$profile.action || (package$profile.action = {});
  Object.defineProperty(package$action_1, 'CancelProfileChanges', {
    get: CancelProfileChanges_getInstance
  });
  Object.defineProperty(package$action_1, 'CleanPassword', {
    get: CleanPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'GetConfirmPwd', {
    get: GetConfirmPwd_getInstance
  });
  Object.defineProperty(package$action_1, 'GetNewPassword', {
    get: GetNewPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'GetOldPassword', {
    get: GetOldPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'GetProfileEmail', {
    get: GetProfileEmail_getInstance
  });
  Object.defineProperty(package$action_1, 'GetProfileName', {
    get: GetProfileName_getInstance
  });
  Object.defineProperty(package$action_1, 'LoadPicture', {
    get: LoadPicture_getInstance
  });
  Object.defineProperty(package$action_1, 'LoadProfile', {
    get: LoadProfile_getInstance
  });
  Object.defineProperty(package$action_1, 'NewPassword', {
    get: NewPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'SavePassword', {
    get: SavePassword_getInstance
  });
  Object.defineProperty(package$action_1, 'SavePicture', {
    get: SavePicture_getInstance
  });
  Object.defineProperty(package$action_1, 'SaveProfile', {
    get: SaveProfile_getInstance
  });
  Object.defineProperty(package$action_1, 'SetConfirmPwd', {
    get: SetConfirmPwd_getInstance
  });
  Object.defineProperty(package$action_1, 'SetNewPassword', {
    get: SetNewPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'SetOldPassword', {
    get: SetOldPassword_getInstance
  });
  Object.defineProperty(package$action_1, 'SetPictureFile', {
    get: SetPictureFile_getInstance
  });
  Object.defineProperty(package$action_1, 'SetProfileEmail', {
    get: SetProfileEmail_getInstance
  });
  Object.defineProperty(package$action_1, 'SetProfileName', {
    get: SetProfileName_getInstance
  });
  Object.defineProperty(package$action_1, 'UploadPictureFile', {
    get: UploadPictureFile_getInstance
  });
  var package$model_1 = package$profile.model || (package$profile.model = {});
  package$model_1.UserPassword = UserPassword;
  package$model_1.UserPicture = UserPicture;
  package$model_1.UserProfile = UserProfile;
  var package$store_1 = package$profile.store || (package$profile.store = {});
  Object.defineProperty(package$store_1, 'ProfileStore', {
    get: ProfileStore_getInstance
  });
  var package$role = package$auth.role || (package$auth.role = {});
  var package$action_2 = package$role.action || (package$role.action = {});
  Object.defineProperty(package$action_2, 'ListRoles', {
    get: ListRoles_getInstance
  });
  var package$user = package$auth.user || (package$auth.user = {});
  var package$action_3 = package$user.action || (package$user.action = {});
  Object.defineProperty(package$action_3, 'ListUserEnabledRoles', {
    get: ListUserEnabledRoles_getInstance
  });
  var package$model_2 = package$role.model || (package$role.model = {});
  package$model_2.Permission = Permission;
  package$model_2.Role = Role;
  Object.defineProperty(package$action_3, 'ListUserRefs', {
    get: ListUserRefs_getInstance
  });
  var package$model_3 = package$user.model || (package$user.model = {});
  package$model_3.UserRef = UserRef;
  Kotlin.defineModule('auth', _);
  return _;
}(typeof auth === 'undefined' ? {} : auth, kotlin, common);
