var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/regenerator")), r = require("../@babel/runtime/helpers/objectSpread2"), t = require("../@babel/runtime/helpers/asyncToGenerator"), i = require("miniprogram-ci"), s = require("path"), o = require("fs"), n = require("minimist")(process.argv.slice(2)), a = require("../package.json"), c = o.realpathSync(process.cwd()), p = require("../project.config.json"), u = s.resolve(c, "./preview.jpg");

t(e.default.mark(function t() {
    var o;
    return e.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.prev = 0, o = new i.Project({
                appid: p.appid,
                type: "miniProgram",
                projectPath: s.resolve(c, "../"),
                privateKeyPath: n.p,
                ignores: [ "node_modules/**/*", "ci/**/*" ]
            }), e.next = 4, i.upload({
                project: o,
                version: a.version,
                desc: a.versionDesc,
                setting: r({
                    minify: !0
                }, p.setting),
                onProgressUpdate: console.log
            });

          case 4:
            return e.next = 6, i.preview({
                project: o,
                version: a.version,
                desc: a.versionDesc,
                qrcodeFormat: "image",
                qrcodeOutputDest: u,
                setting: r({}, p.setting),
                onProgressUpdate: console.log
            });

          case 6:
            e.next = 12;
            break;

          case 8:
            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), process.exit(1);

          case 12:
          case "end":
            return e.stop();
        }
    }, t, null, [ [ 0, 8 ] ]);
}))();