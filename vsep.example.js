define(function(require, exports, module) {
    main.consumes = ["Plugin", "c9", "dialog.alert"];
    main.provides = ["vsep.example"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var c9 = imports.c9;
        var alert = imports["dialog.alert"];

        /***** Initialization *****/

        var plugin = new Plugin("Human-Computer Interaction Institute, Carnegie Mellon University", main.consumes);

        function load() {
            alert.show("VSEP Example plugin", "Loaded the VSEP Example plugin.", "Message: '" + options.message + "'\nCloud9 IDE version " + c9.version);
        }

        /***** Methods *****/

        /***** Lifecycle *****/

        plugin.on("load", function onLoad() {
            load();
        });

        plugin.on("unload", function onUnload() {});

        /***** Register and define API *****/

        plugin.freezePublicAPI({

        });

        register(null, {
            "vsep.example": plugin
        });
    }
});
