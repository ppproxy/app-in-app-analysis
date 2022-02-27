function r(r, t, o) {
    this.textColor = r, this.levelBlockBgColor = t, this.levelBlockTextColor = o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fontColor = exports.MemberCardStyles = void 0;

var t = [ "#24363E", "#202B4B", "#333333", "#452C0A", "#6B3928", "#DBDBE0", "#FFDF9F", "#FFDF9F", "#FFDF9F", "#FFDF9F" ], o = "linear-gradient(to bottom right, rgba(66, 60, 60, 1), rgba(35, 35, 35, 1))", e = "linear-gradient(to bottom right, rgba(224, 203, 166, 1), rgba(183, 149, 113, 1))", F = [ o, o, o, o, o, "linear-gradient(to bottom right, rgba(207, 207, 210, 1), rgba(112, 112, 123, 1))", e, e, e, e ], D = [ "#D8D8D8", "#D8D8D8", "#D8D8D8", "#E0CBA6", "#E7D4C5", "#242232", "#333333", "#333333", "#333333", "#333333" ], a = [];

exports.MemberCardStyles = a;

for (var l = 0; l < 10; l++) {
    var i = new r(t[l], F[l], D[l]);
    a.push(i);
}

exports.fontColor = [ "24363E", "202B4B", "333333", "452C0A", "6B3928", "DBDBE0", "FFDF9F", "FFDF9F", "FFDF9F", "FFDF9F" ];