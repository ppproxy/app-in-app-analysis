Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.isApng = isApng;

/**
 * @file 判断png图片是不是apng
 * @author liuchang61
 */ function eachChunk(bytes, callback) {
    var dv = new DataView(bytes.buffer);
    var off = 8;
    var type = void 0;
    var length = void 0;
    var res = void 0;
    do {
        length = dv.getUint32(off);
        type = readString(bytes, off + 4, 4);
        res = callback(type);
        off += 12 + length;
    } while (res !== false && type != "IEND" && off < bytes.length);
}

function readString(bytes, off, length) {
    var chars = Array.prototype.slice.call(bytes.subarray(off, off + length));
    return String.fromCharCode.apply(String, chars);
}

function isApng(buffer) {
    var bytes = new Uint8Array(buffer);
    var isAnimated = false;
    eachChunk(bytes, function(type) {
        return !(isAnimated = type === "acTL");
    });
    return isAnimated;
}