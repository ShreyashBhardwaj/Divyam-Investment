const _0x562d4f = _0x1f0e;
function _0x1f0e(_0x28df06, _0x50ac09) {
  const _0x417f58 = _0x417f();
  return (
    (_0x1f0e = function (_0x1f0e6e, _0x2c2d0b) {
      _0x1f0e6e = _0x1f0e6e - 0x13f;
      let _0x24a8a2 = _0x417f58[_0x1f0e6e];
      return _0x24a8a2;
    }),
    _0x1f0e(_0x28df06, _0x50ac09)
  );
}
(function (_0x334a5d, _0x54a7b4) {
  const _0x4932f1 = _0x1f0e,
    _0x2ba111 = _0x334a5d();
  while (!![]) {
    try {
      const _0x197466 =
        (parseInt(_0x4932f1(0x15a)) / 0x1) *
          (parseInt(_0x4932f1(0x153)) / 0x2) +
        (-parseInt(_0x4932f1(0x140)) / 0x3) *
          (-parseInt(_0x4932f1(0x178)) / 0x4) +
        -parseInt(_0x4932f1(0x183)) / 0x5 +
        -parseInt(_0x4932f1(0x159)) / 0x6 +
        (-parseInt(_0x4932f1(0x181)) / 0x7) *
          (parseInt(_0x4932f1(0x17d)) / 0x8) +
        (-parseInt(_0x4932f1(0x142)) / 0x9) *
          (parseInt(_0x4932f1(0x16c)) / 0xa) +
        (-parseInt(_0x4932f1(0x16b)) / 0xb) *
          (-parseInt(_0x4932f1(0x141)) / 0xc);
      if (_0x197466 === _0x54a7b4) break;
      else _0x2ba111["push"](_0x2ba111["shift"]());
    } catch (_0x34af37) {
      _0x2ba111["push"](_0x2ba111["shift"]());
    }
  }
})(_0x417f, 0xba068);
let explainPara = document[_0x562d4f(0x157)](_0x562d4f(0x14d)),
  modalBtn = document["getElementById"](_0x562d4f(0x161));
