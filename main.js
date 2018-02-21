
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function ApplicationPolicyDemo(args, metadata) {
    Application.apply(this, ['ApplicationPolicyDemo', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

    var src = document.location.protocol + "//" + document.location.hostname + ":4000/?token="+localStorage.getItem("agile_token");
    this.options.src = src;
  }

  ApplicationPolicyDemo.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationPolicyDemo = OSjs.Applications.ApplicationPolicyDemo || {};
  OSjs.Applications.ApplicationPolicyDemo.Class = ApplicationPolicyDemo;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
