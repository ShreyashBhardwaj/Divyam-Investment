const _0x42314b = _0x1a85;
(function (_0xf583f7, _0x400087) {
  const _0x2fc003 = _0x1a85,
    _0x1f33cd = _0xf583f7();
  while (!![]) {
    try {
      const _0xd23b9c =
        -parseInt(_0x2fc003(0x16b)) / 0x1 +
        -parseInt(_0x2fc003(0x151)) / 0x2 +
        (-parseInt(_0x2fc003(0x160)) / 0x3) *
          (-parseInt(_0x2fc003(0x14d)) / 0x4) +
        -parseInt(_0x2fc003(0x173)) / 0x5 +
        parseInt(_0x2fc003(0x165)) / 0x6 +
        parseInt(_0x2fc003(0x16a)) / 0x7 +
        -parseInt(_0x2fc003(0x172)) / 0x8;
      if (_0xd23b9c === _0x400087) break;
      else _0x1f33cd["push"](_0x1f33cd["shift"]());
    } catch (_0x1a6792) {
      _0x1f33cd["push"](_0x1f33cd["shift"]());
    }
  }
})(_0x2689, 0x4ab36);
let outputTblDiv = document["getElementById"](_0x42314b(0x17e)),
  searchBtn = document[_0x42314b(0x155)]("searchBtn"),
  totalPageItems = [],
  startIdx = 0x0,
  endIdx = 0x0;