const scrollToElement = (_0x389d76) => {
  const _0x2e5552 = _0x562d4f,
    _0x546312 = document[_0x2e5552(0x157)](_0x389d76);
  if (_0x546312) {
    const _0x2e398b = _0x546312[_0x2e5552(0x151)](),
      _0x24edc6 = window["pageYOffset"] + _0x2e398b[_0x2e5552(0x169)] - 0x64;
    window[_0x2e5552(0x177)]({ top: _0x24edc6, behavior: _0x2e5552(0x14e) });
  }
};
document[_0x562d4f(0x17f)](_0x562d4f(0x17b), (_0x13c509) => {
  const _0x594253 = _0x562d4f;
  let _0x311445 = _0x13c509[_0x594253(0x155)]["id"],
    _0x4f6e5a,
    _0x2f7b38,
    _0x944f7b,
    _0xf30807,
    _0x5ee74c,
    _0x169fa3,
    _0xd14011,
    _0x21499c,
    _0x560732;
  switch (_0x311445) {
    case _0x594253(0x179):
      _0x13c509[_0x594253(0x182)](),
        (_0x4f6e5a = document[_0x594253(0x157)]("houseCost")),
        (_0x2f7b38 = document[_0x594253(0x157)]("inflationRate")),
        (_0x944f7b = document["getElementById"](_0x594253(0x13f))),
        (_0xf30807 = document[_0x594253(0x157)]("loanPeriod")),
        (_0x5ee74c = document[_0x594253(0x157)](_0x594253(0x184)));
      let _0x42faf5 = document[_0x594253(0x157)](_0x594253(0x14f));
      if (
        _0x4f6e5a[_0x594253(0x167)] !== "" &&
        _0x2f7b38[_0x594253(0x167)] !== "" &&
        _0x944f7b[_0x594253(0x167)] !== "" &&
        _0xf30807[_0x594253(0x167)] !== "" &&
        _0x42faf5[_0x594253(0x167)] !== ""
      ) {
        if (
          !(
            isNotNumeric(_0x4f6e5a["value"]) &&
            isNotNumeric(_0x2f7b38[_0x594253(0x167)]) &&
            isNotNumeric(_0x944f7b[_0x594253(0x167)]) &&
            isNotNumeric(_0xf30807["value"]) &&
            isNotNumeric(_0x42faf5[_0x594253(0x167)])
          )
        )
          (explainPara[_0x594253(0x158)] = _0x594253(0x174)),
            modalBtn[_0x594253(0x17b)]();
        else {
          let {
            bankFunding: _0x116241,
            emiAmt: _0x655670,
            totalLoanPayment: _0x84f64c,
            loanInterestPaid: _0x353949,
            emiPaymentBalance: _0x58d54c,
            sipInvestFV: _0x45ba91,
            houseCostFV: _0x4b7156,
            profitSIPInvest: _0x2b9526,
            monthlyRent: _0x1ed080,
          } = calculateEMIVersusSIP(
            Number(_0x4f6e5a[_0x594253(0x167)]),
            Number(_0x42faf5[_0x594253(0x167)]),
            Number(_0x944f7b[_0x594253(0x167)]) / 0x64,
            Number(_0xf30807[_0x594253(0x167)]),
            Number(_0x2f7b38[_0x594253(0x167)]) / 0x64
          );
          (_0x5ee74c[_0x594253(0x17a)] = _0x594253(0x15f)),
            (_0x169fa3 = document["getElementById"](_0x594253(0x148))),
            (_0x169fa3["innerHTML"] = _0x594253(0x152)),
            (showOutput = document["getElementById"](_0x594253(0x14c))),
            (showOutput[_0x594253(0x17c)] =
              "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>" +
              "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20dark:text-gray-400\x22>" +
              _0x594253(0x156) +
              "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Loan\x20EMI\x20Amount" +
              _0x594253(0x144) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)](_0x594253(0x175))["format"](
                Math[_0x594253(0x14b)](_0x655670)
              ) +
              "</th>" +
              _0x594253(0x143) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)]("en-IN")[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x84f64c)
              ) +
              _0x594253(0x144) +
              _0x594253(0x170) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)](_0x594253(0x175))[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x116241)
              ) +
              "</th>" +
              _0x594253(0x160) +
              _0x594253(0x17e) +
              Intl["NumberFormat"](_0x594253(0x175))[_0x594253(0x147)](
                _0x353949
              ) +
              "</th>" +
              _0x594253(0x168) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)]("en-IN")[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x4f6e5a[_0x594253(0x167)])
              ) +
              _0x594253(0x144) +
              _0x594253(0x150) +
              _0x594253(0x17e) +
              Intl["NumberFormat"](_0x594253(0x175))[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x1ed080)
              ) +
              "</th>" +
              "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>SIP\x20Amount\x20After\x20EMI</th>" +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)](_0x594253(0x175))[_0x594253(0x147)](
                Math["round"](_0x58d54c)
              ) +
              "</th>" +
              _0x594253(0x166) +
              _0x594253(0x16f) +
              _0x594253(0x15d) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)](_0x594253(0x175))["format"](
                Math[_0x594253(0x14b)](_0x45ba91)
              ) +
              _0x594253(0x144) +
              _0x594253(0x154) +
              _0x594253(0x17e) +
              Intl["NumberFormat"](_0x594253(0x175))[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x4b7156)
              ) +
              _0x594253(0x144) +
              _0x594253(0x16e) +
              "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
              Intl[_0x594253(0x149)]("en-IN")[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x2b9526)
              ) +
              _0x594253(0x144) +
              _0x594253(0x185)),
            scrollToElement(_0x594253(0x148));
        }
      } else
        (explainPara[_0x594253(0x158)] = _0x594253(0x171)),
          modalBtn[_0x594253(0x17b)]();
      break;
    case _0x594253(0x15e):
      _0x13c509[_0x594253(0x182)](),
        (_0xd14011 = document[_0x594253(0x157)](_0x594253(0x146))),
        (_0x21499c = document["getElementById"](_0x594253(0x162))),
        (_0x560732 = document[_0x594253(0x157)](_0x594253(0x188))),
        (_0xf30807 = document[_0x594253(0x157)](_0x594253(0x165))),
        (_0x5ee74c = document[_0x594253(0x157)](_0x594253(0x184)));
      if (
        _0xd14011[_0x594253(0x167)] !== "" &&
        _0x21499c[_0x594253(0x167)] !== "" &&
        _0x560732[_0x594253(0x167)] !== "" &&
        _0xf30807["value"] !== ""
      ) {
        if (
          !(
            isNotNumeric(_0xd14011[_0x594253(0x167)]) &&
            isNotNumeric(_0x21499c[_0x594253(0x167)]) &&
            isNotNumeric(_0x560732["value"]) &&
            isNotNumeric(_0xf30807[_0x594253(0x167)])
          )
        )
          (explainPara[_0x594253(0x158)] = _0x594253(0x14a)),
            modalBtn["click"]();
        else {
          let { reqdCorpus: _0xf4cac1 } = humanLifeMethod(
            Number(_0xd14011[_0x594253(0x167)]),
            Number(_0x21499c[_0x594253(0x167)]) / 0x64,
            Number(_0x560732["value"]) / 0x64,
            Number(_0xf30807[_0x594253(0x167)])
          );
          (_0x5ee74c[_0x594253(0x17a)] = "display:\x22block\x22"),
            (_0x169fa3 = document[_0x594253(0x157)]("resultHeader")),
            (_0x169fa3[_0x594253(0x17c)] =
              "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20dark:text-white\x20pb-1\x22>Human\x20Life\x20Insurance\x20Amount\x20Results</h5>"),
            (showOutput = document[_0x594253(0x157)](_0x594253(0x14c))),
            (showOutput["innerHTML"] =
              _0x594253(0x16d) +
              _0x594253(0x163) +
              _0x594253(0x156) +
              _0x594253(0x164) +
              _0x594253(0x144) +
              "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
              Intl[_0x594253(0x149)]("en-IN")[_0x594253(0x147)](
                Math["round"](_0xf4cac1)
              ) +
              _0x594253(0x144) +
              "</tr></thead></table></div>"),
            scrollToElement(_0x594253(0x148));
        }
      } else
        (explainPara[_0x594253(0x158)] =
          "Please\x20fill\x20in\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate\x20and\x20time\x20period\x20to\x20calculate\x20Human\x20Life\x20Value\x20For\x20Insurance"),
          modalBtn[_0x594253(0x17b)]();
      break;
    case "needApproachBtn":
      _0x13c509[_0x594253(0x182)](),
        (_0xd14011 = document[_0x594253(0x157)](_0x594253(0x146))),
        (_0x21499c = document[_0x594253(0x157)]("investGrowthRate")),
        (_0x560732 = document[_0x594253(0x157)](_0x594253(0x188))),
        (_0xf30807 = document["getElementById"](_0x594253(0x165))),
        (_0x5ee74c = document[_0x594253(0x157)](_0x594253(0x184)));
      let _0x1e9e0a = document[_0x594253(0x157)](_0x594253(0x180)),
        _0x3c1e96 = document["getElementById"](_0x594253(0x187)),
        _0x3ae3c2 = document[_0x594253(0x157)]("marriageIncidentalLiability"),
        _0x3aa04b = document[_0x594253(0x157)](_0x594253(0x186)),
        _0x2b04d2 = document[_0x594253(0x157)](_0x594253(0x16a));
      if (
        _0xd14011[_0x594253(0x167)] !== "" &&
        _0x21499c[_0x594253(0x167)] !== "" &&
        _0x560732[_0x594253(0x167)] !== "" &&
        _0xf30807["value"] !== "" &&
        _0x1e9e0a[_0x594253(0x167)] !== "" &&
        _0x3c1e96[_0x594253(0x167)] !== "" &&
        _0x3ae3c2["value"] !== "" &&
        _0x3aa04b[_0x594253(0x167)] !== "" &&
        _0x2b04d2["value"] !== ""
      ) {
        if (
          !(
            isNotNumeric(_0xd14011["value"]) &&
            isNotNumeric(_0x21499c[_0x594253(0x167)]) &&
            isNotNumeric(_0x560732[_0x594253(0x167)]) &&
            isNotNumeric(_0xf30807[_0x594253(0x167)]) &&
            isNotNumeric(_0x1e9e0a[_0x594253(0x167)]) &&
            isNotNumeric(_0x3c1e96[_0x594253(0x167)]) &&
            isNotNumeric(_0x3ae3c2[_0x594253(0x167)]) &&
            isNotNumeric(_0x3aa04b[_0x594253(0x167)]) &&
            isNotNumeric(_0x2b04d2[_0x594253(0x167)])
          )
        )
          (explainPara[_0x594253(0x158)] = _0x594253(0x173)),
            modalBtn[_0x594253(0x17b)]();
        else {
          let { reqdCorpus: _0x360704, additionReqdCorpus: _0x54c612 } =
            needBasedApproach(
              Number(_0xd14011[_0x594253(0x167)]),
              Number(_0x21499c["value"]) / 0x64,
              Number(_0x560732[_0x594253(0x167)]) / 0x64,
              Number(_0xf30807[_0x594253(0x167)]),
              Number(_0x1e9e0a[_0x594253(0x167)]),
              Number(_0x3c1e96[_0x594253(0x167)]),
              Number(_0x3ae3c2["value"]),
              Number(_0x3aa04b[_0x594253(0x167)]),
              Number(_0x2b04d2[_0x594253(0x167)])
            );
          (_0x5ee74c[_0x594253(0x17a)] = _0x594253(0x15f)),
            (_0x169fa3 = document["getElementById"]("resultHeader")),
            (_0x169fa3["innerHTML"] = _0x594253(0x176)),
            (showOutput = document[_0x594253(0x157)](_0x594253(0x14c))),
            (showOutput[_0x594253(0x17c)] =
              "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>" +
              _0x594253(0x163) +
              _0x594253(0x156) +
              _0x594253(0x15c) +
              _0x594253(0x144) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)]("en-IN")[_0x594253(0x147)](
                Math["round"](_0x360704)
              ) +
              _0x594253(0x172) +
              _0x594253(0x145) +
              _0x594253(0x144) +
              _0x594253(0x17e) +
              Intl[_0x594253(0x149)](_0x594253(0x175))[_0x594253(0x147)](
                Math[_0x594253(0x14b)](_0x54c612)
              ) +
              "</th>" +
              _0x594253(0x185)),
            scrollToElement("resultHeader");
        }
      } else
        (explainPara[_0x594253(0x158)] = _0x594253(0x15b)),
          modalBtn[_0x594253(0x17b)]();
      break;
    default:
      break;
  }
});
function _0x417f() {
  const _0x288f56 = [
    "deductInsurance",
    "childEducationLiability",
    "incomeIncrementRate",
    "loanRate",
    "39183FlvEpL",
    "60qViKzT",
    "198kAImRg",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Total\x20Loan\x20Payment\x20Amount</th>",
    "</th>",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required\x20(As\x20Per\x20Needs-Based\x20Approach)",
    "currentIncome",
    "format",
    "resultHeader",
    "NumberFormat",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate\x20and\x20time\x20period\x20to\x20calculate\x20Human\x20Life\x20Value\x20For\x20Insurance",
    "round",
    "showOutput",
    "explainPara",
    "smooth",
    "selfFunding",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Monthly\x20Rent\x20At\x203%\x20Rental\x20Yield</th>",
    "getBoundingClientRect",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20dark:text-white\x20pb-1\x22>House\x20Purchase\x20Vs\x20SIP\x20Investment</h5>",
    "18FmyHNm",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20House\x20Valuation\x20With\x20Inflation</th>",
    "target",
    "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20dark:bg-gray-700\x20dark:text-gray-400\x22>",
    "getElementById",
    "innerText",
    "2988588kNjMSn",
    "8264ubZzEH",
    "Please\x20fill\x20in\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate,\x20time\x20period,\x20outstanding\x20loan\x20amount,\x20children\x20education\x20liability,\x20marriage\x20incidental\x20liability,\x20available\x20insurance\x20deductible\x20and\x20current\x20investment\x20balance\x20to\x20calculate\x20Needs\x20Based\x20Value\x20For\x20Insurance",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required\x20(As\x20Per\x20Human\x20Life\x20Value\x20Method)",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20Value\x20Of\x20SIP\x20Investment</th>",
    "humanLifeBtn",
    "display:\x22block\x22",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Interest\x20Paid\x20In\x20Loan</th>",
    "modalBtn",
    "investGrowthRate",
    "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20dark:text-gray-400\x22>",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required",
    "timePeriod",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Assumed\x20SIP\x20Growth\x20Rate</th>",
    "value",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Consider\x20Present\x20House\x20Value\x20For\x20Rent</th>",
    "top",
    "currentInvestBalance",
    "5481355pvrcqH",
    "506090ZHkbgl",
    "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Profit\x20In\x20SIP\x20Investment\x20Versus\x20EMI</th>",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>12%</th>",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Capital\x20Paid\x20In\x20Loan</th>",
    "Please\x20fill\x20in\x20values\x20for\x20loan\x20rate,\x20loan\x20period,\x20housing\x20cost,\x20personal\x20contribution\x20and\x20inflation\x20rate\x20to\x20calculate\x20SIP\x20Versus\x20Housing\x20Return",
    "</th></tr>",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate,\x20time\x20period,\x20outstanding\x20loan\x20amount,\x20children\x20education\x20liability,\x20marriage\x20incidental\x20liability,\x20available\x20insurance\x20deductible\x20and\x20current\x20investment\x20balance\x20to\x20calculate\x20Needs\x20Based\x20Value\x20For\x20Insurance",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20loan\x20rate,\x20loan\x20period,\x20housing\x20cost,\x20personal\x20contribution\x20and\x20inflation\x20rate\x20to\x20calculate\x20SIP\x20Versus\x20Housing\x20Return",
    "en-IN",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20dark:text-white\x20pb-1\x22>Human\x20Life\x20Insurance\x20Amount\x20Results</h5>",
    "scrollTo",
    "268TGLMdO",
    "emiSipBtn",
    "style",
    "click",
    "innerHTML",
    "303616GURsgv",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹",
    "addEventListener",
    "outstandingLoanAmt",
    "7JQrbXN",
    "preventDefault",
    "5147900WaJiXq",
    "snapshotDiv",
    "</tr></thead></table></div>",
  ];
  _0x417f = function () {
    return _0x288f56;
  };
  return _0x417f();
}
