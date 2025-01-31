const _0x3b1cd6 = _0x3acd;
function _0x772f() {
  const _0x378aba = [
    "click",
    "hidden",
    "classList",
    "10VmWrHZ",
    "223144XtIhHh",
    "21857310zyUWys",
    "clicked",
    "target",
    "contains",
    "remove",
    "log",
    "4052838roKYbi",
    "isIntersecting",
    "toggleMobileNavbar",
    "getElementById",
    "forEach",
    "133JSMPVi",
    "116DkexBc",
    "3144060Pkmitg",
    "fade-in",
    "mobileDivAppear",
    "observe",
    "addEventListener",
    "add",
    "135969jxMMtg",
    "querySelectorAll",
    ".animate-slide-in-left",
    "1084492HXNqoI",
    "2902131mMrqgA",
  ];
  _0x772f = function () {
    return _0x378aba;
  };
  return _0x772f();
}
(function (_0x6dca61, _0x446dc1) {
  const _0x24d46d = _0x3acd,
    _0x55f910 = _0x6dca61();
  while (!![]) {
    try {
      const _0x3e7f6e =
        parseInt(_0x24d46d(0x199)) / 0x1 +
        -parseInt(_0x24d46d(0x190)) / 0x2 +
        (parseInt(_0x24d46d(0x196)) / 0x3) *
          (parseInt(_0x24d46d(0x18f)) / 0x4) +
        (parseInt(_0x24d46d(0x19e)) / 0x5) *
          (parseInt(_0x24d46d(0x189)) / 0x6) +
        (-parseInt(_0x24d46d(0x18e)) / 0x7) *
          (-parseInt(_0x24d46d(0x19f)) / 0x8) +
        parseInt(_0x24d46d(0x19a)) / 0x9 +
        -parseInt(_0x24d46d(0x1a0)) / 0xa;
      if (_0x3e7f6e === _0x446dc1) break;
      else _0x55f910["push"](_0x55f910["shift"]());
    } catch (_0x1068c2) {
      _0x55f910["push"](_0x55f910["shift"]());
    }
  }
})(_0x772f, 0xce2b6);
let mobileHamburger = document[_0x3b1cd6(0x18c)](_0x3b1cd6(0x18b)),
  mobileMenu = document[_0x3b1cd6(0x18c)](_0x3b1cd6(0x192));
function _0x3acd(_0x51407a, _0xcfd6fa) {
  const _0x772f7b = _0x772f();
  return (
    (_0x3acd = function (_0x3acda1, _0x437532) {
      _0x3acda1 = _0x3acda1 - 0x185;
      let _0x2de3dc = _0x772f7b[_0x3acda1];
      return _0x2de3dc;
    }),
    _0x3acd(_0x51407a, _0xcfd6fa)
  );
}
console[_0x3b1cd6(0x188)](mobileHamburger),
  mobileHamburger[_0x3b1cd6(0x194)](_0x3b1cd6(0x19b), () => {
    const _0x988141 = _0x3b1cd6;
    console[_0x988141(0x188)](_0x988141(0x1a1)),
      mobileMenu[_0x988141(0x19d)][_0x988141(0x186)]("hidden")
        ? mobileMenu["classList"][_0x988141(0x187)](_0x988141(0x19c))
        : mobileMenu["classList"]["add"](_0x988141(0x19c));
  });
const animateFadeInObserver = new IntersectionObserver((_0x2afdf6) => {
  const _0x2daf33 = _0x3b1cd6;
  _0x2afdf6[_0x2daf33(0x18d)]((_0x5630dd) => {
    const _0x28d154 = _0x2daf33;
    console[_0x28d154(0x188)](_0x5630dd["target"]["id"]),
      _0x5630dd[_0x28d154(0x18a)] &&
        _0x5630dd["target"][_0x28d154(0x19d)][_0x28d154(0x195)](
          _0x28d154(0x191)
        );
  });
});
document[_0x3b1cd6(0x197)](".animate-fade-in")[_0x3b1cd6(0x18d)](
  (_0x46a15d) => {
    animateFadeInObserver["observe"](_0x46a15d);
  }
);
const slideInRightAnimateObserver = new IntersectionObserver((_0x446b6f) => {
  const _0x16f20a = _0x3b1cd6;
  _0x446b6f[_0x16f20a(0x18d)]((_0x1321b0) => {
    const _0x11b6b0 = _0x16f20a;
    _0x1321b0[_0x11b6b0(0x18a)] &&
      _0x1321b0[_0x11b6b0(0x185)][_0x11b6b0(0x19d)][_0x11b6b0(0x195)](
        "slide-in-right"
      );
  });
});
document["querySelectorAll"](".animate-slide-in-right")[_0x3b1cd6(0x18d)](
  (_0xde6aad) => {
    const _0x2fe6f5 = _0x3b1cd6;
    slideInRightAnimateObserver[_0x2fe6f5(0x193)](_0xde6aad);
  }
);
const slideInLeftAnimateObserver = new IntersectionObserver((_0x245db3) => {
  _0x245db3["forEach"]((_0x378f9c) => {
    const _0x25577f = _0x3acd;
    _0x378f9c[_0x25577f(0x18a)] &&
      _0x378f9c[_0x25577f(0x185)][_0x25577f(0x19d)]["add"]("slide-in-left");
  });
});
document[_0x3b1cd6(0x197)](_0x3b1cd6(0x198))[_0x3b1cd6(0x18d)]((_0x19a3e2) => {
  const _0x120e0b = _0x3b1cd6;
  slideInLeftAnimateObserver[_0x120e0b(0x193)](_0x19a3e2);
});
