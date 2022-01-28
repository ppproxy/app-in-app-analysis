var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/regenerator")), r = require("../@babel/runtime/helpers/asyncToGenerator"), t = require("md5-file"), a = require("axios"), n = require("path"), s = require("minimist")(process.argv.slice(2)), i = require("fs"), o = require("../package.json"), u = i.realpathSync(process.cwd()), c = n.resolve(u, "./preview.jpg");

function p(e, r) {
    return a({
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        url: s.u,
        data: {
            msgtype: "image",
            image: {
                base64: e,
                md5: r
            }
        }
    });
}

r(e.default.mark(function r() {
    var n, u, l;
    return e.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.prev = 0, n = i.readFileSync(c), u = t.sync(c), l = n.toString("base64"), 
            e.next = 6, p(l, u);

          case 6:
            return e.next = 8, a({
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                url: s.u,
                data: {
                    msgtype: "text",
                    text: {
                        content: "特性变更：" + o.versionDesc,
                        mentioned_list: [ "@all" ]
                    }
                }
            });

          case 8:
            e.next = 14;
            break;

          case 10:
            e.prev = 10, e.t0 = e.catch(0), console.error(e.t0), process.exit(1);

          case 14:
          case "end":
            return e.stop();
        }
    }, r, null, [ [ 0, 10 ] ]);
}))();