const fetchNavData = async (
  _0x457ef7,
  _0x18d8e1,
  _0x4c18ec,
  _0x3001fa = 0x0
) => {
  const _0x4a580d = _0x42314b;
  let _0x5e17e4 = await fetch(
    "https://operations.webclass.co.in/api/navCalculator/getSchemeReturnsView",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON[_0x4a580d(0x17f)]({
        fundHouse: _0x457ef7,
        schemeType: _0x18d8e1,
        timePeriod: _0x4c18ec,
        offset: _0x3001fa,
      }),
    }
  );
  if (_0x5e17e4["ok"]) {
    let _0x4fba90 = await _0x5e17e4[_0x4a580d(0x14f)]();
    if (_0x4fba90[_0x4a580d(0x14a)][_0x4a580d(0x17b)] > 0x0) {
      let _0x573cb9 =
        "<div\x20id=\x22dataTable\x22\x20class=\x22relative\x20overflow-x-auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22firstTbl\x22\x20class=\x22w-full\x20text-sm\x20text-left\x20rtl:text-right\x20text-gray-500\x20dark:text-gray-400\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22text-xs\x20text-gray-700\x20uppercase\x20bg-red-300\x20dark:bg-gray-700\x20dark:text-gray-400\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Scheme\x20Name\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x20" +
        (_0x4c18ec == "1" ? _0x4a580d(0x15a) : "") +
        _0x4a580d(0x171) +
        (_0x4c18ec == "3" ? _0x4a580d(0x15a) : "") +
        _0x4a580d(0x176) +
        (_0x4c18ec == "5" ? _0x4a580d(0x15a) : "") +
        _0x4a580d(0x178) +
        (_0x4c18ec == "10" ? _0x4a580d(0x15a) : "") +
        _0x4a580d(0x169) +
        (_0x4c18ec == _0x4a580d(0x167) ? "bg-red-300" : "") +
        _0x4a580d(0x175);
      _0x4fba90[_0x4a580d(0x14a)]["forEach"]((_0x44414a) => {
        const _0x52b89e = _0x4a580d;
        _0x573cb9 +=
          _0x52b89e(0x15d) +
          _0x44414a[_0x52b89e(0x174)] +
          _0x52b89e(0x14b) +
          (_0x4c18ec == "1" ? _0x52b89e(0x15a) : "") +
          _0x52b89e(0x14e) +
          (_0x44414a[_0x52b89e(0x162)] !== null
            ? _0x44414a[_0x52b89e(0x162)]
            : "-") +
          _0x52b89e(0x148) +
          (_0x4c18ec == "3" ? _0x52b89e(0x15a) : "") +
          _0x52b89e(0x170) +
          (_0x44414a[_0x52b89e(0x158)] !== null
            ? _0x44414a[_0x52b89e(0x158)]
            : "-") +
          _0x52b89e(0x148) +
          (_0x4c18ec == "5" ? _0x52b89e(0x15a) : "") +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x44414a[_0x52b89e(0x17a)] !== null
            ? _0x44414a[_0x52b89e(0x17a)]
            : "-") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20\x20px-6\x20py-4\x20" +
          (_0x4c18ec == "10" ? _0x52b89e(0x15a) : "") +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x44414a[_0x52b89e(0x16e)] !== null
            ? _0x44414a[_0x52b89e(0x16e)]
            : "-") +
          _0x52b89e(0x15b) +
          (_0x4c18ec == "Inception" ? _0x52b89e(0x15a) : "") +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x44414a[_0x52b89e(0x182)] !== null
            ? _0x44414a[_0x52b89e(0x182)]
            : "-") +
          _0x52b89e(0x153);
      }),
        (_0x573cb9 += _0x4a580d(0x166)),
        (outputTblDiv[_0x4a580d(0x16c)] = _0x573cb9);
      if (_0x4fba90[_0x4a580d(0x16d)] > 0x0) {
        let _0x10406f = Math["ceil"](_0x4fba90[_0x4a580d(0x16d)] / 0xa);
        totalPageItems = [];
        for (let _0x1331fa = 0x0; _0x1331fa < _0x10406f; _0x1331fa++) {
          totalPageItems[_0x4a580d(0x183)](_0x1331fa + 0x1);
        }
        if (totalPageItems[_0x4a580d(0x17b)] > 0x0) {
          endIdx == 0x0 &&
            (endIdx =
              totalPageItems[_0x4a580d(0x17b)] > 0x5
                ? 0x5
                : totalPageItems["length"]);
          let _0x5210cf = _0x4a580d(0x156),
            _0x1e3e7a =
              totalPageItems[_0x4a580d(0x17b)] > 0x1 && startIdx > 0x0
                ? _0x4a580d(0x157) +
                  ("\x27" +
                    _0x457ef7 +
                    _0x4a580d(0x154) +
                    _0x18d8e1 +
                    _0x4a580d(0x154) +
                    _0x4c18ec +
                    "\x27") +
                  _0x4a580d(0x181)
                : "",
            _0x40f30c = "";
          for (let _0x5eb829 = startIdx; _0x5eb829 < endIdx; _0x5eb829++) {
            _0x40f30c +=
              _0x4a580d(0x164) +
              (_0x5eb829 + 0x1) +
              ("," +
                "\x27" +
                _0x457ef7 +
                _0x4a580d(0x154) +
                _0x18d8e1 +
                _0x4a580d(0x154) +
                _0x4c18ec +
                "\x27") +
              ")\x22" +
              (_0x5eb829 == _0x3001fa ? _0x4a580d(0x179) : "") +
              _0x4a580d(0x15f) +
              (_0x5eb829 == _0x3001fa
                ? _0x4a580d(0x161)
                : "text-gray-500\x20bg-white\x20border\x20border-gray-300\x20bg-blue-50") +
              (_0x4a580d(0x17d) + (_0x5eb829 + 0x1) + _0x4a580d(0x15c));
          }
          let _0x145321 =
            endIdx < totalPageItems["length"]
              ? _0x4a580d(0x147) +
                ("\x27" +
                  _0x457ef7 +
                  _0x4a580d(0x154) +
                  _0x18d8e1 +
                  "\x27,\x27" +
                  _0x4c18ec +
                  "\x27") +
                _0x4a580d(0x14c)
              : _0x4a580d(0x149);
          (_0x5210cf += _0x1e3e7a + _0x40f30c + _0x145321),
            (outputTblDiv[_0x4a580d(0x16c)] += _0x5210cf);
        }
      }
    } else {
      let _0x140b00 = _0x4a580d(0x180);
      outputTblDiv[_0x4a580d(0x16c)] = _0x140b00;
    }
  } else console[_0x4a580d(0x168)](_0x5e17e4[_0x4a580d(0x163)]);
};
function _0x2689() {
  const _0x25335c = [
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20\x20px-6\x20py-4\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "<tr\x20class=\x22bg-white\x20border-b\x20dark:bg-gray-800\x20dark:border-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22px-6\x20py-4\x20font-bold\x20text-gray-900\x20whitespace-normal\x20dark:text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Open\x20Ended\x20Schemes\x20(\x20Equity\x20Scheme\x20-\x20Large\x20Cap\x20Fund\x20)",
    "class=\x22z-10\x20flex\x20items-center\x20justify-center\x20px-4\x20h-10\x20leading-tight\x20",
    "3WgsqEK",
    "text-blue-600\x20border\x20border-blue-300\x20bg-blue-50",
    "oneYearReturn",
    "err",
    "<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onClick=\x22onClickNumBtn(",
    "1342776CoacVT",
    "</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Inception",
    "log",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2010\x20Years\x20(%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x20",
    "3174241GsAFqX",
    "474800ZEqkma",
    "innerHTML",
    "totalSchemeCount",
    "tenYearReturn",
    "fundHouse",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Year\x20(%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x20",
    "349144AOLOSo",
    "1899410ZtnFeL",
    "schemeName",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Inception\x20(%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead><tbody>",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203\x20Years\x20(%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x20",
    "value",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x205\x20Years\x20(%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-gray-900\x20px-6\x20py-3\x20",
    "aria-current=\x22page\x22",
    "fiveYearReturn",
    "length",
    "click",
    "hover:bg-blue-100\x20hover:text-blue-700\x20dark:border-gray-700\x20dark:bg-gray-700\x20dark:text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "outputTbl",
    "stringify",
    "<blockquote\x20class=\x22text-xl\x20text-center\x20italic\x20font-semibold\x20text-gray-900\x20dark:text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Oops\x20!\x20We\x20could\x20not\x20find\x20any\x20data\x20for\x20this\x20criteria\x20!</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</blockquote>",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22flex\x20items-center\x20justify-center\x20px-4\x20h-10\x20ms-0\x20leading-tight\x20text-gray-500\x20bg-white\x20border\x20border-e-0\x20border-gray-300\x20rounded-s-lg\x20hover:bg-gray-100\x20hover:text-gray-700\x20dark:bg-gray-800\x20dark:border-gray-700\x20dark:text-gray-400\x20dark:hover:bg-gray-700\x20dark:hover:text-white\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22sr-only\x22>Previous</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22w-3\x20h-3\x20rtl:rotate-180\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-hidden=\x22true\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x206\x2010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke=\x22currentColor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-width=\x222\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M5\x201\x201\x205l4\x204\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "inceptionReturn",
    "push",
    "schemeType",
    "<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onClick=\x22onClickNextBtn(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20\x20px-6\x20py-4\x20",
    "</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</nav>",
    "schemeList",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20px-6\x20py-4\x20",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22flex\x20items-center\x20justify-center\x20px-4\x20h-10\x20leading-tight\x20text-gray-500\x20bg-white\x20border\x20border-gray-300\x20rounded-e-lg\x20hover:bg-gray-100\x20hover:text-gray-700\x20dark:bg-gray-800\x20dark:border-gray-700\x20dark:text-gray-400\x20dark:hover:bg-gray-700\x20dark:hover:text-white\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22sr-only\x22>Next</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22w-3\x20h-3\x20rtl:rotate-180\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-hidden=\x22true\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x206\x2010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke=\x22currentColor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-width=\x222\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22m1\x209\x204-4-4-4\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</nav>",
    "2442660pVxSso",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "json",
    "load",
    "167250sJFFKz",
    "addEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>",
    "\x27,\x27",
    "getElementById",
    "\x20<nav\x20aria-label=\x22Page\x20navigation\x20example\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22flex\x20justify-center\x20mt-7\x20items-center\x20-space-x-px\x20h-10\x20text-base\x22>",
    "<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onClick=\x22onClickPrevBtn(",
    "threeYearReturn",
    "All",
    "bg-red-300",
  ];
  _0x2689 = function () {
    return _0x25335c;
  };
  return _0x2689();
}
searchBtn[_0x42314b(0x152)](_0x42314b(0x17c), () => {
  const _0x876196 = _0x42314b;
  let _0x5b5e08 = document[_0x876196(0x155)](_0x876196(0x16f))[
      _0x876196(0x177)
    ],
    _0x10d2f3 = document[_0x876196(0x155)](_0x876196(0x146))["value"],
    _0x379451 = document["getElementById"]("timePeriod")[_0x876196(0x177)];
  (startIdx = 0x0),
    (endIdx = 0x0),
    fetchNavData(_0x5b5e08, _0x10d2f3, _0x379451);
});
function _0x1a85(_0x5d1db0, _0x45a257) {
  const _0x26898a = _0x2689();
  return (
    (_0x1a85 = function (_0x1a8543, _0x110d1e) {
      _0x1a8543 = _0x1a8543 - 0x146;
      let _0x250399 = _0x26898a[_0x1a8543];
      return _0x250399;
    }),
    _0x1a85(_0x5d1db0, _0x45a257)
  );
}
const onClickNumBtn = (_0x162c3b, _0x78638e, _0x31c0d2, _0x2c467d) => {
    fetchNavData(_0x78638e, _0x31c0d2, _0x2c467d, _0x162c3b - 0x1);
  },
  onClickNextBtn = (_0x3cf28d, _0x3fe654, _0x5067a5) => {
    const _0x1ff777 = _0x42314b;
    endIdx < totalPageItems[_0x1ff777(0x17b)] &&
      ((startIdx = endIdx),
      (endIdx =
        totalPageItems[_0x1ff777(0x17b)] > startIdx + 0x5
          ? startIdx + 0x5
          : totalPageItems[_0x1ff777(0x17b)]),
      fetchNavData(_0x3cf28d, _0x3fe654, _0x5067a5, startIdx));
  },
  onClickPrevBtn = (_0x151964, _0x4153c5, _0x279e71) => {
    startIdx > -0x1 &&
      ((endIdx = startIdx),
      (startIdx = endIdx - 0x5),
      fetchNavData(_0x151964, _0x4153c5, _0x279e71, endIdx - 0x1));
  };
window[_0x42314b(0x152)](_0x42314b(0x150), () => {
  const _0x58cb9e = _0x42314b;
  fetchNavData(_0x58cb9e(0x159), _0x58cb9e(0x15e), _0x58cb9e(0x159));
});
