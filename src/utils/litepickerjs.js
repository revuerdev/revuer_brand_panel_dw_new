"use strict";

!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("Litepicker", [], e)
    : "object" == typeof exports
    ? (exports.Litepicker = e())
    : (t.Litepicker = e());
})(window, function () {
  return (
    (o = {}),
    (n.m = i =
      [
        function (t, e, i) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var o =
            ((m.parseDateTime = function (t, e, i) {
              if (
                (void 0 === e && (e = "YYYY-MM-DD"),
                void 0 === i && (i = "en-US"),
                !t)
              )
                return new Date(NaN);
              if (t instanceof Date) return new Date(t);
              if (t instanceof m) return t.clone().getDateInstance();
              if (/^-?\d{10,}$/.test(t))
                return m.getDateZeroTime(new Date(Number(t)));

              if ("string" == typeof t) {
                for (var o, n = []; null != (o = m.regex.exec(e)); )
                  "\\" !== o[1] && n.push(o);

                if (n.length) {
                  var s = {
                    year: null,
                    month: null,
                    shortMonth: null,
                    longMonth: null,
                    day: null,
                    value: ""
                  };
                  0 < n[0].index && (s.value += ".*?");

                  for (var r = 0, a = Object.entries(n); r < a.length; r++) {
                    var l = a[r],
                      h = l[0],
                      p = l[1],
                      l = Number(h),
                      h = m.formatPatterns(p[0], i),
                      p = h.group,
                      h = h.pattern;
                    (s[p] = l + 1), (s.value += h), (s.value += ".*?");
                  }

                  var c = new RegExp("^" + s.value + "$");

                  if (c.test(t)) {
                    var d = c.exec(t),
                      u = Number(d[s.year]),
                      c = null;
                    s.month
                      ? (c = Number(d[s.month]) - 1)
                      : s.shortMonth
                      ? (c = m.shortMonths(i).indexOf(d[s.shortMonth]))
                      : s.longMonth &&
                        (c = m.longMonths(i).indexOf(d[s.longMonth]));
                    d = Number(d[s.day]) || 1;
                    return new Date(u, c, d, 0, 0, 0, 0);
                  }
                }
              }

              return m.getDateZeroTime(new Date(t));
            }),
            (m.convertArray = function (t, e) {
              return t.map(function (t) {
                return t instanceof Array
                  ? t.map(function (t) {
                      return new m(t, e);
                    })
                  : new m(t, e);
              });
            }),
            (m.getDateZeroTime = function (t) {
              return new Date(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                0,
                0,
                0,
                0
              );
            }),
            (m.shortMonths = function (e) {
              return m.MONTH_JS.map(function (t) {
                return new Date(2019, t).toLocaleString(e, {
                  month: "short"
                });
              });
            }),
            (m.longMonths = function (e) {
              return m.MONTH_JS.map(function (t) {
                return new Date(2019, t).toLocaleString(e, {
                  month: "long"
                });
              });
            }),
            (m.formatPatterns = function (t, e) {
              switch (t) {
                case "YY":
                case "YYYY":
                  return {
                    group: "year",
                    pattern: "(\\d{" + t.length + "})"
                  };

                case "M":
                  return {
                    group: "month",
                    pattern: "(\\d{1,2})"
                  };

                case "MM":
                  return {
                    group: "month",
                    pattern: "(\\d{2})"
                  };

                case "MMM":
                  return {
                    group: "shortMonth",
                    pattern: "(" + m.shortMonths(e).join("|") + ")"
                  };

                case "MMMM":
                  return {
                    group: "longMonth",
                    pattern: "(" + m.longMonths(e).join("|") + ")"
                  };

                case "D":
                  return {
                    group: "day",
                    pattern: "(\\d{1,2})"
                  };

                case "DD":
                  return {
                    group: "day",
                    pattern: "(\\d{0})"
                  };
              }
            }),
            (m.prototype.getDateInstance = function () {
              return this.dateInstance;
            }),
            (m.prototype.toLocaleString = function (t, e) {
              return this.dateInstance.toLocaleString(t, e);
            }),
            (m.prototype.toDateString = function () {
              return this.dateInstance.toDateString();
            }),
            (m.prototype.getSeconds = function () {
              return this.dateInstance.getSeconds();
            }),
            (m.prototype.getDay = function () {
              return this.dateInstance.getDay();
            }),
            (m.prototype.getTime = function () {
              return this.dateInstance.getTime();
            }),
            (m.prototype.getDate = function () {
              return this.dateInstance.getDate();
            }),
            (m.prototype.getMonth = function () {
              return this.dateInstance.getMonth();
            }),
            (m.prototype.getFullYear = function () {
              return this.dateInstance.getFullYear();
            }),
            (m.prototype.setMonth = function (t) {
              return this.dateInstance.setMonth(t);
            }),
            (m.prototype.setHours = function (t, e, i, o) {
              void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === i && (i = 0),
                void 0 === o && (o = 0),
                this.dateInstance.setHours(t, e, i, o);
            }),
            (m.prototype.setSeconds = function (t) {
              return this.dateInstance.setSeconds(t);
            }),
            (m.prototype.setDate = function (t) {
              return this.dateInstance.setDate(t);
            }),
            (m.prototype.setFullYear = function (t) {
              return this.dateInstance.setFullYear(t);
            }),
            (m.prototype.getWeek = function (t) {
              var e = new Date(this.timestamp()),
                i = (this.getDay() + (7 - t)) % 7;
              e.setDate(e.getDate() - i);
              i = e.getTime();
              return (
                e.setMonth(0, 1),
                e.getDay() !== t &&
                  e.setMonth(0, 1 + ((4 - e.getDay() + 7) % 7)),
                1 + Math.ceil((i - e.getTime()) / 6048e5)
              );
            }),
            (m.prototype.clone = function () {
              return new m(this.getDateInstance());
            }),
            (m.prototype.isBetween = function (t, e, i) {
              switch ((void 0 === i && (i = "()"), i)) {
                default:
                case "()":
                  return (
                    this.timestamp() > t.getTime() &&
                    this.timestamp() < e.getTime()
                  );

                case "[)":
                  return (
                    this.timestamp() >= t.getTime() &&
                    this.timestamp() < e.getTime()
                  );

                case "(]":
                  return (
                    this.timestamp() > t.getTime() &&
                    this.timestamp() <= e.getTime()
                  );

                case "[]":
                  return (
                    this.timestamp() >= t.getTime() &&
                    this.timestamp() <= e.getTime()
                  );
              }
            }),
            (m.prototype.isBefore = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  return t.getTime() > this.getTime();

                case "day":
                case "days":
                  return (
                    new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() >
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      this.getDate()
                    ).getTime()
                  );

                case "month":
                case "months":
                  return (
                    new Date(t.getFullYear(), t.getMonth(), 1).getTime() >
                    new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                  );

                case "year":
                case "years":
                  return t.getFullYear() > this.getFullYear();
              }

              throw new Error("isBefore: Invalid unit!");
            }),
            (m.prototype.isSameOrBefore = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  return t.getTime() >= this.getTime();

                case "day":
                case "days":
                  return (
                    new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() >=
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      this.getDate()
                    ).getTime()
                  );

                case "month":
                case "months":
                  return (
                    new Date(t.getFullYear(), t.getMonth(), 1).getTime() >=
                    new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                  );
              }

              throw new Error("isSameOrBefore: Invalid unit!");
            }),
            (m.prototype.isAfter = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  return this.getTime() > t.getTime();

                case "day":
                case "days":
                  return (
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      this.getDate()
                    ).getTime() >
                    new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime()
                  );

                case "month":
                case "months":
                  return (
                    new Date(this.getFullYear(), this.getMonth(), 1).getTime() >
                    new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                  );

                case "year":
                case "years":
                  return this.getFullYear() > t.getFullYear();
              }

              throw new Error("isAfter: Invalid unit!");
            }),
            (m.prototype.isSameOrAfter = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  return this.getTime() >= t.getTime();

                case "day":
                case "days":
                  return (
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      this.getDate()
                    ).getTime() >=
                    new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime()
                  );

                case "month":
                case "months":
                  return (
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      1
                    ).getTime() >=
                    new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                  );
              }

              throw new Error("isSameOrAfter: Invalid unit!");
            }),
            (m.prototype.isSame = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  return this.getTime() === t.getTime();

                case "day":
                case "days":
                  return (
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      this.getDate()
                    ).getTime() ===
                    new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime()
                  );

                case "month":
                case "months":
                  return (
                    new Date(
                      this.getFullYear(),
                      this.getMonth(),
                      1
                    ).getTime() ===
                    new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                  );
              }

              throw new Error("isSame: Invalid unit!");
            }),
            (m.prototype.add = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  this.setSeconds(this.getSeconds() + t);
                  break;

                case "day":
                case "days":
                  this.setDate(this.getDate() + t);
                  break;

                case "month":
                case "months":
                  this.setMonth(this.getMonth() + t);
              }

              return this;
            }),
            (m.prototype.subtract = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                case "second":
                case "seconds":
                  this.setSeconds(this.getSeconds() - t);
                  break;

                case "day":
                case "days":
                  this.setDate(this.getDate() - t);
                  break;

                case "month":
                case "months":
                  this.setMonth(this.getMonth() - t);
              }

              return this;
            }),
            (m.prototype.diff = function (t, e) {
              switch ((void 0 === e && (e = "seconds"), e)) {
                default:
                case "second":
                case "seconds":
                  return this.getTime() - t.getTime();

                case "day":
                case "days":
                  return Math.round((this.timestamp() - t.getTime()) / 864e5);

                case "month":
                case "months":
              }
            }),
            (m.prototype.format = function (t, e) {
              void 0 === e && (e = "en-US");

              for (var i, o = "", n = []; null != (i = m.regex.exec(t)); )
                "\\" !== i[1] && n.push(i);

              if (n.length) {
                0 < n[0].index && (o += t.substring(0, n[0].index));

                for (var s = 0, r = Object.entries(n); s < r.length; s++) {
                  var a = r[s],
                    l = a[0],
                    a = a[1],
                    l = Number(l);
                  (o += this.formatTokens(a[0], e)),
                    n[l + 1] &&
                      (o += t.substring(a.index + a[0].length, n[l + 1].index)),
                    l === n.length - 1 &&
                      (o += t.substring(a.index + a[0].length));
                }
              }

              return o.replace(/\\/g, "");
            }),
            (m.prototype.timestamp = function () {
              return new Date(
                this.getFullYear(),
                this.getMonth(),
                this.getDate(),
                0,
                0,
                0,
                0
              ).getTime();
            }),
            (m.prototype.formatTokens = function (t, e) {
              switch (t) {
                case "YY":
                  return String(this.getFullYear()).slice(-2);

                case "YYYY":
                  return String(this.getFullYear());

                case "M":
                  return String(this.getMonth() + 1);

                case "MM":
                  return ("0" + (this.getMonth() + 1)).slice(-2);

                case "MMM":
                  return m.shortMonths(e)[this.getMonth()];

                case "MMMM":
                  return m.longMonths(e)[this.getMonth()];

                case "D":
                  return String(this.getDate());

                case "DD":
                  return ("0" + this.getDate()).slice(-2);

                default:
                  return "";
              }
            }),
            (m.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g),
            (m.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
            m);

          function m(t, e, i) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === i && (i = "en-US"),
              (this.dateInstance = e
                ? m.parseDateTime(t, e, i)
                : t
                ? m.parseDateTime(t)
                : m.parseDateTime(new Date())),
              (this.lang = i);
          }

          e.DateTime = o;
        },
        function (t, e, i) {
          var o = i(6);
          "string" == typeof o && (o = [[t.i, o, ""]]);
          var n = {
            insert: function (t) {
              var e = document.querySelector("head"),
                i = window._lastElementInsertedByStyleLoader;
              window.disableLitepickerStyles ||
                (i
                  ? i.nextSibling
                    ? e.insertBefore(t, i.nextSibling)
                    : e.appendChild(t)
                  : e.insertBefore(t, e.firstChild),
                (window._lastElementInsertedByStyleLoader = t));
            },
            singleton: !1
          };
          i(8)(o, n), o.locals && (t.exports = o.locals);
        },
        function (t, e, i) {
          function o() {
            return window.matchMedia("(orientation: portrait)").matches
              ? "portrait"
              : "landscape";
          }

          Object.defineProperty(e, "__esModule", {
            value: !0
          }),
            (e.isMobile = function () {
              var t = "portrait" === o();
              return window.matchMedia(
                "(max-device-" + (t ? "width" : "height") + ": 480px)"
              ).matches;
            }),
            (e.getOrientation = o),
            (e.findNestedMonthItem = function (t) {
              for (var e = t.parentNode.childNodes, i = 0; i < e.length; i += 1)
                if (e.item(i) === t) return i;

              return 0;
            });
        },
        function (t, e, i) {
          var o,
            n =
              (this && this.__extends) ||
              ((o = function (t, e) {
                return (o =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: []
                  } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                  })(t, e);
              }),
              function (t, e) {
                function i() {
                  this.constructor = t;
                }

                o(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((i.prototype = e.prototype), new i()));
              }),
            l =
              (this && this.__assign) ||
              function () {
                return (l =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, o = arguments.length; i < o; i++)
                      for (var n in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);

                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var i in t)
                    Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return (e.default = t), e;
              };

          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var h,
            r = i(5),
            p = i(0),
            c = s(i(1)),
            d = i(2),
            n =
              ((h = r.Calendar),
              n(a, h),
              (a.prototype.onInit = function () {
                var i = this;

                if (
                  (document.addEventListener(
                    "click",
                    function (t) {
                      return i.onClick(t);
                    },
                    !0
                  ),
                  (this.picker = document.createElement("div")),
                  (this.picker.className = c.litepicker),
                  (this.picker.style.display = "none"),
                  this.picker.addEventListener(
                    "mouseenter",
                    function (t) {
                      return i.onMouseEnter(t);
                    },
                    !0
                  ),
                  this.picker.addEventListener(
                    "mouseleave",
                    function (t) {
                      return i.onMouseLeave(t);
                    },
                    !1
                  ),
                  this.options.autoRefresh
                    ? (this.options.element instanceof HTMLElement &&
                        this.options.element.addEventListener(
                          "keyup",
                          function (t) {
                            return i.onInput(t);
                          },
                          !0
                        ),
                      this.options.elementEnd instanceof HTMLElement &&
                        this.options.elementEnd.addEventListener(
                          "keyup",
                          function (t) {
                            return i.onInput(t);
                          },
                          !0
                        ))
                    : (this.options.element instanceof HTMLElement &&
                        this.options.element.addEventListener(
                          "change",
                          function (t) {
                            return i.onInput(t);
                          },
                          !0
                        ),
                      this.options.elementEnd instanceof HTMLElement &&
                        this.options.elementEnd.addEventListener(
                          "change",
                          function (t) {
                            return i.onInput(t);
                          },
                          !0
                        )),
                  this.options.moduleNavKeyboard)
                ) {
                  if ("function" != typeof this.enableModuleNavKeyboard)
                    throw new Error(
                      "moduleNavKeyboard is on but library does not included. See https://github.com/wakirin/litepicker-module-navkeyboard."
                    );
                  this.enableModuleNavKeyboard.call(this, this);
                }

                this.render(),
                  (this.options.parentEl
                    ? this.options.parentEl instanceof HTMLElement
                      ? this.options.parentEl
                      : document.querySelector(this.options.parentEl)
                    : this.options.inlineMode
                    ? this.options.element instanceof HTMLInputElement
                      ? this.options.element.parentNode
                      : this.options.element
                    : document.body
                  ).appendChild(this.picker),
                  this.options.mobileFriendly &&
                    ((this.backdrop = document.createElement("div")),
                    (this.backdrop.className = c.litepickerBackdrop),
                    this.backdrop.addEventListener("click", this.hide()),
                    this.options.element &&
                      this.options.element.parentNode &&
                      this.options.element.parentNode.appendChild(
                        this.backdrop
                      ),
                    window.addEventListener("orientationchange", function (t) {
                      var e = function () {
                        var t;
                        d.isMobile() &&
                          i.isShowning() &&
                          ("landscape" === d.getOrientation()
                            ? ((i.options.numberOfMonths = 2),
                              (i.options.numberOfColumns = 2))
                            : ((i.options.numberOfMonths = 1),
                              (i.options.numberOfColumns = 1)),
                          i.render(),
                          i.options.inlineMode ||
                            ((t = i.picker.getBoundingClientRect()),
                            (i.picker.style.top =
                              "calc(50% - " + t.height / 2 + "px)"),
                            (i.picker.style.left =
                              "calc(50% - " + t.width / 2 + "px)"))),
                          window.removeEventListener("resize", e);
                      };

                      window.addEventListener("resize", e);
                    })),
                  this.options.inlineMode &&
                    (this.show(),
                    this.options.mobileFriendly &&
                      d.isMobile() &&
                      (window.dispatchEvent(new Event("orientationchange")),
                      window.dispatchEvent(new Event("resize")))),
                  this.updateInput();
              }),
              (a.prototype.parseInput = function () {
                var t = this.options.delimiter,
                  e = new RegExp("" + t),
                  i =
                    this.options.element instanceof HTMLInputElement
                      ? this.options.element.value.split(t)
                      : [];

                if (this.options.elementEnd) {
                  if (
                    this.options.element instanceof HTMLInputElement &&
                    this.options.element.value.length &&
                    this.options.elementEnd instanceof HTMLInputElement &&
                    this.options.elementEnd.value.length
                  )
                    return [
                      new p.DateTime(
                        this.options.element.value,
                        this.options.format
                      ),
                      new p.DateTime(
                        this.options.elementEnd.value,
                        this.options.format
                      )
                    ];
                } else if (this.options.singleMode) {
                  if (
                    this.options.element instanceof HTMLInputElement &&
                    this.options.element.value.length
                  )
                    return [
                      new p.DateTime(
                        this.options.element.value,
                        this.options.format
                      )
                    ];
                } else if (
                  this.options.element instanceof HTMLInputElement &&
                  e.test(this.options.element.value) &&
                  i.length &&
                  i.length % 2 == 0
                ) {
                  (e = i.slice(0, i.length / 2).join(t)),
                    (t = i.slice(i.length / 2).join(t));
                  return [
                    new p.DateTime(e, this.options.format),
                    new p.DateTime(t, this.options.format)
                  ];
                }

                return [];
              }),
              (a.prototype.updateInput = function () {
                var t, e;
                this.options.element instanceof HTMLInputElement &&
                  (this.options.singleMode && this.options.startDate
                    ? (this.options.element.value =
                        this.options.startDate.format(
                          this.options.format,
                          this.options.lang
                        ))
                    : !this.options.singleMode &&
                      this.options.startDate &&
                      this.options.endDate &&
                      ((t = this.options.startDate.format(
                        this.options.format,
                        this.options.lang
                      )),
                      (e = this.options.endDate.format(
                        this.options.format,
                        this.options.lang
                      )),
                      this.options.elementEnd
                        ? ((this.options.element.value = t),
                          (this.options.elementEnd.value = e))
                        : (this.options.element.value =
                            "" + t + this.options.delimiter + e)),
                  this.options.startDate ||
                    this.options.endDate ||
                    ((this.options.element.value = ""),
                    this.options.elementEnd &&
                      (this.options.elementEnd.value = "")));
              }),
              (a.prototype.isSamePicker = function (t) {
                return t.closest("." + c.litepicker) === this.picker;
              }),
              (a.prototype.shouldShown = function (t) {
                return (
                  t === this.options.element ||
                  (this.options.elementEnd && t === this.options.elementEnd)
                );
              }),
              (a.prototype.shouldResetDatePicked = function () {
                return this.options.singleMode || 2 === this.datePicked.length;
              }),
              (a.prototype.shouldSwapDatePicked = function () {
                return (
                  2 === this.datePicked.length &&
                  this.datePicked[0].getTime() > this.datePicked[1].getTime()
                );
              }),
              (a.prototype.shouldCheckLockDays = function () {
                return (
                  this.options.disallowLockDaysInRange &&
                  this.options.lockDays.length &&
                  2 === this.datePicked.length
                );
              }),
              (a.prototype.shouldCheckBookedDays = function () {
                return (
                  this.options.disallowBookedDaysInRange &&
                  this.options.bookedDays.length &&
                  2 === this.datePicked.length
                );
              }),
              (a.prototype.onClick = function (t) {
                var e,
                  i,
                  o,
                  n,
                  s = this,
                  r = t.target;
                if (r && this.picker)
                  if (this.shouldShown(r)) this.show(r);
                  else if (r.closest("." + c.litepicker)) {
                    if (r.classList.contains(c.dayItem))
                      return (t.preventDefault(), this.isSamePicker(r))
                        ? r.classList.contains(c.isLocked) ||
                          r.classList.contains(c.isBooked)
                          ? void 0
                          : (this.shouldResetDatePicked() &&
                              (this.datePicked.length = 0),
                            (this.datePicked[this.datePicked.length] =
                              new p.DateTime(r.dataset.time)),
                            this.shouldSwapDatePicked() &&
                              ((n = this.datePicked[1].clone()),
                              (this.datePicked[1] = this.datePicked[0].clone()),
                              (this.datePicked[0] = n.clone())),
                            this.shouldCheckLockDays() &&
                              ((e = this.options.lockDaysInclusivity),
                              this.options.lockDays.filter(function (t) {
                                return t instanceof Array
                                  ? t[0].isBetween(
                                      s.datePicked[0],
                                      s.datePicked[1],
                                      e
                                    ) ||
                                      t[1].isBetween(
                                        s.datePicked[0],
                                        s.datePicked[1],
                                        e
                                      )
                                  : t.isBetween(
                                      s.datePicked[0],
                                      s.datePicked[1],
                                      e
                                    );
                              }).length &&
                                ((this.datePicked.length = 0),
                                "function" == typeof this.options.onError &&
                                  this.options.onError.call(
                                    this,
                                    "INVALID_RANGE"
                                  ))),
                            this.shouldCheckBookedDays() &&
                              ((i = this.options.bookedDaysInclusivity),
                              this.options.hotelMode &&
                                2 === this.datePicked.length &&
                                (i = "()"),
                              (o = this.options.bookedDays.filter(function (t) {
                                return t instanceof Array
                                  ? t[0].isBetween(
                                      s.datePicked[0],
                                      s.datePicked[1],
                                      i
                                    ) ||
                                      t[1].isBetween(
                                        s.datePicked[0],
                                        s.datePicked[1],
                                        i
                                      )
                                  : t.isBetween(
                                      s.datePicked[0],
                                      s.datePicked[1]
                                    );
                              }).length),
                              (n =
                                this.options.anyBookedDaysAsCheckout &&
                                1 === this.datePicked.length),
                              o &&
                                !n &&
                                ((this.datePicked.length = 0),
                                "function" == typeof this.options.onError &&
                                  this.options.onError.call(
                                    this,
                                    "INVALID_RANGE"
                                  ))),
                            this.render(),
                            void (
                              this.options.autoApply &&
                              (this.options.singleMode && this.datePicked.length
                                ? (this.setDate(this.datePicked[0]),
                                  this.hide())
                                : this.options.singleMode ||
                                  2 !== this.datePicked.length ||
                                  (this.setDateRange(
                                    this.datePicked[0],
                                    this.datePicked[1]
                                  ),
                                  this.hide()))
                            ))
                        : void 0;

                    if (r.classList.contains(c.buttonPreviousMonth)) {
                      if ((t.preventDefault(), !this.isSamePicker(r))) return;
                      var a,
                        l = 0,
                        h = this.options.moveByOneMonth
                          ? 1
                          : this.options.numberOfMonths;
                      return (
                        this.options.splitView &&
                          ((a = r.closest("." + c.monthItem)),
                          (l = d.findNestedMonthItem(a)),
                          (h = 1)),
                        this.calendars[l].setMonth(
                          this.calendars[l].getMonth() - h
                        ),
                        this.gotoDate(this.calendars[l], l),
                        void (
                          "function" == typeof this.options.onChangeMonth &&
                          this.options.onChangeMonth.call(
                            this,
                            this.calendars[l],
                            l
                          )
                        )
                      );
                    }

                    if (r.classList.contains(c.buttonNextMonth))
                      return (
                        t.preventDefault(),
                        this.isSamePicker(r)
                          ? ((l = 0),
                            (h = this.options.moveByOneMonth
                              ? 1
                              : this.options.numberOfMonths),
                            this.options.splitView &&
                              ((a = r.closest("." + c.monthItem)),
                              (l = d.findNestedMonthItem(a)),
                              (h = 1)),
                            this.calendars[l].setMonth(
                              this.calendars[l].getMonth() + h
                            ),
                            this.gotoDate(this.calendars[l], l),
                            void (
                              "function" == typeof this.options.onChangeMonth &&
                              this.options.onChangeMonth.call(
                                this,
                                this.calendars[l],
                                l
                              )
                            ))
                          : void 0
                      );

                    if (r.classList.contains(c.buttonCancel)) {
                      if ((t.preventDefault(), !this.isSamePicker(r))) return;
                      this.hide();
                    }

                    r.classList.contains(c.buttonApply) &&
                      (t.preventDefault(),
                      this.isSamePicker(r) &&
                        (this.options.singleMode && this.datePicked.length
                          ? this.setDate(this.datePicked[0])
                          : this.options.singleMode ||
                            2 !== this.datePicked.length ||
                            this.setDateRange(
                              this.datePicked[0],
                              this.datePicked[1]
                            ),
                        this.hide()));
                  } else this.hide();
              }),
              (a.prototype.showTooltip = function (t, e) {
                var i = this.picker.querySelector("." + c.containerTooltip);
                (i.style.visibility = "visible"), (i.innerHTML = e);
                var o = this.picker.getBoundingClientRect(),
                  n = i.getBoundingClientRect(),
                  s = t.getBoundingClientRect(),
                  r = s.top,
                  a = s.left;
                this.options.inlineMode && this.options.parentEl
                  ? ((r -= (e = this.picker.parentNode.getBoundingClientRect())
                      .top),
                    (a -= e.left))
                  : ((r -= o.top), (a -= o.left)),
                  (r -= n.height),
                  (a -= n.width / 2),
                  (a += s.width / 2),
                  (i.style.top = r + "px"),
                  (i.style.left = a + "px"),
                  "function" == typeof this.options.onShowTooltip &&
                    this.options.onShowTooltip.call(this, i, t);
              }),
              (a.prototype.hideTooltip = function () {
                this.picker.querySelector(
                  "." + c.containerTooltip
                ).style.visibility = "hidden";
              }),
              (a.prototype.shouldAllowMouseEnter = function (t) {
                return (
                  !this.options.singleMode &&
                  !t.classList.contains(c.isLocked) &&
                  !t.classList.contains(c.isBooked)
                );
              }),
              (a.prototype.shouldAllowRepick = function () {
                return (
                  this.options.elementEnd &&
                  this.options.allowRepick &&
                  this.options.startDate &&
                  this.options.endDate
                );
              }),
              (a.prototype.isDayItem = function (t) {
                return t.classList.contains(c.dayItem);
              }),
              (a.prototype.onMouseEnter = function (t) {
                var o,
                  n,
                  e,
                  i,
                  s = this,
                  r = t.target;
                this.isDayItem(r) &&
                  ("function" == typeof this.options.onDayHover &&
                    this.options.onDayHover.call(
                      this,
                      p.DateTime.parseDateTime(r.dataset.time),
                      r.classList.toString().split(/\s/),
                      r
                    ),
                  this.shouldAllowMouseEnter(r)) &&
                  (this.shouldAllowRepick() &&
                    (this.triggerElement === this.options.element
                      ? (this.datePicked[0] = this.options.endDate.clone())
                      : this.triggerElement === this.options.elementEnd &&
                        (this.datePicked[0] = this.options.startDate.clone())),
                  1 === this.datePicked.length &&
                    ((i = this.picker.querySelector(
                      "." +
                        c.dayItem +
                        '[data-time="' +
                        this.datePicked[0].getTime() +
                        '"]'
                    )),
                    (o = this.datePicked[0].clone()),
                    (n = new p.DateTime(r.dataset.time)),
                    (e = !1),
                    o.getTime() > n.getTime() &&
                      ((t = o.clone()),
                      (o = n.clone()),
                      (n = t.clone()),
                      (e = !0)),
                    Array.prototype.slice
                      .call(this.picker.querySelectorAll("." + c.dayItem))
                      .forEach(function (t) {
                        var e = new p.DateTime(t.dataset.time),
                          i = s.renderDay(e);
                        e.isBetween(o, n) && i.classList.add(c.isInRange),
                          (t.className = i.className);
                      }),
                    r.classList.add(c.isEndDate),
                    e
                      ? (i && i.classList.add(c.isFlipped),
                        r.classList.add(c.isFlipped))
                      : (i && i.classList.remove(c.isFlipped),
                        r.classList.remove(c.isFlipped)),
                    this.options.showTooltip &&
                      ((e = n.diff(o, "day")),
                      this.options.hotelMode || (e += 1),
                      0 < e
                        ? ((i = this.pluralSelector(e)),
                          (i =
                            e +
                            " " +
                            (this.options.tooltipText[i] || "[" + i + "]")),
                          this.showTooltip(r, i))
                        : this.hideTooltip())));
              }),
              (a.prototype.onMouseLeave = function (t) {
                t.target,
                  this.options.allowRepick &&
                    (!this.options.allowRepick ||
                      this.options.startDate ||
                      this.options.endDate) &&
                    ((this.datePicked.length = 0), this.render());
              }),
              (a.prototype.onInput = function (t) {
                var e,
                  i = this.parseInput(),
                  o = i[0],
                  n = i[1],
                  s = this.options.format;
                (this.options.elementEnd
                  ? o instanceof p.DateTime &&
                    n instanceof p.DateTime &&
                    o.format(s) === this.options.element.value &&
                    n.format(s) === this.options.elementEnd.value
                  : this.options.singleMode
                  ? o instanceof p.DateTime &&
                    o.format(s) === this.options.element.value
                  : o instanceof p.DateTime &&
                    n instanceof p.DateTime &&
                    "" + o.format(s) + this.options.delimiter + n.format(s) ===
                      this.options.element.value) &&
                  (n &&
                    o.getTime() > n.getTime() &&
                    ((e = o.clone()), (o = n.clone()), (n = e.clone())),
                  (this.options.startDate = new p.DateTime(
                    o,
                    this.options.format,
                    this.options.lang
                  )),
                  n &&
                    (this.options.endDate = new p.DateTime(
                      n,
                      this.options.format,
                      this.options.lang
                    )),
                  this.updateInput(),
                  this.render(),
                  (i = o.clone()),
                  (e = 0),
                  (this.options.elementEnd
                    ? o.format(s) === t.target.value
                    : t.target.value.startsWith(o.format(s))) ||
                    ((i = n.clone()), (e = this.options.numberOfMonths - 1)),
                  "function" == typeof this.options.onSelect &&
                    this.options.onSelect.call(
                      this,
                      this.getStartDate(),
                      this.getEndDate()
                    ),
                  this.gotoDate(i, e));
              }),
              (a.prototype.isShowning = function () {
                return this.picker && "none" !== this.picker.style.display;
              }),
              (a.prototype.loadPolyfillsForIE11 = function () {
                Object.entries ||
                  (Object.entries = function (t) {
                    for (
                      var e = Object.keys(t), i = e.length, o = new Array(i);
                      i;

                    )
                      o[--i] = [e[i], t[e[i]]];

                    return o;
                  }),
                  Element.prototype.matches ||
                    (Element.prototype.matches =
                      Element.prototype.msMatchesSelector ||
                      Element.prototype.webkitMatchesSelector),
                  Element.prototype.closest ||
                    (Element.prototype.closest = function (t) {
                      var e = this;

                      do {
                        if (e.matches(t)) return e;
                      } while (
                        null !== (e = e.parentElement || e.parentNode) &&
                        1 === e.nodeType
                      );

                      return null;
                    });
              }),
              a);

          function a(t) {
            var e = h.call(this) || this;
            (e.options = l(l({}, e.options), t.element.dataset)),
              Object.keys(e.options).forEach(function (t) {
                ("true" !== e.options[t] && "false" !== e.options[t]) ||
                  (e.options[t] = "true" === e.options[t]);
              });
            var i = l(l({}, e.options.dropdowns), t.dropdowns),
              o = l(l({}, e.options.buttonText), t.buttonText),
              n = l(l({}, e.options.tooltipText), t.tooltipText);
            (e.options = l(l({}, e.options), t)),
              (e.options.dropdowns = l({}, i)),
              (e.options.buttonText = l({}, o)),
              (e.options.tooltipText = l({}, n)),
              e.options.elementEnd || (e.options.allowRepick = !1),
              e.options.lockDays.length &&
                (e.options.lockDays = p.DateTime.convertArray(
                  e.options.lockDays,
                  e.options.lockDaysFormat
                )),
              e.options.bookedDays.length &&
                (e.options.bookedDays = p.DateTime.convertArray(
                  e.options.bookedDays,
                  e.options.bookedDaysFormat
                )),
              e.options.highlightedDays.length &&
                (e.options.highlightedDays = p.DateTime.convertArray(
                  e.options.highlightedDays,
                  e.options.highlightedDaysFormat
                )),
              !e.options.hotelMode ||
                "bookedDaysInclusivity" in t ||
                (e.options.bookedDaysInclusivity = "[)"),
              !e.options.hotelMode ||
                "disallowBookedDaysInRange" in t ||
                (e.options.disallowBookedDaysInRange = !0),
              !e.options.hotelMode ||
                "selectForward" in t ||
                (e.options.selectForward = !0);
            (n = e.parseInput()), (t = n[0]), (n = n[1]);
            e.options.startDate &&
              (e.options.singleMode || e.options.endDate) &&
              (t = new p.DateTime(
                e.options.startDate,
                e.options.format,
                e.options.lang
              )),
              t &&
                e.options.endDate &&
                (n = new p.DateTime(
                  e.options.endDate,
                  e.options.format,
                  e.options.lang
                )),
              t instanceof p.DateTime &&
                !isNaN(t.getTime()) &&
                (e.options.startDate = t),
              e.options.startDate &&
                n instanceof p.DateTime &&
                !isNaN(n.getTime()) &&
                (e.options.endDate = n),
              !e.options.singleMode ||
                e.options.startDate instanceof p.DateTime ||
                (e.options.startDate = null),
              e.options.singleMode ||
                (e.options.startDate instanceof p.DateTime &&
                  e.options.endDate instanceof p.DateTime) ||
                ((e.options.startDate = null), (e.options.endDate = null));

            for (var s = 0; s < e.options.numberOfMonths; s += 1) {
              var r =
                e.options.startDate instanceof p.DateTime
                  ? e.options.startDate.clone()
                  : new p.DateTime();
              r.setDate(1), r.setMonth(r.getMonth() + s), (e.calendars[s] = r);
            }

            if (e.options.showTooltip)
              if (e.options.tooltipPluralSelector)
                e.pluralSelector = e.options.tooltipPluralSelector;
              else
                try {
                  var a = new Intl.PluralRules(e.options.lang);
                  e.pluralSelector = a.select.bind(a);
                } catch (t) {
                  e.pluralSelector = function (t) {
                    return 0 === Math.abs(t) ? "one" : "other";
                  };
                }
            return e.loadPolyfillsForIE11(), e.onInit(), e;
          }

          e.Litepicker = n;
        },
        function (t, e, i) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var o = i(3);
          (e.Litepicker = o.Litepicker),
            i(9),
            i(10),
            (window.Litepicker = o.Litepicker),
            (e.default = o.Litepicker);
        },
        function (t, e, i) {
          var o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return (e.default = t), e;
            };

          Object.defineProperty(e, "__esModule", {
            value: !0
          });

          var T = i(0),
            _ = o(i(1)),
            L = i(2),
            i =
              ((n.prototype.render = function () {
                var e = this,
                  t = document.createElement("div");
                t.className = _.containerMain;
                var i = document.createElement("div");
                (i.className = _.containerMonths),
                  _["columns" + this.options.numberOfColumns] &&
                    (i.classList.remove(_.columns2, _.columns3, _.columns4),
                    i.classList.add(
                      _["columns" + this.options.numberOfColumns]
                    )),
                  this.options.splitView && i.classList.add(_.splitView),
                  this.options.showWeekNumbers &&
                    i.classList.add(_.showWeekNumbers);

                for (
                  var o = this.calendars[0].clone(),
                    n = o.getMonth(),
                    s = o.getMonth() + this.options.numberOfMonths,
                    r = 0,
                    a = n;
                  a < s;
                  a += 1
                ) {
                  var l = o.clone();
                  l.setDate(1),
                    this.options.splitView
                      ? (l = this.calendars[r].clone())
                      : l.setMonth(a),
                    i.appendChild(this.renderMonth(l)),
                    (r += 1);
                }

                if (
                  ((this.picker.innerHTML = ""),
                  t.appendChild(i),
                  this.options.useResetBtn &&
                    (((n = document.createElement("a")).href = "#"),
                    (n.className = _.resetButton),
                    (n.innerHTML = this.options.buttonText.reset),
                    n.addEventListener("click", function (t) {
                      t.preventDefault(),
                        e.clearSelection(),
                        "function" == typeof e.options.resetBtnCallback &&
                          e.options.resetBtnCallback.call(e);
                    }),
                    t
                      .querySelector("." + _.monthItem + ":last-child")
                      .querySelector("." + _.monthItemHeader)
                      .appendChild(n)),
                  this.picker.appendChild(t),
                  (this.options.autoApply && !this.options.footerHTML) ||
                    this.picker.appendChild(this.renderFooter()),
                  this.options.showTooltip &&
                    this.picker.appendChild(this.renderTooltip()),
                  this.options.moduleRanges)
                ) {
                  if ("function" != typeof this.enableModuleRanges)
                    throw new Error(
                      "moduleRanges is on but library does not included. See https://github.com/wakirin/litepicker-module-ranges."
                    );
                  this.enableModuleRanges.call(this, this);
                }

                "function" == typeof this.options.onRender &&
                  this.options.onRender.call(this, this.picker);
              }),
              (n.prototype.renderMonth = function (t) {
                var o = this,
                  e = t.clone(),
                  i =
                    32 - new Date(e.getFullYear(), e.getMonth(), 32).getDate(),
                  n = document.createElement("div");
                n.className = _.monthItem;
                var s = document.createElement("div");
                s.className = _.monthItemHeader;
                var r = document.createElement("div");

                if (this.options.dropdowns.months) {
                  var a = document.createElement("select");
                  a.className = _.monthItemName;

                  for (var l = 0; l < 12; l += 1) {
                    var h = document.createElement("option"),
                      p = new T.DateTime(
                        new Date(t.getFullYear(), l, 1, 0, 0, 0)
                      );
                    (h.value = String(l)),
                      (h.text = p.toLocaleString(this.options.lang, {
                        month: "long"
                      })),
                      (h.disabled =
                        (this.options.minDate &&
                          p.isBefore(
                            new T.DateTime(this.options.minDate),
                            "month"
                          )) ||
                        (this.options.maxDate &&
                          p.isAfter(
                            new T.DateTime(this.options.maxDate),
                            "month"
                          ))),
                      (h.selected = p.getMonth() === t.getMonth()),
                      a.appendChild(h);
                  }

                  a.addEventListener("change", function (t) {
                    var e = t.target,
                      i = 0;
                    o.options.splitView &&
                      ((t = e.closest("." + _.monthItem)),
                      (i = L.findNestedMonthItem(t))),
                      o.calendars[i].setMonth(Number(e.value)),
                      o.render(),
                      "function" == typeof o.options.onChangeMonth &&
                        o.options.onChangeMonth.call(o, o.calendars[i], i);
                  }),
                    r.appendChild(a);
                } else {
                  var c = document.createElement("strong");
                  (c.className = _.monthItemName),
                    (c.innerHTML = t.toLocaleString(this.options.lang, {
                      month: "long"
                    })),
                    r.appendChild(c);
                }

                if (this.options.dropdowns.years) {
                  var d = document.createElement("select");
                  d.className = _.monthItemYear;
                  var u = this.options.dropdowns.minYear,
                    c =
                      this.options.dropdowns.maxYear ||
                      new Date().getFullYear();

                  for (
                    t.getFullYear() > c &&
                      (((h = document.createElement("option")).value = String(
                        t.getFullYear()
                      )),
                      (h.text = String(t.getFullYear())),
                      (h.selected = !0),
                      (h.disabled = !0),
                      d.appendChild(h)),
                      l = c;
                    u <= l;
                    --l
                  ) {
                    var h = document.createElement("option"),
                      m = new T.DateTime(new Date(l, 0, 1, 0, 0, 0));
                    (h.value = l),
                      (h.text = l),
                      (h.disabled =
                        (this.options.minDate &&
                          m.isBefore(
                            new T.DateTime(this.options.minDate),
                            "year"
                          )) ||
                        (this.options.maxDate &&
                          m.isAfter(
                            new T.DateTime(this.options.maxDate),
                            "year"
                          ))),
                      (h.selected = t.getFullYear() === l),
                      d.appendChild(h);
                  }

                  t.getFullYear() < u &&
                    (((h = document.createElement("option")).value = String(
                      t.getFullYear()
                    )),
                    (h.text = String(t.getFullYear())),
                    (h.selected = !0),
                    (h.disabled = !0),
                    d.appendChild(h)),
                    "asc" === this.options.dropdowns.years &&
                      ((f = Array.prototype.slice.call(d.childNodes).reverse()),
                      (d.innerHTML = ""),
                      f.forEach(function (t) {
                        (t.innerHTML = t.value), d.appendChild(t);
                      })),
                    d.addEventListener("change", function (t) {
                      var e = t.target,
                        i = 0;
                      o.options.splitView &&
                        ((t = e.closest("." + _.monthItem)),
                        (i = L.findNestedMonthItem(t))),
                        o.calendars[i].setFullYear(Number(e.value)),
                        o.render(),
                        "function" == typeof o.options.onChangeYear &&
                          o.options.onChangeYear.call(o, o.calendars[i], i);
                    }),
                    r.appendChild(d);
                } else {
                  var g = document.createElement("span");
                  (g.className = _.monthItemYear),
                    (g.innerHTML = String(t.getFullYear())),
                    r.appendChild(g);
                }

                var f = document.createElement("a");
                (f.href = "#"),
                  (f.className = _.buttonPreviousMonth),
                  (f.innerHTML = this.options.buttonText.previousMonth);
                g = document.createElement("a");
                (g.href = "#"),
                  (g.className = _.buttonNextMonth),
                  (g.innerHTML = this.options.buttonText.nextMonth),
                  s.appendChild(f),
                  s.appendChild(r),
                  s.appendChild(g),
                  this.options.minDate &&
                    e.isSameOrBefore(
                      new T.DateTime(this.options.minDate),
                      "month"
                    ) &&
                    n.classList.add(_.noPreviousMonth),
                  this.options.maxDate &&
                    e.isSameOrAfter(
                      new T.DateTime(this.options.maxDate),
                      "month"
                    ) &&
                    n.classList.add(_.noNextMonth);
                var y = document.createElement("div");
                (y.className = _.monthItemWeekdaysRow),
                  this.options.showWeekNumbers &&
                    (y.innerHTML = "<div>W</div>");

                for (var k = 1; k <= 7; k += 1) {
                  var D = 3 + this.options.firstDay + k,
                    b = document.createElement("div");
                  (b.innerHTML = this.weekdayName(D)),
                    (b.title = this.weekdayName(D, "long")),
                    y.appendChild(b);
                }

                var v = document.createElement("div");
                v.className = _.containerDays;
                var w = this.calcSkipDays(e);
                this.options.showWeekNumbers &&
                  w &&
                  v.appendChild(this.renderWeekNumber(e));

                for (var M = 0; M < w; M += 1) {
                  var x = document.createElement("div");
                  v.appendChild(x);
                }

                for (M = 1; M <= i; M += 1)
                  e.setDate(M),
                    this.options.showWeekNumbers &&
                      e.getDay() === this.options.firstDay &&
                      v.appendChild(this.renderWeekNumber(e)),
                    v.appendChild(this.renderDay(e));

                return n.appendChild(s), n.appendChild(y), n.appendChild(v), n;
              }),
              (n.prototype.renderDay = function (e) {
                var i = this;
                e.setHours();
                var t,
                  o,
                  n,
                  s = document.createElement("a");
                return (
                  (s.href = "#"),
                  (s.className = _.dayItem),
                  (s.innerHTML = String(e.getDate())),
                  (s.dataset.time = String(e.getTime())),
                  e.toDateString() === new Date().toDateString() &&
                    s.classList.add(_.isToday),
                  this.datePicked.length
                    ? (this.datePicked[0].toDateString() === e.toDateString() &&
                        (s.classList.add(_.isStartDate),
                        this.options.singleMode &&
                          s.classList.add(_.isEndDate)),
                      2 === this.datePicked.length &&
                        this.datePicked[1].toDateString() ===
                          e.toDateString() &&
                        s.classList.add(_.isEndDate),
                      2 === this.datePicked.length &&
                        e.isBetween(this.datePicked[0], this.datePicked[1]) &&
                        s.classList.add(_.isInRange))
                    : this.options.startDate &&
                      (this.options.startDate.toDateString() ===
                        e.toDateString() &&
                        (s.classList.add(_.isStartDate),
                        this.options.singleMode &&
                          s.classList.add(_.isEndDate)),
                      this.options.endDate &&
                        this.options.endDate.toDateString() ===
                          e.toDateString() &&
                        s.classList.add(_.isEndDate),
                      this.options.startDate &&
                        this.options.endDate &&
                        e.isBetween(
                          this.options.startDate,
                          this.options.endDate
                        ) &&
                        s.classList.add(_.isInRange)),
                  this.options.minDate &&
                    e.isBefore(new T.DateTime(this.options.minDate)) &&
                    s.classList.add(_.isLocked),
                  this.options.maxDate &&
                    e.isAfter(new T.DateTime(this.options.maxDate)) &&
                    s.classList.add(_.isLocked),
                  this.options.minDays &&
                    1 === this.datePicked.length &&
                    ((o = Number(!this.options.hotelMode)),
                    (n = this.datePicked[0]
                      .clone()
                      .subtract(this.options.minDays - o, "day")),
                    (t = this.datePicked[0]
                      .clone()
                      .add(this.options.minDays - o, "day")),
                    e.isBetween(n, this.datePicked[0], "(]") &&
                      s.classList.add(_.isLocked),
                    e.isBetween(this.datePicked[0], t, "[)") &&
                      s.classList.add(_.isLocked)),
                  this.options.maxDays &&
                    1 === this.datePicked.length &&
                    ((o = Number(this.options.hotelMode)),
                    (n = this.datePicked[0]
                      .clone()
                      .subtract(this.options.maxDays + o, "day")),
                    (t = this.datePicked[0]
                      .clone()
                      .add(this.options.maxDays + o, "day")),
                    e.isSameOrBefore(n) && s.classList.add(_.isLocked),
                    e.isSameOrAfter(t) && s.classList.add(_.isLocked)),
                  this.options.selectForward &&
                    1 === this.datePicked.length &&
                    e.isBefore(this.datePicked[0]) &&
                    s.classList.add(_.isLocked),
                  this.options.selectBackward &&
                    1 === this.datePicked.length &&
                    e.isAfter(this.datePicked[0]) &&
                    s.classList.add(_.isLocked),
                  this.options.lockDays.length &&
                    this.options.lockDays.filter(function (t) {
                      return t instanceof Array
                        ? e.isBetween(t[0], t[1], i.options.lockDaysInclusivity)
                        : t.isSame(e, "day");
                    }).length &&
                    s.classList.add(_.isLocked),
                  this.options.highlightedDays.length &&
                    this.options.highlightedDays.filter(function (t) {
                      return t instanceof Array
                        ? e.isBetween(t[0], t[1], "[]")
                        : t.isSame(e, "day");
                    }).length &&
                    s.classList.add(_.isHighlighted),
                  this.datePicked.length <= 1 &&
                    this.options.bookedDays.length &&
                    ((o = this.options.bookedDaysInclusivity),
                    this.options.hotelMode &&
                      1 === this.datePicked.length &&
                      (o = "()"),
                    (n = e.clone()).subtract(1, "day"),
                    e.clone().add(1, "day"),
                    (t = this.dateIsBooked(e, o)),
                    (o = this.dateIsBooked(n, "[]")),
                    (n = this.dateIsBooked(e, "(]")),
                    (o =
                      (0 === this.datePicked.length && t) ||
                      (1 === this.datePicked.length && o && t) ||
                      (1 === this.datePicked.length && o && n)),
                    (n =
                      this.options.anyBookedDaysAsCheckout &&
                      1 === this.datePicked.length),
                    o && !n && s.classList.add(_.isBooked)),
                  !this.options.disableWeekends ||
                    (6 !== e.getDay() && 0 !== e.getDay()) ||
                    s.classList.add(_.isLocked),
                  "function" == typeof this.options.onRenderDay &&
                    this.options.onRenderDay.call(this, s),
                  s
                );
              }),
              (n.prototype.renderFooter = function () {
                var t,
                  e,
                  i = document.createElement("div");
                return (
                  (i.className = _.containerFooter),
                  this.options.footerHTML
                    ? (i.innerHTML = this.options.footerHTML)
                    : (i.innerHTML =
                        '\n      <span class="' +
                        _.previewDateRange +
                        '"></span>\n      <button type="button" class="' +
                        _.buttonCancel +
                        '">' +
                        this.options.buttonText.cancel +
                        '</button>\n      <button type="button" class="' +
                        _.buttonApply +
                        '">' +
                        this.options.buttonText.apply +
                        "</button>\n      "),
                  this.options.singleMode
                    ? 1 === this.datePicked.length &&
                      ((t = this.datePicked[0].format(
                        this.options.format,
                        this.options.lang
                      )),
                      (i.querySelector("." + _.previewDateRange).innerHTML = t))
                    : (1 === this.datePicked.length &&
                        i
                          .querySelector("." + _.buttonApply)
                          .setAttribute("disabled", ""),
                      2 === this.datePicked.length &&
                        ((t = this.datePicked[0].format(
                          this.options.format,
                          this.options.lang
                        )),
                        (e = this.datePicked[1].format(
                          this.options.format,
                          this.options.lang
                        )),
                        (i.querySelector("." + _.previewDateRange).innerHTML =
                          "" + t + this.options.delimiter + e))),
                  i
                );
              }),
              (n.prototype.renderWeekNumber = function (t) {
                var e = document.createElement("div"),
                  i = t.getWeek(this.options.firstDay);
                return (
                  (e.className = _.weekNumber),
                  (e.innerHTML = 53 === i && 0 === t.getMonth() ? "53 / 1" : i),
                  e
                );
              }),
              (n.prototype.renderTooltip = function () {
                var t = document.createElement("div");
                return (t.className = _.containerTooltip), t;
              }),
              (n.prototype.dateIsBooked = function (e, i) {
                return this.options.bookedDays.filter(function (t) {
                  return t instanceof Array
                    ? e.isBetween(t[0], t[1], i)
                    : t.isSame(e, "day");
                }).length;
              }),
              (n.prototype.weekdayName = function (t, e) {
                return (
                  void 0 === e && (e = "short"),
                  new Date(1970, 0, t, 12, 0, 0, 0).toLocaleString(
                    this.options.lang,
                    {
                      weekday: e
                    }
                  )
                );
              }),
              (n.prototype.calcSkipDays = function (t) {
                t = t.getDay() - this.options.firstDay;
                return t < 0 && (t += 7), t;
              }),
              n);

          function n() {
            (this.options = {
              element: null,
              elementEnd: null,
              parentEl: null,
              firstDay: 0,
              format: "YYYY-MM-DD",
              lang: "en-US",
              delimiter: " to ",
              numberOfMonths: 1,
              numberOfColumns: 1,
              startDate: null,
              endDate: null,
              zIndex: 9999,
              minDate: null,
              maxDate: null,
              minDays: null,
              maxDays: null,
              selectForward: !1,
              selectBackward: !1,
              splitView: !1,
              inlineMode: !1,
              singleMode: !0,
              autoApply: !0,
              allowRepick: !1,
              showWeekNumbers: !1,
              showTooltip: !0,
              hotelMode: !1,
              disableWeekends: !1,
              scrollToDate: !0,
              mobileFriendly: !0,
              useResetBtn: !1,
              autoRefresh: !1,
              moveByOneMonth: !1,
              lockDaysFormat: "YYYY-MM-DD",
              lockDays: [],
              disallowLockDaysInRange: !1,
              lockDaysInclusivity: "[]",
              bookedDaysFormat: "YYYY-MM-DD",
              bookedDays: [],
              disallowBookedDaysInRange: !1,
              bookedDaysInclusivity: "[]",
              anyBookedDaysAsCheckout: !1,
              highlightedDaysFormat: "YYYY-MM-DD",
              highlightedDays: [],
              dropdowns: {
                minYear: 1990,
                maxYear: null,
                months: !1,
                years: !1,
                
              },
              buttonText: {
                apply: "Apply",
                cancel: "Cancel",
                previousMonth:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 9 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.50015 1.13315C8.92443 1.55742 8.92443 2.2453 8.50015 2.66958L2.74985 8.41988L8.50015 14.1702C8.92443 14.5945 8.92443 15.2823 8.50015 15.7066C8.07588 16.1309 7.388 16.1309 6.96372 15.7066L0.560439 9.30333C0.0725279 8.81542 0.0725203 8.02435 0.560438 7.53643L6.96372 1.13315C7.388 0.708873 8.07588 0.708873 8.50015 1.13315Z" fill="#001540"/></svg>',
                nextMonth:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 9 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.587004 15.7067C0.16273 15.2824 0.16273 14.5945 0.587004 14.1703L6.33731 8.41996L0.587004 2.66966C0.16273 2.24539 0.16273 1.5575 0.587004 1.13323C1.01128 0.708955 1.69916 0.708955 2.12343 1.13323L8.52672 7.53652C9.01463 8.02443 9.01464 8.81549 8.52672 9.30341L2.12343 15.7067C1.69916 16.131 1.01128 16.131 0.587004 15.7067Z" fill="#001540"/></svg>',
                reset:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>\n      </svg>'
              },
              tooltipText: {
                one: "day",
                other: "days"
              },
              tooltipPluralSelector: null,
              onShow: null,
              onHide: null,
              onSelect: null,
              onError: null,
              onRender: null,
              onRenderDay: null,
              onChangeMonth: true,
              onChangeYear: null,
              onDayHover: null,
              onShowTooltip: null,
              resetBtnCallback: null,
              moduleRanges: null,
              moduleNavKeyboard: null
            }),
              (this.calendars = []),
              (this.datePicked = []);
          }

          e.Calendar = i;
        },
        function (t, e, i) {
          (e = t.exports = i(7)(!1)).push([
            t.i,
            ':root{--litepickerBgColor: #fff;--litepickerMonthHeaderTextColor: #333;--litepickerMonthButton: #9e9e9e;--litepickerMonthButtonHover: #2196f3;--litepickerMonthWidth: calc(var(--litepickerDayWidth) * 7);--litepickerMonthWeekdayColor: #9e9e9e;--litepickerDayColor: #333;--litepickerDayColorHover: #2196f3;--litepickerDayIsTodayColor: #f44336;--litepickerDayIsInRange: #bbdefb;--litepickerDayIsLockedColor: #9e9e9e;--litepickerDayIsBookedColor: #9e9e9e;--litepickerDayIsStartColor: #fff;--litepickerDayIsStartBg: #2196f3;--litepickerDayIsEndColor: #fff;--litepickerDayIsEndBg: #2196f3;--litepickerDayWidth: 38px;--litepickerButtonCancelColor: #fff;--litepickerButtonCancelBg: #9e9e9e;--litepickerButtonApplyColor: #fff;--litepickerButtonApplyBg: #2196f3;--litepickerButtonResetBtn: #909090;--litepickerButtonResetBtnHover: #2196f3;--litepickerHighlightedDayColor: #333;--litepickerHighlightedDayBg: #ffeb3b}.show-week-numbers{--litepickerMonthWidth: calc(var(--litepickerDayWidth) * 8)}.litepicker{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:0.8em;display:none}.litepicker .container__main{display:-webkit-box;display:-ms-flexbox;display:flex}.litepicker .container__months{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--litepickerBgColor);border-radius:5px;-webkit-box-shadow:0 0 5px #ddd;box-shadow:0 0 5px #ddd;width:calc(var(--litepickerMonthWidth) + 10px);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months.columns-2{width:calc((var(--litepickerMonthWidth) * 2) + 20px)}.litepicker .container__months.columns-3{width:calc((var(--litepickerMonthWidth) * 3) + 30px)}.litepicker .container__months.columns-4{width:calc((var(--litepickerMonthWidth) * 4) + 40px)}.litepicker .container__months.split-view .month-item-header .button-previous-month,.litepicker .container__months.split-view .month-item-header .button-next-month{visibility:visible}.litepicker .container__months .month-item{padding:5px;width:var(--litepickerMonthWidth);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months .month-item-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;padding:10px 5px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--litepickerMonthHeaderTextColor)}.litepicker .container__months .month-item-header div{-webkit-box-flex:1;-ms-flex:1;flex:1}.litepicker .container__months .month-item-header div>.month-item-name{margin-right:5px}.litepicker .container__months .month-item-header div>.month-item-year{padding:0}.litepicker .container__months .month-item-header .reset-button{color:var(--litepickerButtonResetBtn)}.litepicker .container__months .month-item-header .reset-button>svg,.litepicker .container__months .month-item-header .reset-button>img{fill:var(--litepickerButtonResetBtn);pointer-events:none}.litepicker .container__months .month-item-header .reset-button:hover{color:var(--litepickerButtonResetBtnHover)}.litepicker .container__months .month-item-header .reset-button:hover>svg{fill:var(--litepickerButtonResetBtnHover)}.litepicker .container__months .month-item-header .button-previous-month,.litepicker .container__months .month-item-header .button-next-month{visibility:hidden;text-decoration:none;color:var(--litepickerMonthButton);padding:3px 5px;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__months .month-item-header .button-previous-month>svg,.litepicker .container__months .month-item-header .button-previous-month>img,.litepicker .container__months .month-item-header .button-next-month>svg,.litepicker .container__months .month-item-header .button-next-month>img{fill:var(--litepickerMonthButton);pointer-events:none}.litepicker .container__months .month-item-header .button-previous-month:hover,.litepicker .container__months .month-item-header .button-next-month:hover{color:var(--litepickerMonthButtonHover)}.litepicker .container__months .month-item-header .button-previous-month:hover>svg,.litepicker .container__months .month-item-header .button-next-month:hover>svg{fill:var(--litepickerMonthButtonHover)}.litepicker .container__months .month-item-weekdays-row{display:-webkit-box;display:-ms-flexbox;display:flex;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:var(--litepickerMonthWeekdayColor)}.litepicker .container__months .month-item-weekdays-row>div{padding:5px 0;font-size:85%;-webkit-box-flex:1;-ms-flex:1;flex:1;width:var(--litepickerDayWidth);text-align:center}.litepicker .container__months .month-item:first-child .button-previous-month{visibility:visible}.litepicker .container__months .month-item:last-child .button-next-month{visibility:visible}.litepicker .container__months .month-item.no-previous-month .button-previous-month{visibility:hidden}.litepicker .container__months .month-item.no-next-month .button-next-month{visibility:hidden}.litepicker .container__days{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__days>div,.litepicker .container__days>a{padding:5px 0;width:var(--litepickerDayWidth)}.litepicker .container__days .day-item{color:var(--litepickerDayColor);text-align:center;text-decoration:none;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__days .day-item:hover{color:var(--litepickerDayColorHover);-webkit-box-shadow:inset 0 0 0 1px var(--litepickerDayColorHover);box-shadow:inset 0 0 0 1px var(--litepickerDayColorHover)}.litepicker .container__days .day-item.is-today{color:var(--litepickerDayIsTodayColor)}.litepicker .container__days .day-item.is-locked{color:var(--litepickerDayIsLockedColor)}.litepicker .container__days .day-item.is-locked:hover{color:var(--litepickerDayIsLockedColor);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-booked{color:var(--litepickerDayIsBookedColor)}.litepicker .container__days .day-item.is-booked:hover{color:var(--litepickerDayIsBookedColor);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-in-range{background-color:var(--litepickerDayIsInRange);border-radius:0}.litepicker .container__days .day-item.is-start-date{color:var(--litepickerDayIsStartColor);background-color:var(--litepickerDayIsStartBg);border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-flipped{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date{color:var(--litepickerDayIsEndColor);background-color:var(--litepickerDayIsEndBg);border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date.is-flipped{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-end-date{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-highlighted{color:var(--litepickerHighlightedDayColor);background-color:var(--litepickerHighlightedDayBg)}.litepicker .container__days .week-number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#9e9e9e;font-size:85%}.litepicker .container__footer{text-align:right;padding:10px 5px;margin:0 5px;background-color:#fafafa;-webkit-box-shadow:inset 0px 3px 3px 0px #ddd;box-shadow:inset 0px 3px 3px 0px #ddd;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.litepicker .container__footer .preview-date-range{margin-right:10px;font-size:90%}.litepicker .container__footer .button-cancel{background-color:var(--litepickerButtonCancelBg);color:var(--litepickerButtonCancelColor);border:0;padding:3px 7px 4px;border-radius:3px}.litepicker .container__footer .button-cancel>svg,.litepicker .container__footer .button-cancel>img{pointer-events:none}.litepicker .container__footer .button-apply{background-color:var(--litepickerButtonApplyBg);color:var(--litepickerButtonApplyColor);border:0;padding:3px 7px 4px;border-radius:3px;margin-left:10px;margin-right:10px}.litepicker .container__footer .button-apply:disabled{opacity:0.7}.litepicker .container__footer .button-apply>svg,.litepicker .container__footer .button-apply>img{pointer-events:none}.litepicker .container__tooltip{position:absolute;margin-top:-4px;padding:4px 8px;border-radius:4px;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);white-space:nowrap;font-size:11px;pointer-events:none;visibility:hidden}.litepicker .container__tooltip:before{position:absolute;bottom:-5px;left:calc(50% - 5px);border-top:5px solid rgba(0,0,0,0.12);border-right:5px solid transparent;border-left:5px solid transparent;content:""}.litepicker .container__tooltip:after{position:absolute;bottom:-4px;left:calc(50% - 4px);border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent;content:""}.litepicker-open{overflow:hidden}.litepicker-backdrop{display:none;background-color:#000;opacity:0.3;position:fixed;top:0;right:0;bottom:0;left:0}\n',
            ""
          ]),
            (e.locals = {
              showWeekNumbers: "show-week-numbers",
              litepicker: "litepicker",
              containerMain: "container__main",
              containerMonths: "container__months",
              columns2: "columns-2",
              columns3: "columns-3",
              columns4: "columns-4",
              splitView: "split-view",
              monthItemHeader: "month-item-header",
              buttonPreviousMonth: "button-previous-month",
              buttonNextMonth: "button-next-month",
              monthItem: "month-item",
              monthItemName: "month-item-name",
              monthItemYear: "month-item-year",
              resetButton: "reset-button",
              monthItemWeekdaysRow: "month-item-weekdays-row",
              noPreviousMonth: "no-previous-month",
              noNextMonth: "no-next-month",
              containerDays: "container__days",
              dayItem: "day-item",
              isToday: "is-today",
              isLocked: "is-locked",
              isBooked: "is-booked",
              isInRange: "is-in-range",
              isStartDate: "is-start-date",
              isFlipped: "is-flipped",
              isEndDate: "is-end-date",
              isHighlighted: "is-highlighted",
              weekNumber: "week-letter",
              containerFooter: "container__footer",
              previewDateRange: "preview-date-range",
              buttonCancel: "button-cancel",
              buttonApply: "button-apply",
              containerTooltip: "container__tooltip",
              litepickerOpen: "litepicker-open",
              litepickerBackdrop: "litepicker-backdrop"
            });
        },
        function (t, e, i) {
          t.exports = function (s) {
            var a = [];
            return (
              (a.toString = function () {
                return this.map(function (n) {
                  var t = (function () {
                    var t = n[1] || "",
                      e = n[3];
                    if (!e) return t;

                    if (s && "function" == typeof btoa) {
                      var i =
                          ((i = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                          )),
                          (o =
                            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                              i
                            )),
                          "/*# ".concat(o, " */")),
                        o = e.sources.map(function (t) {
                          return "/*# sourceURL="
                            .concat(e.sourceRoot)
                            .concat(t, " */");
                        });
                      return [t].concat(o).concat([i]).join("\n");
                    }

                    return [t].join("\n");
                  })();

                  return n[2] ? "@media ".concat(n[2], "{").concat(t, "}") : t;
                }).join("");
              }),
              (a.i = function (t, e) {
                "string" == typeof t && (t = [[null, t, ""]]);

                for (var i = {}, o = 0; o < this.length; o++) {
                  var n = this[o][0];
                  null != n && (i[n] = !0);
                }

                for (var s = 0; s < t.length; s++) {
                  var r = t[s];
                  (null != r[0] && i[r[0]]) ||
                    (e && !r[2]
                      ? (r[2] = e)
                      : e &&
                        (r[2] = "(".concat(r[2], ") and (").concat(e, ")")),
                    a.push(r));
                }
              }),
              a
            );
          };
        },
        function (t, e, o) {
          var i,
            n,
            h = {},
            s =
              ((n = {}),
              function (t) {
                if (void 0 === n[t]) {
                  var e = document.querySelector(t);
                  if (
                    window.HTMLIFrameElement &&
                    e instanceof window.HTMLIFrameElement
                  )
                    try {
                      e = e.contentDocument.head;
                    } catch (t) {
                      e = null;
                    }
                  n[t] = e;
                }

                return n[t];
              });

          function p(t, e) {
            for (var i = [], o = {}, n = 0; n < t.length; n++) {
              var s = t[n],
                r = e.base ? s[0] + e.base : s[0],
                s = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3]
                };
              o[r]
                ? o[r].parts.push(s)
                : i.push(
                    (o[r] = {
                      id: r,
                      parts: [s]
                    })
                  );
            }

            return i;
          }

          function c(t, e) {
            for (var i = 0; i < t.length; i++) {
              var o = t[i],
                n = h[o.id],
                s = 0;

              if (n) {
                for (n.refs++; s < n.parts.length; s++) n.parts[s](o.parts[s]);

                for (; s < o.parts.length; s++) n.parts.push(g(o.parts[s], e));
              } else {
                for (var r = []; s < o.parts.length; s++)
                  r.push(g(o.parts[s], e));

                h[o.id] = {
                  id: o.id,
                  refs: 1,
                  parts: r
                };
              }
            }
          }

          function r(e) {
            var i = document.createElement("style");
            if (
              (void 0 !== e.attributes.nonce ||
                ((t = o.nc) && (e.attributes.nonce = t)),
              Object.keys(e.attributes).forEach(function (t) {
                i.setAttribute(t, e.attributes[t]);
              }),
              "function" == typeof e.insert)
            )
              e.insert(i);
            else {
              var t = s(e.insert || "head");
              if (!t)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              t.appendChild(i);
            }
            return i;
          }

          var a,
            l =
              ((a = []),
              function (t, e) {
                return (a[t] = e), a.filter(Boolean).join("\n");
              });

          function d(t, e, i, o) {
            i = i ? "" : o.css;
            t.styleSheet
              ? (t.styleSheet.cssText = l(e, i))
              : ((o = document.createTextNode(i)),
                (i = t.childNodes)[e] && t.removeChild(i[e]),
                i.length ? t.insertBefore(o, i[e]) : t.appendChild(o));
          }

          var u = null,
            m = 0;

          function g(e, t) {
            var i, o, n, s;
            return (
              (s = t.singleton
                ? ((i = m++),
                  (o = u = u || r(t)),
                  (n = d.bind(null, o, i, !1)),
                  d.bind(null, o, i, !0))
                : ((o = r(t)),
                  (n = function (t, e, i) {
                    var o = i.css,
                      n = i.media,
                      i = i.sourceMap;
                    if (
                      (n && t.setAttribute("media", n),
                      i &&
                        btoa &&
                        (o +=
                          "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(i)))
                            ),
                            " */"
                          )),
                      t.styleSheet)
                    )
                      t.styleSheet.cssText = o;
                    else {
                      for (; t.firstChild; ) t.removeChild(t.firstChild);

                      t.appendChild(document.createTextNode(o));
                    }
                  }.bind(null, o, t)),
                  function () {
                    null !== o.parentNode && o.parentNode.removeChild(o);
                  })),
              n(e),
              function (t) {
                t
                  ? (t.css === e.css &&
                      t.media === e.media &&
                      t.sourceMap === e.sourceMap) ||
                    n((e = t))
                  : s();
              }
            );
          }

          t.exports = function (t, a) {
            ((a = a || {}).attributes =
              "object" == typeof a.attributes ? a.attributes : {}),
              a.singleton ||
                "boolean" == typeof a.singleton ||
                (a.singleton =
                  (void 0 === i &&
                    (i = Boolean(
                      window && document && document.all && !window.atob
                    )),
                  i));
            var l = p(t, a);
            return (
              c(l, a),
              function (t) {
                for (var e = [], i = 0; i < l.length; i++) {
                  var o = l[i],
                    o = h[o.id];
                  o && (o.refs--, e.push(o));
                }

                t && c(p(t, a), a);

                for (var n = 0; n < e.length; n++) {
                  var s = e[n];

                  if (0 === s.refs) {
                    for (var r = 0; r < s.parts.length; r++) s.parts[r]();

                    delete h[s.id];
                  }
                }
              }
            );
          };
        },
        function (t, e, i) {
          var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, o = arguments.length; i < o; i++)
                      for (var n in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);

                    return t;
                  }).apply(this, arguments);
              },
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var i in t)
                    Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return (e.default = t), e;
              };

          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var a = i(0),
            e = i(3),
            h = o(i(1)),
            p = i(2);
          (e.Litepicker.prototype.show = function (t) {
            void 0 === t && (t = null);
            var e = t || this.options.element;
            if (((this.triggerElement = e), this.options.inlineMode))
              return (
                (this.picker.style.position = "static"),
                (this.picker.style.display = "inline-block"),
                (this.picker.style.top = null),
                (this.picker.style.left = null),
                (this.picker.style.bottom = null),
                void (this.picker.style.right = null)
              );

            if (
              (this.options.scrollToDate &&
                (!this.options.startDate || (t && t !== this.options.element)
                  ? t &&
                    this.options.endDate &&
                    t === this.options.elementEnd &&
                    ((a = this.options.endDate.clone()).setDate(1),
                    1 < this.options.numberOfMonths &&
                      a.setMonth(
                        a.getMonth() - (this.options.numberOfMonths - 1)
                      ),
                    (this.calendars[0] = a.clone()))
                  : ((l = this.options.startDate.clone()).setDate(1),
                    (this.calendars[0] = l.clone()))),
              this.options.mobileFriendly && p.isMobile())
            ) {
              (this.picker.style.position = "fixed"),
                (this.picker.style.display = "block"),
                "portrait" === p.getOrientation()
                  ? ((this.options.numberOfMonths = 1),
                    (this.options.numberOfColumns = 1))
                  : ((this.options.numberOfMonths = 2),
                    (this.options.numberOfColumns = 2)),
                this.render();
              var i = this.picker.getBoundingClientRect();
              return (
                (this.picker.style.top = "calc(50% - " + i.height / 2 + "px)"),
                (this.picker.style.left = "calc(50% - " + i.width / 2 + "px)"),
                (this.picker.style.right = null),
                (this.picker.style.bottom = null),
                (this.picker.style.zIndex = this.options.zIndex),
                (this.backdrop.style.display = "block"),
                (this.backdrop.style.zIndex = this.options.zIndex - 1),
                document.body.classList.add(h.litepickerOpen),
                "function" == typeof this.options.onShow &&
                  this.options.onShow.call(this),
                void (t || this.options.element).blur()
              );
            }

            this.render(),
              (this.picker.style.position = "absolute"),
              (this.picker.style.display = "block"),
              (this.picker.style.zIndex = this.options.zIndex);
            var o = e.getBoundingClientRect(),
              n = this.picker.getBoundingClientRect(),
              s = o.bottom,
              r = o.left,
              a = 0,
              l = 0,
              i = 0,
              t = 0;
            this.options.parentEl
              ? ((s -= (e = this.picker.parentNode.getBoundingClientRect())
                  .bottom),
                (s += o.height) + n.height > window.innerHeight &&
                  0 < o.top - e.top - o.height &&
                  (i = o.top - e.top - o.height),
                (r -= e.left) + n.width > window.innerWidth &&
                  0 < o.right - e.right - n.width &&
                  (t = o.right - e.right - n.width))
              : ((a = window.scrollX || window.pageXOffset),
                (l = window.scrollY || window.pageYOffset),
                s + n.height > window.innerHeight &&
                  0 < o.top - n.height &&
                  (i = o.top - n.height),
                r + n.width > window.innerWidth &&
                  0 < o.right - n.width &&
                  (t = o.right - n.width)),
              (this.picker.style.top = (i || s) + l + "px"),
              (this.picker.style.left = (t || r) + a + "px"),
              (this.picker.style.right = null),
              (this.picker.style.bottom = null),
              "function" == typeof this.options.onShow &&
                this.options.onShow.call(this);
          }),
            (e.Litepicker.prototype.hide = function () {
              this.isShowning() &&
                ((this.datePicked.length = 0),
                this.updateInput(),
                this.options.inlineMode
                  ? this.render()
                  : ((this.picker.style.display = "none"),
                    "function" == typeof this.options.onHide &&
                      this.options.onHide.call(this),
                    this.options.mobileFriendly &&
                      (document.body.classList.remove(h.litepickerOpen),
                      (this.backdrop.style.display = "none"))));
            }),
            (e.Litepicker.prototype.getDate = function () {
              return this.getStartDate();
            }),
            (e.Litepicker.prototype.getStartDate = function () {
              return this.options.startDate
                ? this.options.startDate.clone().getDateInstance()
                : null;
            }),
            (e.Litepicker.prototype.getEndDate = function () {
              return this.options.endDate
                ? this.options.endDate.clone().getDateInstance()
                : null;
            }),
            (e.Litepicker.prototype.setDate = function (t) {
              this.setStartDate(t),
                "function" == typeof this.options.onSelect &&
                  this.options.onSelect.call(this, this.getDate());
            }),
            (e.Litepicker.prototype.setStartDate = function (t) {
              t &&
                ((this.options.startDate = new a.DateTime(
                  t,
                  this.options.format,
                  this.options.lang
                )),
                this.updateInput());
            }),
            (e.Litepicker.prototype.setEndDate = function (t) {
              t &&
                ((this.options.endDate = new a.DateTime(
                  t,
                  this.options.format,
                  this.options.lang
                )),
                this.options.startDate.getTime() >
                  this.options.endDate.getTime() &&
                  ((this.options.endDate = this.options.startDate.clone()),
                  (this.options.startDate = new a.DateTime(
                    t,
                    this.options.format,
                    this.options.lang
                  ))),
                this.updateInput());
            }),
            (e.Litepicker.prototype.setDateRange = function (t, e) {
              (this.triggerElement = void 0),
                this.setStartDate(t),
                this.setEndDate(e),
                this.updateInput(),
                "function" == typeof this.options.onSelect &&
                  this.options.onSelect.call(
                    this,
                    this.getStartDate(),
                    this.getEndDate()
                  );
            }),
            (e.Litepicker.prototype.gotoDate = function (t, e) {
              void 0 === e && (e = 0);
              t = new a.DateTime(t);
              t.setDate(1), (this.calendars[e] = t.clone()), this.render();
            }),
            (e.Litepicker.prototype.setLockDays = function (t) {
              (this.options.lockDays = a.DateTime.convertArray(
                t,
                this.options.lockDaysFormat
              )),
                this.render();
            }),
            (e.Litepicker.prototype.setBookedDays = function (t) {
              (this.options.bookedDays = a.DateTime.convertArray(
                t,
                this.options.bookedDaysFormat
              )),
                this.render();
            }),
            (e.Litepicker.prototype.setHighlightedDays = function (t) {
              (this.options.highlightedDays = a.DateTime.convertArray(
                t,
                this.options.highlightedDaysFormat
              )),
                this.render();
            }),
            (e.Litepicker.prototype.setOptions = function (t) {
              delete t.element,
                delete t.elementEnd,
                delete t.parentEl,
                t.startDate &&
                  (t.startDate = new a.DateTime(
                    t.startDate,
                    this.options.format,
                    this.options.lang
                  )),
                t.endDate &&
                  (t.endDate = new a.DateTime(
                    t.endDate,
                    this.options.format,
                    this.options.lang
                  ));
              var e = r(r({}, this.options.dropdowns), t.dropdowns),
                i = r(r({}, this.options.buttonText), t.buttonText),
                o = r(r({}, this.options.tooltipText), t.tooltipText);
              (this.options = r(r({}, this.options), t)),
                (this.options.dropdowns = r({}, e)),
                (this.options.buttonText = r({}, i)),
                (this.options.tooltipText = r({}, o)),
                !this.options.singleMode ||
                  this.options.startDate instanceof a.DateTime ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null)),
                this.options.singleMode ||
                  (this.options.startDate instanceof a.DateTime &&
                    this.options.endDate instanceof a.DateTime) ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null));

              for (var n = 0; n < this.options.numberOfMonths; n += 1) {
                var s = this.options.startDate
                  ? this.options.startDate.clone()
                  : new a.DateTime();
                s.setDate(1),
                  s.setMonth(s.getMonth() + n),
                  (this.calendars[n] = s);
              }

              this.options.lockDays.length &&
                (this.options.lockDays = a.DateTime.convertArray(
                  this.options.lockDays,
                  this.options.lockDaysFormat
                )),
                this.options.bookedDays.length &&
                  (this.options.bookedDays = a.DateTime.convertArray(
                    this.options.bookedDays,
                    this.options.bookedDaysFormat
                  )),
                this.options.highlightedDays.length &&
                  (this.options.highlightedDays = a.DateTime.convertArray(
                    this.options.highlightedDays,
                    this.options.highlightedDaysFormat
                  )),
                this.render(),
                this.options.inlineMode && this.show(),
                this.updateInput();
            }),
            (e.Litepicker.prototype.clearSelection = function () {
              (this.options.startDate = null),
                (this.options.endDate = null),
                (this.datePicked.length = 0),
                this.updateInput(),
                this.isShowning() && this.render();
            }),
            (e.Litepicker.prototype.destroy = function () {
              this.picker &&
                this.picker.parentNode &&
                (this.picker.parentNode.removeChild(this.picker),
                (this.picker = null)),
                this.backdrop &&
                  this.backdrop.parentNode &&
                  this.backdrop.parentNode.removeChild(this.backdrop);
            });
        },
        function (t, e, i) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }
      ]),
    (n.c = o),
    (n.d = function (t, e, i) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
        });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 4)).Litepicker
  );

  function n(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = {
      i: t,
      l: !1,
      exports: {}
    });
    return i[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }

  var i, o;
}),
  console.warn(
    "Litepicker: version 1.5.7 is deprecated. This file will be removed in future releases. Upgrade to v2: https://github.com/wakirin/Litepicker"
  );
