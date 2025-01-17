window.Bizweb || (window.Bizweb = {}),
  (Bizweb.mediaDomainName = "//bizweb.dktcdn.net/"),
  (Bizweb.each = function(a, b) {
    for (var c = 0; c < a.length; c++) b(a[c], c);
  }),
  (Bizweb.getClass = function(a) {
    return Object.prototype.toString.call(a).slice(8, -1);
  }),
  (Bizweb.map = function(a, b) {
    for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
    return c;
  }),
  (Bizweb.arrayContains = function(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  }),
  (Bizweb.distinct = function(a) {
    for (var b = [], c = 0; c < a.length; c++)
      Bizweb.arrayContains(b, a[c]) || b.push(a[c]);
    return b;
  }),
  (Bizweb.getUrlParameter = function(a) {
    var b = RegExp("[?&]" + a + "=([^&]*)").exec(window.location.search);
    return b && decodeURIComponent(b[1].replace(/\+/g, " "));
  }),
  (Bizweb.uniq = function(a) {
    for (var b = [], c = 0; c < a.length; c++)
      Bizweb.arrayIncludes(b, a[c]) || b.push(a[c]);
    return b;
  }),
  (Bizweb.arrayIncludes = function(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  }),
  (Bizweb.Product = (function() {
    function a(a) {
      if ("undefined" != typeof a)
        for (property in a) this[property] = a[property];
    }
    return (
      (a.prototype.optionNames = function() {
        return "Array" == Bizweb.getClass(this.options) ? this.options : [];
      }),
      (a.prototype.optionValues = function(a) {
        if ("undefined" == typeof this.variants) return null;
        var b = Bizweb.map(this.variants, function(b) {
          var c = "option" + (a + 1);
          return "undefined" == typeof b[c] ? null : b[c];
        });
        return null == b[0] ? null : Bizweb.distinct(b);
      }),
      (a.prototype.getVariant = function(a) {
        var b = null;
        return a.length != this.options.length
          ? null
          : (Bizweb.each(this.variants, function(c) {
              for (var d = !0, e = 0; e < a.length; e++) {
                var f = "option" + (e + 1);
                c[f] != a[e] && (d = !1);
              }
              if (d) return void (b = c);
            }),
            b);
      }),
      (a.prototype.getVariantById = function(a) {
        for (var b = 0; b < this.variants.length; b++) {
          var c = this.variants[b];
          if (c.id == a) return c;
        }
        return null;
      }),
      (a.name = "Product"),
      a
    );
  })()),
  (Bizweb.money_format = " VND"),
  (Bizweb.formatMoney = function(a, b) {
    function f(a, b, c, d) {
      if (
        ("undefined" == typeof b && (b = 2),
        "undefined" == typeof c && (c = "."),
        "undefined" == typeof d && (d = ","),
        "undefined" == typeof a || null == a)
      )
        return 0;
      a = a.toFixed(b);
      var e = a.split("."),
        f = e[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + c),
        g = e[1] ? d + e[1] : "";
      return f + g;
    }
    "string" == typeof a &&
      ((a = a.replace(/\./g, "")), (a = a.replace(/\,/g, "")));
    var c = "",
      d = /\{\{\s*(\w+)\s*\}\}/,
      e = b || this.money_format;
    switch (e.match(d)[1]) {
      case "amount":
        c = f(a, 2);
        break;
      case "amount_no_decimals":
        c = f(a, 0);
        break;
      case "amount_with_comma_separator":
        c = f(a, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        c = f(a, 0, ".", ",");
    }
    return e.replace(d, c);
  }),
  (Bizweb.OptionSelectors = (function() {
    function a(a, b) {
      return (
        (this.selectorDivClass = "selector-wrapper"),
        (this.selectorClass = "single-option-selector"),
        (this.variantIdFieldIdSuffix = "-variant-id"),
        (this.variantIdField = null),
        (this.selectors = []),
        (this.domIdPrefix = a),
        (this.product = new Bizweb.Product(b.product)),
        "undefined" != typeof b.onVariantSelected
          ? (this.onVariantSelected = b.onVariantSelected)
          : (this.onVariantSelected = function() {}),
        this.replaceSelector(a),
        this.initDropdown(),
        !0
      );
    }
    return (
      (a.prototype.replaceSelector = function(a) {
        var b = document.getElementById(a),
          c = b.parentNode;
        Bizweb.each(this.buildSelectors(), function(a) {
          c.insertBefore(a, b);
        }),
          (b.style.display = "none"),
          (this.variantIdField = b);
      }),
      (a.prototype.buildSelectors = function() {
        for (var a = 0; a < this.product.optionNames().length; a++) {
          var b = new Bizweb.SingleOptionSelector(
            this,
            a,
            this.product.optionNames()[a],
            this.product.optionValues(a)
          );
          (b.element.disabled = !1), this.selectors.push(b);
        }
        var c = this.selectorDivClass,
          d = this.product.optionNames(),
          e = Bizweb.map(this.selectors, function(a) {
            var b = document.createElement("div");
            if ((b.setAttribute("class", c), d.length > 1)) {
              var e = document.createElement("label");
              (e.htmlFor = a.element.id),
                (e.innerHTML = a.name),
                b.appendChild(e);
            }
            return b.appendChild(a.element), b;
          });
        return e;
      }),
      (a.prototype.initDropdown = function() {
        var a = { initialLoad: !0 },
          b = this.selectVariantFromDropdown(a);
        if (!b) {
          var c = this;
          setTimeout(function() {
            c.selectVariantFromParams(a) || c.selectors[0].element.onchange(a);
          });
        }
      }),
      (a.prototype.selectVariantFromDropdown = function(a) {
        var b = document
          .getElementById(this.domIdPrefix)
          .querySelector("[selected]");
        return !!b && this.selectVariant(b.value, a);
      }),
      (a.prototype.selectVariantFromParams = function(a) {
        var b = Bizweb.getUrlParameter("variantid");
        return (
          null == b && (b = Bizweb.getUrlParameter("variantId")),
          this.selectVariant(b, a)
        );
      }),
      (a.prototype.selectVariant = function(a, b) {
        var c = this.product.getVariantById(a);
        if (null == c) return !1;
        for (var d = 0; d < this.selectors.length; d++) {
          var e = this.selectors[d].element,
            f = e.getAttribute("data-option"),
            g = c[f];
          null != g && this.optionExistInSelect(e, g) && (e.value = g);
        }
        return (
          "undefined" != typeof jQuery
            ? jQuery(this.selectors[0].element).trigger("change", b)
            : this.selectors[0].element.onchange(b),
          !0
        );
      }),
      (a.prototype.optionExistInSelect = function(a, b) {
        for (var c = 0; c < a.options.length; c++)
          if (a.options[c].value == b) return !0;
      }),
      (a.prototype.updateSelectors = function(a, b) {
        var c = this.selectedValues(),
          d = this.product.getVariant(c);
        d
          ? ((this.variantIdField.disabled = !1),
            (this.variantIdField.value = d.id))
          : (this.variantIdField.disabled = !0),
          this.onVariantSelected(d, this, b),
          null != this.historyState &&
            this.historyState.onVariantChange(d, this, b);
      }),
      (a.prototype.selectedValues = function() {
        for (var a = [], b = 0; b < this.selectors.length; b++) {
          var c = this.selectors[b].element.value;
          a.push(c);
        }
        return a;
      }),
      (a.name = "OptionSelectors"),
      a
    );
  })()),
  (Bizweb.SingleOptionSelector = function(a, b, c, d) {
    (this.multiSelector = a),
      (this.values = d),
      (this.index = b),
      (this.name = c),
      (this.element = document.createElement("select"));
    for (var e = 0; e < d.length; e++) {
      var f = document.createElement("option");
      (f.value = d[e]), (f.innerHTML = d[e]), this.element.appendChild(f);
    }
    return (
      this.element.setAttribute("class", this.multiSelector.selectorClass),
      this.element.setAttribute("data-option", "option" + (b + 1)),
      (this.element.id = a.domIdPrefix + "-option-" + b),
      (this.element.onchange = function(c, d) {
        (d = d || {}), a.updateSelectors(b, d);
      }),
      !0
    );
  }),
  (Bizweb.Image = {
    preload: function(a, b) {
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        this.loadImage(this.getSizedImageUrl(d, b));
      }
    },
    loadImage: function(a) {
      new Image().src = a;
    },
    switchImage: function(a, b, c) {
      if (a && b) {
        var d = this.imageSize(b.src),
          e = this.getSizedImageUrl(a.src, d);
        c ? c(e, a, b) : (b.src = e);
      }
    },
    imageSize: function(a) {
      var b = a.match(
        /thumb\/(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\//
      );
      return null != b ? b[1] : null;
    },
    getSizedImageUrl: function(a, b) {
      if (null == b) return a;
      if ("master" == b) return this.removeProtocol(a);
      var c = a.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
      if (null != c) {
        var d = Bizweb.mediaDomainName + "thumb/" + b + "/";
        return this.removeProtocol(a)
          .replace(Bizweb.mediaDomainName, d)
          .split("?")[0];
      }
      return null;
    },
    removeProtocol: function(a) {
      return a.replace(/http(s)?:/, "");
    }
  });
function floatToString(t, r) {
  var e = t.toFixed(r).toString();
  return e.match(/^\.\d+/) ? "0" + e : e;
}
function attributeToString(t) {
  return (
    "string" != typeof t && ((t += ""), "undefined" === t && (t = "")),
    jQuery.trim(t)
  );
}
"undefined" == typeof Bizweb && (Bizweb = {});
Bizweb.mediaDomainName = "//bizweb.dktcdn.net/";
(Bizweb.money_format = "$"),
  (Bizweb.onError = function(XMLHttpRequest, textStatus) {
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    alert(
      data.message
        ? data.message + "(" + data.status + "): " + data.description
        : "Error : " + Bizweb.fullMessagesFromErrors(data).join("; ") + "."
    );
  }),
  (Bizweb.fullMessagesFromErrors = function(t) {
    var r = [];
    return (
      jQuery.each(t, function(t, e) {
        jQuery.each(e, function(e, o) {
          r.push(t + " " + o);
        });
      }),
      r
    );
  }),
  (Bizweb.onCartUpdate = function(t) {
    alert("There are now " + t.item_count + " items in the cart.");
  }),
  (Bizweb.onCartShippingRatesUpdate = function(t, r) {
    var e = "";
    r.zip && (e += r.zip + ", "),
      r.province && (e += r.province + ", "),
      (e += r.country),
      alert(
        "There are " +
          t.length +
          " shipping rates available for " +
          e +
          ", starting at " +
          Bizweb.formatMoney(t[0].price) +
          "."
      );
  }),
  (Bizweb.onItemAdded = function(t) {
    alert(t.title + " was added to your shopping cart.");
  }),
  (Bizweb.onProduct = function(t) {
    alert("Received everything we ever wanted to know about " + t.title);
  }),
  (Bizweb.formatMoney = function(amount, moneyFormat) {
    function getDefault(value, defaultValue) {
      if (typeof value == "undefined") return defaultValue;
      return value;
    }
    function formatMoney(amount, decimal, thousandSeperate, decimalSeperate) {
      decimal = getDefault(decimal, 2);
      thousandSeperate = getDefault(thousandSeperate, ",");
      decimalSeperate = getDefault(decimalSeperate, ".");
      if (isNaN(amount) || null == amount) return 0;
      amount = amount.toFixed(decimal);
      var amountParts = amount.split(".");
      var integer = amountParts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        "$1" + thousandSeperate
      );
      var decimal = amountParts[1] ? decimalSeperate + amountParts[1] : "";
      return integer + decimal;
    }
    if (typeof amount == "string") {
      amount = amount.replace(".", "");
      amount = amount.replace(",", "");
    }
    var result = "";
    var moneyRegex = /\{\{\s*(\w+)\s*\}\}/;
    moneyFormat = moneyFormat || this.money_format;
    switch (moneyFormat.match(moneyRegex)[1]) {
      case "amount":
        result = formatMoney(amount, 2);
        break;
      case "amount_no_decimals":
        result = formatMoney(amount, 0);
        break;
      case "amount_with_comma_separator":
        result = formatMoney(amount, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        result = formatMoney(amount, 0, ".", ",");
    }
    return moneyFormat.replace(moneyRegex, result);
  }),
  (Bizweb.resizeImage = function(t, r) {
    try {
      if ("original" == r) return t;
      var thumbDomain = Bizweb.mediaDomainName + "thumb/" + r + "/";
      return t.replace(Bizweb.mediaDomainName, thumbDomain).split("?")[0];
    } catch (o) {
      return t;
    }
  }),
  (Bizweb.addItem = function(t, r, e) {
    var r = r || 1,
      o = {
        type: "POST",
        url: "/cart/add.js",
        data: "quantity=" + r + "&VariantId=" + t,
        dataType: "json",
        success: function(t) {
          "function" == typeof e ? e(t) : Bizweb.onItemAdded(t);
        },
        error: function(t, r) {
          Bizweb.onError(t, r);
        }
      };
    jQuery.ajax(o);
  }),
  (Bizweb.addItemFromForm = function(t, r) {
    var e = {
      type: "POST",
      url: "/cart/add.js",
      data: jQuery("#" + t).serialize(),
      dataType: "json",
      success: function(t) {
        "function" == typeof r ? r(t) : Bizweb.onItemAdded(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(e);
  }),
  (Bizweb.getCart = function(t) {
    jQuery.getJSON("/cart.js", function(r) {
      "function" == typeof t ? t(r) : Bizweb.onCartUpdate(r);
    });
  }),
  (Bizweb.pollForCartShippingRatesForDestination = function(t, r, e) {
    e = e || Bizweb.onError;
    var o = function() {
      jQuery.ajax("/cart/async_shipping_rates", {
        dataType: "json",
        success: function(e, n, a) {
          200 === a.status
            ? "function" == typeof r
              ? r(e.shipping_rates, t)
              : Bizweb.onCartShippingRatesUpdate(e.shipping_rates, t)
            : setTimeout(o, 500);
        },
        error: e
      });
    };
    return o;
  }),
  (Bizweb.getCartShippingRatesForDestination = function(t, r, e) {
    e = e || Bizweb.onError;
    var o = {
      type: "POST",
      url: "/cart/prepare_shipping_rates",
      data: Bizweb.param({ shipping_address: t }),
      success: Bizweb.pollForCartShippingRatesForDestination(t, r, e),
      error: e
    };
    jQuery.ajax(o);
  }),
  (Bizweb.getProduct = function(t, r) {
    jQuery.getJSON("/products/" + t + ".js", function(t) {
      "function" == typeof r ? r(t) : Bizweb.onProduct(t);
    });
  }),
  (Bizweb.changeItem = function(t, r, e) {
    var o = {
      type: "POST",
      url: "/cart/change.js",
      data: "quantity=" + r + "&variantId=" + t,
      dataType: "json",
      success: function(t) {
        "function" == typeof e ? e(t) : Bizweb.onCartUpdate(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(o);
  }),
  (Bizweb.removeItem = function(t, r) {
    var e = {
      type: "POST",
      url: "/cart/change.js",
      data: "quantity=0&variantId=" + t,
      dataType: "json",
      success: function(t) {
        "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(e);
  }),
  (Bizweb.clear = function(t) {
    var r = {
      type: "POST",
      url: "/cart/clear.js",
      data: "",
      dataType: "json",
      success: function(r) {
        "function" == typeof t ? t(r) : Bizweb.onCartUpdate(r);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(r);
  }),
  (Bizweb.updateCartFromForm = function(t, r) {
    var e = {
      type: "POST",
      url: "/cart/update.js",
      data: jQuery("#" + t).serialize(),
      dataType: "json",
      success: function(t) {
        "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(e);
  }),
  (Bizweb.updateCartAttributes = function(t, r) {
    var e = "";
    jQuery.isArray(t)
      ? jQuery.each(t, function(t, r) {
          var o = attributeToString(r.key);
          "" !== o &&
            (e += "attributes[" + o + "]=" + attributeToString(r.value) + "&");
        })
      : "object" == typeof t &&
        null !== t &&
        jQuery.each(t, function(t, r) {
          e +=
            "attributes[" +
            attributeToString(t) +
            "]=" +
            attributeToString(r) +
            "&";
        });
    var o = {
      type: "POST",
      url: "/cart/update.js",
      data: e,
      dataType: "json",
      success: function(t) {
        "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(o);
  }),
  (Bizweb.updateCartNote = function(t, r) {
    var e = {
      type: "POST",
      url: "/cart/update.js",
      data: "note=" + attributeToString(t),
      dataType: "json",
      success: function(t) {
        "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t);
      },
      error: function(t, r) {
        Bizweb.onError(t, r);
      }
    };
    jQuery.ajax(e);
  }),
  jQuery.fn.jquery >= "1.4"
    ? (Bizweb.param = jQuery.param)
    : ((Bizweb.param = function(t) {
        var r = [],
          e = function(t, e) {
            (e = jQuery.isFunction(e) ? e() : e),
              (r[r.length] =
                encodeURIComponent(t) + "=" + encodeURIComponent(e));
          };
        if (jQuery.isArray(t) || t.jquery)
          jQuery.each(t, function() {
            e(this.name, this.value);
          });
        else for (var o in t) Bizweb.buildParams(o, t[o], e);
        return r.join("&").replace(/%20/g, "+");
      }),
      (Bizweb.buildParams = function(t, r, e) {
        jQuery.isArray(r) && r.length
          ? jQuery.each(r, function(r, o) {
              rbracket.test(t)
                ? e(t, o)
                : Bizweb.buildParams(
                    t +
                      "[" +
                      ("object" == typeof o || jQuery.isArray(o) ? r : "") +
                      "]",
                    o,
                    e
                  );
            })
          : null != r && "object" == typeof r
          ? Bizweb.isEmptyObject(r)
            ? e(t, "")
            : jQuery.each(r, function(r, o) {
                Bizweb.buildParams(t + "[" + r + "]", o, e);
              })
          : e(t, r);
      }),
      (Bizweb.isEmptyObject = function(t) {
        for (var r in t) return !1;
        return !0;
      }));